package com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.credentials

import android.util.Log
import androidx.room.Transaction
import com.inetum.eudi_dome_wallet.core.mappers.eudi.EudiCredentialMapper.toCore_OLD
import com.inetum.eudi_dome_wallet.core.mappers.eudi.EudiCredentialStringsMapper.toCore
import com.inetum.eudi_dome_wallet.core.mappers.eudi.EudiPresentationMapper.toCoreWithFactory
import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.EudiCredential
import com.inetum.eudi_dome_wallet.core.models.factories.eudi.CredentialFactory
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.PresentationDbCredentialDbCrossRefDAO
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.PresentationDbCredentialDbCrossRefEntity
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.presentations.PresentationDbEudiDAO
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.presentations.PresentationEntityEudi

class CredentialEudiRepository(
    private val credentialDbEudiDao: CredentialDbEudiDAO,
    private val presentationDbEudiDao: PresentationDbEudiDAO,
    private val presentationDbCredentialDbCrossRefDAO: PresentationDbCredentialDbCrossRefDAO
) {
    private val TAG : String = "DW:${(this::class.java.simpleName ?: "Unknown class")}"

    fun getAll(): List<CredentialEntity> {
        return credentialDbEudiDao.getAll()
    }

    suspend fun getAllWithCredentialString(): List<EudiCredential> {
        try {
            val credentialEntityList = credentialDbEudiDao.getAll()

            val credentialsCore = credentialEntityList.mapNotNull { credentialEntity ->
                val credentialCore = getByIdWithCredentialsStrings(credentialEntity.raw_jwt_vc)
                credentialCore
            }

            return credentialsCore
        } catch (e: Exception){
            Log.e(TAG, "${(object{}.javaClass.enclosingMethod?.name ?: "Unknown function")}() ${e.message}", e)
            throw e
        }
    }

    suspend fun getAllWithPresentations(): List<EudiCredential> {
        try {
            val credentialList = getAllWithCredentialString()
            credentialList.forEach { credentialEudi ->
                val coreCredential = getByIdWithPresentations(credentialEudi.rawJwt)
                coreCredential?.let { it1 -> credentialEudi.vc.presentationsList = it1.vc.presentationsList }
            }

            return credentialList
        } catch (e: Exception){
            Log.e(TAG, "${(object{}.javaClass.enclosingMethod?.name ?: "Unknown function")}() ${e.message}", e)
            throw e
        }
    }

    fun getById(rawVC: String): CredentialEntity? {
        return credentialDbEudiDao.getById(rawVC)
    }

    suspend fun getByIdWithCredentialsStrings(rawJwtVc: String): EudiCredential? {
        try {
            val pair = credentialDbEudiDao.getByIdWithCredentialsStrings(rawJwtVc) ?: return null
            Log.d(
                TAG,
                "${(object {}.javaClass.enclosingMethod?.name ?: "Unknown function")}() CredentialWithCredentialStrings: $pair"
            )
            val coreCredential = CredentialFactory.createCredentialFromJwt(pair.credentialEntity.raw_jwt_vc, pair.credentialStringsEntityList.map { it.toCore() })
            coreCredential.favorite = pair.credentialEntity.favorite
            return coreCredential
        } catch (e: Exception){
            Log.e(TAG, "${(object{}.javaClass.enclosingMethod?.name ?: "Unknown function")}() ${e.message}", e)
            throw e
        }
    }
    suspend fun getByIdWithPresentations(rawJwtVc: String): EudiCredential? {
        try {
            val pair = credentialDbEudiDao.getByIdWithPresentations(rawJwtVc) ?: return null
            Log.d(
                TAG,
                "${(object {}.javaClass.enclosingMethod?.name ?: "Unknown function")}() CredentialWithPresentations: $pair"
            )
            val coreCredential = CredentialFactory.createCredentialFromJwt(pair.credentialEntity.raw_jwt_vc)
            coreCredential.favorite = pair.credentialEntity.favorite
            coreCredential.vc.presentationsList = pair.presentationEntityList.map { it.toCoreWithFactory() }
            return coreCredential
        } catch (e: Exception){
            Log.e(TAG, "${(object{}.javaClass.enclosingMethod?.name ?: "Unknown function")}() ${e.message}", e)
            throw e
        }
    }

    fun getByInternalName(internalName: String): List<EudiCredential> {
        return credentialDbEudiDao.getByInternalName(internalName).map { it.toCore_OLD() }
    }

    @Transaction
    fun insertCredentialWithPresentations(
        credential: CredentialEntity,
        presentations: List<PresentationEntityEudi>
    ) {
        insert(credential)
        presentations.forEach { presentation ->
            presentationDbEudiDao.insert(presentation)
            val crossRef = PresentationDbCredentialDbCrossRefEntity(
                presentation_jti = presentation.jti,
                credential_raw_jwt_vc = credential.raw_jwt_vc
            )
            presentationDbCredentialDbCrossRefDAO.insert(crossRef)
        }
    }

    fun insert(credential: CredentialEntity) {
        credentialDbEudiDao.insert(credential)
    }

    fun insertAll(credentials: List<CredentialEntity>) {
        credentialDbEudiDao.insertAll(credentials)
    }

    fun update(credential: CredentialEntity) {
        credentialDbEudiDao.update(credential)
    }

    fun delete(credential: CredentialEntity) {
        credentialDbEudiDao.delete(credential)
    }
}
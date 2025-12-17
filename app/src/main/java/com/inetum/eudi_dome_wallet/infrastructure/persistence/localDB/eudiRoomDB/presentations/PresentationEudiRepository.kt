package com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.presentations

import android.util.Log
import androidx.room.Transaction
import com.inetum.eudi_dome_wallet.core.mappers.eudi.EudiCredentialMapper.toCoreWithFactory
import com.inetum.eudi_dome_wallet.core.mappers.eudi.EudiPresentationMapper.toCoreWithFactory
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationEudi
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.PresentationDbCredentialDbCrossRefEntity
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.PresentationDbCredentialDbCrossRefDAO
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.credentials.CredentialEntity
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.credentials.CredentialDbEudiDAO

class PresentationEudiRepository(
    private val presentationDbEudiDao: PresentationDbEudiDAO,
    private val credentialDbEudiDAO: CredentialDbEudiDAO,
    private val presentationDbCredentialDbCrossRefDAO: PresentationDbCredentialDbCrossRefDAO
) {
    private val TAG : String = "DW:${(this::class.java.simpleName ?: "Unknown class")}"

    fun getAll(): List<PresentationEntityEudi> {
        return presentationDbEudiDao.getAll()
    }

    suspend fun getAllWithCredentials(): List<PresentationEudi> {
        val presentationsCore: MutableList<PresentationEudi> = mutableListOf()
        try {
            val presentationEntityList = presentationDbEudiDao.getAll()

            presentationEntityList.forEach { presentationEntity ->
                val presentationCore = getByIdWithCredentials(presentationEntity.jti)
                presentationCore?.let { presentationsCore.add(it) }
            }

            return presentationsCore
        } catch (e: Exception){
            Log.e(TAG, "${(object{}.javaClass.enclosingMethod?.name ?: "Unknown function")}() ${e.message}", e)
            throw e
        }
    }

    fun getById(jti: String): PresentationEntityEudi? {
        return presentationDbEudiDao.getById(jti)
    }

    suspend fun getByIdWithCredentials(jti: String): PresentationEudi? {
        try {
            val pair = presentationDbEudiDao.getByIdWithCredentials(jti) ?: return null
            Log.d(TAG, "${(object{}.javaClass.enclosingMethod?.name ?: "Unknown function")}() $pair")
            val corePresentation = pair.presentationEntity.toCoreWithFactory()
            corePresentation.vp.verifiableCredential = pair.credentialEntityList.map { it.toCoreWithFactory() }

            return corePresentation
        } catch (e: Exception){
            Log.e(TAG, "${(object{}.javaClass.enclosingMethod?.name ?: "Unknown suspend function")}() ${e.message}", e)
            throw e
        }
    }

    @Transaction
    fun insertPresentationWithCredentials(presentation: PresentationEntityEudi, credentials: List<CredentialEntity>) {
        val presentationId = insert(presentation)
        if (presentationId == -1L) {
            Log.d(TAG, "${(object{}.javaClass.enclosingMethod?.name ?: "Unknown function")}() presentation: ${presentation.jti} not inserted")
        }
        credentials.forEach { credential ->
            val credentialId = credentialDbEudiDAO.insert(credential)
            if (credentialId  == -1L) {
                Log.d(TAG, "${(object{}.javaClass.enclosingMethod?.name ?: "Unknown suspend function")}() credential: ${credential.raw_jwt_vc} not inserted")
            }

            val crossRef = PresentationDbCredentialDbCrossRefEntity(
                presentation_jti = presentation.jti,
                credential_raw_jwt_vc = credential.raw_jwt_vc
            )
            val crossId = presentationDbCredentialDbCrossRefDAO.insert(crossRef)
            if (crossId  == -1L) {
                Log.d(TAG, "${(object{}.javaClass.enclosingMethod?.name ?: "Unknown function")}() crossRef: $crossRef not inserted")
            }
        }
    }

    fun insert(presentation: PresentationEntityEudi): Long {
        return presentationDbEudiDao.insert(presentation)
    }

    fun insertAll(presentations: List<PresentationEntityEudi>) {
        return presentationDbEudiDao.insertAll(presentations)
    }

    fun update(presentation: PresentationEntityEudi) {
        return presentationDbEudiDao.update(presentation)
    }

    fun delete(presentation: PresentationEntityEudi) {
        return presentationDbEudiDao.delete(presentation)
    }
}
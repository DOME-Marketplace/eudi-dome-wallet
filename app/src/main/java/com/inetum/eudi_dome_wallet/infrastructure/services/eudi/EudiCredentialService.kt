package com.inetum.eudi_dome_wallet.infrastructure.services.eudi

import android.util.Log
import com.inetum.eudi_dome_wallet.core.mappers.eudi.EudiCredentialMapper.toDbRoom
import com.inetum.eudi_dome_wallet.core.mappers.eudi.EudiPresentationMapper.toDbRoom
import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.EudiCredential
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.credentials.CredentialEudiRepository

class EudiCredentialService(private val credentialEudiRepository: CredentialEudiRepository) {
    private val TAG : String = "DW:${(this::class.java.simpleName ?: "Unknown class")}"

    suspend fun getAll(): List<EudiCredential> {
        return credentialEudiRepository.getAllWithPresentations()
    }

    suspend fun getById(rawVC: String): EudiCredential? {
        return credentialEudiRepository.getByIdWithPresentations(rawVC)
    }

    suspend fun getCredentialByInternalNameFromDB(internalName: String): List<EudiCredential> {
        val credentialList = credentialEudiRepository.getByInternalName(internalName)
        if (credentialList.isEmpty()) {
            Log.d(TAG, "${(object{}.javaClass.enclosingMethod?.name ?: "Unknown function")}() credential with internalName: '$internalName' empty")
            return arrayListOf()
        }

        val credentialCoreList = credentialList.mapNotNull { credentialEudiRepository.getByIdWithPresentations(it.rawJwt) }

        return credentialCoreList
    }

    fun insert(credential: EudiCredential) {
        val credentialEntity = credential.toDbRoom()
        return credentialEudiRepository.insertCredentialWithPresentations(credentialEntity, credential.vc.presentationsList.map { it.toDbRoom() })
    }

    fun insertAll(credentials: List<EudiCredential>) {
        credentialEudiRepository.insertAll(credentials.map { it.toDbRoom() })
    }

    fun update(credential: EudiCredential) {
        credentialEudiRepository.update(credential.toDbRoom())
    }

    fun delete(credential: EudiCredential) {
        credentialEudiRepository.delete(credential.toDbRoom())
    }

}
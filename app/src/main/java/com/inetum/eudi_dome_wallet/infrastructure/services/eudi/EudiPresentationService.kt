package com.inetum.eudi_dome_wallet.infrastructure.services.eudi

import com.inetum.eudi_dome_wallet.core.mappers.eudi.EudiCredentialMapper.toDbRoom
import com.inetum.eudi_dome_wallet.core.mappers.eudi.EudiPresentationMapper.toDbRoom
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationEudi
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.presentations.PresentationEudiRepository

class EudiPresentationService(private val presentationEudiRepository: PresentationEudiRepository) {

    suspend fun getAll(): List<PresentationEudi> {
        return presentationEudiRepository.getAllWithCredentials()
    }

    suspend fun getById(jti: String): PresentationEudi? {
        return presentationEudiRepository.getByIdWithCredentials(jti)
    }

    fun insert(presentation: PresentationEudi) {
        presentationEudiRepository.insertPresentationWithCredentials(presentation.toDbRoom(), presentation.vp.verifiableCredential.map { it.toDbRoom() })
    }

    fun insertAll(presentations: List<PresentationEudi>) {
        presentationEudiRepository.insertAll(presentations.map { it.toDbRoom() })
    }

    fun update(presentation: PresentationEudi) {
        presentationEudiRepository.update(presentation.toDbRoom())
    }

    fun delete(presentation: PresentationEudi) {
        presentationEudiRepository.delete(presentation.toDbRoom())
    }

}
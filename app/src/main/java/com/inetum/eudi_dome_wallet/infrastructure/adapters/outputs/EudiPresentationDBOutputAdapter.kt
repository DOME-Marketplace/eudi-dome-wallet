package com.inetum.eudi_dome_wallet.infrastructure.adapters.outputs

import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationEudi
import com.inetum.eudi_dome_wallet.core.ports.outputs.EudiPresentationDBPort
import com.inetum.eudi_dome_wallet.infrastructure.services.eudi.EudiPresentationService
class EudiPresentationDBOutputAdapter (
    private val eudiPresentationService: EudiPresentationService
): EudiPresentationDBPort {

    override suspend fun getAllPresentationFromDB(): List<PresentationEudi> {
        return eudiPresentationService.getAll()
    }
    override suspend fun getPresentationFromDBbyId(jti: String): PresentationEudi {
        return eudiPresentationService.getById(jti)  ?: throw NullPointerException("PresentationEudi null")
    }
    override suspend fun savePresentationIntoDB(presentation: PresentationEudi) {
        return eudiPresentationService.insert(presentation)
    }
    override suspend fun savePresentationListIntoDB(presentations: List<PresentationEudi>) {
        return eudiPresentationService.insertAll(presentations)
    }
    override suspend fun updatePresentationIntoDB(presentation: PresentationEudi) {
        return eudiPresentationService.update(presentation)
    }
    override suspend fun deletePresentationIntoDB(presentation: PresentationEudi) {
        return eudiPresentationService.delete(presentation)
    }
}
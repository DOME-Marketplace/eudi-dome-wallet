package com.inetum.eudi_dome_wallet.core.servicies

import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationEudi
import com.inetum.eudi_dome_wallet.core.ports.inputs.EudiPresentationDBUseCase
import com.inetum.eudi_dome_wallet.core.ports.outputs.EudiPresentationDBPort

class EudiPresentationDBServiceCore (private val eudiPresentationDBPort: EudiPresentationDBPort): EudiPresentationDBUseCase {

    override suspend fun getAllPresentationFromDB(): List<PresentationEudi> {
        return eudiPresentationDBPort.getAllPresentationFromDB()
    }
    override suspend fun getPresentationFromDBbyId(jti: String): PresentationEudi {
        return eudiPresentationDBPort.getPresentationFromDBbyId(jti)
    }
    override suspend fun savePresentationIntoDB(presentation: PresentationEudi) {
        return eudiPresentationDBPort.savePresentationIntoDB(presentation)
    }
    override suspend fun savePresentationListIntoDB(presentations: List<PresentationEudi>) {
        return eudiPresentationDBPort.savePresentationListIntoDB(presentations)
    }
    override suspend fun updatePresentationIntoDB(presentation: PresentationEudi) {
        return eudiPresentationDBPort.updatePresentationIntoDB(presentation)
    }
    override suspend fun deletePresentationIntoDB(presentation: PresentationEudi) {
        return eudiPresentationDBPort.deletePresentationIntoDB(presentation)
    }
}
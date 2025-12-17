package com.inetum.eudi_dome_wallet.infrastructure.adapters.inputs

import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationEudi
import com.inetum.eudi_dome_wallet.core.ports.inputs.EudiPresentationDBUseCase

class EudiPresentationDBInputAdapter(private val eudiUseCase: EudiPresentationDBUseCase) {
    suspend fun getAllPresentationFromDB(): List<PresentationEudi> {
        return eudiUseCase.getAllPresentationFromDB()
    }
    suspend fun getPresentationFromDBbyId(jti: String): PresentationEudi {
        return eudiUseCase.getPresentationFromDBbyId(jti)
    }
    suspend fun savePresentationIntoDB(presentation: PresentationEudi) {
        return eudiUseCase.savePresentationIntoDB(presentation)
    }
}
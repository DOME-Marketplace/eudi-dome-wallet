package com.inetum.eudi_dome_wallet.core.ports.outputs

import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationEudi

interface EudiPresentationDBPort {
    suspend fun getAllPresentationFromDB(): List<PresentationEudi>
    suspend fun getPresentationFromDBbyId(jti: String): PresentationEudi
    suspend fun savePresentationIntoDB(presentation: PresentationEudi)
    suspend fun savePresentationListIntoDB(presentations: List<PresentationEudi>)
    suspend fun updatePresentationIntoDB(presentation: PresentationEudi)
    suspend fun deletePresentationIntoDB(presentation: PresentationEudi)

}
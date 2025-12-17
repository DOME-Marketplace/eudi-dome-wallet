package com.inetum.eudi_dome_wallet.manager

import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.core.ports.inputs.EudiCredentialDBUseCase
import com.inetum.eudi_dome_wallet.core.ports.inputs.EudiCredentialStringsDBUseCase
import com.inetum.eudi_dome_wallet.core.ports.inputs.EudiDidUseCase
import com.inetum.eudi_dome_wallet.core.ports.inputs.EudiNetworkUseCase
import com.inetum.eudi_dome_wallet.core.ports.inputs.EudiPresentationDBUseCase
import com.inetum.eudi_dome_wallet.core.ports.inputs.InternalMemoryUseCase
import com.inetum.eudi_dome_wallet.core.ports.inputs.JwtUseCase
import com.inetum.eudi_dome_wallet.core.ports.inputs.LogUseCase
import com.inetum.eudi_dome_wallet.core.ports.outputs.EudiCredentialDBPort
import com.inetum.eudi_dome_wallet.core.ports.outputs.EudiCredentialStringsDBPort
import com.inetum.eudi_dome_wallet.core.ports.outputs.EudiDidPort
import com.inetum.eudi_dome_wallet.core.ports.outputs.EudiNetworkPort
import com.inetum.eudi_dome_wallet.core.ports.outputs.EudiPresentationDBPort
import com.inetum.eudi_dome_wallet.core.ports.outputs.InternalMemoryPort
import com.inetum.eudi_dome_wallet.core.ports.outputs.JwtPort
import com.inetum.eudi_dome_wallet.core.ports.outputs.LogPort
import com.inetum.eudi_dome_wallet.core.servicies.EudiCredentialDBServiceCore
import com.inetum.eudi_dome_wallet.core.servicies.EudiCredentialStringsDBServiceCore
import com.inetum.eudi_dome_wallet.core.servicies.EudiDidServiceCore
import com.inetum.eudi_dome_wallet.core.servicies.EudiNetworkServiceCore
import com.inetum.eudi_dome_wallet.core.servicies.EudiPresentationDBServiceCore
import com.inetum.eudi_dome_wallet.core.servicies.InternalMemoryServiceCore
import com.inetum.eudi_dome_wallet.core.servicies.JwtServiceCore
import com.inetum.eudi_dome_wallet.core.servicies.LogServiceCore
import com.inetum.eudi_dome_wallet.infrastructure.adapters.inputs.EudiCredentialDBInputAdapter
import com.inetum.eudi_dome_wallet.infrastructure.adapters.inputs.EudiCredentialStringsDBInputAdapter
import com.inetum.eudi_dome_wallet.infrastructure.adapters.inputs.EudiDidInputAdapter
import com.inetum.eudi_dome_wallet.infrastructure.adapters.inputs.EudiNetworkInputAdapter
import com.inetum.eudi_dome_wallet.infrastructure.adapters.inputs.EudiPresentationDBInputAdapter
import com.inetum.eudi_dome_wallet.infrastructure.adapters.inputs.InternalMemoryInputAdapter
import com.inetum.eudi_dome_wallet.infrastructure.adapters.inputs.JwtInputAdapter
import com.inetum.eudi_dome_wallet.infrastructure.adapters.inputs.LogInputAdapter
import com.inetum.eudi_dome_wallet.infrastructure.adapters.outputs.EudiCredentialDBOutputAdapter
import com.inetum.eudi_dome_wallet.infrastructure.adapters.outputs.EudiCredentialStringsDBOutputAdapter
import com.inetum.eudi_dome_wallet.infrastructure.adapters.outputs.EudiDidOutputAdapter
import com.inetum.eudi_dome_wallet.infrastructure.adapters.outputs.EudiNetworkOutputAdapter
import com.inetum.eudi_dome_wallet.infrastructure.adapters.outputs.EudiPresentationDBOutputAdapter
import com.inetum.eudi_dome_wallet.infrastructure.adapters.outputs.InternalMemoryOutputAdapter
import com.inetum.eudi_dome_wallet.infrastructure.adapters.outputs.JwtOutputAdapter
import com.inetum.eudi_dome_wallet.infrastructure.adapters.outputs.LogOutputAdapter
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.AppDatabaseEudi
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.credentials.CredentialEudiRepository
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.credentials.CredentialEudiStringsRepository
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.presentations.PresentationEudiRepository
import com.inetum.eudi_dome_wallet.infrastructure.persistence.sharedPreferences.SharedPreferencesEncryptedService
import com.inetum.eudi_dome_wallet.infrastructure.persistence.sharedPreferences.SharedPreferencesEncryptedServiceEudi
import com.inetum.eudi_dome_wallet.infrastructure.services.eudi.EudiCredentialService
import com.inetum.eudi_dome_wallet.infrastructure.services.eudi.EudiCredentialStringsService
import com.inetum.eudi_dome_wallet.infrastructure.services.eudi.EudiPresentationService
import com.inetum.eudi_dome_wallet.ui.eudi.EudiDidService
import com.inetum.eudi_dome_wallet.ui.eudi.factories.EudiClassFactory

object IoCManager {
    private val logPort: LogPort by lazy { LogOutputAdapter() }
    private val logUseCase: LogUseCase by lazy { LogServiceCore(logPort) }
    private val logInputAdapter: LogInputAdapter by lazy { LogInputAdapter(logUseCase) }
    private val sharedPreferencesEncryptedService: SharedPreferencesEncryptedService by lazy {
        SharedPreferencesEncryptedService(
            App.context
        )
    }
    private val sharedPreferencesEncryptedServiceEudi: SharedPreferencesEncryptedServiceEudi by lazy {
        SharedPreferencesEncryptedServiceEudi(
            App.context
        )
    }
    private val internalMemoryPort: InternalMemoryPort by lazy {
        InternalMemoryOutputAdapter(
            sharedPreferencesEncryptedService,
            sharedPreferencesEncryptedServiceEudi
        )
    }
    private val internalMemoryUseCase: InternalMemoryUseCase by lazy {
        InternalMemoryServiceCore(
            internalMemoryPort
        )
    }
    private val internalMemoryInputAdapter: InternalMemoryInputAdapter by lazy {
        InternalMemoryInputAdapter(
            internalMemoryUseCase
        )
    }
    private val jwtPort: JwtPort by lazy { JwtOutputAdapter() }
    private val jwtUseCase: JwtUseCase by lazy { JwtServiceCore(jwtPort) }
    private val jwtInputAdapter: JwtInputAdapter by lazy { JwtInputAdapter(jwtUseCase) }
    private val eudiDidService: EudiDidService by lazy { EudiDidService(App.context) }
    private val eudiClassFactory: EudiClassFactory by lazy { EudiClassFactory(eudiDidService) }

    private val eudiDidPort: EudiDidPort by lazy {
        EudiDidOutputAdapter(
            eudiDidService, eudiClassFactory
        )
    }
    private val eudiDidUseCase: EudiDidUseCase by lazy { EudiDidServiceCore(eudiDidPort) }
    private val eudiDidInputAdapter: EudiDidInputAdapter by lazy {
        EudiDidInputAdapter(
            eudiDidUseCase
        )
    }

    private val appDatabaseEudi: AppDatabaseEudi by lazy {
        App.dbEudi ?: throw NullPointerException(
            "App.dbEudi is null"
        )
    }

    private val eudiNetworkPort: EudiNetworkPort by lazy { EudiNetworkOutputAdapter() }
    private val eudiNetworkUseCase: EudiNetworkUseCase by lazy {
        EudiNetworkServiceCore(
            eudiNetworkPort
        )
    }
    private val eudiNetworkInputAdapter: EudiNetworkInputAdapter by lazy {
        EudiNetworkInputAdapter(
            eudiNetworkUseCase
        )
    }

    private val credentialEudiRepository: CredentialEudiRepository by lazy {
        CredentialEudiRepository(
            appDatabaseEudi.credentialDbEudiDAO(),
            appDatabaseEudi.presentationDbEudiDAO(),
            appDatabaseEudi.presentationDbCredentialDbCrossRefDAO()
        )
    }
    private val eudiCredentialService: EudiCredentialService by lazy {
        EudiCredentialService(
            credentialEudiRepository
        )
    }
    private val eudiCredentialDBPort: EudiCredentialDBPort by lazy {
        EudiCredentialDBOutputAdapter(
            eudiCredentialService
        )
    }
    private val eudiCredentialDBUseCase: EudiCredentialDBUseCase by lazy {
        EudiCredentialDBServiceCore(
            eudiCredentialDBPort
        )
    }
    private val eudiCredentialDBInputAdapter: EudiCredentialDBInputAdapter by lazy {
        EudiCredentialDBInputAdapter(
            eudiCredentialDBUseCase
        )
    }

    private val credentialEudiStringsRepository: CredentialEudiStringsRepository by lazy {
        CredentialEudiStringsRepository(
            appDatabaseEudi.credentialDBEudiStringsDAO()
        )
    }
    private val eudiCredentialStringsService: EudiCredentialStringsService by lazy {
        EudiCredentialStringsService(
            credentialEudiStringsRepository
        )
    }
    private val eudiCredentialStringsDBPort: EudiCredentialStringsDBPort by lazy {
        EudiCredentialStringsDBOutputAdapter(
            eudiCredentialStringsService
        )
    }
    private val eudiCredentialStringsDBUseCase: EudiCredentialStringsDBUseCase by lazy {
        EudiCredentialStringsDBServiceCore(
            eudiCredentialStringsDBPort
        )
    }
    private val eudiCredentialStringsDBInputAdapter: EudiCredentialStringsDBInputAdapter by lazy {
        EudiCredentialStringsDBInputAdapter(
            eudiCredentialStringsDBUseCase
        )
    }
    private val presentationEudiRepository: PresentationEudiRepository by lazy {
        PresentationEudiRepository(
            appDatabaseEudi.presentationDbEudiDAO(),
            appDatabaseEudi.credentialDbEudiDAO(),
            appDatabaseEudi.presentationDbCredentialDbCrossRefDAO()
        )
    }
    private val eudiPresentationService: EudiPresentationService by lazy {
        EudiPresentationService(
            presentationEudiRepository
        )
    }
    private val eudiPresentationDBPort: EudiPresentationDBPort by lazy {
        EudiPresentationDBOutputAdapter(
            eudiPresentationService
        )
    }
    private val eudiPresentationDBUseCase: EudiPresentationDBUseCase by lazy {
        EudiPresentationDBServiceCore(
            eudiPresentationDBPort
        )
    }
    private val eudiPresentationDBInputAdapter: EudiPresentationDBInputAdapter by lazy {
        EudiPresentationDBInputAdapter(
            eudiPresentationDBUseCase
        )
    }

    @JvmName("getLogInputAdapterJVM")
    fun getLogInputAdapter(): LogInputAdapter {
        return logInputAdapter
    }

    @JvmName("getInternalMemoryInputAdapterJVM")
    fun getInternalMemoryInputAdapter(): InternalMemoryInputAdapter {
        return internalMemoryInputAdapter
    }

    @JvmName("getEudiDidInputAdapterJVM")
    fun getEudiDidInputAdapter(): EudiDidInputAdapter {
        return eudiDidInputAdapter
    }

    @JvmName("getJwtInputAdapterJVM")
    fun getJwtInputAdapter(): JwtInputAdapter {
        return jwtInputAdapter
    }

    @JvmName("getEudiCredentialDBInputAdapterJVM")
    fun getEudiCredentialDBInputAdapter(): EudiCredentialDBInputAdapter {
        return eudiCredentialDBInputAdapter
    }

    @JvmName("getEudiCredentialStringsDBInputAdapterJVM")
    fun getEudiCredentialStringsDBInputAdapter(): EudiCredentialStringsDBInputAdapter {
        return eudiCredentialStringsDBInputAdapter
    }

    @JvmName("getEudiPresentationDBInputAdapterJVM")
    fun getEudiPresentationDBInputAdapter(): EudiPresentationDBInputAdapter {
        return eudiPresentationDBInputAdapter
    }

    @JvmName("getEudiNetworkInputAdapterJVM")
    fun getEudiNetworkInputAdapter(): EudiNetworkInputAdapter {
        return eudiNetworkInputAdapter
    }
}
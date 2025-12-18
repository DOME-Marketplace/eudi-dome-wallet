# EUDI-DOME-WALLET
**by [Inetum](https://www.inetum.com/en)**

---

## Introduction

EUDI DOME Wallet is an Android application designed for secure storage and presentation of digital credentials in the EUDI-DOME environment. Built with modern Android architecture patterns, it provides an android native solution for managing W3C Verifiable Credentials such as LearCredentialEmployee with ease of use and security.

## Architecture

The application is based on the following architecture:
- **Language:** Kotlin
- **Architecture Pattern:** MVVM (Model-View-ViewModel)
- **Database:** Room for local persistence
- **Security:** Android Keystore with biometric authentication
- **Cryptography:** secp256r1 / P-256 algorithm

## Main Features

* **Credential Lifecycle Management:** Support for receiving, storing, and organizing W3C Verifiable Credentials (VC).
* **Protocol Support:** Implementation of the latest OIDC4VCI and OID4VP protocols adapted to DOME requirements.
* **Blockchain Interoperability:** Integration with DOME Backend Identity system for real-time validity checks.
* **Biometric Authentication:** Fingerprint support for secure access.
* **Master Password Key Derivation:** Secure vault encryption using password-derived Keystore access keys.
* **Key Generation:** Create key pairs using the secp256r1 / P-256 algorithm for secure identity operations.
* **Database Persistence:** Local storage powered by Room for efficient and secure data management on Android.

## Getting Started

This application is developed, built and tested in Android Studio.

### Prerequisites
* Android Studio (latest stable version recommended)
* Android SDK 24 or higher
* JDK 11 or higher

### Installation

1. Clone the repository: `git clone https://github.com/DOME-Marketplace/eudi-dome-wallet.git`
2. Open the project in Android Studio
3. Sync Gradle dependencies: `File > Sync Project with Gradle Files`
4. Connect an Android device or start an emulator
5. Run the project: Click "Run" button or press `Shift + F10`

## Build and Test

We have different build variants depending on the environment:

* `debug` variant: This variant is used for development. It uses debug signing and includes debugging tools.
* `release` variant: This variant is used for production. It requires proper signing configuration and code obfuscation.

### Building APK

1. Build the project: `Build > Make Project` or `Ctrl+F9`
2. Switch to desired variant: Open `Build Variants` panel and select variant
3. Generate APK: Navigate to `Build > Build Bundle(s) / APK(s) > Build APK(s)`
4. For signed APK: `Build > Generate Signed Bundle / APK` and follow the wizard

## Resources

* **Kotlin Style Guide:** [Android Kotlin Style Guide](https://developer.android.com/kotlin/style-guide)
* **DOME Documentation:** [DOME Knowledge Base](https://knowledgebase.dome-marketplace.eu/)


## License

This project is licensed under the Apache 2.0 License — see the [LICENSE](LICENSE) file for details.
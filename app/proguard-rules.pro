# Add project specific ProGuard rules here.
# You can control the set of applied configuration files using the
# proguardFiles setting in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {
#   public *;
#}

# Uncomment this to preserve the line number information for
# debugging stack traces.
#-keepattributes SourceFile,LineNumberTable

# If you keep the line number information, uncomment this to
# hide the original source file name.
#-renamesourcefileattribute SourceFile

# Not to ignore any non-public library classes
-dontskipnonpubliclibraryclasses

# This option will print out the entire stack trace, instead of just the exception message
-verbose

#It helps in preserving some attributes that may be required for reflection.
-keepattributes *Annotation*,Signature,InnerClasses,EnclosingMethod

-dontnote android.support.**
-dontnote androidx.**
-dontwarn android.support.**
-dontwarn androidx.**

-dontnote org.apache.http.**
-dontnote android.net.http.**
-dontnote java.lang.invoke.**

-keep class androidx.annotation.Keep
-keep @androidx.annotation.Keep class * {*;}

-dontwarn com.google.android.material.**
-keep class com.google.android.material.** { *; }

# Proguard rules for AndroidX
-dontwarn androidx.**
-keep class androidx.** { *; }
-keep interface androidx.** { *; }
-dontwarn android.support.v4.**
-keep class android.support.v4.** { *; }
-dontwarn android.support.v7.**
-keep class android.support.v7.** { *; }

-keepattributes Signature
# For using GSON @Expose annotation
-keepattributes *Annotation*

# Application classes that will be serialized/deserialized over Gson
-keep class com.google.gson.** { *; }

# Prevent proguard from stripping interface information from     TypeAdapterFactory,
# JsonSerializer, JsonDeserializer instances (so they can be used in @JsonAdapter)
-keep class * implements com.google.gson.TypeAdapterFactory
-keep class * implements com.google.gson.JsonSerializer
-keep class * implements com.google.gson.JsonDeserializer

# Volley
-keep class com.android.volley.** { *; }
-keep class org.apache.commons.logging.**
-dontwarn org.apache.**

# Room
-keep class * extends androidx.room.RoomDatabase
-keep @androidx.room.Entity class *
-keep class androidx.room.**{*;}
-keep class androidx.room.RoomDatabase.**{*;}
-dontwarn androidx.room.paging.**
-dontwarn android.arch.util.paging.CountedDataSource
-dontwarn android.arch.persistence.room.paging.LimitOffsetDataSource

# NECESARIO PARA PODER GENERAR EL WALLET
-keep class org.bouncycastle.**{*;}
-keep class org.web3j.crypto.**{*;}
-keep class org.web3j.protocol.**{*;}
-keep class org.fasterxml.jackson.**{*;}
-keep class javax.xml.parsers.**{*;}
-keep class javax.xml.parsers.SAXParser{*;}

# Reglas adicionales necesarias
-keep class org.xml.sax.**{*;}
-keep class javax.xml.**{*;}
-keep class org.slf4j.**{*;}
-keep class ch.** { *; }

-keep class com.auth0.android.**{*;}
# Modelos
-keep class domains.Network.net_models.**{*;}
-keepclassmembers class domains.Network.net_models.**{*;}
-keep class com.inetum.eudi_dome_wallet.credentials.model.**{*;}
-keepclassmembers class com.inetum.eudi_dome_wallet.credentials.model.**{*;}
-keep class controllers.models.**{*;}
-keepclassmembers class controllers.models.**{*;}

-keep class com.inetum.eudi_dome_wallet.infrastructure.network.**{*;}
-keepclassmembers class com.inetum.eudi_dome_wallet.infrastructure.network.**{*;}

# Modelos Eudi
-keep class com.inetum.eudi_dome_wallet.infrastructure.dto.**{*;}
-keepclassmembers class com.inetum.eudi_dome_wallet.infrastructure.dto.**{*;}
-keep class com.inetum.eudi_dome_wallet.core.models.**{*;}
-keepclassmembers class com.inetum.eudi_dome_wallet.core.models.**{*;}

# SQL Lite
-keep class net.sqlcipher.**{*;}
-keep class net.sqlcipher.database.**{*;}
-keep class net.sqlcipher.database.SQLiteDatabase.**{*;}
# -- https://github.com/sqlcipher/android-database-sqlcipher
-keep,includedescriptorclasses class net.sqlcipher.** { *; }
-keep,includedescriptorclasses interface net.sqlcipher.** { *; }
#-keep class localDB.**{*;}

-keep class com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.**{*;}
-keepclassmembers class com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.**{*;}

# controller
-keep class com.inetum.eudi_dome_wallet.core.controllers.**{*;}
-keepclassmembers class com.inetum.eudi_dome_wallet.core.controllers.**{*;}

# Jackson libreria
-keep class com.fasterxml.jackson.databind.**
-keep class org.**
-keep class com.fasterxml.jackson.core.**
#-keep interface com.fasterxml.jackson.core { ; }
-keep public class * extends com.fasterxml.jackson.core.*
#-keep class com.fasterxml.jackson.databind.introspect.VisibilityChecker$Std
#-keep class com.fasterxml.jackson.databind.ObjectMapper
-keep class com.fasterxml.jackson.databind.**
-keep class com.fasterxml.jackson.databind.introspect.VisibilityChecker.**{*;}
-keep interface com.fasterxml.jackson.databind.** { *;}
-keep public class * extends com.fasterxml.jackson.databind.*
-keep class com.fasterxml.jackson.annotation.**
-keep interface com.fasterxml.jackson.annotation.** {*;}

# web3j / groovy / ivy
-dontwarn org.codehaus.groovy.**
-dontwarn groovy.lang.**
-dontwarn org.apache.ivy.**
-dontwarn org.identityconnectors.**

# bouncycastle + jose
-dontwarn org.bouncycastle.**
-dontwarn com.nimbusds.**
-dontwarn com.github.multiformats.**

# javascriptengine
-dontwarn androidx.javascriptengine.**
-dontwarn groovy.lang.GroovyShell
-dontwarn java.beans.IndexedPropertyDescriptor
-dontwarn java.rmi.dgc.VMID
-dontwarn org.identityconnectors.test.common.spi.TestHelpersSpi

#-keep class jakarta.xml.bind.JAXBContext.**{*;}
#-keep class org.w3c.dom.DOMImplementationSourceList.**{*;}
#-keep class org.xml.sax.driver.**{*;}

-dontwarn com.google.errorprone.annotations.Immutable
-dontwarn com.sun.xml.fastinfoset.stax.StAXDocumentParser
-dontwarn com.sun.xml.fastinfoset.stax.StAXDocumentSerializer
-dontwarn groovy.lang.GroovyObject
-dontwarn jakarta.activation.DataHandler
-dontwarn jakarta.activation.DataSource
-dontwarn jakarta.activation.MimeType
-dontwarn jakarta.activation.MimeTypeParseException
-dontwarn jakarta.xml.bind.Binder
-dontwarn jakarta.xml.bind.DatatypeConverterInterface
-dontwarn jakarta.xml.bind.JAXBContext
-dontwarn jakarta.xml.bind.JAXBContextFactory
-dontwarn jakarta.xml.bind.JAXBElement
-dontwarn jakarta.xml.bind.JAXBException
-dontwarn jakarta.xml.bind.JAXBIntrospector
-dontwarn jakarta.xml.bind.Marshaller
-dontwarn jakarta.xml.bind.SchemaOutputResolver
-dontwarn jakarta.xml.bind.Unmarshaller
-dontwarn jakarta.xml.bind.UnmarshallerHandler
-dontwarn jakarta.xml.bind.ValidationEvent
-dontwarn jakarta.xml.bind.ValidationEventHandler
-dontwarn jakarta.xml.bind.ValidationEventLocator
-dontwarn jakarta.xml.bind.annotation.DomHandler
-dontwarn jakarta.xml.bind.annotation.W3CDomHandler
-dontwarn jakarta.xml.bind.annotation.XmlAccessOrder
-dontwarn jakarta.xml.bind.annotation.XmlAccessType
-dontwarn jakarta.xml.bind.annotation.XmlAccessorOrder
-dontwarn jakarta.xml.bind.annotation.XmlAccessorType
-dontwarn jakarta.xml.bind.annotation.XmlAnyAttribute
-dontwarn jakarta.xml.bind.annotation.XmlAnyElement
-dontwarn jakarta.xml.bind.annotation.XmlAttachmentRef
-dontwarn jakarta.xml.bind.annotation.XmlAttribute
-dontwarn jakarta.xml.bind.annotation.XmlElement
-dontwarn jakarta.xml.bind.annotation.XmlElementDecl
-dontwarn jakarta.xml.bind.annotation.XmlElementRef
-dontwarn jakarta.xml.bind.annotation.XmlElementRefs
-dontwarn jakarta.xml.bind.annotation.XmlElementWrapper
-dontwarn jakarta.xml.bind.annotation.XmlElements
-dontwarn jakarta.xml.bind.annotation.XmlEnum
-dontwarn jakarta.xml.bind.annotation.XmlID
-dontwarn jakarta.xml.bind.annotation.XmlIDREF
-dontwarn jakarta.xml.bind.annotation.XmlInlineBinaryData
-dontwarn jakarta.xml.bind.annotation.XmlList
-dontwarn jakarta.xml.bind.annotation.XmlMimeType
-dontwarn jakarta.xml.bind.annotation.XmlMixed
-dontwarn jakarta.xml.bind.annotation.XmlNs
-dontwarn jakarta.xml.bind.annotation.XmlNsForm
-dontwarn jakarta.xml.bind.annotation.XmlRootElement
-dontwarn jakarta.xml.bind.annotation.XmlSchema
-dontwarn jakarta.xml.bind.annotation.XmlSchemaType
-dontwarn jakarta.xml.bind.annotation.XmlSchemaTypes
-dontwarn jakarta.xml.bind.annotation.XmlSeeAlso
-dontwarn jakarta.xml.bind.annotation.XmlTransient
-dontwarn jakarta.xml.bind.annotation.XmlType
-dontwarn jakarta.xml.bind.annotation.XmlValue
-dontwarn jakarta.xml.bind.annotation.adapters.XmlAdapter
-dontwarn jakarta.xml.bind.annotation.adapters.XmlJavaTypeAdapter
-dontwarn jakarta.xml.bind.annotation.adapters.XmlJavaTypeAdapters
-dontwarn jakarta.xml.bind.helpers.AbstractMarshallerImpl
-dontwarn jakarta.xml.bind.helpers.AbstractUnmarshallerImpl
-dontwarn jakarta.xml.bind.helpers.ValidationEventImpl
-dontwarn jakarta.xml.bind.helpers.ValidationEventLocatorImpl
-dontwarn jakarta.xml.soap.MessageFactory
-dontwarn jakarta.xml.soap.SAAJMetaFactory
-dontwarn jakarta.xml.soap.SOAPConnectionFactory
-dontwarn jakarta.xml.soap.SOAPFactory
-dontwarn java.awt.Component
-dontwarn java.awt.Image
-dontwarn java.awt.datatransfer.Transferable
-dontwarn java.beans.BeanInfo
-dontwarn java.beans.ConstructorProperties
-dontwarn java.beans.IntrospectionException
-dontwarn java.beans.Introspector
-dontwarn java.beans.PropertyDescriptor
-dontwarn java.beans.Transient
-dontwarn java.lang.management.ManagementFactory
-dontwarn javax.management.InstanceNotFoundException
-dontwarn javax.management.MBeanRegistrationException
-dontwarn javax.management.MBeanServer
-dontwarn javax.management.MalformedObjectNameException
-dontwarn javax.management.ObjectInstance
-dontwarn javax.management.ObjectName
-dontwarn javax.naming.Context
-dontwarn javax.naming.InitialContext
-dontwarn javax.naming.NamingEnumeration
-dontwarn javax.naming.NamingException
-dontwarn javax.naming.directory.Attribute
-dontwarn javax.naming.directory.Attributes
-dontwarn javax.naming.directory.DirContext
-dontwarn javax.naming.directory.InitialDirContext
-dontwarn javax.naming.directory.SearchControls
-dontwarn javax.naming.directory.SearchResult
-dontwarn javax.servlet.ServletContainerInitializer
-dontwarn org.bouncycastle.jsse.BCSSLParameters
-dontwarn org.bouncycastle.jsse.BCSSLSocket
-dontwarn org.bouncycastle.jsse.provider.BouncyCastleJsseProvider
-dontwarn org.codehaus.groovy.runtime.BytecodeInterface8
-dontwarn org.codehaus.groovy.runtime.callsite.CallSite
-dontwarn org.codehaus.groovy.runtime.callsite.CallSiteArray
-dontwarn org.codehaus.janino.ClassBodyEvaluator
-dontwarn org.codehaus.janino.ScriptEvaluator
-dontwarn org.conscrypt.Conscrypt
-dontwarn org.conscrypt.ConscryptHostnameVerifier
-dontwarn org.hamcrest.Factory
-dontwarn org.jvnet.fastinfoset.VocabularyApplicationData
-dontwarn org.openjsse.javax.net.ssl.SSLParameters
-dontwarn org.openjsse.javax.net.ssl.SSLSocket
-dontwarn org.openjsse.net.ssl.OpenJSSE
-dontwarn sun.reflect.Reflection
-dontwarn sun.security.internal.spec.TlsKeyMaterialParameterSpec
-dontwarn sun.security.internal.spec.TlsKeyMaterialSpec
-dontwarn sun.security.internal.spec.TlsMasterSecretParameterSpec
-dontwarn sun.security.internal.spec.TlsPrfParameterSpec
-dontwarn sun.security.internal.spec.TlsRsaPremasterSecretParameterSpec
-dontwarn sun.security.provider.SecureRandom
-dontwarn sun.security.provider.Sun

-dontwarn sun.security.provider.Sun
-dontwarn javax.mail.Address
-dontwarn javax.mail.Authenticator
-dontwarn javax.mail.BodyPart
-dontwarn javax.mail.Message$RecipientType
-dontwarn javax.mail.Message
-dontwarn javax.mail.Multipart
-dontwarn javax.mail.PasswordAuthentication
-dontwarn javax.mail.Session
-dontwarn javax.mail.Transport
-dontwarn javax.mail.internet.AddressException
-dontwarn javax.mail.internet.InternetAddress
-dontwarn javax.mail.internet.MimeBodyPart
-dontwarn javax.mail.internet.MimeMessage
-dontwarn javax.mail.internet.MimeMultipart
-dontwarn javax.management.StandardMBean
-dontwarn javax.servlet.Filter
-dontwarn javax.servlet.FilterChain
-dontwarn javax.servlet.FilterConfig
-dontwarn javax.servlet.ReadListener
-dontwarn javax.servlet.ServletContext
-dontwarn javax.servlet.ServletContextEvent
-dontwarn javax.servlet.ServletContextListener
-dontwarn javax.servlet.ServletException
-dontwarn javax.servlet.ServletInputStream
-dontwarn javax.servlet.ServletOutputStream
-dontwarn javax.servlet.ServletRequest
-dontwarn javax.servlet.ServletResponse
-dontwarn javax.servlet.WriteListener
-dontwarn javax.servlet.http.Cookie
-dontwarn javax.servlet.http.HttpServlet
-dontwarn javax.servlet.http.HttpServletRequest
-dontwarn javax.servlet.http.HttpServletRequestWrapper
-dontwarn javax.servlet.http.HttpServletResponse
-dontwarn javax.servlet.http.HttpServletResponseWrapper
-dontwarn javax.servlet.http.HttpSession
-dontwarn org.conscrypt.Conscrypt$Version
-dontwarn org.eclipse.jetty.http.HttpFields
-dontwarn org.eclipse.jetty.server.Request
-dontwarn org.eclipse.jetty.server.RequestLog
-dontwarn org.eclipse.jetty.server.Response
-dontwarn org.eclipse.jetty.util.component.LifeCycle$Listener

# eudi module
-dontwarn javax.xml.stream.Location
-dontwarn javax.xml.stream.XMLEventReader
-dontwarn javax.xml.stream.XMLEventWriter
-dontwarn javax.xml.stream.XMLInputFactory
-dontwarn javax.xml.stream.XMLStreamException
-dontwarn javax.xml.stream.XMLStreamReader
-dontwarn javax.xml.stream.XMLStreamWriter
-dontwarn javax.xml.stream.events.Attribute
-dontwarn javax.xml.stream.events.Characters
-dontwarn javax.xml.stream.events.EndElement
-dontwarn javax.xml.stream.events.StartElement
-dontwarn javax.xml.stream.events.XMLEvent
-dontwarn org.slf4j.spi.CallerBoundaryAware
-dontwarn org.slf4j.spi.LoggingEventBuilder

-dontwarn com.inetum.eudi_blockchain.eudi.EudiDidService
-dontwarn com.inetum.eudi_blockchain.factories.EudiClassFactory
-dontwarn com.inetum.eudi_blockchain.jwt.JwtService
-dontwarn com.inetum.eudi_blockchain.models.EudiClass
-dontwarn com.inetum.eudi_blockchain.models.EnumClass$AlgorithmType
---
id: cognosTasks
title: Performing Cognos Tasks
---

There are 4 common tasks that are automated using the Cognos SDK.  These are: -

 * CONFIGURE_DATASOURCE.  Configures the existing WCM data source in Cognos.  
 * IMPORT_CONTENT_STORE.  Imports an entire content store zip file into Cognos.
 * EXPORT_CONTENT_STORE.  Exports the entire Cognos content store.
 * IMPORT_WCM_CONTENT.  Import a partial content store, only specific folders.
 * EXPORT_WCM_CONTENT.  Exports a partial content store, only specific folders.

 The build task bootJar builds the Cognos SDK application jar file into the project build/libs directory.  The application jar is then copied into a release zip for distribution.

 Configuration parameters are passed into the application using a Spring Boot YAML configuration profile file.   See below for a description of each of the configuration properties that are are applicable to the schema creation process.

## Using bootRun

```sh
./gradlew  :CognosSDKApplication:bootRun  --args="--spring.config.name=wcmReportingCognos --spring.config.location=file:$PWD/builderResources/ --spring.profiles.active=anthony,dev --cognostask=EXPORT_WCM_CONTENT"     
```

## Using the Executable Jar file
```sh
java -jar CognosSDKApplication/build/libs/com.ibm.wcm.reporting.cognossdk.application-1.0.jar  --spring.config.name=wcmReportingCognos --spring.config.location=file:$PWD/builderResources/ --spring.profiles.active=anthony,dev --cognostask=EXPORT_WCM_CONTENT
```

Parameters:
* --cognostask.  See above.

See an sample configuration file and properties below.

```sh
spring:
  profiles:
    active: dev
---
spring:
  profiles: anthony

configurationName: Cognos on dslvm1347. Anthony - personal VM
comment: task 0 tested, task 1 tested, task 2 tested, task 3 tested, task 4 tested.
# options are: [CONFIGURE_DATASOURCE, IMPORT_CONTENT_STORE, EXPORT_CONTENT_STORE, IMPORT_WCM_CONTENT, EXPORT_WCM_CONTENT, NO_OPERATION]cognostask: EXPORT_CONTENT_STORE]
cognostask: EXPORT_WCM_CONTENT
# cognos end point
cep: http://dslvm1347.mul.ie.ibm.com:9300/p2pd/servlet/dispatch
#cognos name space
cns: CognosEx
#cognos user identity
cuid: cognos
#cognos user password
cup: jMP7x3U9qy+OQYWRNsmdNw==
#archive passwork, leave blank for default password
archivepassword: HlIxprF/66CsSSm6PON5+A==
# zip file name
zipname:
#set to true if you wnat to import/export the test pack
testpack: false
#properties for the cognos data source
dbname: curam
dbport: 50000
dbserver: ba-wcm-02.mulvm.ie.ibm.com
dbup: ojAf56upEWhmqbQtc6HsIw==
dbuid: scdb2
dbschema: scdb2
#set the ssl indicator on the JDBC connection URL
ssl: false
```

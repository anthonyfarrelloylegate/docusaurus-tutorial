---
id: runningDBCreation
title: Performing a New Reporting Schema
---

The build task bootJar builds the schema creation application jar file into the project build/libs directory.  The application jar is then copied into a release zip for distribution.

Configuration parameters are passed into the application using a Spring Boot YAML configuration profile file.   See below for a description of each of the configuration properties that are are applicable to the schema creation process.

## Reporting Schema Creation
To deploy Reporting schema objects you run the following application as follows.  The data definition language (DDL) files are defined in the ReportingSchema project, e.g. **[see ReportingSchema sourcd-ddl and target-ddl folders](https://github.ibm.com/WH-GovHHS/wcm-reporting/tree/master/ReportingSchema)**.  

These files are used for provisioning of new tenants.   

Creating a release zip bundles the DDL files into the application, the application is then executed which creates reporting objects in the WCM schema and Reporting schema.  See the example below.


## Using bootRun

```sh
./gradlew :ETLApplication:bootRun  --args="--spring.config.name=wcmReporting --spring.config.location=file:$PWD/builderResources/ --spring.profiles.active=LOCAL_ANTHONY,dev --refresh=false"  
```

## Using the Executable jar
```sh
java -jar com.ibm.wcm.reporting.etl.application-1.0.jar --spring.config.name=wcmReporting  --spring.config.location=file:./builderResources/ --spring.profiles.active=LOCAL_ANTHONY,dev --refresh=false
```

## Configuration Parameters Explained

The configuration data for the creation is read from the configuration profile and explained below.  See also the example helm configuration **[WCMReporting.yml](https://github.ibm.com/WH-GovHHS/wcm-reporting/blob/master/helm/configs/WCMReporting.yml)**.

The configuration YAML file is maintained manually for our development pipelines.  When deployed to the IBM Cloud the YAML file is created and injected at runtime.

Notes:
* single tenant.  To run the upgrade for a single tenant you can use the element __schemaname__  within the target and source elements. This supports development tasks and our Jenkins builders.
* Active profile.  For production the profile is set to the value "prod".

```
spring.profiles.active=prod
```
Configuration data required by the application.


```json
# database upgrade options: STATUS(unrun changesets) | VALIDATE(xml validate) | UPGRADE(perform the upgrade)
# default for production is STATUS
refresh: false
#Leave blank, run when provisioning new clients.
multitenant:
target:
  userid: scdb2
  password: encryptedPassword
  jdbcURL: jdbc:db2://reporting02.mulvm.ie.ibm.com:50000/curamDW
  schemaname: CI_TENANT
source:
  userid: scdb2
  password: encryptedPassword
  jdbcURL: jdbc:db2://ba-wcm-02.mulvm.ie.ibm.com:50000/curam
  schemaname: scdb2
```

---
id: runningDBUpgrade
title: Performing a Database Upgrade
---

## Overview
The build task bootJar builds the upgrade application jar file into the project build/libs directory.  The application jar is then copied into a release zip for distribution.

Configuration parameters are passed into the update application using a Spring Boot YAML configuration profile file.   See below for a description of each of the configuration properties that are are applicable to the database upgrade process.

## Reporting Schema Upgrade
To deploy a database upgrade to a Reporting instance you run the application as follows.  The database change logs are defined in the **ReportingSchema project** (folder) with a new folder created for each release, e.g. **[see 1.1.74](https://github.ibm.com/WH-GovHHS/wcm-reporting/tree/master/ReportingSchemaUpgrade/1.1.71)** which represents the 19:06 release.   

Creating a release zip bundles the change logs into the database upgrade application, the database upgrade application is then executed which deploys the change logs.  To run the application see the example below.

Both of the following are methods can be used within the development stream. The task bootRun builds and the executes the application, great when you are making frequently changes to be tested immediately.  The second method simply runs the application; it assumes the bootJar task has been previously executed.

## Using bootRun

```sh
./gradlew :LiquibaseApplication:bootRun  --args="--spring.config.name=wcmReporting --spring.config.location=file:$PWD/builderResources/ --spring.profiles.active=LOCAL_ANTHONY,dev --upgradetask=VALIDATE"  
```
## Using the Executable jar

```sh
java -jar com.ibm.wcm.reporting.liquibase.application-1.0.jar --spring.config.name=wcmReporting  --spring.config.location=file:./builderResources/ --spring.profiles.active=FVT,dev --upgradetask=VALIDATE
```
## Configuration Parameters Explained

The configuration values for the upgrade are read from the configuration profile and explained below.  See also the example helm configuration **[WCMReporting.yml](https://github.ibm.com/WH-GovHHS/wcm-reporting/blob/master/helm/configs/WCMReporting.yml)**.

The configuration YAML file is maintained manually for our development pipelines.  When deployed to the IBM Cloud the YAML file is created and injected at runtime.

Notes:
* Single tenant.  To run the upgrade for a single tenant you can use the __schemaname__ element within the target and source elements. This supports development tasks and our Jenkins builders. Alternatively add a single schema name to the multitenant element, see next.
* multitenant.  This element overrides the __schemaname__ element.  This element contains the set of schema names present in a multi-tenant WCM stack.  When this element is set a Reporting upgrade is applied to each schema in sequential order.
* STATUS & VALIDATE.  These options are mainly used by the development team.
* Active profile.  For production the profile is set to the value "prod"

```
spring.profiles.active=prod
```
Configuration data required by the application.

```
# database upgrade options: STATUS(unrun changesets) | VALIDATE(xml validate) | UPGRADE(perform the upgrade)
# default for production is UPGRADE
upgradetask: UPGRADE
#list of schemas in this stack.
multitenant:T_tenantID_instanceID_1, T_tenantID_instanceID_2
target:
  userid: scdb2
  password: encryptedPassword
  jdbcURL: jdbc:db2://reporting02.mulvm.ie.ibm.com:50000/curamDW
  schemaname: T_tenantID_instanceID
source:
  userid: scdb2
  password: encryptedPassword
  jdbcURL: jdbc:db2://ba-wcm-02.mulvm.ie.ibm.com:50000/curam
  schemaname: T_tenantID_instanceID
```

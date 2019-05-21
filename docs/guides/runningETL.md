---
id: runningETL
title: Performing ETL Execution
---

The build task bootJar builds the ETL application jar file into the project build/libs directory.  The application jar is then copied into a release zip for distribution.

Configuration parameters are passed into the application using a Spring Boot YAML configuration profile file.   See below for a description of each of the configuration properties that are are applicable to the ETL execution process.

## ETL Execution
To execute Reporting data-flows(ETL processes) you run the following ETL application.  The data-flow definitions are defined in the ReportingSchema project (folder), e.g. **[see ReportingSchema project, dataflows folder](https://github.ibm.com/WH-GovHHS/wcm-reporting/tree/master/ReportingSchema/dataflows)**.  

These files are used as part of the data migration project to seed a Reporting schema with client data, i.e. ETL processes are run from "the-start-of-time".   

Creating a release zip bundles the data-flow definintion files into the ETL application, the application is then executed which transforms data into the Reporting schema.  See the example below.


## Using bootRun

```sh
./gradlew :ETLApplication:bootRun  --args="--spring.config.name=wcmReporting --spring.config.location=file:$PWD/builderResources/ --spring.profiles.active=LOCAL_ANTHONY,dev --refresh=true"  
```

## Using the Executable jar
```sh
java -jar com.ibm.wcm.reporting.etl.application-1.0.jar --spring.config.name=wcmReporting  --spring.config.location=file:$PWD/builderResources/ --spring.profiles.active=FVT,dev --refresh=true
```

The configuration data for the creation is read from the configuration profile and explained below.  See also the example helm configuration **[WCMReporting.yml](https://github.ibm.com/WH-GovHHS/wcm-reporting/blob/master/helm/configs/WCMReporting.yml)**.

The configuration YAML file is maintained manually for our development pipelines.  When deployed to the IBM Cloud the YAML file is created and injected at runtime.

Notes:
* single tenant.  To run the ETL processes for a single tenant you can use the element __schemaname__  within the target and source elements. This supports development tasks and our Jenkins builders.
* multitenant.  This element overrides the __schemaname__.  This element contains the set of schema names present in a multi-tenant WCM stack.  When this element is set the ETL process is executed against each schema in sequential order.
* STATUS & VALIDATE.  These options are only used by the development team.
* Active profile.  For production the profile is set to the value "prod".

```
spring.profiles.active=prod
```


The following configuration data are required to be injected into the ETL container in the IBM Cloud.

```json
multitenant: T1_SCHEMA, T2_SCHEMA
target:
  userid: bluadmin
  password: encryptedPassword
  jdbcURL: jdbc:db2://db2whoc-flex-watsoni2.services.dal.bluemix.net:50001/BLUDB:sslConnection=true;
  #this is only for local testing, overriden by multitenant attribute above
  schemaname: WCM_REPORTING_AF_SPIKE
source:
  userid: bluadmin
  password: encryptedPassword
  jdbcURL: jdbc:db2://dashdb-txnha-flex-yp-dal10-64.services.dal.bluemix.net:50000/BLUDB
  #this is only for local testing, overriden by multitenant attribute above
  schemaname: T_100006_2
```

The following configuration data is required but static and does not change in the IBM Cloud.  Showing below for a more complete description.

```json
overridereleasetoggle: false
numberOfThreads: 8
commit: 2001
fetchSize: 2000
#to run a single dataflow, set the name here
#or add --dataflow=TASKS_ETL to the command line
dataflow:
# to allow debugging against large data sets, to limit
throttlelimit:
jdbcpool: 8
# only check database endpoints and then exit
connecttest:
# refresh=false will build the Reporting Schema
# refresh=true will run the ETL process
refresh: true
```

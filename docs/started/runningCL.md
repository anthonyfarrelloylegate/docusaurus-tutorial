---
id: runningCL
title: Running executables from the command line
---


## Reporting Schema Upgrade
To upgrade the Reporting schema you run the following task.

```sh
java -jar com.ibm.wcm.reporting.liquibase.application-1.0.jar --spring.config.name=wcmReportingUpgrade  --spring.config.location=file:./builderResources/ --spring.profiles.active=FVT,dev
```



Setup a sample YAML file for testing, see the sample YAML files being used, please copy and use for testing - https://github.ibm.com/WH-GovHHS/WCM-Reporting/blob/master/helm/configs/WCMReporting.yml


-- cognos tasks - # task type is (0=data source, 1=importCS, 2=exportCS, 3=importWCM, 4=exportWCM)

java -jar com.ibm.wcm.reporting.cognossdk.application-1.0.jar --spring.config.name=wcmReportingCognos  --spring.config.location=file:./builderResources/ --spring.profiles.active=FVT,dev  --task=1

java -jar com.ibm.wcm.reporting.cognossdk.application-1.0.jar --spring.config.name=wcmReportingCognos  --spring.config.location=file:./builderResources/ --spring.profiles.active=FVT,dev --task=3

java -jar com.ibm.wcm.reporting.cognossdk.application-1.0.jar --spring.config.name=wcmReportingCognos  --spring.config.location=file:./builderResources/ --spring.profiles.active=CI,dev --task=2



--ETL

java -jar com.ibm.wcm.reporting.etl.application-1.0.jar --spring.config.name=wcmReporting --spring.config.location=file:./builderResources/ --spring.profiles.active=CDT_WH,dev  --refresh=true

--Populates a new Reporting schema with objects

java -jar ETLApplication/build/libs/com.ibm.wcm.reporting.etl.application-1.0.jar --spring.config.name=wcmReporting --spring.config.location=file:./builderResources/ --spring.profiles.active=CDT_WH,dev

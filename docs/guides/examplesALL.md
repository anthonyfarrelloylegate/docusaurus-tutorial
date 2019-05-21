---
id: usingarelease
title: Using Released Software
---

The following sections show how to run Reporting On cloud process from a release zip.  All process are executed as executable jar files.  Configuration parameters are passed into the applications using a Spring Boot YAML configuration profile file.   

The configuration YAML file is maintained manually for our development pipelines, for example see - https://github.ibm.com/WH-GovHHS/wcm-reporting/blob/master/builderResources/wcmReporting.yml.  

When deployed to the IBM Cloud the YAML file is created and injected at runtime, see the sample Helm config file here https://github.ibm.com/WH-GovHHS/wcm-reporting/blob/master/helm/configs/WCMReporting.yml

Here is an example of the released files.
```sh
 SprintNumber.txt
 VersionInfo.txt
 com.ibm.wcm.reporting.cognossdk.application-1.0.jar
 com.ibm.wcm.reporting.etl.application-1.0.jar
 com.ibm.wcm.reporting.liquibase.application-1.0.jar
 com.ibm.wcm.reporting.security.application-1.0.jar.jar
 helm/
 tools/
 wcmReporting.yml
```

The examples below show how to run a Reporting microservice  from within a WCM container or from a release zip.


### Create Reporting Schema (objects)
To create the Reporting database objects run the following command, note the --refresh=false parameter. This creates DDL objects in the WCM tenant schema and in the Warehouse tenant schema.

```sh
# ensure the configuration file wcmReporting.yml is at the location ./

java -jar com.ibm.wcm.reporting.etl.application-1.0.jar --spring.config.name=wcmReporting  --spring.config.location=file:./ --spring.profiles.active=dev --refresh=false

```
### Run ETL Processing

To run the ETL process, note the --refresh=true IS part of this invocation this time.

```sh
# ensure the configuration file wcmReporting.yml is at the location ./
java -jar com.ibm.wcm.reporting.etl.application-1.0.jar --spring.config.name=wcmReporting --spring.config.location=file:./ --spring.profiles.active=dev --refresh=true

```

### Perform Reporting schema upgrade
To perform a schema upgrade run the following command.

```sh
# ensure the configuration file wcmReporting.yml is at the location ./
java -jar com.ibm.wcm.reporting.liquibase.application-1.0.jar --spring.config.name=wcmReporting  --spring.config.location=file:./ --spring.profiles.active=dev --refresh=true

```

### Encrypting Passwords
To encrypt a password run the following command, note the parameter --password.

```sh
# ensure the configuration file wcmReporting.yml is at the location ./
java -jar com.ibm.wcm.reporting.security.application-1.0.jar --spring.config.name=wcmReporting  --spring.config.location=file:./builderResources/ --spring.profiles.active=CI,dev --password=scdb2

```
This command produces the following output.

```sh
__        ______ __  __   ____                       _   _
\ \      / / ___|  \/  | |  _ \ ___ _ __   ___  _ __| |_(_)_ __   __ _
 \ \ /\ / / |   | |\/| | | |_) / _ \ '_ \ / _ \| '__| __| | '_ \ / _` |
  \ V  V /| |___| |  | | |  _ <  __/ |_) | (_) | |  | |_| | | | | (_| |
   \_/\_/  \____|_|  |_| |_| \_\___| .__/ \___/|_|   \__|_|_| |_|\__, |
                                   |_|                           |___/

2019-05-15 12:21:02,916 INFO  [main] w.r.a.SecurityUtilApplication: Starting SecurityUtilApplication on anthonymcomsmbp.mul.ie.ibm.com with PID 34836 (/Users/anthonyfarrell/wcmDevelopment/ReportingOnCloud/SecurityUtilApplication/build/libs/com.ibm.wcm.reporting.security.application-1.0.jar started by anthonyfarrell in /Users/anthonyfarrell/wcmDevelopment/ReportingOnCloud)
2019-05-15 12:21:02,921 DEBUG [main] w.r.a.SecurityUtilApplication: Running with Spring Boot v2.1.0.RELEASE, Spring v5.1.2.RELEASE
2019-05-15 12:21:02,922 INFO  [main] w.r.a.SecurityUtilApplication: The following profiles are active: CI,dev
2019-05-15 12:21:03,705 INFO  [main] w.r.a.SecurityUtilApplication: Started SecurityUtilApplication in 1.337 seconds (JVM running for 1.864)
2019-05-15 12:21:03,707 INFO  [main] w.r.a.SecurityUtilApplication: Reporting Liquibase Application options:[configname=Contineous Integration. Source is BA02, warehouse is Reporting02],
[task=ENCRYPT] input=scdb2
2019-05-15 12:21:04,594 INFO  [main] w.r.a.SecurityUtilApplication: ojAf56upEWhmqbQtc6HsIw==
```

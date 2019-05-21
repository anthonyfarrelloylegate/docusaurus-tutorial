---
id: projectstructure
title: Project Structure
---

There are two categories of projects within Reporting On Cloud.  The first category of projects is where you write application code that supports the addition of new business features. The second category are projects which provide technical infra-structure, e.g.  our custom ETL application.


#### Projects where you write application code.

* **ReportingCognosContent**.  This project is where you place all Cognos artifacts.
* **ReportingSchema**.  This project is where you place all database schema and ETL data-flow artifacts.
* **ReportingSchemaUpgrade**.  This project is where you place Liquibase metadata to upgrade the Reporting schema.

### Projects that provide technical infrastructure.
These projects are implemented using Spring Boot and support bundling infra-structure code together with application code.  This supports the creation of a a small number of fat Jars for cloud deployment.

The legacy Reporting release zip contained circa 450 files, the new Reporting cloud release zip has less that 10 files.

There are 3 Java applications shipped with Reporting on Cloud.

* **ETLApplication**.  This project implements the  ETL engine.
* **LiquibaseApplication**.  This project implements the database upgrades of the Reporting Schema.
* **CognosSDKApplication**.  This project implements automation of common Cognos tasks.
* **ReportingSecurityUtilApplication**.  This application (com.ibm.wcm.reporting.cognossdk.application-1.0.jar) encrypts passwords.
* **ReportingSecurityUtil**.  This project provide utilities than can be used by all Sprint Boot applications.

### Other supporting directories

Noteworthy are : -
 1. builderResouces.   This folder contains YAML configuration files which feed configuration data into Java applications.
 2. Tools.  This folder contains other helper tasks.  


### How to build

The build task bootJar builds the applications above, into the build/libs directory of each project folder.  And they are copied into a release zip for distribution.

Configuration parameters are passed into the applications using a Spring Boot YAML configuration profile file, e.g.
https://github.ibm.com/WH-GovHHS/wcm-reporting/blob/master/helm/configs/WCMReporting.yml.  

The configuration YAML file is maintained manually for our development pipelines.  When deployed to the IBM Cloud the YAML file is created and injected at runtime.

Please review each of the following sub sections for a full description of each application, how to build the application and how to run the application.

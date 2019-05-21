---
id: projstruct
title: Reporting Project Structure
---


These are the Java applications released with Reporting-on-Cloud.

* **ETLApplication**.  This application (com.ibm.wcm.reporting.etl.application-1.0.jar) implements the  ETL engine.
* **LiquibaseApplication**.  This application (com.ibm.wcm.reporting.liquibase.application-1.0.jar) implements the database upgrades of the Reporting Schema.
* **CognosSDKApplication**.  This application (com.ibm.wcm.reporting.security.application-1.0.jar) implements automation of common Cognos tasks.
* **ReportingSecurityUtilApplication**.  This application (com.ibm.wcm.reporting.cognossdk.application-1.0.jar) encrypts passwords.

The build task bootJar builds the application jar files above, into the build/libs directory of each project folder.  And they are copied into a release zip for distribution.

Configuration parameters are passed into the applications using a Spring Boot YAML configuration profile file.   See below for a description of each of the configuration properties and to which application they are applicable to.

The configuration YAML file is maintained manually for our development pipelines.  When deployed to the IBM Cloud the YAML file is created and injected at runtime.

Please review each of the sub sections for a full description of each application.

For example, to execute Reporting On cloud processes from a release zip, review the following examples.

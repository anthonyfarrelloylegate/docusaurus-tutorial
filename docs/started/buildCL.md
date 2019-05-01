---
id: buildCL
title: Building from the command line
---

### Verify your build environment Building from the Command Line

To verify your environment get a list of the Gradle tasks available.
```
cd ReportingOnCloud
./gradlew tasks
```
You should see the following output.

```
WCM Reporting Cloud Task tasks
------------------------------
scCreateDistribution - This tasks gathers the files required for a candidate release zip.
scCreateZipRelease - Package the release zip
```

### Building from the Command Line

To build Reporting executable and to package a release zip execute the following commands.
```
./gradlew bootJar
./gradlew scCreateZipRelease
```
### Reporting on Cloud Project infrastructure

There are two categories of projects with Reporting On Cloud.  The first category of projects support the addition of new business features. The second category are projects which provide technical infra-structure, e.g.  our custom ETL application.

Projects to support business features.

* **ReportingCognosContent**.  This project contains all Cognos artifacts.
* ReportingSchema.  This project contains all database schema and ETL artifacts.
* ReportingSchemaUpgrade.  This project contains metadata to upgrade Reporting schema.

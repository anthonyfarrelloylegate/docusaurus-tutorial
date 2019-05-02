---
id: buildCL
title: Building from the command line
---
The following tasks allow you to build reporting projects and to create a release zip.

Building the Java applications creates a fat jar files where the application code is bundled together with infra-structure code to create cloud friendly deployment artifacts.

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

### Building All from the Command Line

To build Reporting executable and to package a release zip execute the following commands.
```
./gradlew bootJar
./gradlew scCreateZipRelease
```

### Build single Application from the Command Line

To build an individual application run the following command for example, simply prepend the project name before the task name.

```
./gradlew :ETLApplication:bootJar
```

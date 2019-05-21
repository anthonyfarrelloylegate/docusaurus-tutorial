---
id: buildCL
title: Build Commands
---
The following tasks allow you to build reporting projects and to create a release zip.

Building each of the Java applications creates a fat jar file where the application code is bundled together with infra-structure code to create cloud friendly deployment artifact.

### Verify your build environment by building from the Command Line

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

To build (compile & jar) all Reporting projects.
```
./gradlew bootJar
```

To create a distribution and release zip execute the following commands.

```
./gradlew scCreateZipRelease
```

### Build single Application from the Command Line

To build an individual application run the following command for example, simply prepend the project name before the task name.

```sh
./gradlew :ETLApplication:bootJar
```

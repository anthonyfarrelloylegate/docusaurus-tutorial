---
id: buildCL
title: Building from the command line
---

### Verify your build environment Building from the Command Line

To verify your environment get a list of the gradle tasks available.
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

To verify your environment get a list of the gradle tasks available.
```
./gradlew bootJar
./gradlew scCreateZipRelease
```

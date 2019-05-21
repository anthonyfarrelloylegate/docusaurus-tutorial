---
id: performingEncryption
title: Performing Password Encryption
---

To encrypt a password run the encryption application as follows.     

## Using bootRun

```sh
./gradlew :ReportingSecurityUtilApplication:bootRun --args="--spring.config.name=wcmReporting --spring.config.location=file:$PWD/builderResources/ --spring.profiles.active=CI,dev --passwordtask=scdb2"
```

## Using the Executable Jar file
```sh
$ java -jar ReportingSecurityUtilApplication/build/libs/com.ibm.wcm.reporting.security.application-1.0.jar --spring.config.name=wcmReporting --spring.config.location=file:$PWD/builderResources/ --spring.profiles.active=CI,dev --passwordtask=scdb2
```
Parameters:
* --password.  Enter the password e.g. --password=scdb2.

See the sample output below.

```
2019-05-16 22:17:43,915 DEBUG [main] w.r.a.SecurityUtilApplication: Running with Spring Boot v2.1.0.RELEASE, Spring v5.1.2.RELEASE
2019-05-16 22:17:43,916 INFO  [main] w.r.a.SecurityUtilApplication: The following profiles are active: CI,dev
2019-05-16 22:17:44,641 INFO  [main] w.r.a.SecurityUtilApplication: Started SecurityUtilApplication in 1.565 seconds (JVM running for 1.959)
2019-05-16 22:17:44,642 INFO  [main] w.r.a.SecurityUtilApplication: Reporting Liquibase Application options:[configname=Contineous Integration. Source is BA02, warehouse is Reporting02],
[task=ENCRYPT] input=scdb2
2019-05-16 22:17:44,945 INFO  [main] w.r.a.SecurityUtilApplication: ojAf56upEWhmqbQtc6HsIw==
```

You can also decrypt password using the parameters,  for example use --password=<ojAf56upEWhmqbQtc6HsIw==> --passwordtask=DECRYPT.

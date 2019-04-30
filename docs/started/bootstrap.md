---
id: bootstrap
title: Get Development tools
---

This wiki page will go through necessary steps to download the base tooling(Eclipse, Java...) onto your machine.

## Download tooling

Once you have the Reporting On Cloud codebase.  To download Eclipse, Java and other base tooling change to the boostrap directory and run the following command.

```
cd ReportingOnCloud
cd bootstrap
./gradlew
```


## Configure Eclipse

Now that we have the IDE we can perform some additional setup steps such as setting up the formatter and checkstyle plugins that enforce coding standards on the code. Information can be found at **[Eclipse Configuration Wiki](https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/W5ee391b03445_49f2_9d54_a0d8a8181a8e/page/Eclipse%20Configuration)**

## Import Reporting On Cloud Code
### Create a new workspace

We should have Eclipse running and configured so its time to import code. Lets start with creating a new workspace for the Reporting On Cloud code.

```
File > Switch Workspace -> Other
```
### Generate Classpath files

To generate the .classpath project file to have the correct local path run the following command.  Do NOT attempt to check the .classpath files into source code control (the are ignored, a base version is supplied for visibility purposes).
```
cd ReportingOnCloud
./gradlew eclipse
```
### Import Reporting projects

Repeat the steps below for each of following projects, from eclipse.
```
Import > Import >  Existing Projects into Workspace
Select browse, go to ReportingOnCloud.
Select Search for nested projects (ensure copy projects into workspace is NOT selected)
Note - on a personal note I don't import the base ReportingOnCloud project but thats a personal choice.
Select Finish
```

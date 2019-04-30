---
id: git
title: Get Codebase from Git
---
This wiki page will go through optional steps to download the code base from GitHub onto your machine.

NOTE. Git is not used as yet, it is present to verify how we plan to move to a Git/Travis build pipeline. You are free to perform the steps below but do not deliver code to Git yet.

The **[Master branch](https://github.ibm.com/WH-GovHHS/WCM-Reporting)** contains code for Reporting On Cloud project.

Before cloning the master branch ensure that you have git installed on your machine, if not follow the guide on the **[official github page](https://git-scm.com/)**. There is a possibility to add your RSA key to the git repository meaning that you will not need to provide a password when interacting with git this is very convenient. Steps for adding your RSA key to git can be found **[here](https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account)**.

Clone the master CCM branch to desired directory on you local machine using the recommended commands bellow
```
cd wcmDevelopment
mkdir ReportingOnCloud
cd ReportingOnCloud
git clone https://github.ibm.com/WH-GovHHS/WCM-Reporting.git
```

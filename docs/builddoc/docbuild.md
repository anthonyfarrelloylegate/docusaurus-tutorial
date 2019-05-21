---
id: docbuild
title: How to contribute to this site
---

The purpose of this book is to publish all the content associated with WCM Reporting and its sub-projects in a presentable, organised, and easy-to-use manner.

This site is powered by **[Docusaurus](https://docusaurus.io/)** from Facebook.

Follow the steps outlined **[the Git repo README](https://github.ibm.com/WH-GovHHS/wcm-reporting-developer-book)** to contribute.

When modifying developer documentation it is recommended to clone the repo **[wcm-reporting-developer-book](https://github.ibm.com/WH-GovHHS/wcm-reporting-developer-book)** repository, perform the changes, deploy the book locally to make sure it renders as expected.  Once everything is fine then perform a push to master. We will only move to a 'pull request' model if the quality of the site drops over time.


## Pipeline

The content of the wiki can be found in the **[wcm-reporting-developer-book](https://github.ibm.com/WH-GovHHS/wcm-reporting-developer-book)** repo. The repo will shortly be polled by a [Travis Job](https://ccmjenkins.mulvm.ie.ibm.com:8080) that will build and push the latest changes to GitHub Pages. The job can be triggered manually if needed.

## Authors
* Anthony Farrell
* Valerie Stafford
* John Rogers

### Other
See also **[Docusaurus installation page](https://docusaurus.io/docs/en/installation)**.

To play and create a new book; create a new folder and then run
```sh
npx docusaurus-init
cd website
yarn start
```

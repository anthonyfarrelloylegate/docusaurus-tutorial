# WCM Reporting Developer Documentation

## Introduction

The purpose of this site/ook is to publish all the content associated with WCM Reporting and its sub-projects in a presentable, organised, and easy-to-use manner.

This site is powered by **[Docusaurus](https://docusaurus.io/)** from Facebook.
## Install (Local Setup)

Ensure your local environment has the Docusaurus dependancy installed. To install, run the following commands; the dependancies are only required to be install once.
```bash
brew install yarn
yarn --version
yarn
brew install node
node
```

Inside the cloned repository run the following commands to serve the book locally.

```sh
git clone https://github.ibm.com/WH-GovHHS/wcm-reporting-developer-book.git
cd wcm-reporting-developer-book
cd website
yarn build
yarn start
```
Load the example site at http://localhost:3000/wcm-reporting-developer-book/ if it did not already open automatically. If port 3000 has already been taken, another port will be used. Look at the console messages to see which.

You should see the example site loaded in your web browser. There's also a LiveReload server running and any changes made to the docs and files in the website directory will cause the page to refresh.

## Pipeline

The content of the wiki can be found in the **[wcm-reporting-developer-book](https://github.ibm.com/WH-GovHHS/wcm-reporting-developer-book)** repo. The repo will shortly be polled by a [Travis Job](https://ccmjenkins.mulvm.ie.ibm.com:8080) that will build and push the latest changes to GitHub Pages. The job can be triggered manually if needed.

## Authors
* Anthony Farrell
* Valerie Stafford
* John Rogers

## Contributing
When modifying developer documentation it is recommended to clone the **[wcm-reporting-developer-book](https://github.ibm.com/WH-GovHHS/wcm-reporting-developer-book)** repository, perform the changes, deploy the book locally to make sure it renders as expected.  Once everything is fine then perform a push to master.  

We will not implement __pull requests__ to allow developers to commit directly to master, if the quality of this site is affected adversely as a result we will move to a 'pull request model'.

```sh
git clone https://github.ibm.com/WH-GovHHS/wcm-reporting-developer-book.git
cd wcm-reporting-developer-book
cd website
yarn build
yarn start
git add .
git commit -m "new change"
-- to ensure you merge changes before you deliver.
git pull
-- deliver your changes
git push
```

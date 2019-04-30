/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more by contacting the **[Reporting team.](${docUrl(
        'helpteamcontacts',
      )})**`,
      title: 'Contact Details',
    },
    {
      content: `Learn more through our **[slack channels.](${docUrl('helpslack',)})**`,
      title: 'Join our communities',
    },
    {
      content: "Learn more by reading **[official documentation](https://www.ibm.com/support/knowledgecenter/en/SSRMV7/com.ibm.iwcm.doc_1.0.0/reporting/t_reporting.html)**. Learn how to update this site using **[Docusaurus](https://docusaurus.io)**",
      title: 'Stay up to date',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
          <p>This project is maintained by a dedicated project team.</p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;

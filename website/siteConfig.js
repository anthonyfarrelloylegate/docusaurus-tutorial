/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  githubHost: "github.com",

  //organizationName: 'WH-GovHHS',
  //projectName: 'wcm-reporting-developer-book',
  //url: 'https://pages.github.ibm.com', // Your website URL
  //baseUrl: '/wcm-reporting-developer-book/', // The name of your GitHub project.

    title: 'Reporting Documentation', // Title for your website.
    tagline: 'A website for developer documentation and release information.',
    organizationName: 'anthonyfarrelloylegate',
    projectName: 'docusaurus-tutorial',
    baseUrl: '/docusaurus-tutorial/', // The name of your GitHub project.

    url: 'https://anthonyfarrelloylegate.github.io', // Your website URL

  // GIT_USER=anthonyfarrell CURRENT_BRANCH=master USE_SSH=true npm run publish-gh-pages
  headerLinks: [
    {doc: 'started/gettingStarted', label: 'Developer Docs'},
    {page: 'help', label: 'Help'}
  ],
  users,

  /* path to images for header/footer */
  headerIcon: 'img/undraw_analytics_5pgy.svg',
  footerIcon: 'img/undraw_analytics_5pgy.svg',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#051243',
    secondaryColor: '#0530ad',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} IBM`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',
  docsSideNavCollapsible: true,
  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;

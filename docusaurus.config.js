// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Redwood Application Development Cookbook',
  tagline: 'Redwood Community Docs',
  url: 'https://rw-community.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'github.com/adriatic', // Usually your GitHub org/user name.
  projectName: 'RADC', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
  
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      onBrokenMarkdownLinks: 'ignore',
      // autoCollapseSidebarCategories: true,
      navbar: {
        title: 'RedwoodJS Community Library',
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'docs',
          },
          {to: '/blog', label: 'blog', position: 'left'},
          {
            href: 'https://redwoodjs.com',
            label: 'RedwoodJS',
            position: 'right',
          },
          {
            href: 'https://community.redwoodjs.com',
            label: 'Redwood Community',
            position: 'right',
          },
          {
            href: 'https://github.com/adriatic/RADC',
            label: 'GitHub',
            position: 'right',
          },
        ],        
      },
      footer: {
        style: 'dark',
 
        copyright: `Copyright © ${new Date().getFullYear()} RADC, built with Docusaurus on May 29, 2022` 
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

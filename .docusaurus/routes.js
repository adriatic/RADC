import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '83d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '76a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '82a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '1d9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '989'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '71b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '6fd'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '555'),
    exact: true
  },
  {
    path: '/blog/adding comments',
    component: ComponentCreator('/blog/adding comments', '078'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'b88'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '5b3'),
    exact: true
  },
  {
    path: '/blog/tags/application',
    component: ComponentCreator('/blog/tags/application', '582'),
    exact: true
  },
  {
    path: '/blog/tags/cookbook',
    component: ComponentCreator('/blog/tags/cookbook', 'aa5'),
    exact: true
  },
  {
    path: '/blog/tags/development',
    component: ComponentCreator('/blog/tags/development', '4bc'),
    exact: true
  },
  {
    path: '/blog/tags/redwood',
    component: ComponentCreator('/blog/tags/redwood', 'a40'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '9b0'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2b0'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '0a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/app management/building/Introduction',
        component: ComponentCreator('/app management/building/Introduction', '364'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/app management/debugging/debug-techniques',
        component: ComponentCreator('/app management/debugging/debug-techniques', '492'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/app management/debugging/introduction',
        component: ComponentCreator('/app management/debugging/introduction', '8e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/app management/debugging/setup',
        component: ComponentCreator('/app management/debugging/setup', '68f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/app management/debugging/tracing-code',
        component: ComponentCreator('/app management/debugging/tracing-code', 'a75'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/app management/deployment/aws',
        component: ComponentCreator('/app management/deployment/aws', '35b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/app management/deployment/netlify',
        component: ComponentCreator('/app management/deployment/netlify', '26d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/app management/deployment/render',
        component: ComponentCreator('/app management/deployment/render', '488'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/app management/deployment/vercel',
        component: ComponentCreator('/app management/deployment/vercel', '327'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/how to/Develop stripe/Introduction',
        component: ComponentCreator('/how to/Develop stripe/Introduction', '592'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/how to/Develop stripe/Part 1',
        component: ComponentCreator('/how to/Develop stripe/Part 1', 'a01'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/how to/Develop stripe/Part 2',
        component: ComponentCreator('/how to/Develop stripe/Part 2', '959'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/how to/Develop stripe/Part 3',
        component: ComponentCreator('/how to/Develop stripe/Part 3', '0c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/how to/Develop stripe/Part 4',
        component: ComponentCreator('/how to/Develop stripe/Part 4', '2ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/how to/Develop stripe/Part 5',
        component: ComponentCreator('/how to/Develop stripe/Part 5', 'bff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/how to/Install PostgreSQL',
        component: ComponentCreator('/how to/Install PostgreSQL', '1b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/how to/Reinstall RW',
        component: ComponentCreator('/how to/Reinstall RW', '9cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

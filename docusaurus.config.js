import { themes as prismThemes } from 'prism-react-renderer';
const Preset = require("@docusaurus/preset-classic");
// const { Config } = require("@docusaurus/types");
const OpenApiPlugin = require("docusaurus-plugin-openapi-docs");



/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Plivo',
  tagline: 'Solution at your Doorstep!',
  favicon: 'img/plivo-icon.png',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'plivo',
  projectName: 'plivo-docs',

  onBrokenLinks: 'ignore',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          sidebarCollapsible: false,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          docItemComponent: "@theme/ApiItem",
          breadcrumbs: false,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  // plugins: [
  //   [
  //     '@docusaurus/plugin-content-docs',
  //     {
  //       id: 'voiceAPI',  // An identifier for this docs plugin instance
  //       path: 'voiceAPI',  // Path to your voiceAPI content
  //       routeBasePath: 'voiceAPI',  // URL base path for voiceAPI
  //       sidebarPath: require.resolve('./sidebars.js'),  // Sidebar configuration
  //       sidebarCollapsible: false,
  //       editUrl: 'https://github.com/your-repo/your-project/edit/main/voiceAPI/',
  //       docItemComponent: "@theme/ApiItem",
  //     },
  //   ],
  //   [
  //     'docusaurus-plugin-openapi-docs',
  //     {
  //       id: 'apiDocs',
  //       docsPluginId: 'apiDocs', // This should match the docs plugin ID you're using
  //       config: {
  //         plivoApi: {
  //           specPath: './dummy.yaml',
  //           outputDir: './voiceAPI/apiDocs', // Where the generated docs will be saved
  //           sidebarOptions: {
  //             groupPathsBy: 'tag',
  //             categoryLinkSource: 'tag',
  //           },
  //         },
  //       },
  //     },
  //   ],
  // ],
  themes: ["docusaurus-theme-openapi-docs"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: `plivo`,
        logo: {
          alt: 'My Site Logo',
          src: 'img/plivo-icon.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Messaging API',
            position: 'left',
            items: [
              { to: '/docs/messaging/quickstart/php-server', label: 'Getting Started' },
              { to: '/docs/messaging/quickstart/node-expressjs', label: 'SMS Concepts' },
              { to: '/docs/messaging/quickstart/ruby', label: 'WhatsApp Concepts' },
              { to: '/docs/messaging/quickstart/go-gin', label: 'Use Case Guides' },
              { to: '/docs/messaging/api/overview/', label: 'API Reference' },
              { to: '/docs/messaging/quickstart/ruby-sinatra', label: 'XML Reference' },
              { to: '/docs/messaging/quickstart/dotnet-core', label: '10DLC' },
              { to: '/docs/messaging/quickstart/node-expressjs', label: 'Troubleshooting' },
            ],
          },
          {
            type: 'dropdown',
            label: 'Voice API',
            position: 'left',
            items: [
              { to: '/docs/voice/quickstart/php/', label: 'Getting Started' },
              { to: '/docs/voice/quickstart/node-expressjs/', label: 'Voice Concepts' },
              { to: '/docs/voice/quickstart/usecase/', label: 'Use Case Guides' },
              { to: '/docs/voice/api/overview/', label: 'API Reference' },
              { to: '/docs/voice/quickstart/ruby-sinatra/', label: 'XML Reference' },
              { to: '/docs/voice/quickstart/java-spring/', label: 'Client SDKs' },
              { to: '/docs/voice/quickstart/dotnet-core/', label: 'Call Insights' },
              { to: '/docs/voice/quickstart/go-gin/', label: 'Troubleshooting' },
            ],
          },
          {
            type: 'dropdown',
            label: 'Verify API',
            position: 'left',
            items: [
              { to: '/', label: 'Concepts' },
              { to: '/', label: 'API Reference' },
            ],
          },
          {
            type: 'dropdown',
            label: 'SIP Trunking',
            position: 'left',
            items: [
              { to: '/', label: 'Getting Started' },
              { to: '/', label: 'Troubleshooting' },
              { to: '/', label: 'API Reference' },
            ],
          },
          {
            type: 'dropdown',
            label: 'Phone Numbers',
            position: 'left',
            items: [
              { to: '/', label: 'Getting Started' },
              { to: '/', label: 'API Reference' },
              { to: '/', label: 'Number Porting' },
              { to: '/', label: 'Regulatory Compliance' },
            ],
          },
          {
            label: 'MORE',
            position: 'left',
            className: 'navbar__more',
            items: [
              { label: 'Account API', to: '/' },
              { label: 'Client SDK', to: '/' },
              { label: 'Lookup API', to: '/' },
              { label: 'Integrations', to: '/' },
              { label: 'Full API Reference', to: '/' },
            ],
          },
          {
            href: 'https://support.plivo.com/hc/en-us',
            label: 'Support',
            position: 'right',
          },
          {
            href: '/',
            label: 'Login',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

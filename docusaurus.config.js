import { themes as prismThemes } from 'prism-react-renderer';

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
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'voiceAPI',  // An identifier for this docs plugin instance
        path: 'voiceAPI',  // Path to your voiceAPI content
        routeBasePath: 'voiceAPI',  // URL base path for voiceAPI
        sidebarPath: require.resolve('./sidebars.js'),  // Sidebar configuration
        editUrl: 'https://github.com/your-repo/your-project/edit/main/voiceAPI/',
      },
    ],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic', // This should match the docs plugin ID you're using
        config: {
          plivoApi: {
            specPath: './dummy.yaml',
            outputDir: 'docs/api', // Where the generated docs will be saved
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Plivo',
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
              { to: '/docs/category/quickstart-guides', label: 'Getting Started' },
              { to: '/docs/quickStart/NodejsQuickstart', label: 'SMS Concepts' },
              { to: '/docs/quickStart/PHPQuickstart', label: 'WhatsApp Concepts' },
              { to: '/docs/quickStart/GoQuickstart', label: 'Use Case Guides' },
              { to: '/docs/quickStart/JavaQuickstart', label: 'API Reference' },
              { to: '/docs/quickStart/RubyQuickstart', label: 'XML Reference' },
              { to: '/docs/quickStart/DotNETQuickstart', label: '10DLC' },
              { to: '/docs/quickStart/NodejsQuickstart', label: 'Troubleshooting' },
            ],
          },
          {
            type: 'dropdown',
            label: 'Voice API',
            position: 'left',
            items: [
              { to: 'voiceAPI/category/quickstart-guides', label: 'Getting Started' },
              { to: '/voiceAPI/quickStart/NodejsQuickstart', label: 'Voice Concepts' },
              { to: '/voiceAPI/quickStart/PHPQuickstart', label: 'Use Case Guides' },
              { to: '/voiceAPI/quickStart/GoQuickstart', label: 'API Reference' },
              { to: '/voiceAPI/quickStart/JavaQuickstart', label: 'XML Reference' },
              { to: '/voiceAPI/quickStart/RubyQuickstart', label: 'Client SDKs' },
              { to: '/voiceAPI/quickStart/DotNETQuickstart', label: 'Call Insights' },
              { to: '/voiceAPI/quickStart/NodejsQuickstart', label: 'Troubleshooting' },
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

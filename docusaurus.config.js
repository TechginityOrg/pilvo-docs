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

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
              { to: '/', label: 'Getting Started' },
              { to: '/', label: 'Voice Concepts' },
              { to: '/', label: 'Use Case Guides' },
              { to: '/', label: 'API Reference' },
              { to: '/', label: 'XML Reference' },
              { to: '/', label: 'Client SDKs' },
              { to: '/', label: 'Call Insights' },
              { to: '/', label: 'Troubleshooting' },
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
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Plivo.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

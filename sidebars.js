// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  apiSidebar: {
    'Getting Started': [
      {
        type: 'category',
        label: 'API Docs',
        items: [
          'apiDocs/list-all-messages.api',
          'apiDocs/list-mms-media',
          'apiDocs/plivo-message-api',
          'apiDocs/retrieve-message',
          'apiDocs/send-message',
        ],
        customProps: {
          className: 'leftSidebar',
        },
      },
      {
        type: 'category',
        label: 'Quick Start',
        items: [
          'quickStart/GoQuickstart',
          'quickStart/JavaQuickstart',
          'quickStart/node-expressjs',
          'quickStart/php',
          'quickStart/RubyQuickstart',
        ],
        customProps: {
          className: 'leftSidebar',
        },
      },
    ],
  },
  voiceApiSidebar: {
    'Voice API Docs': [
      {
        type: 'category',
        label: 'Voice API Docs',
        items: [
          'VoiceApiDocs/call',
          'VoiceApiDocs/conference',
          'VoiceApiDocs/plivo-message-api.info',
          'VoiceApiDocs/request',
          'VoiceApiDocs/response',
        ],
        customProps: {
          className: 'leftSidebar',
        },
      },
      {
        type: 'category',
        label: 'Voice API Quick Start',
        items: [
          'voiceApiQuickstart/DotNETQuickstart',
          'voiceApiQuickstart/GoQuickstart',
          'voiceApiQuickstart/JavaQuickstart',
          'voiceApiQuickstart/NodejsQuickstart',
          'voiceApiQuickstart/PHPQuickstart',
          'voiceApiQuickstart/RubyQuickstart',
        ],
        customProps: {
          className: 'leftSidebar',
        },
      },
    ],
  },
};

export default sidebars;

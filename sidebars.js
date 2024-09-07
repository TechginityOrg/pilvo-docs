// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  apiSidebar: [
    {
      type: 'category',
      label: 'Quick Start',
      items: [
        'quickStart/GoQuickstart',
        'quickStart/javaQuickstart',
        'quickStart/node-expressjs',
        'quickStart/php',
        'quickStart/rubyquickstart',
      ],
    },
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
    },

  ],
  voiceApiSidebar: [
    {
      type: 'category',
      label: 'Quick Start',
      items: [
        'voiceApiQuickstart/DotNETQuickstart',
        'voiceApiQuickstart/GoQuickstart',
        'voiceApiQuickstart/JavaQuickstart',
        'voiceApiQuickstart/NodejsQuickstart',
        'voiceApiQuickstart/PHPQuickstart',
        'voiceApiQuickstart/RubyQuickstart',
      ],
    },
    {
      type: 'category',
      label: 'API Docs',
      items: [
        'VoiceApiDocs/call',
        'VoiceApiDocs/conference',
        'VoiceApiDocs/plivo-message-api.info',
        'VoiceApiDocs/request',
        'VoiceApiDocs/response',
      ],
    },
  ],
};

export default sidebars;

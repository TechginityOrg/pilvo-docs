// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  apiSidebar: [
    {
      type: 'category',
      label: 'Quick Start',
      items: [
        'quickStart/php',
        'quickStart/RubyQuickstart',
        'quickStart/node-expressjs',
        'quickStart/JavaQuickstart',
        'quickStart/GoQuickstart',
      ],
    },
    {
      type: 'category',
      label: 'Migration Guide',
      items: [
        'migration/twilioToPlivo',
        'migration/zipwhipToPlivo'
      ],
    },

  ],
  voiceApiSidebar: [
    {
      type: 'category',
      label: 'Quick Start',
      items: [
        'voiceApiQuickstart/PHPQuickstart',
        'voiceApiQuickstart/RubyQuickstart',
        'voiceApiQuickstart/NodejsQuickstart',
        'voiceApiQuickstart/DotNETQuickstart',
        'voiceApiQuickstart/JavaQuickstart',
        'voiceApiQuickstart/GoQuickstart',
      ],
    }
  ],
  apiDocs: [
    {
      type: 'category',
      label: 'API Docs',
      items: [
        'apiDocs/plivo-message-api',
        'apiDocs/list-all-messages',
        'apiDocs/list-mms-media',
        'apiDocs/retrieve-message',
        'apiDocs/send-message',
      ],
    }
  ],
  voiceApiDocs: [
    {
      type: 'category',
      label: 'API Docs',
      items: [
        'VoiceApiDocs/plivo-message-api.info',
        'VoiceApiDocs/call',
        'VoiceApiDocs/conference',
        'VoiceApiDocs/request',
        'VoiceApiDocs/response',
      ],
    },
  ]
};

export default sidebars;

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const apiSidebar = {
    apiDocsSidebar: [
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
        },
    ],
};

export default apiSidebar;

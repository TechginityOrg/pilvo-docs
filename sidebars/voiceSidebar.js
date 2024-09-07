// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const voiceSidebar = {
    voiceApiSidebar: [
        {
            type: 'category',
            label: 'Voice API Docs',
            items: [
                'call',
                'conference',
                'plivo-message-api.info',
                'request',
                'response',
            ],
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
        },
    ],
};

export default voiceSidebar;

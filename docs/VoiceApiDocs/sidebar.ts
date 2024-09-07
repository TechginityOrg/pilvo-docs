import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "voiceAPI/apiDocs/plivo-message-api",
    },
    {
      type: "category",
      label: "Messages",
      items: [
        {
          type: "doc",
          id: "voiceAPI/apiDocs/send-message",
          label: "Send an SMS or MMS message",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "voiceAPI/apiDocs/list-all-messages",
          label: "List all messages",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "voiceAPI/apiDocs/retrieve-message",
          label: "Retrieve a Message",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "MMS",
      items: [
        {
          type: "doc",
          id: "voiceAPI/apiDocs/list-mms-media",
          label: "List MMS Media",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

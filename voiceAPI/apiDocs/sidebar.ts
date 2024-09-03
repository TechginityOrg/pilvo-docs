import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "voiceAPI/apiDocs/plivo-messaging-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "voiceAPI/apiDocs/list-messages",
          label: "List Messages",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "voiceAPI/apiDocs/retrieve-message",
          label: "Retrieve Message",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

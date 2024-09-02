import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/plivo-messaging-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api/list-messages",
          label: "List Messages",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/retrieve-message",
          label: "Retrieve Message",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

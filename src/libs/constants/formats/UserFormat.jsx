export const USER_FORMAT_TABLE = {
  th: [
    { key: "name", label: "name" },
    { key: "biography", label: "Biography" },
    { key: "position", label: "Position" },
    { key: "country", label: "Country" },
    { key: "status", label: "Status" },
    { key: "action", label: "Action" },
  ],
  attribute: {
    no: true,
    checkbox: true,
    add: {
      route: "/user/add",
    },
    edit: {
      route: "/user/edit",
    },
    delete: {
      route: "/user/delete",
    },
    search: {
      route: "/user/search",
    },
    paginate: {
      route: "/user/pagination",
    },
  },
};

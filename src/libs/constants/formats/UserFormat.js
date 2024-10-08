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
    number: true,
    checkbox: true,
    add: {
      route: "/dashboard/user/add",
    },
    edit: {
      route: "/dashboard/user/edit",
    },
    delete: {
      route: false,
    },
    search: {
      route: "/user/search",
    },
    paginate: {
      route: "/user/pagination",
    },
  },
};

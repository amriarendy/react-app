export const USER_FORMAT_TABLE = {
  th: [
    { key: "name", label: "name" },
    { key: "gender", label: "Gender" },
    { key: "phone", label: "Phone" },
    { key: "dob", label: "Date of Birth" },
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

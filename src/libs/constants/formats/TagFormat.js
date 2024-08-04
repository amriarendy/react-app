const HASHTAG_FORMAT_TABLE = {
  th: [
    { key: "category", label: "category" },
    { key: "action", label: "action" },
  ],
  attribute: {
    number: true,
    checkbox: true,
    add: {
      route: "toggleAddModal",
    },
    edit: {
      route: "toggleEditModal",
    },
    delete: {
      route: "toggleModal",
    },
    search: {
      route: "/blog/search",
    },
    paginate: {
      route: "/blog/pagination",
    },
  },
};

export default HASHTAG_FORMAT_TABLE;

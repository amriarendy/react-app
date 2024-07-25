export const BLOG_FORMAT_TABLE = {
  th: [
    { key: "title", label: "Title" },
    { key: "description", label: "Description" },
    { key: "category", label: "Category" },
    { key: "views", label: "Views" },
    { key: "publish", label: "Date Publish" },
    { key: "action", label: "Action" },
  ],
  attribute: {
    no: true,
    checkbox: true,
    add: {
      route: "/blog/add",
    },
    edit: {
      route: "/blog/edit",
    },
    delete: {
      route: "/blog/delete",
    },
    search: {
      route: "/blog/search",
    },
    paginate: {
      route: "/blog/pagination",
    },
  },
};

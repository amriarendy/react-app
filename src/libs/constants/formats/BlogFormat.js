export const BLOG_FORMAT_TABLE = {
  th: [
    { key: "title", label: "Title" },
    { key: "category", label: "Category" },
    { key: "description", label: "Description" },
    { key: "publish", label: "Date Publish" },
    { key: "action", label: "Action" },
  ],
  attribute: {
    number: true,
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

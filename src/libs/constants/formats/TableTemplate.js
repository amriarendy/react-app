export const TABLE_DEFAULT_FORMAT = {
  th: [
    { key: "product", label: "Product" },
    { key: "category", label: "Category" },
    { key: "brand", label: "Brand" },
    { key: "description", label: "Description" },
    { key: "price", label: "Price" },
    { key: "action", label: "Action" },
  ],
  attribute: {
    no: true,
    checkbox: true,
    add: {
      route: "toggleAddModal",
    },
    edit: {
      route: "toggleEditModal",
    },
    delete: {
      route: "/template/form",
    },
    search: {
      route: "/template/search",
    },
    paginate: {
      route: "/template/pagination",
    },
  },
};

export const TABLE_ADVANCE_FORMAT = {
  th: [
    { key: "product", label: "Product" },
    { key: "category", label: "Category" },
    { key: "brand", label: "Brand" },
    { key: "description", label: "Description" },
    { key: "price", label: "Price" },
    { key: "action", label: "Action" },
  ],
  attribute: {
    no: true,
    checkbox: true,
    add: {
      route: "/template/form",
    },
    edit: {
      route: "/template/form",
    },
    delete: {
      route: "/template/form",
    },
    search: {
      route: "/template/search",
    },
    paginate: {
      route: "/template/pagination",
    },
  },
};

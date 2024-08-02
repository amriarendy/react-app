import { Button } from "../../../components/ui/Button";
import { FaSave } from "react-icons/fa";
import { Input } from "../../../components/ui/Input";

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
      route: "#",
    },
    paginate: {
      route: "/template/pagination",
    },
  },
};

export const ADD_TABLE_DEFAULT_FORMAT = {
  header: "Add Data",
  footer: (
    <Button
      id={"save"}
      type={"button"}
      label={"Save"}
      color={"blue"}
      icon={<FaSave className="w-5 h-5 mr-2 -ml-1" />}
    />
  ),
  content: {
    grid: 6,
    elements: [
      {
        key: "category",
        label: "Category",
        attribute: (
          <Input
            id={"category"}
            name={"category"}
            type={"text"}
            label={"Category"}
            required={true}
          />
        ),
        col: "col-span-6",
      },
      {
        key: "slug",
        label: "slug",
        attribute: (
          <Input
            id={"slug"}
            name={"slug"}
            type={"text"}
            label={"Slug"}
            required={true}
          />
        ),
        col: "col-span-6",
      },
    ],
  },
};

export const TABLE_ADVANCE_FORMAT = {
  th: [
    { key: "name", label: "Name" },
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
      route: "/templates/form",
    },
    edit: {
      route: "/templates/form",
    },
    delete: {
      route: "/templates/form",
    },
    search: {
      route: "#",
    },
    paginate: {
      route: "/templates/pagination",
    },
  },
};

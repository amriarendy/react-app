import { Button } from "../../../components/ui/Button";
import { FaSave } from "react-icons/fa";
import { Input } from "../../../components/ui/Input";

export const CATEGORY_FORMAT_TABLE = {
  th: [
    { key: "category", label: "category" },
    { key: "slug", label: "slug" },
    { key: "action", label: "action" },
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

export const ADD_CATEGORY_FORMAT_MODAL = {
  header: "Add Category",
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

export const EDIT_CATEGORY_FORMAT_MODAL = {
  header: "Edit Category",
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
        key: "id",
        label: "id",
        attribute: (
          <Input
            id={"id"}
            name={"id"}
            type={"hidden"}
            label={"ID"}
            required={true}
          />
        ),
        col: "col-span-6",
      },
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

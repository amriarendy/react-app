import Button from "../../../components/ui/Button";
import { FaSave } from "react-icons/fa";
import { Input } from "../../../components/ui/Input";

export const HASHTAG_FORMAT_TABLE = {
  th: [
    { key: "category", label: "category" },
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

export const ADD_HASTAG_FORMAT_MODAL = {
  header: "Add Hashtag",
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
        key: "tag",
        label: "Tag",
        attribute: (
          <Input
            id={"tag"}
            name={"tag"}
            type={"text"}
            label={"Tag"}
            required={true}
          />
        ),
        col: "col-span-6",
      },
    ],
  },
};

export const EDIT_HASTAG_FORMAT_MODAL = {
  header: "Edit Hashtag",
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
        key: "tag",
        label: "tag",
        attribute: (
          <Input
            id={"tag"}
            name={"tag"}
            type={"text"}
            label={"Tag"}
            required={true}
          />
        ),
        col: "col-span-6",
      },
    ],
  },
};

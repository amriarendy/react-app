import { useState } from "react";
import Table from "../../../../elements/tables/index";
import Thead from "../../../../elements/tables/Thead";
import Tbody from "../../../../elements/tables/Tbody";
import Trow from "../../../../elements/tables/Trow";
import Td from "../../../../elements/tables/Td";
import Th from "../../../../elements/tables/Th";
import Terrors from "../../../../elements/tables/Terrors";
import Button from "../../../../elements/button/Button";
import TagAdd from "./TagAdd";
import TagEdit from "./TagEdit";
import Loading from "../../../../elements/skeleton/Loading";
import Errors from "../../../../elements/errors/Errors";

const Tag = ({
  data,
  onAdd,
  onEdit,
  onDelete,
  editTag,
  setEditTag,
  loading,
  error,
  validate,
}) => {
  const [modalType, setModalType] = useState(null);
  const [tag, setTag] = useState("");
  const toggleModal = (type = null) => setModalType(type);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    onAdd(tag, () => {
      setTag("");
      toggleModal();
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(editTag.id, editTag.tag, () => {
      setEditTag({ id: "", tag: "" });
      toggleModal();
    });
  };

  return (
    <>
      {" "}
      {loading ? (
        <div className="flex items-center inset-0 sm:h-full">
          <Loading />
        </div>
      ) : error ? (
        <div className="flex items-center inset-0 sm:h-full">
          <Errors code={500} status={error.code} message={error.message} />
        </div>
      ) : (
        <Table attribute={() => toggleModal("add")}>
          <Thead>
            <Trow>
              <Th classname={"pr-1 sm:pl-6"}>No</Th>
              <Th>Tag</Th>
              <Th>Action</Th>
            </Trow>
          </Thead>
          <Tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <Trow classname={"border-b"} key={item.index}>
                  <Td classname={"text-center font-medium w-14 flex-none"}>
                    {index + 1}
                  </Td>
                  <Td classname={"font-medium w-64 flex-auto"}>{item.tag}</Td>
                  <Td classname={"font-medium w-32 flex-auto space-x-2"}>
                    <Button
                      id={"btnEdit"}
                      onClick={() => {
                        setEditTag({ id: item.id, tag: item.tag });
                        toggleModal("edit");
                      }}
                      classname={
                        "rounded rounded-lg inline-flex items-center px-2 py-1 text-white bg-yellow-400 hover:bg-yellow-500"
                      }
                    >
                      Edit
                    </Button>
                    <Button
                      id={"btnDelete"}
                      route={"button"}
                      onClick={() => onDelete(item.id)}
                      classname={
                        "rounded rounded-lg inline-flex items-center px-2 py-1 text-white bg-red-700 hover:bg-red-500"
                      }
                    >
                      Delete
                    </Button>
                  </Td>
                </Trow>
              ))
            ) : (
              <Trow>
                <Terrors colSpan={4}>Data Not Found!</Terrors>
              </Trow>
            )}
          </Tbody>
        </Table>
      )}
      {modalType === "add" && (
        <TagAdd
          props={{ tag, setTag, validate }}
          onSubmit={handleAddSubmit}
          toggleModal={toggleModal}
        />
      )}
      {modalType === "edit" && (
        <TagEdit
          props={{ editTag, setEditTag, validate }}
          onSubmit={handleEditSubmit}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
};

export default Tag;

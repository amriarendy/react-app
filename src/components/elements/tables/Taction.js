import Button from "../button/Button";

const Taction = ({}) => {
  return (
    <>
      {" "}
      <Button
        id={"btnDetailProduct"}
        type={"button"}
        classname={
          "inline-flex items-center px-2 py-1 text-white bg-teal-700 hover:bg-indigo-500"
        }
      >
        Detail
      </Button>
      <Button
        id={"btnEditProduct"}
        type={"button"}
        classname={
          "inline-flex items-center px-2 py-1 text-white bg-yellow-400 hover:bg-yellow-500"
        }
      >
        Edit
      </Button>
      <Button
        id={"btnDeleteProduct"}
        type={"button"}
        classname={
          "inline-flex items-center px-2 py-1 text-white bg-red-700 hover:bg-red-500"
        }
      >
        Delete
      </Button>
    </>
  );
};

export default Taction;

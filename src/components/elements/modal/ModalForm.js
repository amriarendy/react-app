const ModalForm = ({ children, onSubmit, toggleModal }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        {children}
      </form>
    </>
  );
};

export default ModalForm;

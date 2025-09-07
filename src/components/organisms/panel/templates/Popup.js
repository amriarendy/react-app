import Card from "../../../elements/card/Card";
import ModalDialog from "../../../elements/popup/ModalDialog";

const Popup = () => {
  return (
    <>
      <Card header={"Alert"}>
        <div className="col-span-1">
          <ModalDialog />
        </div>
      </Card>
    </>
  );
};

export default Popup;

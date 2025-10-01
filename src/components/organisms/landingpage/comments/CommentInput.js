import Button from "../../../elements/button/Button";
import TextAreaGroup from "../../../elements/textarea";

const CommentInput = () => {
  return (
    <div>
      <form action="#">
        <div>
          <div className="mt-2">
            <div
              id="tabs-1-panel-1"
              className="-m-0.5 rounded-lg p-0.5"
              aria-labelledby="tabs-1-tab-1"
              role="tabpanel"
              tabindex="0"
            >
              <label for="comment" className="sr-only">
                Comments
              </label>
              <div>
                <TextAreaGroup
                  id={"textarea"}
                  name={"textarea"}
                  rows={5}
                  placeholder={"Add your comments..."}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 flex justify-end">
          <Button
            id={"btnSubmit"}
            type={"button"}
            classname={
              "rounded rounded-lg inline-flex items-center px-2 py-1 text-white bg-blue-700 hover:bg-blue-500"
            }
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CommentInput;

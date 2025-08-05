import TextArea from "../../atoms/TextArea";
import { Button } from "../../atoms/Button";

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
                Comment
              </label>
              <div>
                <TextArea
                  id={"textarea"}
                  name={"textarea"}
                  rows={5}
                  placeholder={"Add your comment..."}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 flex justify-end">
          <Button
            id={"btnSave"}
            type={"submit"}
            label={"Post"}
            color={"indigo"}
          />
        </div>
      </form>
    </div>
  );
};

export default CommentInput;

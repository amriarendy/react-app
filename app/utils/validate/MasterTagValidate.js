import { Max, Min, Required, Unique } from "./Validate.js";
import Tag from "../../models/TagModel.js";

const MasterTagValidate = async (req, res, next) => {
  const fields = ["tag"];

  const required = new Required(fields).validate(req.body);
  const min = new Min(fields, 3).validate(req.body);
  const max = new Max(fields, 10).validate(req.body);
  const unique = new Unique(["tag"], Tag, "tag");
  const { valid, errors: uniqueErrors } = await unique.validate(req.body);

  // result error
  const errors = [
    ...min.errors,
    ...max.errors,
    ...uniqueErrors,
    ...required.errors,
  ];
  if (errors.length > 0) {
    return res.status(400).json({
      errors,
    });
  }

  next();
};

export { MasterTagValidate };

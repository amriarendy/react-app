import { Max, Min, Required, Unique } from "./Validate.js";
import Category from "../../models/CategoryModel.js";

const validateAddCategory = async (req, res, next) => {
  const fields = ["category", "slug"];

  const required = new Required(fields).validate(req.body);
  const min = new Min(fields, 3).validate(req.body);
  const max = new Max(fields, 50).validate(req.body);
  const unique = new Unique(["slug"], Category, "slug");
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

const validateUpdateCategory = async (req, res, next) => {
  const fields = ["category", "slug"];

  const required = new Required(fields).validate(req.body);
  const min = new Min(fields, 3).validate(req.body);
  const max = new Max(fields, 50).validate(req.body);
  const unique = new Unique(["slug"], Category, "slug");
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

export { validateAddCategory, validateUpdateCategory };

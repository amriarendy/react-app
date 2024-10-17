import {
  DateFormat,
  EmailFormat,
  Exists,
  ExtSizeFile,
  Max,
  Min,
  NumberFormat,
  Required,
  Unique,
} from "./Validate.js";
import User from "../../models/UserModel.js";

const validateAddUser = async (req, res, next) => {
  const fields = ["email", "password", "name", "dob", "phone", "gender"];

  const required = new Required(fields).validate(req.body);
  const emailFormat = new EmailFormat("email").validate(req.body);
  const numberFormat = new NumberFormat("phone").validate(req.body);
  const min = new Min("email", 6).validate(req.body);
  const max = new Max("email", 15).validate(req.body);
  const date = new DateFormat("dob", "DD-MM-YYYY").validate(req.body);
  const extAllowed = new ExtSizeFile("photo", 1000000, [
    ".png",
    ".jpg",
    ".jpeg",
  ]).validate(req.files);
  const exists = new Exists(["email"], User, "email");
  const { errors: existsErrors } = await exists.validate(req.body);
  const unique = new Unique(["email"], User, "email");
  const { valid, errors: uniqueErrors } = await unique.validate(req.body);

  // result error
  const errors = [
    ...extAllowed.errors,
    ...min.errors,
    ...max.errors,
    ...emailFormat.errors,
    ...numberFormat.errors,
    ...date.errors,
    ...existsErrors,
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

const validateUpdateUser = async (req, res, next) => {
  const fields = ["email", "name", "dob", "phone", "gender"];

  const required = new Required(fields).validate(req.body);
  const emailFormat = new EmailFormat("email").validate(req.body);
  const numberFormat = new NumberFormat("phone").validate(req.body);
  const min = new Min("email", 6).validate(req.body);
  const max = new Max("email", 15).validate(req.body);
  const date = new DateFormat("dob", "DD-MM-YYYY").validate(req.body);
  const extAllowed = new ExtSizeFile("photo", 1000000, [
    ".png",
    ".jpg",
    ".jpeg",
  ]).validate(req.files);
  const exists = new Exists(["email"], User, "email");
  const { errors: existsErrors } = await exists.validate(req.body);
  const unique = new Unique(["email"], User, "email");
  const { valid, errors: uniqueErrors } = await unique.validate(req.body);

  // result error
  const errors = [
    ...extAllowed.errors,
    ...min.errors,
    ...max.errors,
    ...emailFormat.errors,
    ...numberFormat.errors,
    ...date.errors,
    ...existsErrors,
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

export { validateAddUser, validateUpdateUser };

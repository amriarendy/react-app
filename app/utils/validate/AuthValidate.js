import {
  ConfirmPassword,
  EmailFormat,
  Exists,
  Match,
  Max,
  Min,
  NotExists,
  Required,
  Unique,
} from "./Validate.js";
import Auth from "../../models/AuthModel.js";

const validateAuth = async (req, res, next) => {
  const fields = ["email", "password"];

  const required = new Required(fields).validate(req.body);
  const emailFormat = new EmailFormat("email").validate(req.body);
  const exists = new NotExists(["email"], Auth, "email");
  const { errors: existsErrors } = await exists.validate(req.body);

  // result error
  const errors = [...emailFormat.errors, ...required.errors, ...existsErrors];
  if (errors.length > 0) {
    return res.status(400).json({
      errors,
    });
  }
  next();
};

const validateRegister = async (req, res, next) => {
  const fields = ["email", "password", "passwordConfirm", "name"];

  const required = new Required(fields).validate(req.body);
  const emailFormat = new EmailFormat("email").validate(req.body);
  const max = new Max("email", 50).validate(req.body);
  const unique = new Unique(["email"], Auth, "email");
  const { valid, errors: uniqueErrors } = await unique.validate(req.body);
  const match = new ConfirmPassword("password", "passwordConfirm").validate(
    req.body
  );

  // result error
  const errors = [
    ...emailFormat.errors,
    ...max.errors,
    ...uniqueErrors,
    ...match.errors,
    ...required.errors,
  ];

  if (errors.length > 0) {
    return res.status(400).json({
      errors,
    });
  }

  next();
};

export { validateAuth, validateRegister };

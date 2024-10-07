import Auth from "../../models/AuthModel.js";
import bcrypt from "bcrypt";

// Interface for Validator
class Validator {
  validate(data) {
    throw new Error("Method 'validate()' must be implemented.");
  }
}

// Email Validator
class EmailValidator extends Validator {
  validate(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return {
        valid: false,
        error: createErrorResponse("Email is required!", "REQUIRED", "email"),
      };
    }
    if (!emailRegex.test(email) || email.length < 5 || email.length > 50) {
      return {
        valid: false,
        error: createErrorResponse(
          "Invalid email format or length!",
          "EMAIL_VALID",
          "email"
        ),
      };
    }
    return { valid: true };
  }
}

// Password Validator
class PasswordValidator extends Validator {
  validate(password) {
    if (!password) {
      return {
        valid: false,
        error: createErrorResponse(
          "Password is required!",
          "REQUIRED",
          "password"
        ),
      };
    }
    if (password.length < 6 || password.length > 50) {
      return {
        valid: false,
        error: createErrorResponse(
          "Password must be between 6 and 50 characters long!",
          "PASSWORD_VALID",
          "password"
        ),
      };
    }
    return { valid: true };
  }
}

// Password Match Validator
class PasswordMatchValidator extends Validator {
  validate(password, passwordConfirm) {
    if (password !== passwordConfirm) {
      return {
        valid: false,
        error: createErrorResponse(
          "Passwords do not match!",
          "UN_MATCH",
          "passwordConfirm"
        ),
      };
    }
    return { valid: true };
  }
}

// User existence Validator
class UserExistenceValidator extends Validator {
  async validate(email) {
    const user = await Auth.findOne({ where: { email } });
    if (user) {
      return {
        valid: false,
        error: createErrorResponse("Email already exists!", "UNIQUE", "email"),
      };
    }
    return { valid: true };
  }
}

// Error response helper function
const createErrorResponse = (message, code, field) => ({
  code: 400,
  status: "error",
  errors: { code, message, field },
});

// Validation Middleware
const validateAuth = async (req, res, next) => {
  const emailValidator = new EmailValidator();
  const passwordValidator = new PasswordValidator();

  const emailValidation = emailValidator.validate(req.body.email);
  if (!emailValidation.valid)
    return res.status(400).json(emailValidation.error);

  const passwordValidation = passwordValidator.validate(req.body.password);
  if (!passwordValidation.valid)
    return res.status(400).json(passwordValidation.error);

  try {
    const user = await Auth.findAll({ where: { email: req.body.email } });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) {
      return res
        .status(400)
        .json(
          createErrorResponse("Incorrect password!", "UN_MATCH", "password")
        );
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ code: 500, status: "error", message: "Internal server error!" });
  }

  next();
};

const validateRegister = async (req, res, next) => {
  const emailValidator = new EmailValidator();
  const passwordValidator = new PasswordValidator();
  const passwordMatchValidator = new PasswordMatchValidator();
  const userExistenceValidator = new UserExistenceValidator();

  const emailValidation = emailValidator.validate(req.body.email);
  if (!emailValidation.valid)
    return res.status(400).json(emailValidation.error);

  const passwordValidation = passwordValidator.validate(req.body.password);
  if (!passwordValidation.valid)
    return res.status(400).json(passwordValidation.error);

  const passwordMatchValidation = passwordMatchValidator.validate(
    req.body.password,
    req.body.passwordConfirm
  );
  if (!passwordMatchValidation.valid)
    return res.status(400).json(passwordMatchValidation.error);

  const userExistenceValidation = await userExistenceValidator.validate(
    req.body.email
  );
  if (!userExistenceValidation.valid)
    return res.status(400).json(userExistenceValidation.error);

  next();
};

export { validateAuth, validateRegister };

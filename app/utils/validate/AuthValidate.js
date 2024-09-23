import Auth from "../../models/AuthModel.js";
import bcrypt from "bcrypt";

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length >= 5 && email.length <= 50;
};

const validatePassword = (password) => {
  return password.length >= 6 && password.length <= 50; // Consider a minimum of 6 characters
};

const validateAuth = (req, res, next) => {
  const { email, password } = req.body;

  if (!email) {
    return res
      .status(400)
      .json(createErrorResponse("Email is required!", "REQUIRED", "email"));
  }

  if (!password) {
    return res
      .status(400)
      .json(
        createErrorResponse("Password is required!", "REQUIRED", "password")
      );
  }

  if (!validateEmail(email)) {
    return res
      .status(400)
      .json(
        createErrorResponse(
          "Invalid email format or length!",
          "EMAIL_VALID",
          "email"
        )
      );
  }

  if (!validatePassword(password)) {
    return res
      .status(400)
      .json(
        createErrorResponse(
          "Password must be between 6 and 50 characters long!",
          "PASSWORD_VALID",
          "password"
        )
      );
  }

  next();
};

const validateRegister = async (req, res, next) => {
  const { email, password, passwordConfirm } = req.body;

  if (!email) {
    return res
      .status(400)
      .json(createErrorResponse("Email is required!", "REQUIRED", "email"));
  }

  if (!password) {
    return res
      .status(400)
      .json(
        createErrorResponse("Password is required!", "REQUIRED", "password")
      );
  }

  if (password !== passwordConfirm) {
    return res
      .status(400)
      .json(
        createErrorResponse(
          "Passwords do not match!",
          "UN_MATCH",
          "passwordConfirm"
        )
      );
  }

  if (!validateEmail(email)) {
    return res
      .status(400)
      .json(
        createErrorResponse(
          "Invalid email format or length!",
          "EMAIL_VALID",
          "email"
        )
      );
  }

  if (!validatePassword(password)) {
    return res
      .status(400)
      .json(
        createErrorResponse(
          "Password must be between 6 and 50 characters long!",
          "PASSWORD_VALID",
          "password"
        )
      );
  }

  try {
    const user = await Auth.findOne({ where: { email } });
    if (user) {
      return res
        .status(400)
        .json(createErrorResponse("Email already exists!", "UNIQUE", "email"));
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ code: 500, status: "error", message: "Internal server error!" });
  }

  next();
};

const createErrorResponse = (message, code, field) => ({
  code: 400,
  status: "error",
  errors: { code, message, field },
});

export { validateAuth, validateRegister };

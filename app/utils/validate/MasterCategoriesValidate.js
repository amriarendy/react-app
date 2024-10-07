import { Required } from "./Validate.js"; // Ensure you're importing the Required class correctly

const masterCategories = async (req, res, next) => {
  const required = new Required();

  const inputValidation = required.validate(req.body.categories);
  if (!inputValidation.valid) {
    return res.status(inputValidation.error.code).json(inputValidation.error);
  }

  next(); // Call next() if validation passes
};

export default masterCategories; // Ensure you export the middleware

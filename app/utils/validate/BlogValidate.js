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
import Blog from "../../models/BlogModel.js";

const validateAddBlog = async (req, res, next) => {
  const fields = [
    "title",
    "description",
    "body",
    "category",
    "slug",
    "publishedAt",
  ];

  const required = new Required(fields).validate(req.body);
  const min = new Min("title", 3).validate(req.body);
  const max = new Max("title", 255).validate(req.body);
  const date = new DateFormat("publishedAt", "DD-MM-YYYY").validate(req.body);
  const extAllowed = new ExtSizeFile("photo", 1000000, [
    ".png",
    ".jpg",
    ".jpeg",
  ]).validate(req.files);
  const exists = new Exists(["slug"], Blog, "slug");
  const { errors: existsErrors } = await exists.validate(req.body);
  const unique = new Unique(["slug"], Blog, "slug");
  const { valid, errors: uniqueErrors } = await unique.validate(req.body);

  // result error
  const errors = [
    ...extAllowed.errors,
    ...min.errors,
    ...max.errors,
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

const validateUpdateBlog = async (req, res, next) => {
  const fields = [
    "title",
    "description",
    "body",
    "category",
    "slug",
    "publishedAt",
  ];

  const required = new Required(fields).validate(req.body);
  const min = new Min("title", 3).validate(req.body);
  const max = new Max("title", 255).validate(req.body);
  const date = new DateFormat("publishedAt", "DD-MM-YYYY").validate(req.body);
  const extAllowed = new ExtSizeFile("photo", 1000000, [
    ".png",
    ".jpg",
    ".jpeg",
  ]).validate(req.files);
  const exists = new Exists(["slug"], Blog, "slug");
  const { errors: existsErrors } = await exists.validate(req.body);
  const unique = new Unique(["slug"], Blog, "slug");
  const { valid, errors: uniqueErrors } = await unique.validate(req.body);

  // result error
  const errors = [
    ...extAllowed.errors,
    ...min.errors,
    ...max.errors,
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

export { validateAddBlog, validateUpdateBlog };

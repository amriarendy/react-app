import Blog from "../models/BlogModel.js";
import path from "path";
import fs from "fs";

export const getAll = async (req, res) => {
  try {
    const response = await Blog.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getWhere = async (req, res) => {
  try {
    const response = await Blog.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const store = async (req, res) => {
  let fileName = 'default.png'; // Default filename
  let urlThumbnail = `${req.protocol}://${req.get('host')}/uploads/blogs/${fileName}`; // Default URL

  if (req.files && req.files.thumbnail) {
    const thumbnail = req.files.thumbnail;
    const ext = path.extname(thumbnail.name);
    fileName = `${thumbnail.md5}${ext}`;
    urlThumbnail = `${req.protocol}://${req.get('host')}/uploads/blogs/${fileName}`;

    try {
      await thumbnail.mv(`./public/uploads/blogs/${fileName}`); // Wait for the move to complete
    } catch (err) {
      return res.status(500).json({ code: 500, status: 'error', message: err.message });
    }
  }
  
  const { title, description, body, category, slug } = req.body;

  try {
    await Blog.create({
      title,
      description,
      body,
      category,
      slug,
      thumbnail: fileName,
      urlThumbnail,
    });
    res.status(201).json({ code: 201, status: 'success', message: 'Data inserted' });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ code: 500, status: 'error', message: error.message });
  }
};

export const update = async (req, res) => {
  const getWhere = await Blog.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!getWhere)
    return res
      .status(404)
      .json({ code: 404, status: "error", message: "Data not found" });
  let fileName = "";
  if (req.files === null) {
    fileName = getWhere.thumbnail;
  } else {
    const file = req.files.thumbnail;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".jpg", ".jpeg", ".png"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res
        .status(422)
        .json({ code: 422, status: "error", message: "Invalid image!" });
    if (fileSize > 5000000)
      return res.status(422).json({
        code: 422,
        status: "error",
        message: "File must be lower 5mb",
      });

    const filepath = `./public/uploads/blogs/${getWhere.thumbnail}`;
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
      return res.status(200).json({
        code: 200,
        status: "success",
        message: "Delete file success",
      });
    }

    file.mv(`./public/uploads/blogs/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const title = req.body.title;
  const description = req.body.description;
  const body = req.body.body;
  const category = req.body.category;
  const author = null;
  const slug = req.body.slug;
  const publishedAt = req.body.publishedAt;
  const urlThumbnail = `${req.protocol}://${req.get(
    "host"
  )}/uploads/blogs/${fileName}`;
  try {
    await Blog.update(
      {
        title: title,
        description: description,
        body: body,
        category: category,
        author: author,
        slug: slug,
        publishedAt: publishedAt,
        thumbnail: fileName,
        urlThumbnail: urlThumbnail,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res
      .status(201)
      .json({ code: 201, status: "success", message: "Data updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const destroy = async (req, res) => {
  const getWhere = await Blog.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!getWhere)
    return res
      .status(404)
      .json({ code: 404, status: "error", message: "Data not found" });
  try {
    const filepath = `./public/uploads/blogs/${getWhere.thumbnail}`;
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
    }
    await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });
    res
      .status(200)
      .json({ code: 200, status: "success", message: "Data deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

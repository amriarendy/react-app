import User from "../models/UserModel.js";
import path from "path";
import fs from "fs";

export const getAll = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getWhere = async (req, res) => {
  try {
    const response = await User.findOne({
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
  if (req.files === null)
    return res
      .status(400)
      .json({ code: 400, status: "error", message: "Invalid image" });
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const dob = req.body.dob;
  const gender = req.body.gender;
  const photo = req.files.photo;
  const phone = req.body.phone;
  const biography = req.body.biography;
  const status = req.body.status;
  const position = req.body.position;
  const country = req.body.country;

  const fileSize = photo.data.length;
  const ext = path.extname(photo.name);
  const fileName = photo.md5 + ext;
  const urlPhoto = `${req.protocol}://${req.get(
    "host"
  )}/uploads/profile/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res
      .status(422)
      .json({ code: 422, status: "error", message: "Invalid image" });
  if (fileSize > 5000000)
    return res.status(422).json({ message: "Image must be less than 5 MB" });
  photo.mv(`./public/uploads/profile/${fileName}`, async (err) => {
    if (err)
      return res
        .status(500)
        .json({ code: 500, status: "error", message: err.message });
    try {
      await User.create({
        email: email,
        password: password,
        name: name,
        dob: dob,
        phone: phone,
        gender: gender,
        biography: biography,
        status: status,
        position: position,
        country: country,
        photo: fileName,
        urlPhoto: urlPhoto,
      });
      res
        .status(201)
        .json({ code: 201, status: "success", message: "Data insert" });
    } catch (error) {
      console.log(error.message);
      return res
        .status(500)
        .json({ code: 500, status: "error", message: error.message });
    }
  });
};

export const update = async (req, res) => {
  const getWhere = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  console.log(getWhere);

  if (!getWhere)
    return res
      .status(404)
      .json({ code: 404, status: "error", message: "Data not found" });
  let fileName = "";
  if (req.files === null) {
    fileName = getWhere.photo;
  } else {
    const file = req.files.photo;
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

    const filepath = `./public/uploads/profile/${getWhere.photo}`;
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
      return res.status(200).json({
        code: 200,
        status: "success",
        message: "Delete file success",
      });
    }

    file.mv(`./public/uploads/profile/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const dob = req.body.dob;
  const phone = req.body.phone;
  const gender = req.body.gender;
  const biography = req.body.biography;
  const status = req.body.status;
  const position = req.body.position;
  const country = req.body.country;
  const urlPhoto = `${req.protocol}://${req.get(
    "host"
  )}/uploads/profile/${fileName}`;
  try {
    await User.update(
      {
        email: email,
        password: password,
        name: name,
        dob: dob,
        phone: phone,
        gender: gender,
        biography: biography,
        status: status,
        position: position,
        country: country,
        photo: fileName,
        urlPhoto: urlPhoto,
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
  const getWhere = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!getWhere)
    return res
      .status(404)
      .json({ code: 404, status: "error", message: "Data not found" });
  try {
    const filepath = `./public/uploads/profile/${getWhere.photo}`;
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
    }
    await User.destroy({
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

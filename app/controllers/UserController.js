import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
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
  let fileName = 'default.png'; // Default filename
  let urlPhoto = `${req.protocol}://${req.get('host')}/uploads/profiles/${fileName}`; // Default URL

  if (req.files && req.files.photo) {
    const photo = req.files.photo;
    const ext = path.extname(photo.name);
    fileName = `${photo.md5}${ext}`;
    urlPhoto = `${req.protocol}://${req.get('host')}/uploads/profiles/${fileName}`;

    try {
      await photo.mv(`./public/uploads/profiles/${fileName}`); // Wait for the move to complete
    } catch (err) {
      return res.status(500).json({ code: 500, status: 'error', message: err.message });
    }
  }

  const salt = await bcrypt.genSalt();
  const email = req.body.email;
  const password = await bcrypt.hash(req.body.password, salt);
  const status = "Active";
  const { name, dob, gender, phone, biography, position, country } = req.body;

  try {
    await User.create({
      email,
      password,
      name,
      dob,
      phone,
      gender,
      biography,
      status,
      position,
      country,
      photo: fileName,
      urlPhoto,
    });
    res.status(201).json({ code: 201, status: 'success', message: 'Data inserted' });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ code: 500, status: 'error', message: error.message });
  }
};

export const update = async (req, res) => {
  const userId = req.params.id;
  let getUser;

  try {
    getUser = await User.findOne({ where: { id: userId } });
    if (!getUser) {
      return res.status(404).json({ code: 404, status: 'error', message: 'Data not found' });
    }
  } catch (error) {
    return res.status(500).json({ code: 500, status: 'error', message: error.message });
  }

  let fileName = getUser.photo;
  let urlPhoto = `${req.protocol}://${req.get('host')}/uploads/profiles/${fileName}`;

  if (req.files && req.files.photo) {
    const file = req.files.photo;
    const ext = path.extname(file.name);
    fileName = `${file.md5}${ext}`;
    
    const oldFilePath = `./public/uploads/profiles/${getUser.photo}`;
    if (fs.existsSync(oldFilePath)) {
      fs.unlinkSync(oldFilePath);
    }
    
    try {
      await file.mv(`./public/uploads/profiles/${fileName}`);
      urlPhoto = `${req.protocol}://${req.get('host')}/uploads/profiles/${fileName}`;
    } catch (err) {
      return res.status(500).json({ code: 500, status: 'error', message: err.message });
    }
  }

  const { email, name, dob, phone, gender, biography, status, position, country } = req.body;

  try {
    await User.update(
      {
        email,
        name,
        dob,
        phone,
        gender,
        biography,
        status,
        position,
        country,
        photo: fileName,
        urlPhoto,
      },
      {
        where: { id: userId },
      }
    );

    res.status(200).json({ code: 200, status: 'success', message: 'Data updated' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ code: 500, status: 'error', message: error.message });
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
    const filepath = `./public/uploads/profiles/${getWhere.photo}`;
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

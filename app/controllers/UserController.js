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
  // res.status(200).json({ status: "success", message: "Data created" })
  if(req.files === null) return res.status(400).json({ status: "error", message: "Invalid images" });
  const photo = req.files.photo;
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const dob = req.body.dob;
  const phone = req.body.phone;
  const gender = req.body.gender;
  const biography = req.body.biography;
  const status = req.body.status;
  const position = req.body.position;
  const country = req.body.country;

  const fileSize = photo.data.length;
  const ext = path.extname(photo.name);
  const fileName = photo.md5 + ext;
  // const url = `${req.protocol}://${req.get("host")}/uploads/profile/${fileName}`;
  const allowedType = ['.png','.jpg','.jpeg'];

  if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({message: "Invalid Images"});
  if(fileSize > 5000000) return res.status(422).json({message: "Image must be less than 5 MB"});
  photo.mv(`./public/uploads/profile/${fileName}`, async(err)=>{
    if(err) return res.status(500).json({message: err.message});
  try {
    await User.create({email: email, password: password, name: name, dob: dob, phone: phone, gender: gender, biography: biography, status: status, position: position, country: country, photo: fileName});
    res.status(201).json({ status: "success", message: "Data created" });
  } catch (error) {
    console.log(error.message);
  }
});
};

export const update = async (req, res) => {
  try {
    await User.update(req, body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ status: "success", message: "Data updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const destroy = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ status: "success", message: "Data deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

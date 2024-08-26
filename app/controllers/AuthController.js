import Auth from "../models/AuthModel.js";
import { Jwt } from "jsonwebtoken";

export const signIn = async (req, res) => {
  try {
    const user = await Auth.findAll({
      where:{
        email: req.body.email
      }
    });
    const match = await bcrypt.compare
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ code: 404, status: "error", message: "Email or password not found!" })
  }
};

export const signOut = async (req, res) => {
  try {
    console.log(req);
  } catch (error) {
    console.log(error.message);
  }
};

export const register = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const status = "Active";
  const photo = "default.png";
  const urlPhoto = `${req.protocol}://${req.get(
    "host"
  )}/uploads/profiles/${photo}`;

  try {
    await Auth.create({
      email: email,
      password: password,
      name: name,
      photo: photo,
      urlPhoto: urlPhoto,
      status: status,
    });
    res
      .status(201)
      .json({ code: 201, status: "success", message: "Account registerd" });
  } catch (error) {
    console.log(error.message);
  }
};

export const verifyEmail = async (req, res) => {
  try {
    console.log(req);
  } catch (error) {
    console.log(error.message);
  }
};

export const resetPassword = async (req, res) => {
  try {
    console.log(req);
  } catch (error) {
    console.log(error.message);
  }
};

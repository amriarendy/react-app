import Auth from "../models/AuthModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signIn = async (req, res) => {
  try {
    const user = await Auth.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    console.log(process.env.ACCESS_TOKEN_SECRET);
    if (!match)
      return res
        .status(400)
        .json({ code: 400, status: "error", message: "Incorect password!" });
    const userId = user[0].id;
    const name = user[0].name;
    const email = user[0].email;
    const tokenAccess = jwt.sign(
      { userId, name, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expireIn: "20s",
      }
    );
    const tokenRefresh = jwt.sign(
      { userId, name, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expireIn: "1d",
      }
    );
    await Auth.update(
      { refresh_token: tokenRefresh },
      {
        where: {
          id: userId,
        },
      }
    );
    res.cookie("tokenRefresh", tokenRefresh, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ tokenAccess });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      code: 404,
      status: "error",
      message: "Email or password not found!",
    });
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
  const salt = await bcrypt.genSalt();
  const name = req.body.name;
  const email = req.body.email;
  const password = await bcrypt.hash(req.body.password, salt);
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

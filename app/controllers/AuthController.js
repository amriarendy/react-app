import Auth from "../models/AuthModel.js";

export const signIn = async (req, res) => {
  try {
    console.log(req);
  } catch (error) {
    console.log(error.message);
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

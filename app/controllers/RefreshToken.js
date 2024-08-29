import Auth from "../models/AuthModel.js";
import jwt from "jsonwebtoken";

export const refreshToken = async (req, res) => {
  try {
    const tokenRefresh = req.cookies.tokenRefresh;
    console.log(tokenRefresh);

    if (!tokenRefresh) return res.sendStatus(401);
    const user = await Auth.findAll({
      where: {
        tokenRefresh: tokenRefresh,
      },
    });
    if (!user[0]) return res.sendStatus(403);
    jwt.verify(
      tokenRefresh,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decode) => {
        if (err) return res.sendStatus(403);
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const accessToken = jwt.sign(
          { userId, name, email },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "15s",
          }
        );
        res.json({ accessToken });
      }
    );
  } catch (error) {}
};

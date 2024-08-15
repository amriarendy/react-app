import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import UserRoute from "./app/routes/UserRoute.js";
import TagRoute from "./app/routes/TagRoute.js";
import CategoryRoute from "./app/routes/CategoryRoute.js";
import BlogRoute from "./app/routes/BlogRoute.js";

const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(UserRoute);
app.use(TagRoute);
app.use(CategoryRoute);
app.use(BlogRoute);

app.listen(port, () => {
  console.log(`Server running | app listening at http://127.0.0.1:${port}`);
});

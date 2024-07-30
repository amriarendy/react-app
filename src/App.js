import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/panel/Dashboard";
import Blog from "./pages/panel/blog/Blog";
import Setting from "./pages/panel/Setting";
import Profile from "./pages/panel/Profile";
import Blank from "./pages/panel/Blank";
import AddBlog from "./pages/panel/blog/AddBlog";
import EditBlog from "./pages/panel/blog/EditBlog";
import User from "./pages/panel/user/User";
import Test from "./pages/panel/Test";
import Category from "./pages/panel/master/Category";
import Hashtag from "./pages/panel/master/Hashtag";
import AddUser from "./pages/panel/user/AddUser";
import EditUser from "./pages/panel/user/EditUser";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import Information from "./pages/panel/Information";
import Error from "./pages/panel/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/add" element={<AddBlog />} />
          <Route path="/blog/edit" element={<EditBlog />} />
          <Route path="/master/category" element={<Category />} />
          <Route path="/master/hashtag" element={<Hashtag />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/add" element={<AddUser />} />
          <Route path="/user/edit" element={<EditUser />} />
          <Route path="/information" element={<Information />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/blank" element={<Blank />} />
          <Route path="/test" element={<Test />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

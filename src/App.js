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
          {/* auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          {/* dashboard */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          {/* blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/add" element={<AddBlog />} />
          <Route path="/blog/edit/:param" element={<EditBlog />} />
          {/* master */}
          <Route path="/master/category" element={<Category />} />
          <Route path="/master/hashtag" element={<Hashtag />} />
          {/* users */}
          <Route path="/user" element={<User />} />
          <Route path="/user/add" element={<AddUser />} />
          <Route path="/user/edit/:param" element={<EditUser />} />
          {/* setting */}
          <Route path="/information" element={<Information />} />
          <Route path="/setting" element={<Setting />} />
          {/* layouts */}
          <Route path="/blank" element={<Blank />} />
          <Route path="/test" element={<Test />} />
          <Route path="/table" element={<Blank />} />
          <Route path="/table1" element={<Test />} />
          <Route path="/form" element={<Blank />} />
          <Route path="/docs" element={<Test />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

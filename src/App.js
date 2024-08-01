import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/panel/Dashboard";
import Blog from "./pages/panel/blog/Blog";
import Setting from "./pages/panel/Setting";
import Profile from "./pages/panel/Profile";
import Blank from "./pages/panel/tamplates/Blank";
import AddBlog from "./pages/panel/blog/AddBlog";
import EditBlog from "./pages/panel/blog/EditBlog";
import User from "./pages/panel/user/User";
import Test from "./pages/panel/tamplates/Test";
import Category from "./pages/panel/master/Category";
import Hashtag from "./pages/panel/master/Hashtag";
import AddUser from "./pages/panel/user/AddUser";
import EditUser from "./pages/panel/user/EditUser";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import Information from "./pages/panel/Information";
import Error from "./pages/panel/Error";
import GridCols from "./pages/panel/tamplates/GridCols";
import Layout from "./pages/panel/tamplates/Layout";
import Docs from "./pages/panel/Docs";
import Alerts from "./pages/panel/tamplates/Alerts";
import Form from "./pages/panel/tamplates/Form";
import TableDefault from "./pages/panel/tamplates/TableDefault";
import TableAdvance from "./pages/panel/tamplates/TableAdvance";
import Popup from "./pages/panel/tamplates/Popup";
import Modal from "./pages/panel/tamplates/Modal";

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
          <Route path="/templates/blank" element={<Blank />} />
          <Route path="/templates/layout" element={<Layout />} />
          <Route path="/templates/alerts" element={<Alerts />} />
          <Route path="/templates/table-default" element={<TableDefault />} />
          <Route path="/templates/table-advance" element={<TableAdvance />} />
          <Route path="/templates/table2" element={<TableDefault />} />
          <Route path="/templates/form" element={<Form />} />
          <Route path="/templates/modal" element={<Modal />} />
          <Route path="/templates/popup" element={<Popup />} />
          <Route path="/templates/grid-cols" element={<GridCols />} />
          <Route path="/templates/test" element={<Test />} />
          {/* etc */}
          <Route path="/docs" element={<Docs />} />
          <Route path="error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

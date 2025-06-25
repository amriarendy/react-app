import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/panel/Dashboard";
import Blog from "./pages/panel/blog/Blog";
import Profile from "./pages/panel/Profile";
import Blank from "./pages/panel/tamplates/Blank";
import AddBlog from "./pages/panel/blog/AddBlog";
import EditBlog from "./pages/panel/blog/EditBlog";
import User from "./pages/panel/user/User";
import Test from "./pages/panel/tamplates/Test";
import Category from "./pages/panel/master/Category";
import AddUser from "./pages/panel/user/AddUser";
import EditUser from "./pages/panel/user/EditUser";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import Error from "./pages/panel/Error";
import GridCols from "./pages/panel/tamplates/GridCols";
import Layout from "./pages/panel/tamplates/Layout";
import Docs from "./pages/panel/Docs";
import Alerts from "./pages/panel/tamplates/Alerts";
import Form from "./pages/panel/tamplates/Form";
import TableDefault from "./pages/panel/tamplates/TableDefault";
import TableAdvance from "./pages/panel/tamplates/TableAdvance";
import Popup from "./pages/panel/tamplates/Popup";
import Image from "./pages/panel/tamplates/Image";
import PageError from "./pages/panel/tamplates/PageError";
import PageLoading from "./pages/panel/tamplates/PageLoading";
import Tag from "./pages/panel/master/Tag";
import Welcome from "./pages/Welcome";
import Blogs from "./pages/Blog";
import Starter from "./pages/Starter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/detail" element={<Welcome />} />
          <Route path="/starter" element={<Starter />} />
          <Route path="/docs" element={<Docs />} />
          {/* auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          {/* dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          {/* blog */}
          <Route path="/dashboard/blog" element={<Blog />} />
          <Route path="/dashboard/blog/add" element={<AddBlog />} />
          <Route path="/dashboard/blog/edit/:param" element={<EditBlog />} />
          {/* master */}
          <Route path="/dashboard/master/category" element={<Category />} />
          <Route path="/dashboard/master/tag" element={<Tag />} />
          {/* users */}
          <Route path="/dashboard/user" element={<User />} />
          <Route path="/dashboard/user/add" element={<AddUser />} />
          <Route path="/dashboard/user/edit/:param" element={<EditUser />} />
          {/* layouts */}
          <Route path="/dashboard/templates/blank" element={<Blank />} />
          <Route path="/dashboard/templates/layout" element={<Layout />} />
          <Route path="/dashboard/templates/alerts" element={<Alerts />} />
          <Route
            path="/dashboard/templates/table-default"
            element={<TableDefault />}
          />
          <Route
            path="/dashboard/templates/table-advance"
            element={<TableAdvance />}
          />
          <Route
            path="/dashboard/templates/table2"
            element={<TableDefault />}
          />
          <Route path="/dashboard/templates/form" element={<Form />} />
          <Route path="/dashboard/templates/popup" element={<Popup />} />
          <Route path="/dashboard/templates/grid-cols" element={<GridCols />} />
          <Route path="/dashboard/templates/image" element={<Image />} />
          <Route
            path="/dashboard/templates/page-error"
            element={<PageError />}
          />
          <Route
            path="/dashboard/templates/page-loading"
            element={<PageLoading />}
          />
          <Route path="/dashboard/templates/test" element={<Test />} />
          {/* etc */}
          <Route path="/docs" element={<Docs />} />
          <Route path="error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/panel/DashboardPage";
import Blog from "./pages/panel/blog/Blog";
import Profile from "./pages/panel/Profile";
import BlankPage from "./pages/panel/tamplates/BlankPage";
import AddBlog from "./pages/panel/blog/AddBlog";
import EditBlog from "./pages/panel/blog/EditBlog";
import User from "./pages/panel/user/User";
import AddUser from "./pages/panel/user/AddUser";
import EditUser from "./pages/panel/user/EditUser";
import UserPage from "./pages/panel/user/UserPage";
import AddUserPage from "./pages/panel/user/AddUserPage";
import EditUserPage from "./pages/panel/user/EditUserPage";
import Test from "./pages/panel/tamplates/Test";
import Category from "./pages/panel/master/Category";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import Error from "./pages/panel/Error";
import GridCols from "./pages/panel/tamplates/GridCols";
import Layout from "./pages/panel/tamplates/Layout";
import Toast from "./pages/panel/tamplates/Toast";
import Form from "./pages/panel/tamplates/Form";
import TableDefault from "./pages/panel/tamplates/TableDefault";
import PopupPage from "./pages/panel/tamplates/PopupPage";
import ImagePage from "./pages/panel/tamplates/ImagePage";
import PageError from "./pages/panel/tamplates/PageError";
import PageLoading from "./pages/panel/tamplates/PageLoading";
import Tag from "./pages/panel/master/Tag";
import TagPage from "./pages/panel/master/TagPage";
import WelcomePage from "./pages/WelcomePage";
import ArticlesPage from "./pages/landingpage/articles/ArticlesPage";
import ArticleDetailPage from "./pages/landingpage/articles/ArticleDetailPage";
import StarterPage from "./pages/landingpage/StarterPage";
import Pagination from "./pages/panel/tamplates/Pagination";
import Card from "./pages/panel/tamplates/Card";
import AboutPage from "./pages/landingpage/AboutPage";
import EcommercePage from "./pages/landingpage/ecommerce/EcommercePage";
import EcommerceDetailPage from "./pages/landingpage/ecommerce/EcommerceDetailPage";
import BuildAppPage from "./pages/landingpage/BuildAppPage";
import TablePage from "./pages/panel/tamplates/TablePage";
import CategoryPage from "./pages/panel/master/CategoryPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/blog" element={<ArticlesPage />} />
          <Route path="/blog/detail" element={<ArticleDetailPage />} />
          <Route path="/ecommerce" element={<EcommercePage />} />
          <Route path="/ecommerce/detail" element={<EcommerceDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/build-app" element={<BuildAppPage />} />
          <Route path="/starter" element={<StarterPage />} />
          {/* auth */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          {/* dashboard */}
          <Route path="/Dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          {/* blog */}
          <Route path="/dashboard/blog" element={<Blog />} />
          <Route path="/dashboard/blog/add" element={<AddBlog />} />
          <Route path="/dashboard/blog/edit/:param" element={<EditBlog />} />
          {/* master */}
          <Route path="/dashboard/master/category" element={<Category />} />
          <Route
            path="/dashboard/master/category-page"
            element={<CategoryPage />}
          />
          <Route path="/dashboard/master/tag" element={<Tag />} />
          <Route path="/dashboard/master/tag-page" element={<TagPage />} />
          {/* users */}
          <Route path="/dashboard/user" element={<User />} />
          <Route path="/dashboard/user/add" element={<AddUser />} />
          <Route path="/dashboard/user/edit/:param" element={<EditUser />} />
          {/* users */}
          <Route path="/dashboard/user-page" element={<UserPage />} />
          <Route path="/dashboard/user/add-page" element={<AddUserPage />} />
          <Route
            path="/dashboard/user/edit-page/:param"
            element={<EditUserPage />}
          />
          {/* layouts */}
          <Route path="/dashboard/templates/blank" element={<BlankPage />} />
          <Route path="/dashboard/templates/layout" element={<Layout />} />
          <Route path="/dashboard/templates/Toast" element={<Toast />} />
          <Route path="/dashboard/templates/table" element={<TablePage />} />
          <Route
            path="/dashboard/templates/table2"
            element={<TableDefault />}
          />
          <Route path="/dashboard/templates/form" element={<Form />} />
          <Route path="/dashboard/templates/popup" element={<PopupPage />} />
          <Route
            path="/dashboard/templates/Pagination"
            element={<Pagination />}
          />
          <Route path="/dashboard/templates/grid-cols" element={<GridCols />} />
          <Route path="/dashboard/templates/image" element={<ImagePage />} />
          <Route path="/dashboard/templates/card" element={<Card />} />
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
          <Route path="error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

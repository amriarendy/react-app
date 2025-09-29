import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/panel/DashboardPage";
import ProfilePage from "./pages/panel/ProfilePage";
import BlankPage from "./pages/panel/tamplates/BlankPage";
import BlogPage from "./pages/panel/blog/BlogPage";
import AddBlogPage from "./pages/panel/blog/AddBlogPage";
import EditBlogPage from "./pages/panel/blog/EditBlogPage";
import UserPage from "./pages/panel/user/UserPage";
import AddUserPage from "./pages/panel/user/AddUserPage";
import EditUserPage from "./pages/panel/user/EditUserPage";
import TestPage from "./pages/panel/tamplates/TestPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import GridColsPage from "./pages/panel/tamplates/GridColsPage";
import ToastPage from "./pages/panel/tamplates/ToastPage";
import FormPage from "./pages/panel/tamplates/FormPage";
import PopupPage from "./pages/panel/tamplates/PopupPage";
import ImagePage from "./pages/panel/tamplates/ImagePage";
import ErrorPage from "./pages/panel/tamplates/ErrorPage";
import ModalPage from "./pages/panel/tamplates/ModalPage";
import LoadPage from "./pages/panel/tamplates/LoadPage";
import TagPage from "./pages/panel/master/TagPage";
import CategoryPage from "./pages/panel/master/CategoryPage";
import WelcomePage from "./pages/WelcomePage";
import ArticlesPage from "./pages/landingpage/articles/ArticlesPage";
import ArticleDetailPage from "./pages/landingpage/articles/ArticleDetailPage";
import StarterPage from "./pages/landingpage/StarterPage";
import PaginatePage from "./pages/panel/tamplates/PaginatePage";
import LayoutCardPage from "./pages/panel/tamplates/LayoutCardPage";
import AboutPage from "./pages/landingpage/AboutPage";
import EcommercePage from "./pages/landingpage/ecommerce/EcommercePage";
import EcommerceDetailPage from "./pages/landingpage/ecommerce/EcommerceDetailPage";
import BuildAppPage from "./pages/landingpage/BuildAppPage";
import TablePage from "./pages/panel/tamplates/TablePage";
import ButtonPage from "./pages/panel/elements/ButtonPage";
import InputPage from "./pages/panel/elements/InputPage";
import OptionPage from "./pages/panel/elements/OptionPage";
import CheckBoxPage from "./pages/panel/elements/CheckBoxPage";
import TextAreaPage from "./pages/panel/elements/TextAreaPage";

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
          <Route path="/dashboard/profile" element={<ProfilePage />} />
          {/* blog */}
          <Route path="/dashboard/blogs" element={<BlogPage />} />
          <Route path="/dashboard/blogs/add" element={<AddBlogPage />} />
          <Route
            path="/dashboard/blogs/edit/:param"
            element={<EditBlogPage />}
          />
          {/* master */}
          <Route path="/dashboard/master/category" element={<CategoryPage />} />
          <Route path="/dashboard/master/tag" element={<TagPage />} />
          {/* users */}
          <Route path="/dashboard/users" element={<UserPage />} />
          <Route path="/dashboard/users/add" element={<AddUserPage />} />
          <Route
            path="/dashboard/users/edit/:param"
            element={<EditUserPage />}
          />
          {/* layouts */}
          <Route path="/dashboard/templates/blank" element={<BlankPage />} />
          <Route path="/dashboard/templates/toast" element={<ToastPage />} />
          <Route path="/dashboard/templates/table" element={<TablePage />} />
          <Route path="/dashboard/templates/form" element={<FormPage />} />
          <Route path="/dashboard/templates/modal" element={<ModalPage />} />
          <Route path="/dashboard/templates/popup" element={<PopupPage />} />
          <Route
            path="/dashboard/templates/paginate"
            element={<PaginatePage />}
          />
          <Route
            path="/dashboard/templates/grid-cols"
            element={<GridColsPage />}
          />
          <Route path="/dashboard/templates/image" element={<ImagePage />} />
          <Route
            path="/dashboard/templates/layout-card"
            element={<LayoutCardPage />}
          />
          <Route path="/dashboard/templates/error" element={<ErrorPage />} />
          <Route path="/dashboard/templates/Load" element={<LoadPage />} />
          <Route path="/dashboard/templates/test" element={<TestPage />} />
          {/* elemets */}
          <Route path="/dashboard/elements/button" element={<ButtonPage />} />
          <Route path="/dashboard/elements/input" element={<InputPage />} />
          <Route path="/dashboard/elements/option" element={<OptionPage />} />
          <Route path="/dashboard/elements/checkbox" element={<CheckBoxPage />} />
          <Route path="/dashboard/elements/textarea" element={<TextAreaPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

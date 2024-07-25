import Dashboard from "./pages/panel/Dashboard";
import Products from "./pages/panel/Products";
import Tables from "./pages/panel/Tables";
import PanelLayouts from "./pages/PanelLayouts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import initialFlowbite from "flowbite"
// useEffect(() => {
//   initialFlowbite();
// }, [])

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Products />} />
          <Route path="/table" element={<Tables />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

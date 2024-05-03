import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage";
import LoginPage from "../pages/login";
import AdminPage from "../pages/adminPage";

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin" element={<LoginPage />} />
          <Route path="/adminView" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
};
export default MyRoutes;

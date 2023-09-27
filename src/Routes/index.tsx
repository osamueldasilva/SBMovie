import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { LoginAndRegister } from "../Pages/LoginAndRegister";

export function RoutesProvier() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />
      <Route path="/Login" element={<LoginAndRegister />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
}

import { Navigate, Route, Routes } from "react-router-dom";
import { LoginAndRegister } from "../Pages/LoginAndRegister";
import { Movies } from "../Pages/Movies";

export function RoutesProvier() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />
      <Route path="/Login" element={<LoginAndRegister />} />
      <Route path="/Movies" element={<Movies />} />
    </Routes>
  );
}

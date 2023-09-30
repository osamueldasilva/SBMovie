import { Navigate, Route, Routes } from "react-router-dom";
import { ComedyMovies } from "../Pages/ComedyMovies";
import { LoginAndRegister } from "../Pages/LoginAndRegister";

export function RoutesProvier() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />
      <Route path="/Login" element={<LoginAndRegister />} />
      <Route path="/ComedyMovies" element={<ComedyMovies />} />
    </Routes>
  );
}

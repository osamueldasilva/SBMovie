import { Navigate, Route, Routes } from "react-router-dom";
import { Welcome } from "../Pages/Welcome";
import { Movies } from "../Pages/Movies";

export function RoutesProvier() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Welcome" />} />
      <Route path="/Welcome" element={<Welcome />} />
      <Route path="/Movies" element={<Movies />} />
    </Routes>
  );
}

import { BrowserRouter as Router } from "react-router-dom";
import { RoutesProvier } from "./Routes";

import { QueryClient, QueryClientProvider } from "react-query";
import "./Global.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Sidebar } from "./Components/Sidebar";

const queryClient = new QueryClient();
export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {" "}
        <Sidebar />
        <RoutesProvier />
        <ToastContainer />
      </Router>
    </QueryClientProvider>
  );
}

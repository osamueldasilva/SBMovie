import { BrowserRouter as Router } from "react-router-dom";
import { RoutesProvier } from "./Routes";

import { QueryClient, QueryClientProvider } from "react-query";
import "./Global.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();
export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <RoutesProvier />
        <ToastContainer />
      </Router>
    </QueryClientProvider>
  );
}

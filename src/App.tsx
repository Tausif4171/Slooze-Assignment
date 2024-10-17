import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import Login from "./components/Login";

function App() {
  const isLoggedIn = false;

  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

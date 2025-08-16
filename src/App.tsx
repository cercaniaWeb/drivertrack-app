// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./components/layout/Layout";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { loading } = useAuth();

  if (loading) return <div>Cargando...</div>;

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={
        <Layout>
          <Dashboard />
        </Layout>
      } />
    </Routes>
  );
}

export default App;

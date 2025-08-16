// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Layout from './components/layout/Layout';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/auth/Login';

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

// src/App.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

// Layout
import Layout from './components/layout/Layout';

// Páginas
import Dashboard from './pages/dashboard/Dashboard';
import Vehicles from './pages/vehicles/Vehicles';
import Drivers from './pages/drivers/Drivers';
import Accounts from './pages/accounts/Accounts';
import Maintenance from './pages/maintenance/Maintenance';
import Calendar from './pages/calendar/Calendar';
import Tickets from './pages/tickets/Tickets';
import Messages from './pages/messages/Messages';
import Reports from './pages/reports/Reports';
import Profile from './pages/profile/Profile';
import Settings from './pages/settings/Settings';
import Login from './pages/auth/Login';

function App() {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '18px'
      }}>
        Cargando...
      </div>
    );
  }

  // Si no hay usuario y no está en login, redirige a login
  if (!currentUser) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  // Si está autenticado, renderiza el layout con rutas
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/profile" element={<Profile />} />

        {/* Ruta protegida: solo para dueño */}
        <Route
          path="/settings"
          element={currentUser?.email === 'cercaniaWeb@gmail.com' ? <Settings /> : (
            <div style={{
              padding: '24px',
              color: 'white'
            }}>
              <h2>Acceso denegado</h2>
              <p>Solo el dueño puede acceder a esta sección.</p>
            </div>
          )}
        />

        {/* Redirección para rutas no encontradas */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SonarUpload from "./pages/SonarUpload";
import Detections from "./pages/Detections";
import Anomalies from "./pages/Anomalies";
import GISMap from "./pages/GISMap";
import Verification from "./pages/Verification";
import Alerts from "./pages/Alerts";
import Reports from "./pages/Reports";


function ProtectedRoute({ children }) {

  const isAuthenticated =
    localStorage.getItem("marineAI_authenticated") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}


function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* =====================
            LOGIN
        ====================== */}

        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />


        {/* =====================
            PROTECTED APPLICATION
        ====================== */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />


        <Route
          path="/sonar-upload"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <SonarUpload />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />


        <Route
          path="/detections"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Detections />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />


        <Route
          path="/anomalies"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Anomalies />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />


        <Route
          path="/gis-map"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <GISMap />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />


        <Route
          path="/verification"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Verification />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />


        <Route
          path="/alerts"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Alerts />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />


        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Reports />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
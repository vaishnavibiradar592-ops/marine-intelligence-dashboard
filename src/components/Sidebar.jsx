
import {
  LayoutDashboard,
  Upload,
  ScanSearch,
  TriangleAlert,
  Map,
  ShieldCheck,
  Bell,
  FileText,
  Waves,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <aside className="sidebar">

      {/* LOGO */}
      <div className="sidebar-logo">
        <div className="logo-icon">
          <Waves size={23} />
        </div>

        <div>
          <h2>MarineAI</h2>
          <span>Intelligence System</span>
        </div>
      </div>

      {/* MAIN MENU */}
      <div className="menu-section">

        <p className="menu-title">
          MAIN MENU
        </p>

        <nav>

          <NavLink
  to="/dashboard"
  className={({ isActive }) =>
    `nav-item ${isActive ? "active" : ""}`
  }
>
  <LayoutDashboard size={19} />
  <span>Dashboard</span>
</NavLink>

          <NavLink
  to="/sonar-upload"
  className={({ isActive }) =>
    `nav-item ${isActive ? "active" : ""}`
  }
>
  <Upload size={19} />
  <span>Sonar Upload</span>
</NavLink>

          <NavLink
  to="/detections"
  className={({ isActive }) =>
    `nav-item ${isActive ? "active" : ""}`
  }
>
  <ScanSearch size={19} />
  <span>AI Detections</span>
</NavLink>

          <NavLink
  to="/anomalies"
  className={({ isActive }) =>
    `nav-item ${isActive ? "active" : ""}`
  }
>
  <TriangleAlert size={19} />
  <span>Anomalies</span>
</NavLink>

          <NavLink
  to="/gis-map"
  className={({ isActive }) =>
    `nav-item ${isActive ? "active" : ""}`
  }
>
  <Map size={19} />
  <span>GIS Map</span>
</NavLink>

        </nav>
      </div>

      {/* OPERATIONS */}
      <div className="menu-section">

        <p className="menu-title">
          OPERATIONS
        </p>

        <nav>

          <NavLink
  to="/verification"
  className={({ isActive }) =>
    `nav-item ${isActive ? "active" : ""}`
  }
>
  <ShieldCheck size={19} />
  <span>Verification</span>
</NavLink>

      <NavLink
  to="/alerts"
  className={({ isActive }) =>
    `nav-item ${isActive ? "active" : ""}`
  }
>
  <Bell size={19} />
  <span>Alerts</span>

  <span className="notification-count">
    3
  </span>
</NavLink>

          <NavLink
  to="/reports"
  className={({ isActive }) =>
    `nav-item ${isActive ? "active" : ""}`
  }
>
  <FileText size={19} />
  <span>Reports</span>
</NavLink>
        </nav>

      </div>

      {/* BOTTOM */}
      <div className="sidebar-bottom">

        <div className="nav-item">
          <Settings size={19} />
          <span>Settings</span>
        </div>

        <div className="system-status">

          <span className="status-dot"></span>

          <div>
            <strong>System Online</strong>
            <small>All services operational</small>
          </div>

        </div>

      </div>

    </aside>
  );
};

export default Sidebar;
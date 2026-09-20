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

          <div className="nav-item active">
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </div>

          <div className="nav-item">
            <Upload size={19} />
            <span>Sonar Upload</span>
          </div>

          <div className="nav-item">
            <ScanSearch size={19} />
            <span>AI Detections</span>
          </div>

          <div className="nav-item">
            <TriangleAlert size={19} />
            <span>Anomalies</span>
          </div>

          <div className="nav-item">
            <Map size={19} />
            <span>GIS Map</span>
          </div>

        </nav>
      </div>

      {/* OPERATIONS */}
      <div className="menu-section">

        <p className="menu-title">
          OPERATIONS
        </p>

        <nav>

          <div className="nav-item">
            <ShieldCheck size={19} />
            <span>Verification</span>
          </div>

          <div className="nav-item">
            <Bell size={19} />
            <span>Alerts</span>

            <span className="notification-count">
              3
            </span>

          </div>

          <div className="nav-item">
            <FileText size={19} />
            <span>Reports</span>
          </div>

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
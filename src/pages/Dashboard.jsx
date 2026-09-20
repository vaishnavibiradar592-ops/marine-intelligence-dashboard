import {
  ScanSearch,
  Waves,
  ShieldAlert,
  TriangleAlert,
} from "lucide-react";

const Dashboard = () => {

  return (
    <div className="dashboard-page">

      {/* PAGE HEADER */}

      <div className="page-header">

        <div>

          <span className="eyebrow">
            OVERVIEW
          </span>

          <h2>
            Survey Dashboard
          </h2>

          <p>
            Monitor underwater detections, anomalies and survey activity.
          </p>

        </div>

        <button className="primary-button">
          + New Survey
        </button>

      </div>


      {/* STAT CARDS */}

      <div className="stats-grid">

        <div className="stat-card">

          <div className="stat-icon blue">
            <ScanSearch size={22} />
          </div>

          <div>
            <span>Total Detections</span>
            <h3>124</h3>
            <small>Across 8 surveys</small>
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-icon cyan">
            <Waves size={22} />
          </div>

          <div>
            <span>Marine Debris</span>
            <h3>42</h3>
            <small>Detected objects</small>
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-icon orange">
            <ShieldAlert size={22} />
          </div>

          <div>
            <span>High Risk</span>
            <h3>18</h3>
            <small>Requires attention</small>
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-icon red">
            <TriangleAlert size={22} />
          </div>

          <div>
            <span>Unknown Anomalies</span>
            <h3>7</h3>
            <small>Needs verification</small>
          </div>

        </div>

      </div>


      {/* EMPTY CONTENT AREA */}

      <div className="welcome-panel">

        <div className="welcome-icon">
          <Waves size={34} />
        </div>

        <h3>
          Marine Intelligence Workspace
        </h3>

        <p>
          Your sonar surveys, AI detections and geospatial
          intelligence will appear here.
        </p>

      </div>

    </div>
  );
};

export default Dashboard;
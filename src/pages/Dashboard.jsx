import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Activity,
  ScanLine,
  Target,
  ShieldCheck,
  AlertTriangle,
  Upload,
  Map,
  FileText,
  ChevronRight,
  Clock3,
  MapPin,
  Waves,
} from "lucide-react";

import "./Dashboard.css";

const recentDetections = [
  {
    id: "DET-001",
    type: "Marine Debris",
    confidence: 96.4,
    risk: "High",
    location: "20.5937° N, 78.9629° E",
    time: "10 min ago",
  },
  {
    id: "DET-002",
    type: "Metal Object",
    confidence: 91.8,
    risk: "Medium",
    location: "20.5942° N, 78.9635° E",
    time: "24 min ago",
  },
  {
    id: "DET-003",
    type: "Unknown Anomaly",
    confidence: 78.2,
    risk: "Review",
    location: "20.5948° N, 78.9641° E",
    time: "41 min ago",
  },
];

const recentSurveys = [
  {
    id: "SUR-2026-014",
    zone: "Survey Zone Alpha",
    scans: 128,
    detections: 14,
    status: "Completed",
    time: "Today",
  },
  {
    id: "SUR-2026-013",
    zone: "Survey Zone Beta",
    scans: 96,
    detections: 9,
    status: "Completed",
    time: "18 Sep",
  },
  {
    id: "SUR-2026-012",
    zone: "Survey Zone Gamma",
    scans: 84,
    detections: 7,
    status: "Reviewed",
    time: "16 Sep",
  },
];

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">

      {/* ================= HEADER ================= */}

      <div className="dashboard-header">

        <div>
          <div className="dashboard-eyebrow">
            <Activity size={15} />
            MARINE INTELLIGENCE PLATFORM
          </div>

          <h1>Operational Dashboard</h1>

          <p>
            Monitor underwater sonar surveys, AI detections,
            anomalies, and marine risk conditions from one place.
          </p>
        </div>

        <div className="dashboard-live-status">

          <span className="dashboard-status-dot"></span>

          <div>
            <strong>System Operational</strong>
            <span>AI monitoring active</span>
          </div>

        </div>

      </div>

      {/* ================= SURVEY BANNER ================= */}

      <div className="dashboard-survey-banner">

        <div className="survey-banner-icon">
          <Waves size={22} />
        </div>

        <div className="survey-banner-content">

          <div className="survey-banner-title">

            <strong>
              Current Survey Session
            </strong>

            <span className="survey-active-badge">
              ACTIVE
            </span>

          </div>

          <span>
            SUR-2026-014 · Survey Zone Alpha ·
            Underwater sonar monitoring in progress
          </span>

        </div>

        <div className="survey-banner-stat">

          <span>
            Scans Processed
          </span>

          <strong>
            128
          </strong>

        </div>

        <div className="survey-banner-stat">

          <span>
            Detections
          </span>

          <strong>
            14
          </strong>

        </div>

        <div className="survey-banner-action">

          <button
            onClick={() => navigate("/sonar-upload")}
          >
            View Survey
            <ChevronRight size={14} />
          </button>

        </div>

      </div>

      {/* ================= KPI ================= */}

      <div className="dashboard-kpi-grid">

        <div className="dashboard-kpi-card">

          <div className="dashboard-kpi-icon scans">
            <ScanLine size={21} />
          </div>

          <div>
            <span>Total Sonar Scans</span>
            <strong>308</strong>
            <small>+12.4% this period</small>
          </div>

        </div>

        <div className="dashboard-kpi-card">

          <div className="dashboard-kpi-icon detections">
            <Target size={21} />
          </div>

          <div>
            <span>AI Detections</span>
            <strong>40</strong>
            <small>Potential anomalies</small>
          </div>

        </div>

        <div className="dashboard-kpi-card">

          <div className="dashboard-kpi-icon verified">
            <ShieldCheck size={21} />
          </div>

          <div>
            <span>Verified Findings</span>
            <strong>27</strong>
            <small>Human reviewed</small>
          </div>

        </div>

        <div className="dashboard-kpi-card">

          <div className="dashboard-kpi-icon danger">
            <AlertTriangle size={21} />
          </div>

          <div>
            <span>High-Risk Alerts</span>
            <strong>6</strong>
            <small>Require attention</small>
          </div>

        </div>

      </div>

      {/* ================= MAIN GRID ================= */}

      <div className="dashboard-main-grid">

        {/* Recent Detections */}

        <section className="dashboard-panel">

          <div className="dashboard-panel-header">

            <div>

              <h2>
                Recent AI Detections
              </h2>

              <span>
                Latest anomalies identified by the detection system
              </span>

            </div>

            <button
              onClick={() => navigate("/detections")}
            >
              View All
              <ChevronRight size={14} />
            </button>

          </div>

          <div className="dashboard-detection-list">

            {recentDetections.map((detection) => (

              <div
                className="dashboard-detection-row"
                key={detection.id}
              >

                <div
                  className={`dashboard-detection-indicator ${detection.risk.toLowerCase()}`}
                >
                  <Target size={15} />
                </div>

                <div className="dashboard-detection-info">

                  <strong>
                    {detection.type}
                  </strong>

                  <span>
                    {detection.id} · {detection.time}
                  </span>

                </div>

                <div className="dashboard-detection-location">

                  <MapPin size={12} />

                  {detection.location}

                </div>

                <div className="dashboard-confidence">

                  <span>
                    Confidence
                  </span>

                  <strong>
                    {detection.confidence}%
                  </strong>

                </div>

                <span
                  className={`dashboard-risk-badge ${detection.risk.toLowerCase()}`}
                >
                  {detection.risk}
                </span>

              </div>

            ))}

          </div>

        </section>

        {/* Risk Overview */}

        <section className="dashboard-panel risk-overview-panel">

          <div className="dashboard-panel-header">

            <div>

              <h2>
                Risk Overview
              </h2>

              <span>
                Current survey risk distribution
              </span>

            </div>

            <AlertTriangle size={18} />

          </div>

          <div className="dashboard-risk-content">

            <div className="dashboard-risk-score">

              <div className="dashboard-risk-circle">

                <div>

                  <strong>
                    HIGH
                  </strong>

                  <span>
                    Risk Level
                  </span>

                </div>

              </div>

            </div>

            <div className="dashboard-risk-breakdown">

              <div className="risk-breakdown-item">

                <span className="risk-marker high"></span>

                <div>
                  <span>High Risk</span>
                  <strong>6</strong>
                </div>

              </div>

              <div className="risk-breakdown-item">

                <span className="risk-marker medium"></span>

                <div>
                  <span>Medium Risk</span>
                  <strong>11</strong>
                </div>

              </div>

              <div className="risk-breakdown-item">

                <span className="risk-marker review"></span>

                <div>
                  <span>Review Required</span>
                  <strong>8</strong>
                </div>

              </div>

              <div className="risk-breakdown-item">

                <span className="risk-marker low"></span>

                <div>
                  <span>Low Risk</span>
                  <strong>15</strong>
                </div>

              </div>

            </div>

          </div>

        </section>

      </div>

      {/* ================= LOWER GRID ================= */}

      <div className="dashboard-lower-grid">

        {/* Recent Surveys */}

        <section className="dashboard-panel">

          <div className="dashboard-panel-header">

            <div>

              <h2>
                Recent Surveys
              </h2>

              <span>
                Latest underwater survey sessions
              </span>

            </div>

            <FileText size={18} />

          </div>

          <div className="dashboard-survey-list">

            {recentSurveys.map((survey) => (

              <div
                className="dashboard-survey-row"
                key={survey.id}
              >

                <div className="survey-row-icon">
                  <FileText size={15} />
                </div>

                <div className="survey-row-info">

                  <strong>
                    {survey.id}
                  </strong>

                  <span>
                    {survey.zone}
                  </span>

                </div>

                <div className="survey-row-stat">

                  <span>
                    Scans
                  </span>

                  <strong>
                    {survey.scans}
                  </strong>

                </div>

                <div className="survey-row-stat">

                  <span>
                    Detections
                  </span>

                  <strong>
                    {survey.detections}
                  </strong>

                </div>

                <span
                  className={`survey-row-status ${survey.status.toLowerCase()}`}
                >
                  {survey.status}
                </span>

                <span className="survey-row-time">
                  {survey.time}
                </span>

              </div>

            ))}

          </div>

        </section>

        {/* Quick Actions */}

        <section className="dashboard-panel quick-actions-panel">

          <div className="dashboard-panel-header">

            <div>

              <h2>
                Quick Actions
              </h2>

              <span>
                Frequently used operations
              </span>

            </div>

          </div>

          <div className="quick-actions">

            <button
              onClick={() => navigate("/sonar-upload")}
            >

              <span className="quick-action-icon upload">
                <Upload size={17} />
              </span>

              <span>
                <strong>
                  Upload Sonar
                </strong>

                <small>
                  Process new imagery
                </small>
              </span>

              <ChevronRight size={15} />

            </button>

            <button
              onClick={() => navigate("/gis-map")}
            >

              <span className="quick-action-icon map">
                <Map size={17} />
              </span>

              <span>
                <strong>
                  Open GIS Map
                </strong>

                <small>
                  View spatial detections
                </small>
              </span>

              <ChevronRight size={15} />

            </button>

            <button
              onClick={() => navigate("/verification")}
            >

              <span className="quick-action-icon verify">
                <ShieldCheck size={17} />
              </span>

              <span>
                <strong>
                  Verify Findings
                </strong>

                <small>
                  Review AI detections
                </small>
              </span>

              <ChevronRight size={15} />

            </button>

            <button
              onClick={() => navigate("/reports")}
            >

              <span className="quick-action-icon report">
                <FileText size={17} />
              </span>

              <span>
                <strong>
                  Generate Report
                </strong>

                <small>
                  View survey analytics
                </small>
              </span>

              <ChevronRight size={15} />

            </button>

          </div>

        </section>

      </div>

      {/* ================= FOOTER ================= */}

      <div className="dashboard-footer">

        <div>
          <Activity size={14} />
          <span>
            MarineAI Monitoring Engine
          </span>
        </div>

        <div>
          <Clock3 size={13} />
          Last system update: Just now
        </div>

      </div>

    </div>
  );
}

export default Dashboard;
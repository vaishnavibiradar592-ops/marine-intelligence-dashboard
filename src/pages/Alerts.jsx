import React, { useState } from "react";
import {
  AlertTriangle,
  Bell,
  CheckCircle2,
  Clock3,
  MapPin,
  ShieldAlert,
  Activity,
  ChevronRight,
} from "lucide-react";
import "./Alerts.css";

const initialAlerts = [
  {
    id: "ALT-001",
    detectionId: "DET-001",
    title: "High-Risk Marine Debris Detected",
    type: "Marine Debris",
    severity: "High",
    confidence: 96.4,
    location: "20.5937° N, 78.9629° E",
    status: "Active",
    time: "10 min ago",
    description:
      "AI detection indicates a high-confidence marine debris object requiring operator attention.",
  },
  {
    id: "ALT-002",
    detectionId: "DET-002",
    title: "Metallic Object Detected",
    type: "Metal Object",
    severity: "Medium",
    confidence: 91.8,
    location: "20.5942° N, 78.9635° E",
    status: "Acknowledged",
    time: "24 min ago",
    description:
      "Potential metallic debris detected within the current underwater survey zone.",
  },
  {
    id: "ALT-003",
    detectionId: "DET-003",
    title: "Unknown Seafloor Anomaly",
    type: "Unknown Anomaly",
    severity: "Review",
    confidence: 78.2,
    location: "20.5948° N, 78.9641° E",
    status: "Pending Review",
    time: "41 min ago",
    description:
      "Classification confidence is below the high-confidence threshold and requires human verification.",
  },
];

const getSeverityIcon = (severity) => {
  if (severity === "High") {
    return <ShieldAlert size={18} />;
  }

  if (severity === "Medium") {
    return <AlertTriangle size={18} />;
  }

  return <Clock3 size={18} />;
};

function Alerts() {
  const [alerts, setAlerts] = useState(initialAlerts);

  const acknowledgeAlert = (id) => {
    setAlerts((currentAlerts) =>
      currentAlerts.map((alert) =>
        alert.id === id
          ? { ...alert, status: "Acknowledged" }
          : alert
      )
    );
  };

  const resolveAlert = (id) => {
    setAlerts((currentAlerts) =>
      currentAlerts.map((alert) =>
        alert.id === id
          ? { ...alert, status: "Resolved" }
          : alert
      )
    );
  };

  const activeCount = alerts.filter(
    (alert) => alert.status === "Active"
  ).length;

  const highRiskCount = alerts.filter(
    (alert) => alert.severity === "High"
  ).length;

  const pendingCount = alerts.filter(
    (alert) => alert.status === "Pending Review"
  ).length;

  const resolvedCount = alerts.filter(
    (alert) => alert.status === "Resolved"
  ).length;

  return (
    <div className="alerts-page">

      {/* Header */}
      <div className="alerts-header">
        <div>
          <div className="alerts-eyebrow">
            <Bell size={15} />
            DISASTER RISK MONITORING
          </div>

          <h1>Alerts & Risk Monitoring</h1>

          <p>
            Monitor AI-generated marine anomaly alerts and prioritize
            detections requiring operational attention.
          </p>
        </div>

        <div className="alert-system-status">
          <span className="status-dot"></span>

          <div>
            <strong>Alert System Active</strong>
            <span>Monitoring survey detections</span>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="alert-summary-grid">

        <div className="alert-summary-card">
          <div className="summary-icon danger">
            <ShieldAlert size={21} />
          </div>

          <div>
            <span>High Risk</span>
            <strong>{highRiskCount}</strong>
          </div>

          <small>Requires attention</small>
        </div>

        <div className="alert-summary-card">
          <div className="summary-icon active">
            <Activity size={21} />
          </div>

          <div>
            <span>Active Alerts</span>
            <strong>{activeCount}</strong>
          </div>

          <small>Currently active</small>
        </div>

        <div className="alert-summary-card">
          <div className="summary-icon review">
            <Clock3 size={21} />
          </div>

          <div>
            <span>Pending Review</span>
            <strong>{pendingCount}</strong>
          </div>

          <small>Human verification</small>
        </div>

        <div className="alert-summary-card">
          <div className="summary-icon resolved">
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>Resolved</span>
            <strong>{resolvedCount}</strong>
          </div>

          <small>Completed alerts</small>
        </div>

      </div>

      {/* Main Content */}
      <div className="alerts-content">

        {/* Alert Feed */}
        <section className="alerts-panel">

          <div className="panel-header">
            <div>
              <h2>Alert Feed</h2>
              <span>Latest underwater survey events</span>
            </div>

            <div className="live-indicator">
              <span></span>
              LIVE
            </div>
          </div>

          <div className="alert-list">

            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`alert-card ${alert.severity.toLowerCase()}`}
              >

                <div className="alert-card-top">

                  <div className="alert-severity-icon">
                    {getSeverityIcon(alert.severity)}
                  </div>

                  <div className="alert-main">

                    <div className="alert-title-row">
                      <h3>{alert.title}</h3>

                      <span
                        className={`severity-badge ${alert.severity.toLowerCase()}`}
                      >
                        {alert.severity}
                      </span>
                    </div>

                    <p>{alert.description}</p>

                    <div className="alert-meta">

                      <span>
                        <strong>{alert.id}</strong>
                      </span>

                      <span>
                        Detection: <strong>{alert.detectionId}</strong>
                      </span>

                      <span>
                        Confidence: <strong>{alert.confidence}%</strong>
                      </span>

                    </div>

                    <div className="alert-location">
                      <MapPin size={14} />
                      {alert.location}
                    </div>

                  </div>

                  <div className="alert-time">
                    <Clock3 size={13} />
                    {alert.time}
                  </div>

                </div>

                <div className="alert-card-footer">

                  <div className="alert-status">
                    <span
                      className={`status-badge ${alert.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {alert.status}
                    </span>
                  </div>

                  <div className="alert-actions">

                    {alert.status === "Active" && (
                      <button
                        className="secondary-alert-button"
                        onClick={() => acknowledgeAlert(alert.id)}
                      >
                        Acknowledge
                      </button>
                    )}

                    {alert.status !== "Resolved" && (
                      <button
                        className="resolve-alert-button"
                        onClick={() => resolveAlert(alert.id)}
                      >
                        <CheckCircle2 size={14} />
                        Resolve
                      </button>
                    )}

                    <button className="alert-details-button">
                      View Details
                      <ChevronRight size={14} />
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>
        </section>

        {/* Risk Overview */}
        <aside className="risk-panel">

          <div className="risk-panel-header">
            <div>
              <h2>Risk Overview</h2>
              <span>Current survey assessment</span>
            </div>

            <ShieldAlert size={20} />
          </div>

          <div className="risk-meter">

            <div className="risk-meter-ring">
              <div>
                <strong>HIGH</strong>
                <span>Risk Level</span>
              </div>
            </div>

          </div>

          <div className="risk-description">
            <strong>Operational attention required</strong>

            <p>
              A high-confidence marine debris detection is currently
              active within the monitored survey area.
            </p>
          </div>

          <div className="risk-breakdown">

            <div>
              <span className="risk-dot high"></span>
              <span>High Risk</span>
              <strong>{highRiskCount}</strong>
            </div>

            <div>
              <span className="risk-dot medium"></span>
              <span>Medium Risk</span>
              <strong>
                {
                  alerts.filter(
                    (alert) => alert.severity === "Medium"
                  ).length
                }
              </strong>
            </div>

            <div>
              <span className="risk-dot review"></span>
              <span>Review Required</span>
              <strong>{pendingCount}</strong>
            </div>

          </div>

          <div className="monitoring-box">
            <Activity size={17} />

            <div>
              <strong>Continuous Monitoring</strong>
              <span>
                New AI detections will appear in the alert feed.
              </span>
            </div>
          </div>

        </aside>

      </div>

    </div>
  );
}

export default Alerts;
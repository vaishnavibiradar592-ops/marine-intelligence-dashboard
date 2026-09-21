import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AlertTriangle,
  Search,
  Eye,
  ShieldAlert,
  Clock3,
  CheckCircle2,
  MapPin,
  ArrowRight,
} from "lucide-react";
import "./Anomalies.css";

const anomalyData = [
  {
    id: "ANM-001",
    detectionId: "DET-003",
    type: "Unknown Sonar Pattern",
    description: "Unclassified seafloor object detected in survey track.",
    confidence: 78.2,
    risk: "Review",
    location: "20.5948, 78.9641",
    status: "Pending Review",
    time: "41 min ago",
  },
  {
    id: "ANM-002",
    detectionId: "DET-004",
    type: "Seafloor Irregularity",
    description: "Abnormal acoustic return observed near survey boundary.",
    confidence: 84.7,
    risk: "Medium",
    location: "20.5961, 78.9652",
    status: "Under Analysis",
    time: "1 hr ago",
  },
  {
    id: "ANM-003",
    detectionId: "DET-005",
    type: "Possible Metallic Object",
    description: "Strong reflective signature identified in sonar imagery.",
    confidence: 91.3,
    risk: "High",
    location: "20.5974, 78.9668",
    status: "Requires Verification",
    time: "2 hrs ago",
  },
  {
    id: "ANM-004",
    detectionId: "DET-006",
    type: "Acoustic Shadow",
    description: "Unexpected shadow region detected behind seafloor feature.",
    confidence: 73.5,
    risk: "Review",
    location: "20.5982, 78.9675",
    status: "Pending Review",
    time: "3 hrs ago",
  },
];

function Anomalies() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAnomaly, setSelectedAnomaly] = useState(null);

  const filteredAnomalies = anomalyData.filter((anomaly) => {
    const search = searchTerm.toLowerCase();

    return (
      anomaly.id.toLowerCase().includes(search) ||
      anomaly.type.toLowerCase().includes(search) ||
      anomaly.status.toLowerCase().includes(search)
    );
  });

  const getRiskClass = (risk) => {
    return risk.toLowerCase().replace(" ", "-");
  };

  const handleVerify = (anomaly) => {
    navigate("/verification");
  };

  return (
    <div className="anomalies-page">

      {/* Header */}
      <div className="anomalies-header">
        <div>
          <div className="anomalies-eyebrow">
            <AlertTriangle size={14} />
            ANOMALY INTELLIGENCE
          </div>

          <h1>Anomaly Detection & Monitoring</h1>

          <p>
            Review unusual sonar patterns, acoustic signatures and
            unclassified underwater objects identified during marine surveys.
          </p>
        </div>

        <div className="anomaly-live-status">
          <span className="live-dot"></span>
          AI MONITORING ACTIVE
        </div>
      </div>

      {/* Summary Cards */}
      <div className="anomaly-summary-grid">

        <div className="anomaly-summary-card">
          <div className="summary-icon">
            <AlertTriangle size={19} />
          </div>

          <div>
            <span>Total Anomalies</span>
            <strong>12</strong>
            <small>Detected this survey</small>
          </div>
        </div>

        <div className="anomaly-summary-card high">
          <div className="summary-icon">
            <ShieldAlert size={19} />
          </div>

          <div>
            <span>High Risk</span>
            <strong>4</strong>
            <small>Require attention</small>
          </div>
        </div>

        <div className="anomaly-summary-card review">
          <div className="summary-icon">
            <Clock3 size={19} />
          </div>

          <div>
            <span>Pending Review</span>
            <strong>5</strong>
            <small>Awaiting verification</small>
          </div>
        </div>

        <div className="anomaly-summary-card verified">
          <div className="summary-icon">
            <CheckCircle2 size={19} />
          </div>

          <div>
            <span>Verified</span>
            <strong>7</strong>
            <small>Human reviewed</small>
          </div>
        </div>

      </div>

      {/* Main Content */}
      <div className="anomaly-content">

        {/* Table Section */}
        <div className="anomaly-table-card">

          <div className="table-card-header">
            <div>
              <h2>Detected Anomalies</h2>
              <p>
                AI-identified patterns requiring analysis or human
                verification.
              </p>
            </div>

            <div className="anomaly-search">
              <Search size={16} />
              <input
                type="text"
                placeholder="Search anomalies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="anomaly-table-wrapper">
            <table className="anomaly-table">

              <thead>
                <tr>
                  <th>Anomaly</th>
                  <th>Classification</th>
                  <th>Confidence</th>
                  <th>Risk</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {filteredAnomalies.map((anomaly) => (
                  <tr key={anomaly.id}>

                    <td>
                      <div className="anomaly-id">
                        <span className="anomaly-symbol">
                          <AlertTriangle size={14} />
                        </span>

                        <div>
                          <strong>{anomaly.id}</strong>
                          <small>{anomaly.detectionId}</small>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="classification-cell">
                        <strong>{anomaly.type}</strong>
                        <small>{anomaly.description}</small>
                      </div>
                    </td>

                    <td>
                      <div className="confidence-cell">
                        <strong>{anomaly.confidence}%</strong>

                        <div className="confidence-bar">
                          <span
                            style={{
                              width: `${anomaly.confidence}%`,
                            }}
                          ></span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <span
                        className={`risk-badge ${getRiskClass(
                          anomaly.risk
                        )}`}
                      >
                        {anomaly.risk}
                      </span>
                    </td>

                    <td>
                      <div className="location-cell">
                        <MapPin size={13} />
                        {anomaly.location}
                      </div>
                    </td>

                    <td>
                      <span className="status-badge">
                        {anomaly.status}
                      </span>
                    </td>

                    <td>
                      <button
                        className="view-anomaly-btn"
                        onClick={() => setSelectedAnomaly(anomaly)}
                      >
                        <Eye size={15} />
                        View
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

            {filteredAnomalies.length === 0 && (
              <div className="empty-anomalies">
                <AlertTriangle size={24} />
                <p>No anomalies found.</p>
              </div>
            )}
          </div>
        </div>

        {/* Intelligence Panel */}
        <div className="anomaly-intelligence-card">

          <div className="intelligence-header">
            <div>
              <span className="panel-label">AI ANALYSIS</span>
              <h2>Anomaly Intelligence</h2>
            </div>

            <div className="intelligence-status">
              <span></span>
              Live
            </div>
          </div>

          <div className="intelligence-visual">
            <div className="sonar-ring ring-one"></div>
            <div className="sonar-ring ring-two"></div>
            <div className="sonar-ring ring-three"></div>

            <div className="sonar-sweep"></div>

            <div className="anomaly-target target-one"></div>
            <div className="anomaly-target target-two"></div>
            <div className="anomaly-target target-three"></div>

            <div className="sonar-center"></div>
          </div>

          <div className="intelligence-stats">

            <div>
              <span>Pattern Analysis</span>
              <strong>Active</strong>
            </div>

            <div>
              <span>Model Confidence</span>
              <strong>88.7%</strong>
            </div>

            <div>
              <span>Objects Flagged</span>
              <strong>12</strong>
            </div>

          </div>

          <button
            className="open-verification-btn"
            onClick={() => navigate("/verification")}
          >
            Open Verification Queue
            <ArrowRight size={16} />
          </button>

        </div>

      </div>

      {/* Selected Anomaly Modal */}
      {selectedAnomaly && (
        <div
          className="anomaly-modal-overlay"
          onClick={() => setSelectedAnomaly(null)}
        >
          <div
            className="anomaly-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="modal-header">
              <div>
                <span className="panel-label">ANOMALY DETAILS</span>
                <h2>{selectedAnomaly.id}</h2>
              </div>

              <button
                className="modal-close"
                onClick={() => setSelectedAnomaly(null)}
              >
                ×
              </button>
            </div>

            <div className="modal-sonar-preview">
              <div className="modal-grid"></div>
              <div className="modal-target"></div>
              <span>SONAR SIGNATURE</span>
            </div>

            <div className="modal-details">

              <div>
                <span>Classification</span>
                <strong>{selectedAnomaly.type}</strong>
              </div>

              <div>
                <span>AI Confidence</span>
                <strong>{selectedAnomaly.confidence}%</strong>
              </div>

              <div>
                <span>Risk Level</span>
                <strong>{selectedAnomaly.risk}</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>{selectedAnomaly.location}</strong>
              </div>

              <div className="modal-description">
                <span>Analysis</span>
                <p>{selectedAnomaly.description}</p>
              </div>

            </div>

            <div className="modal-actions">

              <button
                className="secondary-modal-btn"
                onClick={() => setSelectedAnomaly(null)}
              >
                Close
              </button>

              <button
                className="primary-modal-btn"
                onClick={() => handleVerify(selectedAnomaly)}
              >
                Send for Verification
                <ArrowRight size={15} />
              </button>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Anomalies;
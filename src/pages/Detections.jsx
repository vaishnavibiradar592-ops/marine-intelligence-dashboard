import {
  ScanSearch,
  CheckCircle2,
  AlertTriangle,
  MapPin,
  Target,
  Clock3,
  Layers3,
  ChevronRight,
  Eye,
  ShieldAlert,
} from "lucide-react";

const detections = [
  {
    id: "DET-001",
    type: "Marine Debris",
    className: "Plastic / Floating Debris",
    confidence: 96.4,
    risk: "High",
    location: "20.5937° N, 78.9629° E",
  },
  {
    id: "DET-002",
    type: "Metal Object",
    className: "Possible Metallic Debris",
    confidence: 91.8,
    risk: "Medium",
    location: "20.5942° N, 78.9635° E",
  },
  {
    id: "DET-003",
    type: "Anomaly",
    className: "Unclassified Seafloor Object",
    confidence: 78.2,
    risk: "Review",
    location: "20.5948° N, 78.9641° E",
  },
];


const getRiskClass = (risk) => {

  if (risk === "High") {
    return "risk-high";
  }

  if (risk === "Medium") {
    return "risk-medium";
  }

  return "risk-review";
};


const Detections = () => {

  return (

    <div className="detections-page">

      {/* =================================
          HEADER
      ================================= */}

      <div className="detections-header">

        <div>

          <span className="eyebrow">
            AI ANALYSIS
          </span>

          <h2>
            Detection Results
          </h2>

          <p>
            AI-generated marine debris and underwater
            anomaly detections from the latest sonar survey.
          </p>

        </div>


        <div className="analysis-complete-badge">

          <CheckCircle2 size={16} />

          Analysis Complete

        </div>

      </div>


      {/* =================================
          SUMMARY CARDS
      ================================= */}

      <div className="detection-summary">

        <div className="detection-stat-card">

          <div className="stat-icon cyan">
            <Target size={20} />
          </div>

          <div>

            <span>
              TOTAL DETECTIONS
            </span>

            <strong>
              03
            </strong>

          </div>

        </div>


        <div className="detection-stat-card">

          <div className="stat-icon red">
            <ShieldAlert size={20} />
          </div>

          <div>

            <span>
              HIGH RISK
            </span>

            <strong>
              01
            </strong>

          </div>

        </div>


        <div className="detection-stat-card">

          <div className="stat-icon blue">
            <ScanSearch size={20} />
          </div>

          <div>

            <span>
              MODEL CONFIDENCE
            </span>

            <strong>
              88.8%
            </strong>

          </div>

        </div>


        <div className="detection-stat-card">

          <div className="stat-icon green">
            <Clock3 size={20} />
          </div>

          <div>

            <span>
              PROCESSING TIME
            </span>

            <strong>
              2.8s
            </strong>

          </div>

        </div>

      </div>


      {/* =================================
          MAIN ANALYSIS GRID
      ================================= */}

      <div className="detection-main-grid">


        {/* =================================
            SONAR VISUALIZATION
        ================================= */}

        <section className="detection-card sonar-result-card">

          <div className="detection-card-header">

            <div>

              <h3>
                Sonar Analysis
              </h3>

              <p>
                SURVEY-2026-001 · AI detection overlay
              </p>

            </div>

            <div className="model-badge">
              AI MODEL · ACTIVE
            </div>

          </div>


          {/* SONAR VISUAL */}

          <div className="sonar-analysis-view">

            <div className="sonar-grid-lines" />

            <div className="sonar-water-gradient" />


            {/* simulated sonar signal */}

            <div className="sonar-wave wave-one" />
            <div className="sonar-wave wave-two" />
            <div className="sonar-wave wave-three" />


            {/* DETECTION 1 */}

            <div className="detection-box box-one">

              <span className="box-label">
                DET-001 · 96.4%
              </span>

            </div>


            {/* DETECTION 2 */}

            <div className="detection-box box-two">

              <span className="box-label">
                DET-002 · 91.8%
              </span>

            </div>


            {/* DETECTION 3 */}

            <div className="detection-box box-three">

              <span className="box-label">
                ANOMALY · 78.2%
              </span>

            </div>


            {/* CENTER SCAN */}

            <div className="scan-line" />


            <div className="sonar-overlay-info">

              <span>
                SIDE-SCAN SONAR
              </span>

              <span>
                RANGE 100m
              </span>

              <span>
                AUTO DETECTION
              </span>

            </div>

          </div>


          {/* IMAGE FOOTER */}

          <div className="sonar-view-footer">

            <div>

              <span>
                IMAGE STATUS
              </span>

              <strong>
                ANALYZED
              </strong>

            </div>

            <div>

              <span>
                DETECTION ENGINE
              </span>

              <strong>
                MarineAI Vision
              </strong>

            </div>

            <div>

              <span>
                SURVEY ID
              </span>

              <strong>
                SURVEY-2026-001
              </strong>

            </div>

          </div>

        </section>


        {/* =================================
            DETECTION LIST
        ================================= */}

        <section className="detection-card">

          <div className="detection-card-header">

            <div>

              <h3>
                Detected Objects
              </h3>

              <p>
                Objects identified by the AI model.
              </p>

            </div>

            <div className="objects-count">
              03
            </div>

          </div>


          <div className="detection-list">

            {detections.map((detection) => (

              <div
                className="detection-list-item"
                key={detection.id}
              >

                <div className="detection-item-top">

                  <div className="detection-type-icon">

                    {detection.risk === "High" ? (
                      <AlertTriangle size={17} />
                    ) : (
                      <Target size={17} />
                    )}

                  </div>

                  <div className="detection-title">

                    <strong>
                      {detection.type}
                    </strong>

                    <span>
                      {detection.id}
                    </span>

                  </div>

                  <span
                    className={`risk-badge ${getRiskClass(
                      detection.risk
                    )}`}
                  >
                    {detection.risk}
                  </span>

                </div>


                <div className="detection-class">

                  {detection.className}

                </div>


                <div className="confidence-row">

                  <div className="confidence-label">

                    <span>
                      Confidence
                    </span>

                    <strong>
                      {detection.confidence}%
                    </strong>

                  </div>

                  <div className="confidence-bar">

                    <div
                      style={{
                        width: `${detection.confidence}%`,
                      }}
                    />

                  </div>

                </div>


                <div className="detection-location">

                  <MapPin size={13} />

                  {detection.location}

                </div>


                <button className="view-detection-button">

                  <Eye size={14} />

                  Review Detection

                  <ChevronRight size={14} />

                </button>

              </div>

            ))}

          </div>

        </section>

      </div>


      {/* =================================
          ANALYSIS INFORMATION
      ================================= */}

      <div className="detection-bottom-grid">


        <div className="analysis-info-card">

          <div className="analysis-info-icon">

            <Layers3 size={19} />

          </div>

          <div>

            <strong>
              Detection Pipeline
            </strong>

            <p>
              Image preprocessing → Object detection →
              Classification → Confidence scoring →
              Anomaly assessment
            </p>

          </div>

        </div>


        <div className="analysis-info-card">

          <div className="analysis-info-icon">

            <MapPin size={19} />

          </div>

          <div>

            <strong>
              Survey Coverage
            </strong>

            <p>
              2.4 km surveyed · 100m sonar range ·
              14.6 hectares analyzed
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Detections;
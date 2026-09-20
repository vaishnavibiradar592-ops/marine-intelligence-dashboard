import { useState } from "react";
import {
  Map,
  Layers3,
  Navigation,
  LocateFixed,
  ZoomIn,
  ZoomOut,
  Maximize,
  MapPin,
  AlertTriangle,
  CheckCircle2,
  Target,
  Crosshair,
  Route,
  Activity,
} from "lucide-react";


const mapDetections = [
  {
    id: "DET-001",
    type: "Marine Debris",
    confidence: 96.4,
    risk: "High",
    latitude: "20.5937",
    longitude: "78.9629",
    status: "Verified",
    position: {
      left: "42%",
      top: "42%",
    },
  },
  {
    id: "DET-002",
    type: "Metal Object",
    confidence: 91.8,
    risk: "Medium",
    latitude: "20.5942",
    longitude: "78.9635",
    status: "Verified",
    position: {
      left: "62%",
      top: "57%",
    },
  },
  {
    id: "DET-003",
    type: "Unknown Anomaly",
    confidence: 78.2,
    risk: "Review",
    latitude: "20.5948",
    longitude: "78.9641",
    status: "Pending",
    position: {
      left: "73%",
      top: "31%",
    },
  },
];


const GISMap = () => {

  const [selectedDetection, setSelectedDetection] =
    useState(mapDetections[0]);

  const [showLayers, setShowLayers] =
    useState(true);


  return (

    <div className="gis-page">

      {/* =================================
          HEADER
      ================================= */}

      <div className="gis-header">

        <div>

          <span className="eyebrow">
            SPATIAL INTELLIGENCE
          </span>

          <h2>
            GIS Survey Map
          </h2>

          <p>
            Explore AI detections, survey coverage and
            spatial anomaly locations.
          </p>

        </div>


        <div className="gis-live-status">

          <span className="gis-live-dot" />

          LIVE SURVEY VIEW

        </div>

      </div>


      {/* =================================
          MAP CONTAINER
      ================================= */}

      <div className="gis-layout">


        {/* =================================
            MAP
        ================================= */}

        <section className="gis-map-card">

          {/* MAP TOOLBAR */}

          <div className="gis-toolbar">

            <div className="map-title">

              <Map size={16} />

              <div>

                <strong>
                  SURVEY-2026-001
                </strong>

                <span>
                  Coastal survey area
                </span>

              </div>

            </div>


            <div className="map-tools">

              <button
                title="Locate survey"
              >
                <LocateFixed size={16} />
              </button>

              <button
                title="Zoom in"
              >
                <ZoomIn size={16} />
              </button>

              <button
                title="Zoom out"
              >
                <ZoomOut size={16} />
              </button>

              <button
                title="Fullscreen"
              >
                <Maximize size={16} />
              </button>

            </div>

          </div>


          {/* =================================
              MAP VISUAL
          ================================= */}

          <div className="gis-map">

            {/* GRID */}

            <div className="gis-grid" />

            {/* WATER */}

            <div className="gis-water-pattern" />


            {/* DEPTH CONTOURS */}

            <div className="depth-contour contour-one" />
            <div className="depth-contour contour-two" />
            <div className="depth-contour contour-three" />


            {/* SURVEY AREA */}

            <div className="survey-boundary">

              <span>
                SURVEY AREA
              </span>

            </div>


            {/* SURVEY TRACK */}

            <svg
              className="survey-track"
              viewBox="0 0 800 500"
              preserveAspectRatio="none"
            >

              <path
                d="
                  M 80 400
                  C 180 330,
                    100 280,
                    230 230
                  S 360 120,
                    460 190
                  S 610 340,
                    720 230
                "
              />

            </svg>


            {/* TRACK LABEL */}

            <div className="track-label">

              <Route size={13} />

              SONAR SURVEY TRACK

            </div>


            {/* DETECTION MARKERS */}

            {mapDetections.map((detection) => (

              <button
                key={detection.id}
                className={`map-marker marker-${detection.risk.toLowerCase()} ${
                  selectedDetection.id === detection.id
                    ? "selected"
                    : ""
                }`}
                style={{
                  left: detection.position.left,
                  top: detection.position.top,
                }}
                onClick={() =>
                  setSelectedDetection(detection)
                }
                title={detection.id}
              >

                <span className="marker-pulse" />

                <span className="marker-icon">

                  {detection.risk === "High" ? (
                    <AlertTriangle size={13} />
                  ) : detection.risk === "Medium" ? (
                    <Target size={13} />
                  ) : (
                    <Crosshair size={13} />
                  )}

                </span>

              </button>

            ))}


            {/* MAP COORDINATES */}

            <div className="map-coordinate top-left">
              20.596° N
            </div>

            <div className="map-coordinate bottom-left">
              20.592° N
            </div>

            <div className="map-coordinate top-right">
              78.968° E
            </div>

            <div className="map-coordinate bottom-right">
              78.957° E
            </div>


            {/* SCALE */}

            <div className="map-scale">

              <div className="scale-line" />

              <span>
                500 m
              </span>

            </div>


            {/* SELECTED DETECTION */}

            <div className="map-selection-card">

              <div className="selection-header">

                <div>

                  <span>
                    SELECTED DETECTION
                  </span>

                  <strong>
                    {selectedDetection.id}
                  </strong>

                </div>

                <span
                  className={
                    selectedDetection.status ===
                    "Verified"
                      ? "verified-map-status"
                      : "pending-map-status"
                  }
                >
                  {selectedDetection.status}
                </span>

              </div>


              <div className="selection-type">

                <div className="selection-type-icon">

                  {selectedDetection.risk ===
                  "High" ? (
                    <AlertTriangle size={17} />
                  ) : (
                    <Target size={17} />
                  )}

                </div>

                <div>

                  <strong>
                    {selectedDetection.type}
                  </strong>

                  <span>
                    AI confidence{" "}
                    {selectedDetection.confidence}%
                  </span>

                </div>

              </div>


              <div className="selection-coordinates">

                <div>

                  <span>
                    LATITUDE
                  </span>

                  <strong>
                    {selectedDetection.latitude}°
                  </strong>

                </div>

                <div>

                  <span>
                    LONGITUDE
                  </span>

                  <strong>
                    {selectedDetection.longitude}°
                  </strong>

                </div>

              </div>

            </div>


            {/* NORTH */}

            <div className="north-indicator">

              <Navigation size={18} />

              <span>
                N
              </span>

            </div>

          </div>


          {/* MAP FOOTER */}

          <div className="gis-map-footer">

            <div>

              <span>
                SURVEY COVERAGE
              </span>

              <strong>
                14.6 ha
              </strong>

            </div>

            <div>

              <span>
                TRACK LENGTH
              </span>

              <strong>
                2.4 km
              </strong>

            </div>

            <div>

              <span>
                DETECTIONS
              </span>

              <strong>
                03
              </strong>

            </div>

            <div>

              <span>
                LAST SYNC
              </span>

              <strong>
                Just now
              </strong>

            </div>

          </div>

        </section>


        {/* =================================
            SIDE PANEL
        ================================= */}

        <aside className="gis-side-panel">


          {/* LAYERS */}

          <div className="gis-panel-card">

            <div className="gis-panel-header">

              <div>

                <h3>
                  Map Layers
                </h3>

                <p>
                  Control visible survey data.
                </p>

              </div>

              <button
                className="layer-toggle"
                onClick={() =>
                  setShowLayers(!showLayers)
                }
              >
                <Layers3 size={16} />
              </button>

            </div>


            {showLayers && (

              <div className="layer-list">

                <div className="layer-item">

                  <span className="layer-color survey" />

                  <div>

                    <strong>
                      Survey Boundary
                    </strong>

                    <span>
                      Active survey region
                    </span>

                  </div>

                  <div className="layer-switch active" />

                </div>


                <div className="layer-item">

                  <span className="layer-color track" />

                  <div>

                    <strong>
                      Sonar Track
                    </strong>

                    <span>
                      Survey vessel path
                    </span>

                  </div>

                  <div className="layer-switch active" />

                </div>


                <div className="layer-item">

                  <span className="layer-color debris" />

                  <div>

                    <strong>
                      AI Detections
                    </strong>

                    <span>
                      Detected objects
                    </span>

                  </div>

                  <div className="layer-switch active" />

                </div>


                <div className="layer-item">

                  <span className="layer-color anomaly" />

                  <div>

                    <strong>
                      Anomalies
                    </strong>

                    <span>
                      Unclassified objects
                    </span>

                  </div>

                  <div className="layer-switch active" />

                </div>

              </div>

            )}

          </div>


          {/* LEGEND */}

          <div className="gis-panel-card">

            <div className="gis-panel-header">

              <div>

                <h3>
                  Detection Legend
                </h3>

                <p>
                  AI classification status.
                </p>

              </div>

            </div>


            <div className="gis-legend">

              <div>

                <span className="legend-marker high" />

                <span>
                  High Risk
                </span>

              </div>

              <div>

                <span className="legend-marker medium" />

                <span>
                  Medium Risk
                </span>

              </div>

              <div>

                <span className="legend-marker review" />

                <span>
                  Requires Review
                </span>

              </div>

              <div>

                <span className="legend-marker verified" />

                <span>
                  Verified
                </span>

              </div>

            </div>

          </div>


          {/* SURVEY INFO */}

          <div className="gis-panel-card survey-info-card">

            <div className="gis-panel-header">

              <div>

                <h3>
                  Survey Information
                </h3>

                <p>
                  Current survey metadata.
                </p>

              </div>

              <Activity size={17} />

            </div>


            <div className="survey-info-list">

              <div>

                <span>
                  SURVEY ID
                </span>

                <strong>
                  SURVEY-2026-001
                </strong>

              </div>

              <div>

                <span>
                  SONAR RANGE
                </span>

                <strong>
                  100 m
                </strong>

              </div>

              <div>

                <span>
                  SURVEY DEPTH
                </span>

                <strong>
                  32 m
                </strong>

              </div>

              <div>

                <span>
                  PLATFORM
                </span>

                <strong>
                  NIOT Survey Vessel
                </strong>

              </div>

            </div>

          </div>


          {/* VERIFIED STATUS */}

          <div className="gis-verified-card">

            <CheckCircle2 size={18} />

            <div>

              <strong>
                2 detections verified
              </strong>

              <span>
                1 anomaly awaiting review
              </span>

            </div>

          </div>

        </aside>

      </div>

    </div>
  );
};

export default GISMap;
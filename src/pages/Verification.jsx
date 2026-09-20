import { useState } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  MapPin,
  Target,
  UserCheck,
  MessageSquare,
  ArrowLeft,
  Save,
  RotateCcw,
} from "lucide-react";

const Verification = () => {

  const [reviewStatus, setReviewStatus] =
    useState("pending");

  const [classification, setClassification] =
    useState("Marine Debris");

  const [remarks, setRemarks] =
    useState("");


  const handleVerification = (status) => {

    setReviewStatus(status);
  };


  const handleSave = () => {

    if (reviewStatus === "pending") {
      alert("Please select a verification decision.");
      return;
    }

    alert(
      `Detection ${reviewStatus === "verified"
        ? "verified"
        : "rejected"
      } successfully.`
    );
  };


  const resetReview = () => {

    setReviewStatus("pending");

    setClassification("Marine Debris");

    setRemarks("");
  };


  return (

    <div className="verification-page">

      {/* =================================
          HEADER
      ================================= */}

      <div className="verification-header">

        <div>

          <span className="eyebrow">
            HUMAN-IN-THE-LOOP REVIEW
          </span>

          <h2>
            Detection Verification
          </h2>

          <p>
            Review AI-generated detections before they
            are added to the confirmed marine survey record.
          </p>

        </div>


        <div className="verification-queue">

          <span className="queue-dot" />

          3 detections awaiting review

        </div>

      </div>


      {/* =================================
          MAIN CONTENT
      ================================= */}

      <div className="verification-grid">


        {/* =================================
            LEFT: DETECTION
        ================================= */}

        <section className="verification-card">

          <div className="verification-card-header">

            <div>

              <h3>
                Detection DET-001
              </h3>

              <p>
                AI-generated detection requiring operator review
              </p>

            </div>

            <span className="pending-badge">
              PENDING REVIEW
            </span>

          </div>


          {/* IMAGE */}

          <div className="verification-image">

            <div className="verification-grid-lines" />

            <div className="verification-glow" />

            <div className="verification-target">

              <span className="target-corner top-left" />
              <span className="target-corner top-right" />
              <span className="target-corner bottom-left" />
              <span className="target-corner bottom-right" />

              <span className="target-label">
                DET-001 · 96.4%
              </span>

            </div>

            <div className="verification-crosshair">

              <span />
              <span />

            </div>

            <div className="verification-image-label">

              SIDE-SCAN SONAR · DETECTION VIEW

            </div>

          </div>


          {/* AI RESULT */}

          <div className="ai-result-section">

            <div className="section-mini-title">

              <Target size={15} />

              AI MODEL RESULT

            </div>


            <div className="ai-result-grid">

              <div>

                <span>
                  Classification
                </span>

                <strong>
                  Marine Debris
                </strong>

              </div>

              <div>

                <span>
                  Confidence
                </span>

                <strong className="confidence-value">
                  96.4%
                </strong>

              </div>

              <div>

                <span>
                  Risk Level
                </span>

                <strong className="high-risk-text">
                  HIGH
                </strong>

              </div>

            </div>

          </div>


          {/* LOCATION */}

          <div className="verification-location">

            <MapPin size={16} />

            <div>

              <span>
                DETECTION LOCATION
              </span>

              <strong>
                20.5937° N, 78.9629° E
              </strong>

            </div>

          </div>

        </section>


        {/* =================================
            RIGHT: OPERATOR REVIEW
        ================================= */}

        <section className="verification-card review-card">

          <div className="review-header">

            <div className="review-icon">

              <UserCheck size={21} />

            </div>

            <div>

              <h3>
                Operator Review
              </h3>

              <p>
                Validate or correct the AI prediction.
              </p>

            </div>

          </div>


          {/* DECISION */}

          <div className="review-section">

            <label>
              Verification Decision
            </label>


            <div className="decision-buttons">

              <button
                type="button"
                className={
                  reviewStatus === "verified"
                    ? "decision-button verified active"
                    : "decision-button verified"
                }
                onClick={() =>
                  handleVerification("verified")
                }
              >

                <CheckCircle2 size={18} />

                <span>

                  <strong>
                    Confirm
                  </strong>

                  <small>
                    AI result is correct
                  </small>

                </span>

              </button>


              <button
                type="button"
                className={
                  reviewStatus === "rejected"
                    ? "decision-button rejected active"
                    : "decision-button rejected"
                }
                onClick={() =>
                  handleVerification("rejected")
                }
              >

                <XCircle size={18} />

                <span>

                  <strong>
                    Reject
                  </strong>

                  <small>
                    False or invalid detection
                  </small>

                </span>

              </button>

            </div>

          </div>


          {/* CLASSIFICATION */}

          <div className="review-section">

            <label>
              Confirm Classification
            </label>

            <select
              value={classification}
              onChange={(event) =>
                setClassification(event.target.value)
              }
              className="classification-select"
            >

              <option>
                Marine Debris
              </option>

              <option>
                Plastic Debris
              </option>

              <option>
                Metal Object
              </option>

              <option>
                Fishing Equipment
              </option>

              <option>
                Natural Object
              </option>

              <option>
                Unknown Anomaly
              </option>

              <option>
                False Detection
              </option>

            </select>

          </div>


          {/* RISK */}

          <div className="risk-review-box">

            <AlertTriangle size={18} />

            <div>

              <strong>
                AI Risk Assessment: High
              </strong>

              <p>
                This detection has a high confidence score
                and may require field-level attention.
              </p>

            </div>

          </div>


          {/* REMARKS */}

          <div className="review-section">

            <label>
              Operator Remarks
            </label>

            <div className="remarks-input">

              <MessageSquare size={16} />

              <textarea
                placeholder="Add observations or verification notes..."
                value={remarks}
                onChange={(event) =>
                  setRemarks(event.target.value)
                }
              />

            </div>

          </div>


          {/* STATUS */}

          {reviewStatus !== "pending" && (

            <div
              className={
                reviewStatus === "verified"
                  ? "review-result verified-result"
                  : "review-result rejected-result"
              }
            >

              {reviewStatus === "verified" ? (
                <CheckCircle2 size={18} />
              ) : (
                <XCircle size={18} />
              )}

              <span>

                Detection marked as{" "}

                <strong>
                  {reviewStatus}
                </strong>

              </span>

            </div>

          )}


          {/* ACTIONS */}

          <div className="review-actions">

            <button
              type="button"
              className="reset-review-button"
              onClick={resetReview}
            >

              <RotateCcw size={15} />

              Reset

            </button>


            <button
              type="button"
              className="save-review-button"
              onClick={handleSave}
            >

              <Save size={16} />

              Save Verification

            </button>

          </div>

        </section>

      </div>


      {/* =================================
          REVIEW WORKFLOW
      ================================= */}

      <div className="verification-workflow">

        <div className="workflow-step completed">

          <div className="workflow-number">
            <CheckCircle2 size={15} />
          </div>

          <div>

            <strong>
              AI Detection
            </strong>

            <span>
              Automatically identified
            </span>

          </div>

        </div>


        <div className="workflow-line active" />


        <div
          className={`workflow-step ${
            reviewStatus !== "pending"
              ? "completed"
              : "current"
          }`}
        >

          <div className="workflow-number">

            {reviewStatus !== "pending" ? (
              <CheckCircle2 size={15} />
            ) : (
              "2"
            )}

          </div>

          <div>

            <strong>
              Human Verification
            </strong>

            <span>
              Operator review
            </span>

          </div>

        </div>


        <div className="workflow-line" />


        <div className="workflow-step">

          <div className="workflow-number">
            3
          </div>

          <div>

            <strong>
              Confirmed Record
            </strong>

            <span>
              Added to survey database
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Verification;
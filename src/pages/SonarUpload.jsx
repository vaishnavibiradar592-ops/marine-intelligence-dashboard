import { useRef, useState } from "react";
import {
  Upload,
  Image as ImageIcon,
  X,
  FileImage,
  MapPin,
  Navigation,
  Waves,
  CalendarDays,
  Gauge,
  Ship,
  ScanSearch,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  LoaderCircle,
} from "lucide-react";

const MAX_FILE_SIZE = 20 * 1024 * 1024;

const ALLOWED_TYPES = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/tiff",
];

const SonarUpload = () => {

  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [dragActive, setDragActive] = useState(false);

  const [fileError, setFileError] = useState("");

  const [processingStatus, setProcessingStatus] =
    useState("idle");

  const [formError, setFormError] = useState("");

  const [formData, setFormData] = useState({
    surveyId: "",
    latitude: "",
    longitude: "",
    depth: "",
    sonarRange: "",
    surveyDate: "",
    vessel: "",
  });


  /* =========================================
     FILE VALIDATION
  ========================================= */

  const validateFile = (file) => {

    if (!file) {
      return "Please select a file.";
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return "Unsupported file format. Please upload PNG, JPG, JPEG or TIFF.";
    }

    if (file.size > MAX_FILE_SIZE) {
      return "File size must be less than 20 MB.";
    }

    return "";
  };


  /* =========================================
     FILE HANDLING
  ========================================= */

  const handleFile = (file) => {

    setFileError("");

    const error = validateFile(file);

    if (error) {
      setFileError(error);
      return;
    }

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    const imageUrl = URL.createObjectURL(file);

    setSelectedFile(file);
    setPreview(imageUrl);

    setProcessingStatus("idle");
  };


  const handleFileInput = (event) => {

    const file = event.target.files?.[0];

    handleFile(file);
  };


  /* =========================================
     DRAG & DROP
  ========================================= */

  const handleDragOver = (event) => {

    event.preventDefault();

    setDragActive(true);
  };


  const handleDragLeave = () => {

    setDragActive(false);
  };


  const handleDrop = (event) => {

    event.preventDefault();

    setDragActive(false);

    const file = event.dataTransfer.files?.[0];

    handleFile(file);
  };


  /* =========================================
     REMOVE FILE
  ========================================= */

  const removeFile = () => {

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setSelectedFile(null);
    setPreview(null);
    setFileError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };


  /* =========================================
     FORM HANDLING
  ========================================= */

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setFormError("");
  };


  /* =========================================
     FORM VALIDATION
  ========================================= */

  const validateForm = () => {

    if (!selectedFile) {
      return "Please upload a Side-Scan Sonar image.";
    }

    if (!formData.surveyId.trim()) {
      return "Survey ID is required.";
    }

    if (!formData.latitude) {
      return "Latitude is required.";
    }

    if (!formData.longitude) {
      return "Longitude is required.";
    }

    const latitude = Number(formData.latitude);

    const longitude = Number(formData.longitude);

    if (latitude < -90 || latitude > 90) {
      return "Latitude must be between -90 and 90.";
    }

    if (longitude < -180 || longitude > 180) {
      return "Longitude must be between -180 and 180.";
    }

    if (
      formData.depth &&
      Number(formData.depth) < 0
    ) {
      return "Depth cannot be negative.";
    }

    if (
      formData.sonarRange &&
      Number(formData.sonarRange) <= 0
    ) {
      return "Sonar range must be greater than 0.";
    }

    return "";
  };


  /* =========================================
     START AI ANALYSIS
  ========================================= */

  const handleSubmit = async (event) => {

    event.preventDefault();

    const error = validateForm();

    if (error) {
      setFormError(error);
      return;
    }

    setFormError("");

    /*
      TEMPORARY DEMO PROCESSING

      Later this will be replaced with:
      axios.post("/api/sonar/analyze", formData)
    */

    setProcessingStatus("uploading");

    await new Promise((resolve) =>
      setTimeout(resolve, 1200)
    );

    setProcessingStatus("processing");

    await new Promise((resolve) =>
      setTimeout(resolve, 2500)
    );

    setProcessingStatus("complete");
  };


  /* =========================================
     RENDER
  ========================================= */

  return (

    <div className="sonar-page">

      {/* =================================
          HEADER
      ================================= */}

      <div className="sonar-page-header">

        <div>

          <span className="eyebrow">
            SONAR DATA INGESTION
          </span>

          <h2>
            Upload Sonar Survey
          </h2>

          <p>
            Upload Side-Scan Sonar imagery and survey
            metadata for AI-powered marine analysis.
          </p>

        </div>


        <div
          className={`survey-status ${
            processingStatus === "complete"
              ? "status-complete"
              : ""
          }`}
        >

          {processingStatus === "complete" ? (
            <CheckCircle2 size={14} />
          ) : (
            <span className="online-dot" />
          )}

          {processingStatus === "complete"
            ? "Analysis Ready"
            : "Ready for Analysis"}

        </div>

      </div>


      {/* =================================
          CONTENT
      ================================= */}

      <div className="sonar-content-grid">


        {/* =================================
            UPLOAD CARD
        ================================= */}

        <section className="sonar-card upload-card">

          <div className="sonar-card-header">

            <div>

              <h3>
                Sonar Imagery
              </h3>

              <p>
                Upload the Side-Scan Sonar image
                captured during your survey.
              </p>

            </div>

            <div className="card-icon cyan">
              <FileImage size={20} />
            </div>

          </div>


          {!selectedFile ? (

            <div
              className={`sonar-dropzone ${
                dragActive ? "drag-active" : ""
              } ${
                fileError ? "dropzone-error" : ""
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() =>
                fileInputRef.current?.click()
              }
            >

              <div className="upload-icon-large">

                <Upload size={28} />

              </div>

              <h4>
                Drop your sonar image here
              </h4>

              <p>
                or click to browse from your device
              </p>

              <span className="file-types">
                PNG · JPG · JPEG · TIFF · MAX 20 MB
              </span>

              <input
                ref={fileInputRef}
                type="file"
                accept=".png,.jpg,.jpeg,.tif,.tiff"
                onChange={handleFileInput}
                hidden
              />

            </div>

          ) : (

            <div className="sonar-preview-container">

              <div className="preview-image-wrapper">

                <img
                  src={preview}
                  alt="Uploaded Side-Scan Sonar preview"
                />

                <div className="preview-overlay">

                  <span>
                    SONAR PREVIEW
                  </span>

                </div>

                <button
                  className="remove-file-button"
                  onClick={removeFile}
                  type="button"
                >
                  <X size={17} />
                </button>

              </div>


              <div className="file-information">

                <div className="file-icon">

                  <ImageIcon size={19} />

                </div>

                <div>

                  <strong>
                    {selectedFile.name}
                  </strong>

                  <span>
                    {(
                      selectedFile.size /
                      1024 /
                      1024
                    ).toFixed(2)}
                    {" MB"}
                  </span>

                </div>

                <div className="file-valid">

                  <CheckCircle2 size={17} />

                  Valid

                </div>

              </div>

            </div>

          )}


          {/* FILE ERROR */}

          {fileError && (

            <div className="upload-error">

              <AlertCircle size={17} />

              <span>
                {fileError}
              </span>

            </div>

          )}


          {/* PIPELINE */}

          <div className="processing-info">

            <ScanSearch size={17} />

            <div>

              <strong>
                AI Detection Pipeline
              </strong>

              <span>
                Object detection · Classification ·
                Anomaly scoring
              </span>

            </div>

          </div>

        </section>


        {/* =================================
            SURVEY INFORMATION
        ================================= */}

        <section className="sonar-card survey-card">

          <div className="sonar-card-header">

            <div>

              <h3>
                Survey Information
              </h3>

              <p>
                Provide metadata associated with
                the sonar acquisition.
              </p>

            </div>

            <div className="card-icon blue">

              <Navigation size={20} />

            </div>

          </div>


          <form onSubmit={handleSubmit}>

            {/* SURVEY ID */}

            <div className="sonar-form-group">

              <label>
                Survey ID
                <span>*</span>
              </label>

              <div className="sonar-input">

                <ScanSearch size={17} />

                <input
                  type="text"
                  name="surveyId"
                  placeholder="e.g. SURVEY-2026-001"
                  value={formData.surveyId}
                  onChange={handleChange}
                />

              </div>

            </div>


            {/* LOCATION */}

            <div className="two-column-fields">

              <div className="sonar-form-group">

                <label>
                  Latitude
                  <span>*</span>
                </label>

                <div className="sonar-input">

                  <MapPin size={17} />

                  <input
                    type="number"
                    step="any"
                    name="latitude"
                    placeholder="20.5937"
                    value={formData.latitude}
                    onChange={handleChange}
                  />

                </div>

              </div>


              <div className="sonar-form-group">

                <label>
                  Longitude
                  <span>*</span>
                </label>

                <div className="sonar-input">

                  <Navigation size={17} />

                  <input
                    type="number"
                    step="any"
                    name="longitude"
                    placeholder="78.9629"
                    value={formData.longitude}
                    onChange={handleChange}
                  />

                </div>

              </div>

            </div>


            {/* DEPTH / RANGE */}

            <div className="two-column-fields">

              <div className="sonar-form-group">

                <label>
                  Survey Depth
                </label>

                <div className="sonar-input">

                  <Waves size={17} />

                  <input
                    type="number"
                    min="0"
                    name="depth"
                    placeholder="Depth in meters"
                    value={formData.depth}
                    onChange={handleChange}
                  />

                  <span className="input-unit">
                    m
                  </span>

                </div>

              </div>


              <div className="sonar-form-group">

                <label>
                  Sonar Range
                </label>

                <div className="sonar-input">

                  <Gauge size={17} />

                  <input
                    type="number"
                    min="0"
                    name="sonarRange"
                    placeholder="Range"
                    value={formData.sonarRange}
                    onChange={handleChange}
                  />

                  <span className="input-unit">
                    m
                  </span>

                </div>

              </div>

            </div>


            {/* DATE */}

            <div className="sonar-form-group">

              <label>
                Survey Date
              </label>

              <div className="sonar-input">

                <CalendarDays size={17} />

                <input
                  type="date"
                  name="surveyDate"
                  value={formData.surveyDate}
                  onChange={handleChange}
                />

              </div>

            </div>


            {/* VESSEL */}

            <div className="sonar-form-group">

              <label>
                Survey Vessel / Platform
              </label>

              <div className="sonar-input">

                <Ship size={17} />

                <input
                  type="text"
                  name="vessel"
                  placeholder="Enter vessel or platform name"
                  value={formData.vessel}
                  onChange={handleChange}
                />

              </div>

            </div>


            {/* FORM ERROR */}

            {formError && (

              <div className="form-validation-error">

                <AlertCircle size={17} />

                <span>
                  {formError}
                </span>

              </div>

            )}


            {/* =================================
                ANALYSIS BUTTON / STATUS
            ================================= */}

            {processingStatus === "idle" ||
            processingStatus === "complete" ? (

              <button
                type="submit"
                className="analysis-button"
              >

                {processingStatus === "complete" ? (
                  <>
                    <CheckCircle2 size={19} />
                    Analysis Complete
                  </>
                ) : (
                  <>
                    <ScanSearch size={19} />
                    Start AI Analysis
                    <ArrowRight size={18} />
                  </>
                )}

              </button>

            ) : (

              <div className="analysis-progress">

                <div className="progress-icon">

                  <LoaderCircle
                    size={21}
                    className="spinning"
                  />

                </div>

                <div>

                  <strong>

                    {processingStatus === "uploading"
                      ? "Uploading sonar data..."
                      : "AI is analyzing sonar imagery..."}

                  </strong>

                  <span>

                    {processingStatus === "uploading"
                      ? "Preparing survey data"
                      : "Running detection and anomaly models"}

                  </span>

                </div>

              </div>

            )}


            <p className="analysis-note">
              AI processing will detect marine debris,
              classify objects and identify potential anomalies.
            </p>

          </form>

        </section>

      </div>

    </div>
  );
};

export default SonarUpload;
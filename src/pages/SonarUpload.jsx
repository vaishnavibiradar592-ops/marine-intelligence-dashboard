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
} from "lucide-react";

const SonarUpload = () => {

  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);

  const [preview, setPreview] = useState(null);

  const [dragActive, setDragActive] = useState(false);

  const [formData, setFormData] = useState({
    surveyId: "",
    latitude: "",
    longitude: "",
    depth: "",
    sonarRange: "",
    surveyDate: "",
    vessel: "",
  });


  /* =========================
     FILE HANDLING
  ========================= */

  const handleFile = (file) => {

    if (!file) return;

    const allowedTypes = [
      "image/png",
      "image/jpeg",
      "image/jpg",
      "image/tiff",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert(
        "Please upload a PNG, JPG, JPEG or TIFF sonar image."
      );

      return;
    }

    setSelectedFile(file);

    const imageUrl = URL.createObjectURL(file);

    setPreview(imageUrl);
  };


  const handleFileInput = (event) => {

    const file = event.target.files[0];

    handleFile(file);
  };


  /* =========================
     DRAG & DROP
  ========================= */

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

    const file = event.dataTransfer.files[0];

    handleFile(file);
  };


  /* =========================
     REMOVE FILE
  ========================= */

  const removeFile = () => {

    setSelectedFile(null);

    setPreview(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };


  /* =========================
     FORM
  ========================= */

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };


  const handleSubmit = (event) => {

    event.preventDefault();

    if (!selectedFile) {
      alert("Please upload a sonar image first.");
      return;
    }

    if (
      !formData.surveyId ||
      !formData.latitude ||
      !formData.longitude
    ) {
      alert(
        "Please complete the required survey information."
      );

      return;
    }

    alert(
      "Sonar survey submitted for AI analysis."
    );
  };


  return (

    <div className="sonar-page">

      {/* =================================
          PAGE HEADER
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


        <div className="survey-status">

          <span className="online-dot" />

          Ready for Analysis

        </div>

      </div>


      {/* =================================
          MAIN GRID
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


          {/* UPLOAD AREA */}

          {!selectedFile ? (

            <div
              className={`sonar-dropzone ${
                dragActive ? "drag-active" : ""
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
                PNG · JPG · JPEG · TIFF
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

            /* =================================
               IMAGE PREVIEW
            ================================= */

            <div className="sonar-preview-container">

              <div className="preview-image-wrapper">

                <img
                  src={preview}
                  alt="Uploaded sonar preview"
                />

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
                    {(selectedFile.size / 1024 / 1024).toFixed(2)}
                    {" MB"}
                  </span>

                </div>

              </div>

            </div>

          )}


          {/* PROCESSING INFO */}

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


            {/* LATITUDE / LONGITUDE */}

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


            {/* SUBMIT */}

            <button
              type="submit"
              className="analysis-button"
            >

              <ScanSearch size={19} />

              Start AI Analysis

              <ArrowRight size={18} />

            </button>


            <p className="analysis-note">
              Your sonar image will be processed by the
              AI detection pipeline after submission.
            </p>

          </form>

        </section>

      </div>

    </div>
  );
};

export default SonarUpload;
import { useState } from "react";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Waves,
  Brain,
  MapPin,
  ShieldCheck,
  ArrowRight,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      if (
        email === "admin@marineai.com" &&
        password === "admin123"
      ) {
        navigate("/dashboard");
      } else {
        setError("Invalid email or password.");
        setLoading(false);
      }
    }, 700);
  };

  return (
    <div className="login-page">

      {/* =================================
          BACKGROUND
      ================================= */}

      <div className="login-background" />

      <div className="login-overlay" />


      {/* =================================
          TOP BRAND
      ================================= */}

      <div className="login-top-brand">

        <div className="marine-logo">
          <Waves size={32} strokeWidth={2.3} />
        </div>

        <div>
          <h2>
            Marine<span>AI</span>
          </h2>

          <p>
            INTELLIGENCE SYSTEM
          </p>
        </div>

      </div>


      {/* TOP RIGHT MESSAGE */}

      <div className="ocean-message">
        <span>CLEANER OCEANS</span>
        <i />
        <span>SAFER FUTURES</span>
      </div>


      {/* =================================
          LEFT CONTENT
      ================================= */}

      <section className="login-intro">

        <div className="intro-tag">
          <span />
          UNDERWATER INTELLIGENCE
        </div>

        <h1>
          Discover what lies
          <br />
          beneath the{" "}
          <strong>surface.</strong>
        </h1>

        <p>
          AI-powered marine debris detection,
          anomaly analysis and geospatial
          intelligence for underwater surveys.
        </p>


        {/* FEATURE CARDS */}

        <div className="login-features">

          <div className="feature-item">

            <div className="feature-icon">
              <Brain size={21} />
            </div>

            <span>DETECT SMARTER</span>

          </div>


          <div className="feature-item">

            <div className="feature-icon">
              <MapPin size={21} />
            </div>

            <span>MAP INTELLIGENCE</span>

          </div>


          <div className="feature-item">

            <div className="feature-icon">
              <ShieldCheck size={21} />
            </div>

            <span>PROTECT TOGETHER</span>

          </div>

        </div>

      </section>


      {/* =================================
          LOGIN CARD
      ================================= */}

      <section className="login-card-modern">

        <div className="login-card-header">

          <span>
            WELCOME BACK
          </span>

          <h2>
            Sign in to MarineAI
          </h2>

          <p>
            Access your marine intelligence dashboard
          </p>

        </div>


        {/* LOGIN FORM */}

        <form onSubmit={handleLogin}>

          {/* EMAIL */}

          <div className="modern-form-group">

            <label>
              Email Address
            </label>

            <div className="modern-input">

              <Mail size={20} />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setError("");
                }}
              />

            </div>

          </div>


          {/* PASSWORD */}

          <div className="modern-form-group">

            <label>
              Password
            </label>

            <div className="modern-input">

              <LockKeyhole size={20} />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setError("");
                }}
              />

              <button
                type="button"
                className="eye-button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

          </div>


          {/* OPTIONS */}

          <div className="login-options">

            <label className="remember">

              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) =>
                  setRememberMe(event.target.checked)
                }
              />

              <span>
                Remember me
              </span>

            </label>

            <button
              type="button"
              className="forgot-button"
              onClick={() =>
                alert("Password recovery will be connected to the backend later.")
              }
            >
              Forgot password?
            </button>

          </div>


          {/* ERROR */}

          {error && (
            <div className="modern-login-error">
              {error}
            </div>
          )}


          {/* SIGN IN */}

          <button
            type="submit"
            className="modern-signin-button"
            disabled={loading}
          >

            {loading ? (
              <>
                <span className="login-spinner" />
                Signing in...
              </>
            ) : (
              <>
                Sign In
                <ArrowRight size={21} />
              </>
            )}

          </button>

        </form>


        {/* DEMO CREDENTIALS */}

        <div className="demo-credentials">

          <div className="demo-title">
            DEMO CREDENTIALS
          </div>

          <div className="demo-row">

            <UserRound size={17} />

            <span>
              admin@marineai.com
            </span>

          </div>

          <div className="demo-row">

            <LockKeyhole size={17} />

            <span>
              admin123
            </span>

          </div>

        </div>


        {/* SECURITY */}

        <div className="security-message">

          <ShieldCheck size={20} />

          <span>
            Secure access to Marine Intelligence System
          </span>

        </div>

      </section>


      {/* =================================
          SYSTEM STATUS
      ================================= */}

      <div className="system-online">

        <span className="online-dot" />

        <strong>
          AI Monitoring System Online
        </strong>

        <i />

        <span>
          A Safer Ocean for Generations
        </span>

      </div>


      {/* FOOTER */}

      <div className="login-footer-modern">

        <span>
          Government of India
        </span>

        <i />

        <span>
          Ministry of Earth Sciences
        </span>

        <i />

        <span>
          MarineAI Initiative
        </span>

      </div>

    </div>
  );
};

export default Login;
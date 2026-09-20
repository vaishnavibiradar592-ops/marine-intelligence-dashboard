import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, Mail, Waves } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    // Demo frontend authentication
    if (email === "admin@marineai.com" && password === "admin123") {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-page">

      {/* Left Section */}
      <div className="login-brand-section">

        <div className="login-brand">
          <div className="login-logo">
            <Waves size={30} />
          </div>

          <div>
            <h2>MarineAI</h2>
            <span>Intelligence System</span>
          </div>
        </div>

        <div className="login-hero">
          <p className="login-tag">UNDERWATER INTELLIGENCE</p>

          <h1>
            Discover what lies
            <br />
            beneath the surface.
          </h1>

          <p>
            AI-powered marine debris detection, anomaly analysis
            and geospatial intelligence for underwater surveys.
          </p>
        </div>

        <div className="login-status">
          <span className="status-dot"></span>
          AI Monitoring System Online
        </div>

      </div>

      {/* Right Section */}
      <div className="login-form-section">

        <div className="login-card">

          <div className="mobile-logo">
            <div className="login-logo">
              <Waves size={26} />
            </div>
            <div>
              <h2>MarineAI</h2>
              <span>Intelligence System</span>
            </div>
          </div>

          <div className="login-heading">
            <h1>Welcome back</h1>
            <p>Sign in to access your marine intelligence dashboard.</p>
          </div>

          <form onSubmit={handleLogin}>

            {/* Email */}
            <div className="form-group">

              <label>Email Address</label>

              <div className="input-wrapper">
                <Mail size={19} />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                />
              </div>

            </div>

            {/* Password */}
            <div className="form-group">

              <label>Password</label>

              <div className="input-wrapper">
                <LockKeyhole size={19} />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

            </div>

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            <button type="submit" className="login-button">
              Sign In
            </button>

          </form>

          <div className="demo-login">
            <p>Demo credentials</p>
            <span>admin@marineai.com</span>
            <span>admin123</span>
          </div>

          <p className="login-footer">
            Secure access to Marine Intelligence System
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;
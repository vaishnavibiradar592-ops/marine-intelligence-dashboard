import {
  Search,
  Bell,
  ChevronDown,
  HelpCircle,
} from "lucide-react";

const Navbar = () => {
  return (
    <header className="navbar">

      {/* PAGE TITLE */}

      <div className="navbar-title">

        <div>
          <h1>Marine Intelligence Dashboard</h1>

          <p>
            AI-powered underwater monitoring and anomaly analysis
          </p>
        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="navbar-actions">

        {/* SEARCH */}

        <div className="search-box">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search..."
          />

          <span className="search-shortcut">
            /
          </span>

        </div>

        {/* HELP */}

        <button className="icon-button">
          <HelpCircle size={20} />
        </button>

        {/* NOTIFICATION */}

        <button className="icon-button notification-button">

          <Bell size={20} />

          <span className="notification-dot">
            3
          </span>

        </button>

        {/* PROFILE */}

        <div className="user-profile">

          <div className="avatar">
            VB
          </div>

          <div className="user-info">

            <strong>
              Survey Operator
            </strong>

            <span>
              Marine Analyst
            </span>

          </div>

          <ChevronDown size={16} />

        </div>

      </div>

    </header>
  );
};

export default Navbar;
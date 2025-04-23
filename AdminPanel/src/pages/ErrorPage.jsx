import { useNavigate } from "react-router-dom";
import '../App.css';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <h2 className="error-title">Oops! Page Not Fouund</h2>
      <p className="error-text">
        The page you are looking for might have been removed, or is temporarily unavailable.
      </p>
      <button className="error-btn" onClick={() => navigate("/admin/dashboard")}>
        BACK TO HOME
      </button>
    </div>
  );
};

export default ErrorPage;

import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaUniversity, FaPlus } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div>
          <Link to="/" className="navbar-brand">
            Bank Management
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/" className="nav-link">
            <FaHome />
            Dashboard
          </Link>
          <Link to="/employees" className="nav-link">
            <FaUsers />
            Employees
          </Link>
          <Link to="/bank-details" className="nav-link">
            <FaUniversity />
            Bank Details
          </Link>
          <Link to="/add-employee" className="nav-link">
            <FaPlus />
            Add Employee
          </Link>
          <Link to="/add-bank-details" className="nav-link">
            <FaPlus />
            Add Bank Details
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 
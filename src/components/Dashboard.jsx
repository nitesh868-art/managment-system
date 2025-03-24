import { useSelector } from 'react-redux';
import { FaUsers, FaUniversity, FaChartLine } from 'react-icons/fa';
 

function Dashboard() {
  const { employees } = useSelector((state) => state.employees);
  const { banks } = useSelector((state) => state.banks);

  return (
    <div className="dashboard">
      <h1 className="page-title">Dashboard</h1>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-card-content">
            <FaUsers className="stat-icon text-blue" />
            <div className="stat-info">
              <h2>Total Employees</h2>
              <p>{employees.length}</p>
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card-content">
            <FaUniversity className="stat-icon text-green" />
            <div className="stat-info">
              <h2>Bank Branches</h2>
              <p>{banks.length}</p>
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card-content">
            <FaChartLine className="stat-icon text-purple" />
            <div className="stat-info">
              <h2>Total Accounts</h2>
              <p>0</p>
            </div>
          </div>
        </div>
      </div>

      <div className="stat-card">
        <h2 className="section-title">Recent Activities</h2>
        <div className="activity-list">
          <p className="text-center">No recent activities to display.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 
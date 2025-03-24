import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import EmployeeList from './components/EmployeeList';
import BankDetails from './components/BankDetails';
import AddEmployee from './components/AddEmployee';
import AddBankDetails from './components/AddBankDetails';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/bank-details" element={<BankDetails />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/add-bank-details" element={<AddBankDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; 
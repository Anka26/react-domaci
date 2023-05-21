 
import { useState } from 'react';
import './App.css';
import UnesiTransakciju from './UnesiTransakciju';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

    const [transactions, setTransactions] = useState([]);

    const addTransaction = (newTransaction) => {
      setTransactions([...transactions, newTransaction]);
    };

    console.log(transactions)


  return (
    <Router>
    <div>
        <Navbar />
        <Routes>
          
          <Route path="/unesi" element={ <UnesiTransakciju onAdd={addTransaction}></UnesiTransakciju>} />
          
        </Routes>
        </div>
    </Router>
 
  );
}

export default App;

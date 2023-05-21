 
import { useState } from 'react';
import './App.css';
import UnesiTransakciju from './UnesiTransakciju';

function App() {

    const [transactions, setTransactions] = useState([]);

    const addTransaction = (newTransaction) => {
      setTransactions([...transactions, newTransaction]);
    };

    console.log(transactions)


  return (
    <div className="App">
      <UnesiTransakciju onAdd={addTransaction}></UnesiTransakciju>
    </div>
  );
}

export default App;

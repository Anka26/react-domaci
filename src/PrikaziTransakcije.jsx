import React, { useState } from 'react';
import TableRow from './TableRow';

const PrikaziTransakcije = ({ transactions }) => {
  const [sortedTransactions, setSortedTransactions] = useState(transactions);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = () => {
    const sorted = [...sortedTransactions].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.amount - b.amount;
      } else {
        return b.amount - a.amount;
      }
    });

    setSortedTransactions(sorted);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div>
      <button onClick={handleSort}>Sortiraj po ceni</button>
      <table style={{ margin: '0 auto', width: '70%', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#f0f0f0' }}>
          <tr>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ccc', width: '20%' }}>Iznos</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ccc', width: '30%' }}>Opis</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ccc', width: '30%' }}>Kategorija</th>
          </tr>
        </thead>
        <tbody>
          {sortedTransactions.map((tr, index) => (
            <TableRow key={index} t={tr}></TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrikaziTransakcije;

import React from 'react';
import TableRow from './TableRow';
const PrikaziTransakcije = ({ transactions }) => {
    return (
      <div>
        <h2>Prikaz transakcija</h2>
        <table>
          <thead>
            <tr>
              <th>Iznos</th>
              <th>Opis</th>
              <th>Kategorija</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tr, index) => (
              <TableRow key={index} t={tr}></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default PrikaziTransakcije;

import React from 'react';

const TableRow = ({ t }) => {
    return (
      <tr>
        <td>{t.amount}</td>
        <td>{t.description}</td>
        <td>{t.category}</td>
      </tr>
    );
  };

  export default TableRow;
import React from 'react';

const TableRow = ({ t }) => {
  return (
    <tr>
      <td style={{ padding: '10px' }}>{t.amount}</td>
      <td style={{ padding: '10px' }}>{t.description}</td>
      <td style={{ padding: '10px' }}>{t.category}</td>
    </tr>
  );
};

export default TableRow;

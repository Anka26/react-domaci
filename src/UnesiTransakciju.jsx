import React, { useState } from 'react';

const UnesiTransakciju = ({ onAdd }) => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
     
    if (!amount || !description || !category) {
      alert('Molimo unesite sve podatke.');
      return;
    }
 
    const newTransaction = {
      amount: parseFloat(amount),
      description,
      category
    };
 
    onAdd(newTransaction);
 
    setAmount('');
    setDescription('');
    setCategory('');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount">Iznos:</label>
        <input
          type="number"
          id="amount"
          className="input-field"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Opis:</label>
        <input
          type="text"
          id="description"
          className="input-field"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="category">Kategorija:</label>
        <input
          type="text"
          id="category"
          className="input-field"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <button type="submit" className="submit-button">Dodaj transakciju</button>
    </form>
  );
};

export default UnesiTransakciju;

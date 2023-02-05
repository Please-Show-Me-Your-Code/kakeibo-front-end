import React, { useState } from 'react';

const Kakeibo = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2022-01-01', category: 'Food', amount: 100 },
    { id: 2, date: '2022-01-02', category: 'Clothing', amount: 500 },
    { id: 3, date: '2022-01-03', category: 'Transportation', amount: 200 },
  ]);

  const [formData, setFormData] = useState({
    date: '',
    category: '',
    amount: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTransactions([...transactions, { id: transactions.length + 1, ...formData }]);
    setFormData({ date: '', category: '', amount: '' });
  };

  const renderTransaction = (transaction) => (
    <tr key={transaction.id}>
      <td>{transaction.date}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
  );

  const totalExpense = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div>
      <h2>Kakeibo</h2>
      <h3>Transactions</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{transactions.map(renderTransaction)}</tbody>
      </table>
      <p>Total Expense: {totalExpense}</p>
      <h3>Add a new transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="text" name="date" value={formData.date} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Category:
          <input type="text" name="category" value={formData.category} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Amount:
          <input type="text" name="amount" value={formData.amount} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default Kakeibo;
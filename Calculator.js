import React, { useState } from 'react';
import axios from 'axios';

const Calculator = ({ setGoldData }) => {
  const [weight, setWeight] = useState('');
  const [purity, setPurity] = useState('');
  const [currency, setCurrency] = useState('');

  const calculateGoldRate = async () => {
    try {
      const response = await axios.post('/api/calculate', { weight, purity, currency });
      setGoldData(response.data);
    } catch (error) {
      console.error('Error calculating gold rate:', error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Weight (grams)" value={weight} onChange={(e) => setWeight(e.target.value)} />
      <input type="text" placeholder="Purity" value={purity} onChange={(e) => setPurity(e.target.value)} />
      <input type="text" placeholder="Currency" value={currency} onChange={(e) => setCurrency(e.target.value)} />
      <button onClick={calculateGoldRate}>Calculate</button>
    </div>
  );
};

export default Calculator;

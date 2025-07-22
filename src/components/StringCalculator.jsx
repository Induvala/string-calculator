import React, { useState } from 'react';
import { add } from '../utils/stringCalculator';

const StringCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError('');
    } catch (err) {
      setResult(null);
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>String Calculator</h2>
      <textarea
        rows="5"
        cols="40"
        placeholder="Enter numbers (e.g., 1,2 or //;\n1;2)"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <br />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Result: {result}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default StringCalculator;

import React, { useState } from 'react';

const MultiState = () => {
  const [amount, setAmount] = useState(0);

  const increase = () => setAmount((event) => event + 1);

  const decrease = () => setAmount((event) => event - 1);

  const equal0 = () => setAmount(0);

  return (
    <div>
      <h1>Hello MultiState</h1>
      <p>{amount}</p>
      <button onClick={increase}>+</button>
      <button onClick={equal0}>0</button>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default MultiState;

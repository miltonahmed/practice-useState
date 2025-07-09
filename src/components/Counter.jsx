import { useState } from 'react';

const Counter = () => {
  // count state create kora: default value holo 0
  const [count, setCount] = useState(0);

  // Count increment  function
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Count decrement  function
  const handleDecrement = () => {
    // count jeno 0 er niche na jai
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="bg-white shadow-md p-6 rounded w-full max-w-md text-center">
      {/* Count display */}
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">
        Counter Value: <span className="text-black">{count}</span>
      </h2>

      {/* Increment & Decrement Buttons */}
      <div className="flex justify-center gap-4">
        {/* Decrement Button */}
        <button
          onClick={handleDecrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Decrement
        </button>

        {/* Increment Button */}
        <button
          onClick={handleIncrement}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;

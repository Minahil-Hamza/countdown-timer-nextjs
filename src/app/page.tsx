import React from 'react';

const CountTimer = () => {
  // Example usage of Input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <div>
      {/* Use the Input component */}
      <input type="text" onChange={handleInputChange} />

      {/* Use the Button component */}
      <button onClick={() => console.log('Button clicked!')}>Start Timer</button>
    </div>
  );
};

export default CountTimer;

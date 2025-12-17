import React from 'react';

const InputTimer = ({ handleInput, handleStart }) => {
  return (
    <div className="input-container">
      <div className="input-box">
        <input
          type="text"
          id="hours"
          onChange={handleInput}
          placeholder="HH"
        />
        <input
          type="text"
          id="minutes"
          onChange={handleInput}
          placeholder="MM"
        />
        <input
          type="text"
          id="seconds"
          onChange={handleInput}
          placeholder="SS"
        />
        <div>
          <button onClick={handleStart} className="start">
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputTimer;
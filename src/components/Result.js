// components/Result.js
import React from 'react';

const Result = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="result-container">
      <h2>Результати тесту</h2>
      <p>Ви набрали: {score} з {totalQuestions}</p>
      <button onClick={onRestart}>Пройти знову</button>
    </div>
  );
};

export default Result;
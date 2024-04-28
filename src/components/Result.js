// components/Result.js
import React, { useState } from 'react';
import Review from "./Review";

const Result = ({ score, totalQuestions, onRestart, questions, selectedAnswers }) => {
  const [showReview, setShowReview] = useState(false);

  const toggleReview = () => {
    setShowReview(!showReview);
  };

  return (
    <div className="result-container">
      <h2>Результати тесту</h2>
      <p>Ви набрали: {score} з {totalQuestions}</p>
      <button onClick={onRestart}>Пройти знову</button>
      <button onClick={toggleReview}>Огляд</button>
      {showReview && (
        <Review questions={questions} selectedAnswers={selectedAnswers} />
      )}
    </div>
  );
};

export default Result;
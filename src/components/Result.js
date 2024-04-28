import React, { useState } from 'react';

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
        <div className="review-section">
          <h3>Огляд</h3>
          {questions.map((question, index) => (
            <div key={index} className="question-review">
              <p><strong>Питання:</strong> {question.question}</p>
              <p><strong>Ваша відповідь:</strong> {selectedAnswers[index]}</p>
              <p><strong>Правильна відповідь:</strong> {question.answers.find(answer => answer.isCorrect)?.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Result;

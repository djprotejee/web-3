// components/Review.js
import React from 'react';

const Review = ({ questions, selectedAnswers }) => {
  return (
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
  );
};

export default Review;
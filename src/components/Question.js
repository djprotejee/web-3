// components/Question.js
import React, { useState } from 'react';

const Question = ({ question, onAnswerSelect }) => {
  const { question: questionText, answers } = question;
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    onAnswerSelect(answer);
  };

  return (
    <div className="question-container">
      <h2>{questionText}</h2>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name="answer"
                value={answer.answer}
                checked={selectedAnswer === answer.answer}
                onChange={() => handleAnswerSelect(answer.answer)}
              />
              {answer.answer}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;

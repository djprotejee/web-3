// components/QuestionSelection.js
import React from 'react';

const QuestionSelection = ({ questions, onQuestionToggle, onStartTest }) => {
  return (
    <div className="question-selection-container">
      <h2>Оберіть питання для тесту</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                onChange={() => onQuestionToggle(index)}
              />
              {question.question}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={onStartTest}>Почати тест</button>
    </div>
  );
};

export default QuestionSelection;
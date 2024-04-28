import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const Test = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [answeredCurrentQuestion, setAnsweredCurrentQuestion] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: answer });
    setAnsweredCurrentQuestion(true);
  };

  const handleNextQuestion = () => {
    if (answeredCurrentQuestion || selectedAnswers[currentQuestionIndex]) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnsweredCurrentQuestion(false);
      } else {
        setShowResult(true);
      }
    } else {
      alert("Оберіть відповідь.");
    }
  };

  const restartTest = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResult(false);
    setAnsweredCurrentQuestion(false);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      const correctAnswer = question.answers.find(answer => answer.isCorrect);
      const selectedAnswer = selectedAnswers[index];
      if (selectedAnswer === correctAnswer.answer) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="test-container">
      {!showResult && (
        <>
          <Question
            question={questions[currentQuestionIndex]}
            onAnswerSelect={handleAnswerSelect}
          />
          <button onClick={handleNextQuestion}>
            {currentQuestionIndex === questions.length - 1 ? "Закінчити тест" : "Наступне питання"}
          </button>
        </>
      )}
      {showResult && (
        <Result
          score={calculateScore()}
          totalQuestions={questions.length}
          onRestart={restartTest}
          questions={questions}
          selectedAnswers={selectedAnswers}
        />
      )}
    </div>
  );
};

export default Test;

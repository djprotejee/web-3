// App.js
import React from 'react';
import testData from './TestData.json';
import QuestionSelection from './components/QuestionSelection';
import Test from './components/Test';
import useTestSetup from './hooks/useTestSetup';
import './App.css';

function App() {
  const { selectedQuestions, testStarted, toggleQuestionSelection, startTest } = useTestSetup(testData.questions.length);

  return (
    <div className="App">
      {!testStarted && (
        <QuestionSelection
          questions={testData.questions}
          onQuestionToggle={toggleQuestionSelection}
          onStartTest={startTest}
        />
      )}
      {testStarted && (
        <Test
          questions={selectedQuestions.map(index => testData.questions[index])}
        />
      )}
    </div>
  );
}

export default App;

// hooks/useTestSetup.js
import { useState } from 'react';

const useTestSetup = (totalQuestions) => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [testStarted, setTestStarted] = useState(false);

  const toggleQuestionSelection = (index) => {
    const updatedQuestions = [...selectedQuestions];
    const selectedIndex = updatedQuestions.indexOf(index);
    if (selectedIndex === -1) {
      updatedQuestions.push(index);
    } else {
      updatedQuestions.splice(selectedIndex, 1);
    }
    setSelectedQuestions(updatedQuestions);
  };

  const startTest = () => {
    if (selectedQuestions.length > 0) {
      setTestStarted(true);
    } else {
      alert("Виберіть хоча б одне питання для початку тесту.");
    }
  };

  return { selectedQuestions, testStarted, toggleQuestionSelection, startTest };
};

export default useTestSetup;
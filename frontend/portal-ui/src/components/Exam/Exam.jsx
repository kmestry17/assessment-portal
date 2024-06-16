import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { exams } from "../../data/exams";

const Exam = () => {
  const { examId } = useParams();
  const exam = exams.find((exam) => exam.id === parseInt(examId));
  const [responses, setResponses] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionChange = (questionId, answer) => {
    setResponses({
      ...responses,
      [questionId]: answer,
    });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div>
      <h1>{exam.title}</h1>
      {!isSubmitted ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {exam.questions.map((question) => (
            <div key={question.id}>
              <p>{question.question}</p>
              {question.options.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    onChange={() => handleOptionChange(question.id, option)}
                    checked={responses[question.id] === option}
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h2>Results</h2>
          {exam.questions.map((question) => (
            <div key={question.id}>
              <p>{question.question}</p>
              <p>Your answer: {responses[question.id]}</p>
              <p>Correct answer: {question.correctAnswer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Exam;

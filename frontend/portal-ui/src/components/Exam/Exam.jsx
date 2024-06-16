import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { exams } from "../../data/exams";

const Exam = () => {
  const { examId } = useParams();
  const exam = exams.find((exam) => exam.id === parseInt(examId));
  const [responses, setResponses] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (questionId, answer) => {
    setResponses({
      ...responses,
      [questionId]: answer,
    });
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    exam.questions.forEach((question) => {
      if (responses[question.id] === question.correctAnswer) {
        calculatedScore += question.weight;
      } else if (question.negativeMarking) {
        calculatedScore += question.negativeScore;
      }
    });
    setScore(calculatedScore);

    setIsSubmitted(true);
  };

  return (
    <div>
      <h1>{exam.title}</h1>
      <h2>Total Score: {exam.totalScore}</h2>
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
          <p>
            Your score: {score} / {exam.totalScore}
          </p>
          {exam.questions.map((question) => (
            <div key={question.id}>
              <p>{question.question}</p>
              <p>Your answer: {responses[question.id]}</p>
              <p>Correct answer: {question.correctAnswer}</p>
              <p>Question weight: {question.weight}</p>
              {question.negativeMarking && (
                <p>
                  Negative score for incorrect answer: {question.negativeScore}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Exam;

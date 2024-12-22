import React from "react";

const Question = ({ question, answer, setAnswer, handleAnswerSubmit }) => {
  return (
    <div>
      <h2>
        {question.num1} {question.operator} {question.num2} = ?
      </h2>
      <form onSubmit={handleAnswerSubmit}>
        <input
          type="number"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Your answer"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Question;

import React from 'react';

const Question = ({ id, question }) => {
    return(
      <div className="question">
        <h1>{question}</h1>
      </div>
    )
  }

export default Question;

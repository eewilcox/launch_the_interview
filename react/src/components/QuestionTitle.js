import React from 'react';
import { Link } from 'react-router';

const QuestionTitle = ({ id, question }) => {
    return(
      <div className="question">
        <h1>{question}</h1>
      </div>
    )
  }

export default QuestionTitle;

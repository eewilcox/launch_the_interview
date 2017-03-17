import React from 'react';

const QuestionTile = (props) => {
    return(
      <div onClick={props.toggleAnswer} className="question">
        <h1>{props.body}</h1>
      </div>
    )
  }

export default QuestionTile;

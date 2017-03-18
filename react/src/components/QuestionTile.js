import React from 'react';

const QuestionTile = (props) => {
    return(
      <div onClick={props.toggleAnswer} className="question">
        <h3>{props.body}</h3>
      </div>
    )
  }

export default QuestionTile;

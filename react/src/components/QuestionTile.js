import React from 'react';

const QuestionTile = (props) => {
    return(
      <div onClick={props.toggleAnswer} className="question">
        <h5 className="question-tiles">
          <span><i className="fa fa-question-circle-o" aria-hidden="true"></i></span>
          {props.body}
        </h5>
      </div>
    )
  }

export default QuestionTile;

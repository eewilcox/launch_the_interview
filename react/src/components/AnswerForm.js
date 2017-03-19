import React from 'react';

const AnswerForm = (props) => {
    return(
      <div className="panel">
        <form action="questions#index">
          <textarea name="body" type="text" rows="15" placeholder="Answer the Question..." onChange={props.addAnswer}/>
          <button className="button" onClick={props.createAnswer} type="submit">Submit</button>
        </form>
      </div>
    )
  }

export default AnswerForm;

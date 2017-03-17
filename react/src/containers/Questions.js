import React, { Component }  from 'react';
import Question from './Question';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
    };
  }

  componentDidMount() {
    fetch("/api/v1/questions.json")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          info: responseData
        });
      });
  }

  render() {
    let questions = this.state.info.map(question => {
      return(
        <Question
          key={question.id}
          id={question.id}
          body={question.question}
          answer={question.answer}
        />
      )
    })
    return(
      <div className="questions">
        <h2> List of Questions </h2>
        {questions}
        {this.props.children}
      </div>
    )
  }
}

export default Questions;

import React, { Component }  from 'react';
import Question from './Question';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      answers: []
    };
  }

  componentDidMount() {
    fetch("/api/v1/questions.json")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          questions: responseData.questions,
          answers: responseData.answers
        });
      });
  }

  render() {
    let questions = this.state.questions.map(question => {
      return(
        <Question
          key={question.id}
          id={question.id}
          body={question.body}
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

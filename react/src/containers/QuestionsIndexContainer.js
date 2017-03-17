import React, { Component }  from 'react';
import QuestionTitle from '../components/QuestionTitle';

class QuestionsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }

  componentDidMount() {
    fetch("/api/v1/questions.json")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({questions: responseData});
      });
  }

  render() {
    let questions = this.state.questions.map(question => {
      return(
        <QuestionTitle
          key={question.id}
          id={question.id}
          question={question.body}
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

export default QuestionsIndexContainer;

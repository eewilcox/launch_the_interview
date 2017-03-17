import React, { Component } from 'react';
import QuestionTile from '../components/QuestionTile';
import AnswerForm from '../components/AnswerForm';
import AnswerBody from '../components/AnswerBody';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      body: ""
    }
    this.toggleAnswer = this.toggleAnswer.bind(this);
  };

  toggleAnswer() {
    let nextState = !this.state.expanded;
    this.setState({ expanded: nextState });
  }

  render() {

    return (
      <QuestionTile
      key={this.props.id}
      id={this.props.id}
      body={this.props.body}
      toggleAnswer={this.toggleAnswer}
      />
    );
  }
}

export default Question;

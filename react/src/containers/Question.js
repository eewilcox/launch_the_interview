import React, { Component } from 'react';
import QuestionTile from '../components/QuestionTile';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
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

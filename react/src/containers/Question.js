import React, { Component } from 'react';
import QuestionTile from '../components/QuestionTile';
import AnswerForm from '../components/AnswerForm';
import AnswerBody from '../components/AnswerBody';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      finalBody: "",
      questionId: null,
      answerBody: null,
    };
    this.toggleAnswer = this.toggleAnswer.bind(this);
    this.createAnswer = this.createAnswer.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
  }

  addAnswer(event) {
    let body = event.target.value;
    this.setState({ answerBody: body });
  }

  createAnswer(event) {
    event.preventDefault();

    let newData = {
      "answer": this.state.answerBody,
      "questionId": this.state.questionId
    };

    fetch("/api/v1/questions.json", {
      method: "POST",
      body: JSON.stringify(newData) })
        .then(response => {

          if (response.ok) {
            return response;
          }
        })
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          expanded: false
        });
        this.setState({
          finalBody: this.state.answerBody
        });
      });
  }

  toggleAnswer() {
    let nextState = !this.state.expanded;
    this.setState({
      expanded: nextState,
      questionId: this.props.id
     });
  }

  render() {
    let answer;
    if (this.state.expanded) {
      if (this.props.answer !== "") {
        answer =
        <AnswerBody
          body={this.props.answer}
        />;
      }
      else if (this.state.finalBody !== "") {
        answer =
        <AnswerBody
          body={this.state.finalBody}
        />;
      }
      else {
        answer =
        <AnswerForm
          createAnswer={this.createAnswer}
          addAnswer={this.addAnswer}
        />;
      }
    }

    return (
      <div>
        <QuestionTile
        key={this.props.id}
        id={this.props.id}
        body={this.props.body}
        toggleAnswer={this.toggleAnswer}
        />
        {answer}
      </div>
    );
  }
}

export default Question;

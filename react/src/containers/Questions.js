import React, { Component }  from 'react';
import Question from './Question';

class Questions extends Component {
  constructor(props) {
    super(props);
      let url = location.href.split('/');
    this.state = {
      info: [],
      location: url[url.length - 1]
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    fetch("/api/v1/questions.json")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          info: responseData
        });
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    let questions = this.state.info.map(question => {
      if (this.state.location === "questions" && question.category === 1) {
        return(
          <Question
            key={question.id}
            id={question.id}
            body={question.question}
            answer={question.answer}
            getData={this.getData}
          />
        )
      }
      if (this.state.location === "techquestions" && question.category === 2) {
        return(
          <Question
            key={question.id}
            id={question.id}
            body={question.question}
            answer={question.answer}
            getData={this.getData}
          />
        )
      }

    })
    return(
      <div className="questions">
        <h3>Questions:</h3>
        {questions}
      </div>
    )
  }
}

export default Questions;

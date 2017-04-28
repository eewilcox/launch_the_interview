import React, { Component } from 'react';
import CompanyForm from '../components/CompanyForm';
import CompanyTile from '../components/CompanyTile';

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyInfo: [],
      name: null,
      url: null,
      description: null,
      notes: null,
      question: null,
      technology: null,
    };

    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleSubmitAsks=this.handleSubmitAsks.bind(this);
    this.handleSubmitTech=this.handleSubmitTech.bind(this);
  }

  getData() {
    fetch("/api/v1/companies.json")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          companyInfo: responseData
        });
      });
  }

  componentDidMount() {
    this.getData();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    let newData = {
      "name": this.state.name,
      "url": this.state.url,
      "description": this.state.description,
      "notes": this.state.notes,
      "question": this.state.question,
      "technology": this.state.technology,
    };

    fetch("/api/v1/companies.json", {
      method: "POST",
      body: JSON.stringify(newData) })
        .then(response => {
          if (response.ok) {
            return response;
          }
        })
      .then((response) => response.json())
      .then((responseData) => {

      });
  }

  handleSubmitAsks(event) {
    event.preventDefault();

    let newData = {
      "question": this.state.question,
    };

    fetch("/api/v1/asks.json", {
      method: "POST",
      body: JSON.stringify(newData) })
        .then(response => {
          if (response.ok) {
            return response;
          }
        })
      .then((response) => response.json())
      .then((responseData) => {

      });
  }

  handleSubmitTech(event) {
    event.preventDefault();

    let newData = {
      "technology": this.state.technology,
    };

    fetch("/api/v1/technologies.json", {
      method: "POST",
      body: JSON.stringify(newData) })
        .then(response => {
          if (response.ok) {
            return response;
          }
        })
      .then((response) => response.json())
      .then((responseData) => {

      });
  }

  render() {
    let companies = this.state.companyInfo.map(company => {
      return(
        <CompanyTile
          key={company.id}
          id={company.id}
          name={company.name}
          url={company.url}
          description={company.description}
          note={company.note}
        />
      )
    })
    return (
      <div>
        <CompanyForm
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          handleSubmitAsks={this.handleSubmitAsks}
          handleSubmitTech={this.handleSubmitTech}
        />
        {companies}
      </div>
    );
  }


}

export default Companies;

import React, { Component } from 'react';
import CompanyForm from '../components/CompanyForm';

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyInfo: null,
    };

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

  render() {

    return (
      <div>
        <CompanyForm />
      </div>
    );
  }


}

export default Companies;

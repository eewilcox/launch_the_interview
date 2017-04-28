import React from 'react';

const CompanyForm = (props) => {
    return(
      <div className="panel">
        <form action="companies#index">
          <textarea name="body" type="text" rows="15" placeholder="Answer the Question..."/>
          <button className="button" type="submit">Submit</button>
        </form>
      </div>
    )
  }

export default CompanyForm;

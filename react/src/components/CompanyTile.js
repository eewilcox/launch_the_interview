import React from 'react';

const CompanyTile = (props) => {

    return(
      <div className="company">
        <h5 className="company-tiles">
          <span><i className="fa fa-briefcase" aria-hidden="true"></i></span>
          {props.name}
        </h5>
      </div>
    )
  }

export default CompanyTile;

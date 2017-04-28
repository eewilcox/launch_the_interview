import React from 'react';

const CompanyForm = (props) => {
    return(
      <div className="single">
        <form action="companies#index">
          <input name="name" type="text" placeholder="Company Name" onChange={props.handleInputChange}/>
          <input name="url" type="text" placeholder="Job Posting URL" onChange={props.handleInputChange}/>
          <textarea name="description" type="text" rows="15" placeholder="Description" onChange={props.handleInputChange}/>
          <textarea name="notes" type="text" rows="15" placeholder="Notes" onChange={props.handleInputChange}/>
          <button className="button" type="submit" onClick={props.handleSubmit}>Submit</button>
        </form>
        <form className="mult">
          <textarea name="question" type="text" rows="15" placeholder="Question to Ask..." onChange={props.handleInputChange}/>
          <button className="button" type="submit" onClick={props.handleSubmitAsks}>Submit</button>
        </form>
        <form>
          <input name="technology" type="text" placeholder="Technology" onChange={props.handleInputChange}/>
          <button className="button" type="submit" onClick={props.handleSubmitTech}>Submit</button>
        </form>
      </div>
    )
  }

export default CompanyForm;

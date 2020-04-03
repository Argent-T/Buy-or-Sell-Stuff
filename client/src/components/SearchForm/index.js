import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form >
      <div className="form-group">
        
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="name"
          list="names"
          type="text"
          className="form-control"
          placeholder="Search"
          id="name"
        />
        
       
       
      </div>
    </form>
  );
}

export default SearchForm;


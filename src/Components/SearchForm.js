import { useState } from "react";

/** SearchForm: 
 *    props:
 *      - search: parent function
 * 
 *    state:
 *      - formData: "search term"
 * 
 *    {Companies, Jobs} -> SearchForm
 * 
 */
function SearchForm({ search }) {
  const [formData, setFormData] = useState("");

  // handleChange: updates state with each key press
  function handleChange(evt) {
    const userInput = evt.target.value;
    setFormData(userInput);
  }

  // handleSearch: calls parent function on form submission
  function handleSearch(evt) {
    evt.preventDefault();
    search(formData.trim());
  }

  return (
    <div className="SearchForm mb-3">
      <form onSubmit={handleSearch}>
        <div className="row d-flex justify-content-center">
          <div className="col-4">
            <input
              className="form-control"
              onChange={handleChange}
              type="text"
              placeholder="Enter search term..."
            ></input>
          </div>
          <button className="btn btn-secondary col-1">Search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;

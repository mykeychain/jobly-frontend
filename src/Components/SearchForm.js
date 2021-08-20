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
    <div className="SearchForm">
      <form onSubmit={handleSearch}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter search term..."
        ></input>
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchForm;

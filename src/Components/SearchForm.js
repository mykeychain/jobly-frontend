import { useState } from "react";

/** TODO: DOCSTRING */
function SearchForm({ search }) {
  const [formData, setFormData] = useState("");

  function handleChange(evt) {
    const userInput = evt.target.value;
    setFormData(userInput);
  }

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

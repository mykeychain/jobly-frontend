import { useState } from "react";

function SearchForm({ search }) {
  const [formData, setFormData] = useState("");
  console.log(formData);

  function handleChange(evt) {
    const userInput = evt.target.value;
    setFormData(userInput);
  }

  function handleSearch(evt) {
    evt.preventDefault();
    search(formData);
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

import CompanyList from "./CompanyList";
import SearchForm from "./SearchForm";

function Companies() {
  console.debug("Companies component rendered.");
  
  return (
    <div className="Companies">
      <h1>Companies</h1>
      <SearchForm />
      <CompanyList />
    </div>
  );
}

export default Companies;

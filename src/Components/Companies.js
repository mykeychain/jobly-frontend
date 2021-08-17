import { useEffect, useState } from "react";
import JoblyApi from "../api";
import CompanyList from "./CompanyList";
import SearchForm from "./SearchForm";

/** Companies: renders search form and company list
 *    state:
 *      - companies: [ { handle, name, description, numEmployees, logoUrl }, ...]
 *      - isLoading: boolean
 *
 *    App -> Companies -> { SearchForm, CompanyList }
 */

function Companies() {
  console.debug("Companies component rendered.");

  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // gets all companies on mount
  useEffect(function getInitialCompanies() {
    const _getInitialCompanies = async function () {
      const companies = await JoblyApi.getAllCompanies();
      setCompanies(companies);
    };
    _getInitialCompanies();
    setIsLoading(false);
  }, []);

  // gets companies that match search term, toggles isLoading
  async function handleSearch(searchTerm) {
    const companies = await JoblyApi.getAllCompanies(searchTerm);
    setCompanies(companies);
  }

  if (isLoading) {
    return (
      <div className="Companies">
        <p>...loading</p>
      </div>
    );
  }

  return (
    <div className="Companies">
      <h1>Companies</h1>
      <SearchForm search={handleSearch} />
      <CompanyList companies={companies} />
    </div>
  );
}

export default Companies;

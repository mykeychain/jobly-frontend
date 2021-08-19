import { useContext, useEffect, useState } from "react";
import JoblyApi from "../api";
import CompanyList from "./CompanyList";
import Loading from "./Loading";
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
      await handleSearch();
      setIsLoading(false);
    };
    _getInitialCompanies();
  }, []);

  // gets companies that match search term
  async function handleSearch(searchTerm) {
    const companies = await JoblyApi.getAllCompanies(searchTerm);
    setCompanies(companies);
  }

  if (isLoading) {
    return <Loading />;
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

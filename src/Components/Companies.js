import { useEffect, useState } from "react";
import JoblyApi from "../api";
import CompanyList from "./CompanyList";
import SearchForm from "./SearchForm";

function Companies() {
  console.debug("Companies component rendered.");

  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function getInitialCompanies() {
    const _getInitialCompanies = async function () {
      const companies = await JoblyApi.getAllCompanies();
      setCompanies(companies);
    };
    _getInitialCompanies();
    setIsLoading(false);
  }, []);

  async function handleSearch(searchTerm) {
    setIsLoading(true);
    const companies = await JoblyApi.getAllCompanies();
    setCompanies(companies);
    setIsLoading(false);
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

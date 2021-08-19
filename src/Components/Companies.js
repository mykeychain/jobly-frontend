import { useContext, useEffect, useState, Redirect } from "react";
import JoblyApi from "../api";
import UserContext from "../Context/UserContext";
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
      // can call handleSearch here to reduce duplicated code
      const companies = await JoblyApi.getAllCompanies();
      setCompanies(companies);
      setIsLoading(false);
    };
    _getInitialCompanies();
  }, []);

  // TODO: pick up here in the morning
  // const {currentUser} = useContext(UserContext);
  // if (!currentUser.username) {
  //   return <Redirect to="/" />;
  // }

  // gets companies that match search term
  async function handleSearch(searchTerm) {
    const companies = await JoblyApi.getAllCompanies(searchTerm);
    setCompanies(companies);
  }

  if (isLoading) {
    return (
      <Loading />
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

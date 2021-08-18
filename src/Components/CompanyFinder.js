import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CompanyDetail from "./CompanyDetail";
import JoblyApi from "../api";
import Loading from "./Loading";

/** CompanyFinder: gets details of specific company from API
 *    url-params: 
 *      - handle: company handle as string
 * 
 *    state: 
 *      - company: { handle, name, description, numEmployees, logoUrl, jobs }
 *          where jobs is [{ id, title, salary, equity }, ...]
 *      - isLoading: boolean
 *        
 *    CompanyFinder -> CompanyDetail
 */

function CompanyFinder() {
  const [company, setCompany] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { handle } = useParams();

  // gets details of specific company from API
  useEffect(function findCompany() {
    async function _findCompany() {
      const company = await JoblyApi.getCompany(handle);
      setCompany(company);
      setIsLoading(false);
    }
    _findCompany();
  }, [handle]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="CompanyFinder">
      <CompanyDetail company={company} />
    </div>
  );
}

export default CompanyFinder;

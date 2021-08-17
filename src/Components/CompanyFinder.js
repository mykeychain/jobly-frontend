import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CompanyDetail from "./CompanyDetail";
import JoblyApi from "../api";

function CompanyFinder() {
  const [company, setCompany] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { handle } = useParams();

  useEffect(function findCompany() {
    async function _findCompany() {
      const company = await JoblyApi.getCompany(handle);
      setCompany(company);
      setIsLoading(false);
    }
    _findCompany();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="CompanyFinder">
      <CompanyDetail company={company} />
    </div>
  );
}

export default CompanyFinder;

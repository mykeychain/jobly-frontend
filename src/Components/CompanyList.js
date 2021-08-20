import CompanyCard from "./CompanyCard";
import "./CompanyList.css";

/** CompanyList: renders list of company cards
 *    props:
 *      - companies: [ { handle, name, description, numEmployees, logoUrl }, ...]
 *
 *    Companies -> CompanyList -> CompanyCard
 */

function CompanyList({ companies }) {
  return (
    <div className="CompanyList">
      {companies.map((company) => (
        <CompanyCard company={company} key={company.handle} />
      ))}
    </div>
  );
}

export default CompanyList;

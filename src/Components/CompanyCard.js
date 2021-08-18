import { Link } from "react-router-dom";
import "./CompanyCard.css";

/** CompanyCard:
 *    props:
 *      - company: { handle, name, description, numEmployees, logoUrl }
 *
 *    CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {
  return (
    <Link className="CompanyCard" to={`/companies/${company.handle}`}>
      <div className="CompanyCard-div">
        <h5>{company.name}</h5>
        {company.logoUrl ? (
          <img src={company.logoUrl} alt={company.name} />
        ) : (
          ""
        )}
        <small>{company.description}</small>
      </div>
    </Link>
  );
}

export default CompanyCard;

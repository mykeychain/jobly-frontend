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
    <Link className="CompanyCard card col-6 mb-3 mx-auto" to={`/companies/${company.handle}`}>
      <div className="row">
        <div className="col-3">
          <img className="img-fluid"
            src={company.logoUrl 
              ? company.logoUrl 
              : "https://via.placeholder.com/150x100"} 
            alt={company.name} />
        </div>
        <div className="card-body col-9">
          <h5 className="card-title">{company.name}</h5>
          <small className="card-text">{company.description}</small>
        </div>
      </div>
    </Link>
  );
}

export default CompanyCard;

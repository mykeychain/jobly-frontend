import JobList from "./JobList";

/** CompanyDetail: displays company details and renders job list
 *    props:
 *      - company: { handle, name, description, numEmployees, logoUrl, jobs }
 *          where jobs is [{ id, title, salary, equity }, ...]
 *
 *    CompanyFinder -> CompanyDetail -> JobList
 */

function CompanyDetail({ company }) {
  return (
    <div className="CompanyDetail">
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      <JobList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;

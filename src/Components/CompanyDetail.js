import JobList from "./JobList";

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

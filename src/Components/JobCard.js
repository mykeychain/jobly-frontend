import "./JobCard.css";

/** JobCard: 
 *    props: 
 *      - job: { id, title, salary, equity, companyHandle, companyName }
 * 
 *    JobList -> JobCard
 */
function JobCard({job}) {
  return (
    <div className="JobCard" >
      <h5>{job.title}</h5>
      <p>{job.companyName}</p>
      <small>Salary: {job.salary}</small>
      <small>Equity: {job.equity}</small>
      <form>
        <button disabled>Apply</button>
      </form>
    </div>
  )
}

export default JobCard;

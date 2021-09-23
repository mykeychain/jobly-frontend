import JobCard from "./JobCard";

/** JobList: renders list of job cards
 *    props:
 *      - jobs: [ { id, title, salary, equity, companyHandle, companyName }, ...]
 *
 *    Jobs -> JobList -> JobCard
 */

function JobList({ jobs }) {
  return (
    <div className="JobList row">
      {jobs.map((job) => (
        <JobCard job={job} key={job.id} />
      ))}
    </div>
  );
}

export default JobList;

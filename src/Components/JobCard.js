import { useContext } from "react";
import UserContext from "../Context/UserContext";
import "./JobCard.css";

/** JobCard:
 *    props:
 *      - job: { id, title, salary, equity, companyHandle, companyName }
 *
 *    context:
 *      - UserContext: {currentUser, setCurrentUser}
 *          where currentUser = { username, firstName, lastName, isAdmin, applications }
 *
 *    JobList -> JobCard
 */
function JobCard({ job }) {
  const { currentUser } = useContext(UserContext);
  const { applications } = currentUser;

  function checkApplied() {
    if (applications.includes(job.id)) {
      return <button disabled>Applied</button>;
    } else {
      return <button>Apply</button>;
    }
  }

  return (
    <div className="JobCard">
      <h5>{job.title}</h5>
      <p>{job.companyName}</p>
      <small>Salary: {job.salary}</small>
      <small>Equity: {job.equity}</small>
      <form>{checkApplied()}</form>
    </div>
  );
}

export default JobCard;

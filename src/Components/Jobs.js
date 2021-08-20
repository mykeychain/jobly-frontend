import { useEffect, useState } from "react";
import JoblyApi from "../api";
import JobList from "./JobList";
import Loading from "./Loading";
import SearchForm from "./SearchForm";

/** Jobs: renders search form and job list
 *    state:
 *      - jobs: [ { id, title, salary, equity, companyHandle, companyName }, ...]
 *      - isLoading: boolean
 *
 *    App -> Jobs -> { SearchForm, JobList }
 */

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // gets all jobs on mount
  useEffect(function getInitialJobs() {
    const _getInitialJobs = async function () {
      const jobs = await JoblyApi.getAllJobs();
      setJobs(jobs);
      setIsLoading(false);
    };
    _getInitialJobs();
  }, []);

  // gets jobs with title that match search term, toggles isLoading
  async function handleSearch(searchTerm) {
    const jobs = await JoblyApi.getAllJobs(searchTerm);
    setJobs(jobs);
  }

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <div className="Jobs">
      <h1>Jobs</h1>
      <SearchForm  search={handleSearch}/>
      <JobList jobs={jobs}/>
    </div>
  );
}

export default Jobs;

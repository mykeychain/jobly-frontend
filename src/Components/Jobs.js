import JobList from "./JobList";
import SearchForm from "./SearchForm";

function Jobs() {
  return (
    <div className="Jobs">
      <h1>Jobs</h1>
      <SearchForm />
      <JobList />
    </div>
  );
}

export default Jobs;

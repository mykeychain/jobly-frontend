import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /*********************************************************** Auth */
  /** signUp: Sign up new user.
   *    Accepts: newUser = { username, password firstName, lastName, email }
   *    Returns: "token"
   */
  static async signUp(newUser) {
    let res = await this.request(`auth/register`, newUser, "post");
    return res.token;
  }

  /** login: Authorizes user.
   *    Accepts: loginCredentials = { username, password }
   *    Returns: "token"
   */
  static async login(loginCredentials) {
    let res = await this.request(`auth/token`, loginCredentials, "post");
    return res.token;
  }

  /*********************************************************** Users */

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async updateUser({ username, ...updateData }) {
    await this.request(`users/${username}`, updateData, "patch");
    let user = await JoblyApi.getUser(username);
    return user;
  }

  /*********************************************************** Companies */

  /** getAllCompanies: Get all companies from API with optional name filter.
   *    Accepts: searchTerm = "search" (optional)
   *    Returns: [ { handle, name, description, numEmployees, logoUrl }, ...]
   */

  static async getAllCompanies(searchTerm) {
    const queryString = searchTerm ? `?name=${searchTerm}` : "";
    let res = await this.request(`companies${queryString}`);
    return res.companies;
  }

  /** getCompany: Get details on a company by handle.
   *    Accepts: company handle as a string (e.g. "baker-santos")
   *    returns: { handle, name, description, numEmployees, logoUrl, jobs }
   *        where jobs is [{ id, title, salary, equity }, ...]
   */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /*********************************************************** Jobs */

  /** getAllJobs: Get all jobs from API with optional title filter.
   *    Accepts: searchTerm = "search" (optional)
   *    Returns: [ { id, title, salary, equity, companyHandle, companyName }, ...]
   */
  static async getAllJobs(searchTerm) {
    const queryString = searchTerm ? `?title=${searchTerm}` : "";
    let res = await this.request(`jobs${queryString}`);
    return res.jobs;
  }
}
// for now, put token ("testuser" / "password" on class)
// JoblyApi.token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;

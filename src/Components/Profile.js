import { useState } from "react";
import Alert from "./Alert";
import "./Profile.css";

/** Profile: renders form to update user information
 *    props:
 *      - currentUser: { username, firstName, lastName, email, isAdmin, applications }
 *      - updateUser: parent function
 *
 *    states:
 *      - formData: { username, firstName, lastName, email }
 *      - errors: ["error message", ...]
 *
 *    Routes -> Profile
 */
function Profile({ currentUser, updateUser }) {
  const [formData, setFormData] = useState({
    username: currentUser.username,
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
  });
  const [errors, setErrors] = useState([]);

  // handleChange: updates state on change
  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  }

  // handleSubmit: calls parent function on submit, catches errors
  // and updates state
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await updateUser(formData);
    } catch (err) {
      setErrors(err);
    }
  }

  return (
    <div className="Profile">
      <form onSubmit={handleSubmit}>
        <div className="form-row col-6 col-lg-4 mx-auto mb-1 mt-5">
          <label className="col-form-label" htmlFor="username">
            Username
          </label>
          <input
            className="form-control"
            readOnly={true}
            id="username"
            name="username"
            value={formData.username}
          ></input>
        </div>
        <div className="form-row col-6 col-lg-4 mx-auto mb-1">
          <label className="col-form-label" htmlFor="firstName">
            First Name
          </label>
          <input
            className="form-control"
            onChange={handleChange}
            id="firstName"
            name="firstName"
            value={formData.firstName}
          ></input>
        </div>
        <div class="form-row col-6 col-lg-4 mx-auto mb-1">
          <label className="col-form-label" htmlFor="last-name">
            Last Name
          </label>
          <input
            className="form-control"
            onChange={handleChange}
            id="lastName"
            name="lastName"
            value={formData.lastName}
          ></input>
        </div>
        <div className="form-row col-6 col-lg-4 mx-auto mb-1">
          <label className="col-form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            onChange={handleChange}
            id="email"
            name="email"
            value={formData.email}
          ></input>
        </div>
        <div className="form-row col-6 col-lg-4 mx-auto mb-1 mt-3">
          <label className="col-form-label" htmlFor="password">
            Confirm password to make changes
          </label>
          <input
            className="form-control"
            onChange={handleChange}
            id="password"
            name="password"
            type="password"
            autoComplete="off"
          ></input>
        </div>
        {errors.length > 0
          ? errors.map((error, i) => <Alert error={error} key={i} />)
          : ""}
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
}

export default Profile;

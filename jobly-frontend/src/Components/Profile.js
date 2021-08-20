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
    email: currentUser.email
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
        <label htmlFor="username">Username</label>
        <input
          readOnly={true}
          id="username"
          name="username"
          value={formData.username}
        ></input>
        <label htmlFor="firstName">First Name</label>
        <input
          onChange={handleChange}
          id="firstName"
          name="firstName"
          value={formData.firstName}
        ></input>
        <label htmlFor="last-name">Last Name</label>
        <input
          onChange={handleChange}
          id="lastName"
          name="lastName"
          value={formData.lastName}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          id="email"
          name="email"
          value={formData.email}
        ></input>
        <label htmlFor="password">Confirm password to make changes</label>
        <input
          onChange={handleChange}
          id="password"
          name="password"
          type="password"
          autoComplete="off"
        ></input>
        {errors.length > 0
          ? errors.map((error, i) => <Alert error={error} key={i} />)
          : ""}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Profile;
// import UserForm from "./UserForm";

import { useState } from "react";
import Alert from "./Alert";
import "./Profile.css";

/** TODO: docstring */

function Profile({ currentUser, updateUser }) {
  const [formData, setFormData] = useState({});
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
        <label for="username">Username</label>
        <input
          readOnly="true"
          id="username"
          name="username"
          value={currentUser.username}
        ></input>
        <label for="firstName">First Name</label>
        <input
          onChange={handleChange}
          id="firstName"
          name="firstName"
          value={currentUser.firstName}
        ></input>
        <label for="last-name">Last Name</label>
        <input
          onChange={handleChange}
          id="lastName"
          name="lastName"
          value={currentUser.lastName}
        ></input>
        <label for="email">Email</label>
        <input
          onChange={handleChange}
          id="email"
          name="email"
          value={currentUser.email}
        ></input>
        <label for="password">Confirm password to make changes</label>
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

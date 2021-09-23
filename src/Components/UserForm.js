import { useState } from "react";
import Alert from "./Alert";

// TODO: consider AuthenticateForm to be more specific
/** UserForm: controlled component that renders form and calls parent function
 *  on submit.
 *    props:
 *      - submit: parent function
 *      - fields: ["username", "password", ...]
 *
 *    states:
 *      - formData: { username, password, ... }
 *      - errors: ["error message", ...]
 *
 *    { Login, Signup } -> UserForm -> Alert
 */
function UserForm({ submit, fields }) {
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
      await submit(formData);
    } catch (err) {
      setErrors(err);
    }
  }

  return (
    <form className="UserForm" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div class="row">
          <div key={field} className="col-6 col-lg-4 mx-auto mb-1">
            <label className="form-label text-start" htmlFor={field}>
              {field[0].toUpperCase() + field.slice(1)}
            </label>
            <input
              type={field === "password" ? field : "text"}
              className="form-control"
              id={field}
              name={field}
              value={formData.field}
              onChange={handleChange}
              autoComplete={field === "password" ? "off" : ""}
            ></input>
          </div>
        </div>
      ))}
      {errors.length > 0
        ? errors.map((error, i) => <Alert error={error} key={i} />)
        : ""}
      <button className="btn btn-dark mt-4">Submit</button>
    </form>
  );
}

export default UserForm;

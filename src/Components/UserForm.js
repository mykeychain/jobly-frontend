import { useState } from "react";

/** UserForm: controlled component that renders form and calls parent function
 *  on submit.
 *    props:
 *      - submit: parent function
 *      - fields: ["username", "password", ...]
 *
 *    states:
 *      - formData: { username, password, ... }
 *
 *    { Login, Signup } -> UserForm
 */
function UserForm({ submit, fields }) {
  const [formData, setFormData] = useState({});

  // handleChange: updates state on change
  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  }

  // handleSubmit: calls parent function on submit
  function handleSubmit(evt) {
    evt.preventDefault();
    submit(formData);
  }

  return (
    <form className="UserForm" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <input
          type={field === "password" ? field : "text"}
          name={field}
          placeholder={field}
          key={field}
          value={formData.field}
          onChange={handleChange}
        ></input>
      ))}
      <button>Submit</button>
    </form>
  );
}

export default UserForm;

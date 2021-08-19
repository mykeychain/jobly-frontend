import { useContext, useEffect, useState } from "react";
import ErrorContext from "../Context/ErrorContext";
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
 *    
 *    context:
 *      - ErrorContext: [error, ...]
 *
 *    { Login, Signup } -> UserForm
 */
function UserForm({ submit, fields }) {
  const [formData, setFormData] = useState({});

  const {errors, setErrors} = useContext(ErrorContext);

  useEffect(function clearErrors(){
    setErrors([]);
  }, [setErrors]);

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
    submit(formData)
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
      {errors.length > 0 ? errors.map((error, i) => <Alert error={error} key={i}/>) : ""}
      <button>Submit</button>
    </form>
  );
}

export default UserForm;

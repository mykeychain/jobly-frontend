import UserForm from "./UserForm";

/** Signup: Renders Login form and handles login.
 *    props:
 *      - signUp: parent function
 *
 *    Routes -> Signup -> UserForm
 */
function Signup({ signUp }) {
  const fields = ["username", "password", "firstName", "lastName", "email"];

  return <UserForm submit={signUp} fields={fields} />;
}

export default Signup;

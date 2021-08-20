import UserForm from "./UserForm";

/** Login: Renders Login form and handles login.
 *    props:
 *      - login: parent function
 *
 *    Routes -> Login -> UserForm
 */
function Login({ login }) {
  const fields = ["username", "password"];

  return <UserForm submit={login} fields={fields} />;
}

export default Login;

import { Redirect } from "react-router-dom";
import UserForm from "./UserForm";

/** Login: Renders Login form and handles login.
 *    props:
 *      - login: parent function
 *
 *    Routes -> Login -> UserForm
 */
function Login({ login }) {
  const fields = ["username", "password"];

  // handleLogin: calls parent function
  function handleLogin(loginCredentials) {
    login(loginCredentials);
  }

  return <UserForm submit={handleLogin} fields={fields} />;
}

export default Login;

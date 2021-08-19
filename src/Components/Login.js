import { useContext } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "../Context/UserContext";
import UserForm from "./UserForm";

/** Login: Renders Login form and handles login.
 *    props:
 *      - login: parent function
 *
 *    context:
 *      - UserContext: {currentUser, setCurrentUser}
 *          where currentUser = { username, firstName, lastName, isAdmin, applications }
 *
 *    Routes -> Login -> UserForm
 */
function Login({ login }) {
  const fields = ["username", "password"];

  const { currentUser } = useContext(UserContext);

  if (currentUser.username) {
    return <Redirect to="/" />;
  }

  // handleLogin: calls parent function
  // we can skip this function and pass login directly
  function handleLogin(loginCredentials) {
    login(loginCredentials);
  }

  return <UserForm submit={handleLogin} fields={fields} />;
}

export default Login;

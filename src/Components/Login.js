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
 *          where currentUser = { username, firstName, lastName,
 *          isAdmin, applications }
 *
 *    Routes -> Login -> UserForm
 */
function Login({ login }) {
  const fields = ["username", "password"];

  return <UserForm submit={login} fields={fields} />;
}

export default Login;

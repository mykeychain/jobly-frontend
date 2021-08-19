import { useContext } from "react";
import UserContext from "../Context/UserContext";
import UserForm from "./UserForm";
import { Redirect } from "react-router-dom";

/** Signup: Renders Login form and handles login.
 *    props:
 *      - signUp: parent function
 *
 *    context:
 *      - UserContext: {currentUser, setCurrentUser}
 *          where currentUser = { username, firstName, lastName,
 *          isAdmin, applications }
 *
 *    Routes -> Signup -> UserForm
 */
function Signup({ signUp }) {
  const fields = ["username", "password", "firstName", "lastName", "email"];
  const { currentUser } = useContext(UserContext);
  
  if (currentUser.username) {
    return <Redirect to="/" />;
  }

  return <UserForm submit={signUp} fields={fields} />;
}

export default Signup;

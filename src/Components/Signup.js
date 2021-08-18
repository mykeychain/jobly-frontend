import UserForm from "./UserForm";

/** Signup: Renders Login form and handles login.
 *    props: 
 *      - signUp: parent function
 *    
 *    Routes -> Signup -> UserForm
 */
function Signup({signUp}) {
  const fields = ["username", "password", "firstName", "lastName", "email"];

  // handleSignUp: calls parent function
  function handleSignUp(newUser) {
    signUp(newUser);
  }

  return (
    <UserForm submit={handleSignUp} fields={fields}/>
  );
}

export default Signup;

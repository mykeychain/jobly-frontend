import { useContext } from "react";
import UserContext from "../Context/UserContext";
import UserForm from "./UserForm";

/** TODO: docstring */

function Profile() {
  const {currentUser} = useContext(UserContext);

  return (
    <div className="Profile">
      <h1>Profile</h1>
      {/* TODO: bring back userform */}
      {/* <UserForm /> */}
    </div>
  );
}

export default Profile;

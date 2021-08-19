import { useState } from "react";
import jsonwebtoken from "jsonwebtoken";
import { useHistory } from "react-router-dom";
import JoblyApi from "./api";
import "./App.css";
import Navigation from "./Components/Navigation";
import Routes from "./Components/Routes";
import UserContext from "./Context/UserContext";
import ErrorContext from "./Context/ErrorContext";

/** App: renders nav bar and routes
 *    states:
 *      - token: "token"
 *      - currentUser: { username, isAdmin, iat }
 *
 *    context:
 *      - UserContext Provider: {currentUser, setCurrentUser}
 *          where currentUser = { username, firstName, lastName, isAdmin, applications }
 *      - ErrorContext Provider: [error, ...]
 *
 *    App -> { Navigation, Routes }
 */

function App() {
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [errors, setErrors] = useState([]);

  const history = useHistory();

  async function signUp(newUser) {
    let token;
    try{
      token = await JoblyApi.signUp(newUser);
      _handleLogin(token);
    } catch(err) {
      setErrors(err);
    }
  }

  async function login(loginCredentials) {
    let token; 

    try{
      token = await JoblyApi.login(loginCredentials);
      _handleLogin(token);
    } catch(err) {
      setErrors(err);
    }

  }

  async function _handleLogin(token) {
    setToken(token);
    JoblyApi.token = token;
    const { username } = jsonwebtoken.decode(token);
    const user = await JoblyApi.getUser(username);
    setCurrentUser(user);
    history.push("/");
  }

  function logout() {
    setToken("");
    JoblyApi.token = "";
    setCurrentUser({});
  }

  return (
    <div className="App">
      <ErrorContext.Provider value={{errors, setErrors}}>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          <Navigation logout={logout} />
          <Routes signUp={signUp} login={login} />
        </UserContext.Provider>
      </ErrorContext.Provider>
    </div>
  );
}

export default App;

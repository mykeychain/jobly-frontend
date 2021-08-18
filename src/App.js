import { useState } from "react";
import JoblyApi from "./api";
import "./App.css";
import Navigation from "./Components/Navigation";
import Routes from "./Components/Routes";
import jsonwebtoken from "jsonwebtoken";
import { useHistory } from "react-router-dom";

function App() {
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  const history = useHistory();

  async function signUp(newUser) {
    const token = await JoblyApi.signUp(newUser);
    _handleLogin(token);
  }

  async function login(loginCredentials) {
    const token = await JoblyApi.login(loginCredentials);
    _handleLogin(token);
  }

  function _handleLogin(token) {
    setToken(token);
    JoblyApi.token = token;
    setCurrentUser(jsonwebtoken.decode(token));
    history.push("/");
  }

  function logout() {
    setToken("");
    JoblyApi.token = "";
    setCurrentUser({});
  }

  return (
    <div className="App">
      <Navigation logout={logout} />
      <Routes signUp={signUp} login={login} />
    </div>
  );
}

export default App;

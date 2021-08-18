import { useState } from "react";
import JoblyApi from "./api";
import "./App.css";
import Navigation from "./Components/Navigation";
import Routes from "./Components/Routes";
import jsonwebtoken from "jsonwebtoken";

function App() {
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  async function signUp(newUser) {
    const token = await JoblyApi.signUp(newUser);
    setToken(token);
    JoblyApi.token = token;
    setCurrentUser(jsonwebtoken.decode(token));
  }

  async function login(loginCredentials) {
    const token = await JoblyApi.login(loginCredentials);
    setToken(token);
    JoblyApi.token = token;
    setCurrentUser(jsonwebtoken.decode(token));
  }

  function logout() {
    setToken("");
    JoblyApi.token = "";
    setCurrentUser({});
  }

  return (
    <div className="App">
      <Navigation 
        signUp={signUp}
        login={login}
        logout={logout}/>
      <Routes 
        signUp={signUp}
        login={login}
        logout={logout}/>
    </div>
  );
}

export default App;

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
    setCurrentUser(jsonwebtoken.decode(token));
  }

  async function login(user) {}

  return (
    <div className="App">
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;

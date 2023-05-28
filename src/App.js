import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Componenets/NavBar";
import About from "./Screens/about";
import Home from "./Screens/home";
import Profile from "./Screens/profile";
import Cart from "./Screens/cart";
import Login from "./Screens/login";
import Register from "./Screens/register";

const App = () => {
  const { username, password, login, email } = useSelector(
    (state) => state.userDataReducer
  );

  // useEffect(() => {
  //   console.log("Data from reducer : ", username, password, email, login);
  // }, []);

  return (
    <div className="app">
      {login ? (
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/reactOnGit" Component={Home} />
            <Route path="/" Component={Home} />
            <Route path="/profile" Component={Profile} />
            <Route path="/about" Component={About} />
            <Route path="/cart" Component={Cart} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          {/* <NavBar /> */}
          <Routes>
            <Route path="*" Component={Login} />
            <Route path="register" Component={Register} />
            {/* <Route path="/" Component={Login} />
          <Route path="/profile" Component={Login} />
          <Route path="/about" Component={Login} />
          <Route path="/cart" Component={Login} /> */}
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;

import React from "react";
import { useEffect, createContext, useReducer, useContext } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import SignUp from "./components/pages/SignUp";
import CategoriesSection from "./components/categories_section";

import CreatePost from "./components/pages/CreatePost";
import './App.css';
import Travel from "./components/pages/Travel";
import Sportspage from './pages/sportspage';
import Foodpage from './pages/foodpage';
import Homepage from './pages/homepage';
import Aboutpage from './pages/aboutpage';
// import Register from './pages/Register';
import { reducer, initialState } from "./reducer/userReducer";

export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
      // history.push("/");
    } else {
      history.push("/catergories");
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route path="/signup" component={SignUp} />
      <Route path="/create" component={CreatePost} />
          <Route path="/travel" component={Travel} />
          <Route path="/sports" component={Sportspage} />
          <Route path="/food" component={Foodpage} />
          <Route path="/about" component={Aboutpage} />
          <Route exact path="/home" component={Homepage} />
        </Switch>
      </BrowserRouter>
      {/* <Register /> */}
    </>
  );
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbar />
      

        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;


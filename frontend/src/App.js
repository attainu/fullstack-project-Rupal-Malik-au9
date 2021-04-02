import React from "react";
import { useEffect, createContext, useReducer, useContext } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/pages/Home";
import Sport from "./components/pages/Sport";
import Food from "./components/pages/Food";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import SignUp from "./components/pages/SignUp";
import CreatePost from "./components/pages/CreatePost";
import "./App.css";
import Travel from "./components/pages/Travel";
import Homepage from "./components/pages/homepage";
import Aboutpage from "./components/pages/aboutpage";
import UserProfile from "./components/pages/UserProfile";
import FollowingPost from "./components/pages/FollowingPosts";
import CreateFoodPost from "./components/pages/CreateFoodPost";
import PostDetail from "./components/pages/PostDetail";
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
    }
  }, []);

  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route exact exact path="/profile" component={Profile} />
      <Route path="/signup" component={SignUp} />
      <Route path="/create" component={CreatePost} />
      <Route path="/travel" component={Travel} />
      <Route path="/sports" component={Sport} />
      <Route path="/food" component={Food} />
      <Route path="/about" component={Aboutpage} />
      <Route exact path="/" component={Homepage} />
      <Route path="/profile/:userid" component={UserProfile} />
      <Route path="/followerspost" component={FollowingPost} />
      <Route path="/createfoodpost" component={CreateFoodPost} />
      <Route exact path="/postdetail/:postid" component={PostDetail} />
      <Route path="profile/postdetail/:postid" component={PostDetail} />
    </Switch>
  );
};

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

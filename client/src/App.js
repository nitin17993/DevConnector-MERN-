import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Landing from "./components/Layout/Landing";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Alert from "./components/Layout/Alert";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/Routing/PrivateRoute";
import CreateProfile from "./components/ProfileForms/CreateProfile";
import EditProfile from "./components/ProfileForms/EditProfile";
import AddExperience from "./components/ProfileForms/AddExperience";
import AddEducation from "./components/ProfileForms/AddEducation";
import Profiles from "./components/Profiles/Profiles";
import Profile from "./components/Profile/Profile";
import Posts from "./components/Posts/Posts";
import Post from "./components/Post/Post";
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:id" component={Profile} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
              <PrivateRoute
                exact
                path="/add-experience"
                component={AddExperience}
              />
              <PrivateRoute
                exact
                path="/add-education"
                component={AddEducation}
              />
              <PrivateRoute exact path="/posts" component={Posts} />
              <PrivateRoute exact path="/post/:id" component={Post} />
            </Switch>
          </section>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import {firebaseApp} from "./firebase";

firebaseApp.auth().onAuthStateChanged(user => {
  if(user){
    console.log("user is loged in", user);

    //history.push("/app");
  } else {
    console.log("user isn't loged in", user);

  }
})

function App() {
  return (
    <>
      <Router>

        <Navbar />
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

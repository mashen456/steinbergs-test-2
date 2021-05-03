import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import LogOut from "./pages/logout";
import Database from "./pages/database";
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";

function App() {
    const [darkMode,setDarkMode] = useState(false);
    const theme = createMuiTheme({
        palette:{
            type: darkMode ? "light": "dark",
        },
    });
  return (
    <>
      <ThemeProvider theme={theme}>
          <Paper style={{height:"100vh"}}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
          <Route exact path="/signin" component={SignIn} />
          <Route path='/logout' component={LogOut} />
          <Route path='/db' component={Database} />
        </Switch>
      </Router>
          </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;

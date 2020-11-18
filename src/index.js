import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import './playground';
import reportWebVitals from './reportWebVitals';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Counter1 from './components/Counter1';
// import ChildrenProps from './components/ChildrenProps';
// import LoginUser from './components/LoginUser';
// import IndecisionApp from './components/IndecisionApp';
// import IndecisionApp from './components/IndecisionApp-1';
// import ShoppingCart from './components/ShoppingCart';
// import Register from './components/Register';
// import Registers from './components/Registers';
import Gallery from './pages/Gallery';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import PageNotFound from './pages/PageNotFound';

const Header = () => (
  <header>
    <h1>Navbar</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>&nbsp;
    <NavLink to="/profile/anmol"  activeClassName="is-active">Profile</NavLink>&nbsp;
    <NavLink to="/gallery"  activeClassName="is-active">Gallery</NavLink>&nbsp;
  </header>
)

const routes = (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={Dashboard} exact={true} /> {/* default route */}
      <Route path="/profile/:name" component={Profile} /> {/* parametarized route */}
      <Route path="/gallery" component={Gallery} /> {/* name route */}
      <Route component={PageNotFound} /> {/* wildcard route */}
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

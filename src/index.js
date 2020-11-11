import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './playground';
import reportWebVitals from './reportWebVitals';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Counter1 from './components/Counter1';
import ChildrenProps from './components/ChildrenProps';
import LoginUser from './components/LoginUser';
// import IndecisionApp from './components/IndecisionApp';
import IndecisionApp from './components/IndecisionApp-1';
import ShoppingCart from './components/ShoppingCart';
import Register from './components/Register';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Greet /> */}
    {/* <Greet name="Suhas" technology="Node" />
    <Greet name="Balaji" technology="Angular" /> */}
    {/* <Welcome name="Anmol" /> */}
    {/* <Welcome name="Suhas" />
    <Welcome name="Balaji" /> */}
    {/* <Counter1 /> */}
    {/* <ChildrenProps title="ChildrenProps">
      <div>This is a sub-title for children props</div>
    </ChildrenProps> */}
    {/* <LoginUser /> */}
    {/* <IndecisionApp /> */}
    {/* <ShoppingCart /> */}
    <Register />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route } from "react-router-dom"
import Home from './components/home/Home';
import Table from './components/table/Table';
import Headder from './components/headder/Headder';
import AddUser from './components/adduser/AddUser';
import EditUser from './components/edituser/EditUser';
import SearchResult from './components/searchResult/SearchResult';

function App() {
 
  return (
    <div className="App">  
      <Router>
        <Headder />
        <Route exact path="/"><Home/></Route>
        <Route path="/home"><Home/></Route>
        <Route path="/table"><Table/></Route>
        <Route path="/adduser"><AddUser/></Route>
        <Route path="/editUser/:id/:name/:mail/:phonenumber"><EditUser/></Route>
        <Route path="/searchResult/:name"><SearchResult/></Route>
      </Router>
    </div>
  );
}

export default App;

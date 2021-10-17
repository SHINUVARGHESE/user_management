import React,{useState} from 'react'
import './Headder.css';
import {BrowserRouter as Router, Link, useHistory } from 'react-router-dom';

function Headder() {
    const [name, setName] = useState()
    const storeName = (e) => {
        setName(e.target.value)
    }
   let history = useHistory()
  const searching=()=>{
        history.push(`/searchResult/${name}`)
    }
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm mt-0 mb-0">
            <Link to ="/" style={{fontSize:"30px", fontWeight:"bolder"}} className="navbar-brand">
                User Management
            </Link>
            <ul>
                <li>
                <Link to='/table' style={{textDecoration:'none'}}><h4 style={{fontSize:"18px", marginTop:"60px", marginLeft:"50px", color:'#fff'}}>All users</h4></Link>
                </li>
            </ul>
            <form onSubmit={searching} style={{position:'absolute' ,right:'0', marginRight:'35px'}} className="form-inline">
                <input required onChange={storeName}  style={{fontStyle:"italic"}} className="form-control mr-2" type="search" placeholder="Search User" aria-label="Search" />
                <button className="btn btn-info" type="submit"><i className="fa fa-search"></i></button>
            </form>  
       </nav>
    )
} 

export default Headder

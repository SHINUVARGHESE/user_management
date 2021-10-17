import React, { useState } from 'react';
import './Home.css';
import { Link,useHistory } from 'react-router-dom';

function Home() {
    const [name, setName] = useState()
    const storeName = (e) => {
        setName(e.target.value)
    }
   let history = useHistory()
  const searching=()=>{
        history.push(`/searchResult/${name}`)
    }

    return (
        <div>
            <form onSubmit={searching}> 
            <div className="search-bar" style={{ position: "absolute", left: "44%" }}>
                <input id="search" required type="text" onChange={storeName} placeholder="Search User" />
            <button type="submit"><i className="fa fa-search"></i></button>
            </div>
            </form>
            <Link to="/adduser"><button className="addUsers">Add User</button></Link>
        </div>
    )
}

export default Home

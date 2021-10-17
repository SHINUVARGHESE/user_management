import React, { useState } from 'react'
import './AddUser.css'
import axios from 'axios'
import { useHistory } from "react-router-dom";

function AddUser() {
    const [user, setUser] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    let history = useHistory();

    const handleInputChange = (e) => {
        if (e.target.name == 'userName') {
            setUserName({ name: e.target.value })
        } else if (e.target.name == 'mail') {
            setEmail({ mail: e.target.value })
        } else if (e.target.name == 'phone') {
            setPhone({ phonenum: e.target.value })
        }

        setUser({
            name: userName.name,
            mail: email.mail,
            phonenumber: phone.phonenum
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://3.23.104.74/addUser', user)
            .then(() => {
                console.log('User Added')
            })
            .catch(err => {
                console.error(err);
            });

        history.push("/table");
    }
    return (
        <div className="container">
            <form id="contact" onSubmit={handleSubmit}>
                <h3>Add User</h3>
                <fieldset>
                    <input placeholder="Name" onChange={handleInputChange} name="userName" type="text" tabIndex="1" required autoFocus />
                </fieldset>
                <fieldset>
                    <input placeholder="Email Address" onChange={handleInputChange} name="mail" type="email" tabIndex="2" required />
                </fieldset>
                <fieldset>
                    <input placeholder="Phone Number" onChange={handleInputChange} name="phone" type="tel" pattern="[0-9]{10}" tabIndex="3" required />
                </fieldset>
                <fieldset>
                    <button name="submit" type="submit" id="contact-submit">Add</button>
                </fieldset>
            </form>
        </div>
    )
}

export default AddUser

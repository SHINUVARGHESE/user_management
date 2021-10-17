import React, { useState, useEffect } from 'react'
import '../adduser/AddUser.css'
import axios from 'axios'
import { useHistory,useParams } from "react-router-dom";

function EditUser(props) {
    console.log(props.id+' hi');
    const [user, setUser] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const {id,name,mail,phonenumber} = useParams()
    let history = useHistory();

    useEffect(() => { 
        setUserName({ name: name})
        setEmail({ mail: mail})
        setPhone({ phonenum: phonenumber})
    }, [])
    
    const handleInputChange = (e) => {
        if (e.target.name == 'userName') {
            setUserName({ name: e.target.value })
        } else if (e.target.name == 'mail') {
            setEmail({ mail: e.target.value })
        } else if (e.target.name == 'phone') {
            setPhone({ phonenum: e.target.value })
        }

        setUser({
            userid:id,
            name: userName.name,
            mail: email.mail,
            phonenumber: phone.phonenum
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://3.23.104.74/editUser', user)
            .then(() => {
                console.log('User Edited')
            })
            .catch(err => {
                console.error(err);
            });
          history.push("/table"); 
    }
    return (
        <div className="container">
            <form id="contact" onSubmit={handleSubmit}>
                <h3>Edit User</h3>
                <fieldset>
                    <input value={userName.name} onChange={handleInputChange} name="userName" type="text" tabIndex="1" required autoFocus />
                </fieldset>
                <fieldset>
                    <input value={email.mail} onChange={handleInputChange} name="mail" type="email" tabIndex="2" required />
                </fieldset>
                <fieldset>
                    <input value={phone.phonenum} onChange={handleInputChange} name="phone" type="tel" pattern="[0-9]{10}" tabIndex="3" required />
                </fieldset>
                <fieldset>
                    <button name="submit" type="submit" id="contact-submit">Update</button>
                </fieldset>
            </form>
        </div> 
    ) 
}

export default EditUser

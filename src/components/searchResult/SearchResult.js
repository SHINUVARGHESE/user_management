import React, { useState, useEffect } from 'react'
import '../table/Table.css';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

export default function SearchResult() {
    const { name } = useParams();
    const [user, setUser] = useState([]);
    const [dis, setDis] = useState('disabled');
    useEffect(() => {
        axios.get('http://3.23.104.74/searchUser', { params: { userName: name } }).then((response) => {
            if(response.data){
              setUser([response.data])
            }else{
                alert('no such a user')
            }
        })
    }, [])

    const remove = (e) => {
        const data = {
            id: e.target.name
        }
        axios.post('http://3.23.104.74/removeUser', data)
        window.location.reload();

    }

    return (
        <div>
            <table className="table data">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Actions<Link to='/adduser'><button className="addUser">Add new</button></Link></th>
                    </tr>
                </thead>
                <tbody>
                    { 
                       user.map((item, ky) => {
                            return (
                                <tr key={ky} className="pl-5px">
                                    <td className="data"><input className="input" type="text" disabled = {dis ? "disabled" : ""}  value={item.name}/></td>
                                    <td className="data"><input className="input" type="text" disabled = {dis ? "disabled" : ""}  value={item.mail}/></td>
                                    <td className="data"><input className="input" type="text" disabled = {dis ? "disabled" : ""}  value={item.phonenumber}/></td>
                                    <td>
                                        <button id='save' className="save">save</button>
                                    <Link to={`/editUser/${item._id}/${item.name}/${item.mail}/${item.phonenumber}`}><button id="edit" className="edit">Edit</button></Link>
                                        <button onClick={remove} name={item._id} className="delete">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                      
                    }
                </tbody>
            </table>
        </div>
    )
}

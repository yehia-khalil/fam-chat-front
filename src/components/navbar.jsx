import axios from 'axios';
import { useEffect, useState } from 'react';
import { Redirect, Link, useHistory } from 'react-router-dom';
import { getCookie } from '../helpers/Helpers'

function NavBar({ setValue }) {
    let history = useHistory();
    let logOut = () => {
        axios.get('http://localhost:8000/api/logout', {
            headers: {
                'Authorization': `Bearer ${getCookie()}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            clearInfo()
        }).catch(err => {
            console.log(err.response);
            if (err.response.status == 401) {
                clearInfo()
            }
        })
    }
    let clearInfo = () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        localStorage.removeItem("user");
        history.push('/login');
        setValue(1)
    }
    return (
        <nav>
            <ul>
                {
                    localStorage.getItem("user") ?
                        <>
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <a href="#" onClick={() => logOut()}>Logout</a>
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </>
                }
            </ul>
        </nav>
    )
}

export default NavBar;

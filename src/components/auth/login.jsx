import { useEffect, useState } from 'react';
import { useHistory, Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import PusherClass from '../../Pusher/pusher';
import { getCookie } from '../../helpers/Helpers'

function Login({ setValue }) {
  let [email, setEmail] = useState(null);
  let [password, setPassword] = useState(null);
  let history = useHistory();
  let login = () => {
    let body = {
      password,
      email
    }
    axios.post('http://localhost:8000/api/login', body, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    }).then(response => {
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response.data.data.user));
      document.cookie = `token=${response.data.data.token}`;
      let pusher = PusherClass.getInstance(response.data.data.user.id)
      history.push('/home');
      setValue(2);
    });

  }
  return (
    <div className="d-flex flex-column">

      {(localStorage.getItem("user") && !getCookie()) && <Redirect to='/home'></Redirect>}

      <label>email</label>
      <input type="email" onChange={(e) => { setEmail(e.target.value) }} />
      <label>password</label>
      <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
      <button type="button" className="btn btn-primary" onClick={() => login()}>Submit</button>
    </div>
  );
}

export default Login;

import React, { useEffect, useState } from 'react'
import './container.css'
import UserChat from './UserChat'
import axios from 'axios'
import { getCookie } from '../../helpers/Helpers'
import { useRouteMatch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import MsgInput from '../messageInput/msgInput'

export default function Container() {
  const [users, setusers] = useState(null)
  let { path, url } = useRouteMatch();
  useEffect(() => {
    axios.get(process.env.REACT_APP_REMOTE_HOST + '/users', {
      headers: {
        'Authorization': 'Bearer ' + getCookie()
      }
    })
      .then(res => {
        setusers(res.data.data);
      })
  }, [])

  return (
    <>
      {
        users?.map(user => {
          return (
            <Link to={`${url}/chat/${user.id}`}>
              <UserChat user={user} />
            </Link>
          )
        })
      }

      <Switch>
        <Route path={`${path}/chat/:receiverId`}>
          <MsgInput />
        </Route>
      </Switch>
    </>
  )
}

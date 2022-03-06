import React, { useEffect, useState } from 'react'
import './container.css'
import UserChat from './UserChat'
import axios from 'axios'
import { getCookie } from '../../helpers/Helpers'

export default function Container() {
  const [users, setusers] = useState(null)
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
          return <UserChat user={user} />
        })
      }
    </>
  )
}

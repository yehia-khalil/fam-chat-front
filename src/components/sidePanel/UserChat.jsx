import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function UserChat({ user }) {
  return (
    <div>
      <p>{user.name}</p>
    </div>
  )
}

import React from 'react'
import { AuthData } from '../../../../ContextFiles/Authentication/AuthWrapper'

export default function Dashboard() {
    const {user} =AuthData();
  return (
    <>
          <h2>Admin Account</h2>
          <p>Uesrname: {user.name}</p>
    </>
  )
}

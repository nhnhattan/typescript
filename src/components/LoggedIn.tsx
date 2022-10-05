import React, { useState } from 'react'

const LoggedIn = () => {
    const [isLoggedIn, setLoggedIn] = useState(false)
    const handleLoggedIn = () => setLoggedIn(true)
    const handleLoggedOut = () => setLoggedIn(false)
  return (
    <div>
        <button onClick={handleLoggedIn}>Login</button>
        <button onClick={handleLoggedOut}>Logout</button>
        <h2>User is {isLoggedIn ? 'logged in' : 'logged out'}</h2>
    </div>
  )
}

export default LoggedIn
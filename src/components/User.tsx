import React, { useState } from 'react'
type AuthUser = {
    name: string,
    email: string,
}
const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)
    // const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name: "Vish",
            email: "vish@gmail.com",
        })
    }
    const handleLogout = () => setUser(null)
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <h2>Username: {user?.email}</h2>
        <h2>Email: {user?.name}</h2>
    </div>
  )
}

export default User
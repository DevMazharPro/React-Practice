import React from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = React.useContext(UserContext)
    if (!user) return <h1>No User Found Sorry</h1>

    return (
        <>
            <h1>Welcome {user}</h1>
        </>
    )
}

export default Profile
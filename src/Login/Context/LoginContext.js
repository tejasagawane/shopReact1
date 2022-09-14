import React, { useState } from 'react';
export const UserContext = React.createContext('');

const LoginContext = ({ subPages }) => {
    const [user, setUser] = useState();
    return (
        <UserContext.Provider value={[user, setUser]}>
            {subPages}
        </UserContext.Provider>
    )
}
export default LoginContext;
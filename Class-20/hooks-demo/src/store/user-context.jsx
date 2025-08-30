import React, { createContext } from 'react'

const UserContext = createContext({
    username: null,
    role: null // RoleType: ADMIN, USER
});

export const UserContextProvider = (props) => {

    const context = {
        username: 'Max',
        role: 'Admin'
    }

    return <UserContext.Provider value={context}>
      {props.children}
  </UserContext.Provider>
}

export default UserContext;

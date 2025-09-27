import React, {createContext} from 'react'

const UserContext = createContext({
    user: null,
    isAuthenticated: false,
    cart: [],
    cartLength: 0
});


export const UserContextProvider = (props) => {

    const context = {
        cart: ['Mango', 'Apple', 'Iphone'],
        cartLength: 3
    }

    return <UserContext.Provider value={context}>
        {props.children}
    </UserContext.Provider>
}

export default UserContext

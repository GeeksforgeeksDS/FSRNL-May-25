import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const UserContext = createContext({
    user: null,
    isAuthenticated: false,
    cart: [],
    cartLength: 0,
    login: (username, password)=>{}
});


export const UserContextProvider = (props) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const fetchUserProfile = () => {
        axios.get('http://localhost:1234/profile', {
            headers:
                { Authorization: `Bearer ${window.localStorage.getItem('token')}` }
            })
            .then((res) => {
                setUser(res.data);
                setIsAuthenticated(true);
            })
            .catch((err) => {
                console.log(err);
                setIsAuthenticated(false);
        })
    }

    const login = (username, password) => {
        axios.post('http://localhost:1234/login', { username, password })
            .then((res) => {
                window.localStorage.setItem('token', res.data?.token);
                setIsAuthenticated(true);
                toast.success('LoggedIn Successfully');
                navigate('/');
                fetchUserProfile();
            })
            .catch((err) => {
                toast.error(err.response.data?.message);
            });
    }


    useEffect(() => {
        fetchUserProfile();
    }, [])
    

    const context = {
        user,
        isAuthenticated,
        login
    }

    return <UserContext.Provider value={context}>
        {props.children}
    </UserContext.Provider>
}

export default UserContext

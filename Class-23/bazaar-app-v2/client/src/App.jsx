import './App.css';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import { Fragment } from 'react';
import { NavLink } from 'react-router';

function App() {
    return <Fragment>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/signup">SignUp</NavLink></li>
                <li><NavLink to="/cart">Cart</NavLink></li>
            </ul>
        </nav>

        <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    </Fragment>
}

export default App

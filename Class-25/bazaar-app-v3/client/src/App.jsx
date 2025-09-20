import './App.css';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import Layout from './components/Layout';

function App() {
    return <Layout>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    </Layout>
}

export default App

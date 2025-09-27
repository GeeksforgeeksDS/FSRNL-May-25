import React,{ useContext } from 'react';
import UserContext from '../store/user-context';

const Cart = () => {

    const context = useContext(UserContext);

    console.log(context);

    return (
      <div>
        <h1>Cart</h1>
      </div>
    )
}

export default Cart;

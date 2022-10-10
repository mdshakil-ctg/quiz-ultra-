import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css'
const Cart = ({cart}) => {
    const navigate = useNavigate();
    const handleCartData = () =>{
        navigate(`/quiz/${cart.id}`)
    }
    return (
        <div className='cart p-8 bg-gray-200 m-3 rounded-md'>
            <img src={cart.logo} alt="" />
            <p className='text-start font-semibold my-2'>{cart.name}</p>
            <button className='bg-yellow-200 w-full rounded-md mt-1 font-semibold py-1 text-gray-500' onClick={handleCartData}>start quiz</button>
        </div>
    );
};

export default Cart;
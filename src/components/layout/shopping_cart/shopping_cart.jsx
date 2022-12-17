import React from 'react';
import Popup from 'reactjs-popup';
import './shopping_cart.css'

import Cart from '../../../images/layout/cart/cart.svg'
import Trash_can from '../../../images/layout/cart/rubbish_bin.svg'
import Cart_item from '../../menu_components/cart_pos_item/cart_pos_item';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Shopping_cart (props) {
    const notify2 = () => toast.success("Delivery is on the way");
    const totalPrice = props.cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    return (
        <div className="shopping_cart">
            <Popup nested   trigger={
                <div className='cart'>
                    <img className={props.className} src={Cart} alt="" />
                    {
                        props.countCartItems?
                        <p className='counter'>{props.countCartItems}</p>:''
                    }
                    
                </div>
            } modal>
      <span className='popup_cart'>
        <div className="cart_header">
            <h2>Finish Your Order</h2>
            <button onClick={()=> props.setCartItems([])}>
                <img src={Trash_can} alt="" />
                <p>Empty Shopping Cart</p>
            </button>
        </div>
        <div className="cart_positions">
                 
            {props.cartItems.length === 0 && <div className='empty_cart'><p>Cart Is Empty</p></div>}
            {props.cartItems.map(item=>(
                    <Cart_item   
                    picture={item.picture}
                    name={item.name}
                    price={item.price}
                    onAdd={props.onAdd}
                    onRemove={props.onRemove}
                    item={props.cartItems.find((x)=> x.id===item.id)}
                    />
                ))}
        </div>
        
        {props.cartItems.length !== 0 && (
            <div className="cart_checkout">
                     <p>Total Price</p>
                     <div className="checkout_btn">
                         <div className='tot_price'>{totalPrice.toFixed(2)}$</div>
                         <button>Check Out</button>
                         
                     </div>
                     </div>
                )}
           
        
            
      </span>
      
    </Popup>
    
        </div>
    )
}


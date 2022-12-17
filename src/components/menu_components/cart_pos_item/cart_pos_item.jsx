import React from 'react';
import './cart_pos_item.css'





export default function Cart_item (props) {
    return (
        <div className="cart_item">
            <div className="cart_item_name">
                <img src={props.picture} alt="" />
                <p>{props.name}</p>
            </div>
            <div className="cart_item_price">
                <p className='price'>{props.price}$</p>
                <div className="change">
                    <button className='add' onClick={()=>props.onAdd(props.item)}>+</button>
                    <p className='qty'>{props.item.qty}</p> 
                    <button className='reduce' onClick={()=>props.onRemove(props.item)}>-</button>
                </div>
                
                
            </div>
        </div>
    )
}


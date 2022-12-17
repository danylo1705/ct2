import React, { useState } from 'react';
import './menu.css'

import Menu_content from './menu_content/menu_content';
import Menu_sidebar from './menu_sidebar/menu_sidebar';



export default function Menu (props) {
    





    return (
        <div className="container">
            <div className="app_menu">
                <Menu_sidebar className='menu_sidebar' setType={props.setType} />
                <Menu_content type={props.type} cartItems={props.cartItems} onAdd={props.onAdd} onRemove={props.onRemove}  positions={props.positions} className='menu_content' />
            </div>
        </div>
    )
}


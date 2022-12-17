import React from 'react';
import Card_menu from '../../custom_components/card_menu/card_menu';
import './menu_content.css'




export default function Menu_content (props) {
    return (
        <div className={props.className}>
        <div className="menu_content">
            <h2>Full Menu</h2>
            <div className="menu_content_positions">
                {props.positions
                
                .filter(item => {
                    if (props.type) {
                      return item.type === props.type;
                    }
                    else{
                        return true
                    }
                })
                
                
                .map(item=>(
                    <Card_menu 
                        position={item}
                        name={item.name}
                        nutrition={item.nutrition}
                        description={item.description}
                        price={item.price}
                        type={item.type}
                        ingredients={item.ingredients}
                        picture={item.picture}
                        key={item.id}

                        onAdd={props.onAdd}
                        onRemove={props.onRemove}

                         />
                ))}
            </div>
        </div>
        </div>
    )
}

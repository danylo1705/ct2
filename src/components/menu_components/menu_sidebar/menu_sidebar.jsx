import React from 'react';
import './menu_sidebar.css'

import Pizza from '../../../images/custom_comps/menu_popup/pizza.jpg'
import Salad from '../../../images/custom_comps/menu_popup/salad.jpg'
import Burger from '../../../images/custom_comps/menu_popup/burger.jpg'
import Sushi from '../../../images/custom_comps/menu_popup/sushi.jpg'
import BBQ from '../../../images/custom_comps/menu_popup/bbq.jpg'
import Snacks from '../../../images/custom_comps/menu_popup/snacks.jpg'
import Dessert from '../../../images/custom_comps/menu_popup/dessert.jpg'
import Breakfast from '../../../images/custom_comps/menu_popup/breakfast.jpg'
import UA_cuis from '../../../images/custom_comps/menu_popup/ua_cuis.jpg'
import H_drnk from '../../../images/custom_comps/menu_popup/h_drnk.jpg'
import C_drnk from '../../../images/custom_comps/menu_popup/c_drnk.jpg'
import A_drnk from '../../../images/custom_comps/menu_popup/a_drnk.jpg'
import Menu_all from '../../../images/app_menu/sidebar/menu_all.jpg'


export default function Menu_sidebar (props) {
    return (
        <div className={props.className}>
        <div className="menu_sidebar">
            <div className="menu_all" onClick={()=> props.setType('')}>
                <img src={Menu_all} alt="" />
                <p>Full Menu</p>
            </div>
            <div className="menu_positions">
                    <div className="pizza" onClick={()=> props.setType("pizza")}>
                        <p>Pizza</p>
                        <img src={Pizza} alt="" />
                    </div>
                    <div className="salad" onClick={()=> props.setType("salad")}>
                        <p>Salads</p>
                        <img src={Salad} alt="" />
                    </div>
                    <div className="burger" onClick={()=> props.setType("burger")}>
                        <p>Burgers</p>
                        <img src={Burger} alt="" />
                    </div>
                    <div className="sushi" onClick={()=> props.setType("sushi")}>
                        <p>Sushi</p>
                        <img src={Sushi} alt="" />
                    </div>
                    <div className="bbq" onClick={()=> props.setType("bbq")}>
                        <p>BBQ</p>
                        <img src={BBQ} alt="" />
                    </div>
                    <div className="snacks" onClick={()=> props.setType("snacks")}>
                        <p>Snacks</p>
                        <img src={Snacks} alt="" />
                    </div>
                    <div className="dessert" onClick={()=> props.setType("dessert")}>
                        <p>Desserts</p>
                        <img src={Dessert} alt="" />
                    </div>
                    <div className="breakfast" onClick={()=> props.setType("breakfast")}>
                        <p>Breakfasts</p>
                        <img src={Breakfast} alt="" />
                    </div>
                    <div className="ua_cuis" onClick={()=> props.setType("ukrainian cuisine")}>
                        <p>Ukrainian <br/> <span>Cuisine</span> </p>
                        <img src={UA_cuis} alt="" />
                    </div>
                    <div className="h_drnk" onClick={()=> props.setType("hot drink")}>
                        <p>Hot <br/> <span> Drinks</span></p>
                        <img src={H_drnk} alt="" />
                    </div>
                    <div className="c_drnk" onClick={()=> props.setType("cold drink")}>
                        <p>Cold <br/> <span>Drinks</span></p>
                        <img src={C_drnk} alt="" />
                    </div>
                    <div className="a_drnk" onClick={()=> props.setType("alcohol drink")}>
                        <p>Alcohol <br/> <span>Drinks</span></p>
                        <img src={A_drnk} alt="" />
                    </div>
            </div>
        </div>
        </div>
    )
}


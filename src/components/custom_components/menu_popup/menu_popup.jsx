import React from 'react';
import './menu_popup.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

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
import { NavLink } from 'react-router-dom';



const Menu_popup = (props) => (
    <Popup trigger={<button className={props.className}> {props.name} </button>} modal>
      <span>
          <div className="meals">
              <h2>Our Menu</h2>
              <div className="menu_meals" >
              <div onClick={()=> props.setType("pizza")}>
              <NavLink to='/menu' >
                <div className="pizza menu_div"
                  
                 >
                        <p>Pizza</p>
                        <img src={Pizza} alt="" />
                    </div></NavLink>
              </div>
              <div onClick={()=> props.setType("salad")}><NavLink to='/menu'>
              <div className="salad menu_div">
                        <p>Salads</p>
                        <img src={Salad} alt="" />
                    </div>
              </NavLink></div>
              <div onClick={()=> props.setType("burger")}>
              <NavLink to='/menu'>
              <div className="burger menu_div">
                        <p>Burgers</p>
                        <img src={Burger} alt="" />
                    </div>
              </NavLink>
              </div>
              <div onClick={()=> props.setType("sushi")}>
              <NavLink to='/menu'>
              <div className="sushi menu_div">
                        <p>Sushi</p>
                        <img src={Sushi} alt="" />
                    </div>
              </NavLink>
              </div>
              <div onClick={()=> props.setType("bbq")}><NavLink to='/menu'>
              <div className="bbq menu_div">
                        <p>BBQ</p>
                        <img src={BBQ} alt="" />
                    </div>
              </NavLink></div>
              <div onClick={()=> props.setType("snacks")}>
              <NavLink to='/menu'>
                
                <div className="snacks menu_div">
                          <p>Snacks</p>
                          <img src={Snacks} alt="" />
                      </div>
                </NavLink>
              </div>
              <div onClick={()=> props.setType("dessert")}><NavLink to='/menu'>
              <div className="dessert menu_div">
                        <p>Desserts</p>
                        <img src={Dessert} alt="" />
                    </div>
              </NavLink></div>
              <div onClick={()=> props.setType("breakfast")}>
              <NavLink to='/menu'> <div className="breakfast menu_div">
                        <p>Breakfasts</p>
                        <img src={Breakfast} alt="" />
                    </div>
                    </NavLink>
              </div>
              <div onClick={()=> props.setType("ukrainian cuisine")}>
              <NavLink to='/menu'>
                <div className="ua_cuis menu_div">
                        <p>Ukrainian <br/> <span>Cuisine</span> </p>
                        <img src={UA_cuis} alt="" />
                    </div></NavLink>
              </div>
              <div onClick={()=> props.setType("hot drink")}>
              <NavLink to='/menu'>
                    <div className="h_drnk menu_div">
                        <p>Hot <br/> <span> Drinks</span></p>
                        <img src={H_drnk} alt="" />
                    </div></NavLink>
              </div>
              <div onClick={()=> props.setType("cold drink")}>
              <NavLink to='/menu'>
              <div className="c_drnk menu_div">
                        <p>Cold <br/> <span>Drinks</span></p>
                        <img src={C_drnk} alt="" />
                    </div>
              </NavLink>
              </div>
              <div onClick={()=> props.setType("alcohol drink")}>
              <NavLink to='/menu'>
                
                <div className="a_drnk menu_div">
                          <p>Alcohol <br/> <span>Drinks</span></p>
                          <img src={A_drnk} alt="" />
                      </div>
                </NavLink> 
              </div>
              </div>
          </div>
          <div className="menu_popup_btns" onClick={()=> props.setType()}>
          <NavLink to='/menu'>
              <button className='menu_popup_btn'>Full Menu</button>
          </NavLink> 
          
          </div>
      </span>
    </Popup>
);

export default Menu_popup;

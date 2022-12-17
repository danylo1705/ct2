import React from 'react';
import './card_menu.css'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import Popup from 'reactjs-popup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Card_menu (props) {

  const notify = () => toast.success("Added to cart");

  return (
      <Popup nested className='popup_card'  trigger={
        <div className="card_menu">
           <img src={props.picture}/> 
          <p>{props.name}</p>
        </div>} modal>
      <span>
          <div className="meal_popup">
                <div className="meal_popup_main_section">
                  <h2>{props.type}</h2>
                  <div className="meal_popup_content">
                     <img src={props.picture} alt="" /> 
                    <div className="meal_popup_description">
                      <p className='meal_topic'>{props.name}</p>
                      <p>{props.description}</p>
                    </div>
                  </div>
                  <div className="buy_btn"> 
                      <button
                         onClick={() => {
                          props.onAdd(props.position);
                          notify();
                        }}
                         
                       >{props.price}$</button>                     
                  </div>
                </div>
                <div className="meal_popup_secondary_section">
                        <h2>Nutritional Information</h2>
                        <Accordion allowZeroExpanded className='meal_accordion'>
                          <AccordionItem>
                              <AccordionItemHeading>
                                  <AccordionItemButton>
                                      <p>Nutrition Summary</p>
                                      <img src="" alt="" />  
                                  </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>
                                  <span>
                                      <ul>
                                        <li>
                                          <p>475Cal.<br/>Calories</p>
                                        </li>
                                        <li>
                                          <p>16g<br/>Total Fat</p>
                                        </li>
                                        <li>
                                          <p>44g<br/>Total Carbs</p>
                                        </li>
                                        <li>
                                          <p>33g<br/>Protein</p>
                                        </li>
                                      </ul>
                                  </span>
                              </AccordionItemPanel>
                          </AccordionItem>
                          <AccordionItem>
                              <AccordionItemHeading>
                                  <AccordionItemButton>
                                    <p>Ingredients</p>
                                    <img src="" alt="" />
                                  </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>
                                  <span>
                                    <p className='ingredients'>{props.ingredients}</p>
                                  </span>
                              </AccordionItemPanel>
                          </AccordionItem>
                        </Accordion>
                </div>
          </div>
      </span>
      
    </Popup>
)
}


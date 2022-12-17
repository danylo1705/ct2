import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import Nav from './components/layout/nav/nav';
import Footer from './components/layout/footer/footer';
import App_main_content from './components/app_main_components/app_main_content';
import Menu from './components/menu_components/menu';
import Shopping_cart from './components/layout/shopping_cart/shopping_cart';
import Positions from './db.json'
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const[type, setType] = useState()

  const onAdd = (position) =>{
    const exist = cartItems.find((x)=>x.id===position.id);
    if (exist){
      const newCartItems = cartItems.map((x)=>
      x.id === position.id?{...exist, qty: exist.qty + 1}:x
      )
      setCartItems(newCartItems)
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))

    }
    else{
      const newCartItems = [...cartItems, {...position, qty:1}]
      setCartItems(newCartItems)
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    }
  }

  const onRemove = (position) =>{
    const exist = cartItems.find((x)=>x.id===position.id);
    if(exist.qty===1){
      const newCartItems = cartItems.filter((x)=>x.id !== position.id)
      setCartItems(newCartItems)
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))

    }
    else{
      const newCartItems = cartItems.map((x)=> x.id === position.id ?{...exist, qty: exist.qty -1}:x)
      setCartItems(newCartItems)
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))

    }
  };
  useEffect(()=>{
    setCartItems(
      localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems')):[] 
    )
  }, [])



  return (
    <div className="App">
       <BrowserRouter>
      <div className='app_wrapper'>
        <Nav 
         setType={setType}
         />
         <div className="app_content"> 
           <Routes>
            <Route exact path='/' element={<App_main_content setType={setType} />} /> 
            <Route path='/menu' element={<Menu type={type} setType={setType} cartItems={cartItems} positions={Positions} onAdd={onAdd} />}>  
              
             </Route>
            </Routes>
        </div> 
         <Footer />  
        <Shopping_cart 
        countCartItems = {cartItems.length}
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        setCartItems={setCartItems}
        className='app_cart' />   
      </div>
      </BrowserRouter>
      <ToastContainer autoClose={2000} />
      
    </div>
  );
}

export default App;

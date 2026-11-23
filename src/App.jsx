import {useState} from 'react';
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home'
import Menu from './pages/Menu'
import Cart from './pages/Cart';
function App() {
  const [cartItems,setCartItems]=useState([]);
  function addToCart(product){
    setCartItems((currentItems)=>{
      const existingItem=currentItems.find(
        (item)=>item.id===product.id);
        if(existingItem){
          return currentItems.map((item)=>item.id===product.id
          ?{...item,quantity:item.quantity+1}:item);
        }
        return[
          ...currentItems,{...product,quantity:1}];
        
      
    });
  }
  function updateQuantity(id,change){
    setCartItems((currentItems)=>currentItems.map((item)=>item.id===id?{
      ...item,quantity:item.quantity+change}
      :item).filter((item)=>item.quantity>0)
    );
   
  }
  function removeFromCart(id){
    setCartItems((currentItems)=>currentItems.filter((item)=>item.id!==id));
  }
  const cartCount=cartItems.reduce(
    (total,item)=>total+item.quantity,0);
  
  return (
   <><Navbar cartCount={cartCount}/><Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu addToCart={addToCart}/>} />
        <Route path="/cart"element={<Cart cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}/>}
        />
        <Route path='/login' element={<Login/>}/>
      
      </Routes>
   </>
    
  );
}

export default App;
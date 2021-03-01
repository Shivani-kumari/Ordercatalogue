import React, { useEffect, useState } from 'react';
import './index.css';
import data from "./data.json";
import { useHistory, } from 'react-router-dom';
import Products from "./container/products";
import Filter from './container/Filter';

export default function App()  {
    const history = useHistory()
  
    const [products,setProducts] = useState(data.products)
    const [size,setSize] =useState("")
    const [search, setSearch] = useState('');
    const [cartItems,setCartItems]=useState(localStorage.getItem("cartItems")
    ?JSON.parse(localStorage.getItem("cartItems") )
    :[])
    
    
  console.log(products)

  const addToCart =(product)=>{
      
    let alreadyInCart = false
    
    cartItems.forEach(item=>{
      if(item._id===product._id){
        item.count++
        alreadyInCart = true
      }
      
    })

    if(!alreadyInCart){
      cartItems.push({...product,count : 1})
    }
    setCartItems(cartItems)
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
    history.push({
        pathname: `/Cart`,
        state: cartItems
      })
  }

  const filterProducts  = event =>{
    console.log(event.target.value)
      if (event.target.value ===""){
        setSize(event.target.value)
        setProducts(data.products)
      }else{
        setSize(event.target.value)
        setProducts(data.products.filter(
              (product)=>product.availableColours.indexOf(event.target.value)>=0
            ))
      }
  }
  
    return (
      <div className="grid-container">
              <header>
                <a href= "/"> FLOWERS</a>
                <button className="ProductCart" onClick={() =>
                    history.push({
                        pathname: `/Cart`,
                        state: cartItems
                      })}>Cart</button>
                     
                  <input type='text' value={search} onChange={e => setSearch(e.target.value)} placeholder='Search'  />
                  
              </header>
              <main>
                <div className ="content">
                
                  <div className="main">
                  {/* filter the FLOWERS accoding to brand */}
                  <Filter count = {products.length}
                  size ={size}
                  filterProducts ={filterProducts}
                
                  ></Filter>

                  <Products 
                  products ={products}
                  addToCart = {addToCart}
                  search={search}
                  >
                  </Products >
                  </div>
                  
                </div>
              </main>
             <footer>
              FLOWERS
             </footer>
            </div>
    );
  
  
}



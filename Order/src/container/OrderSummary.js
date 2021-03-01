import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import formatCurrency from "../util";

export default function ProductCart() {
    
    const location = useLocation();
console.log(location)
const cartItems = location.state

const success =()=>{
    alert("Order is Placed")
}
    return (
        <div>
               {cartItems.length===0 ? (
                   <div className="cart cart-header">cart is empty</div>
               ) : (<div className="cart cart-header">Your final order Summary</div>)}
               <div>
                    <div className ="cart">
                    <ul className="cart-items">
                      {console.log(cartItems,'hjhgj')}
                {cartItems.map((item) => (
                  <li key={item._id}>
                    <div>
                      <img src={item.image} alt={item.title}></img>
                    </div>
                    <div>
                      <div>{item.title}</div>
                      
                    </div>
                  </li>
                ))}
              </ul>
                    </div>
                    {cartItems.length !== 0 && (
                        <div>
                         <div className="cart">
                         <div className="total">
                           <div>
                             Total:{" "}
                             {formatCurrency(
                               cartItems.reduce((a, c) => a + c.price * c.count, 0)
                             )}
                           </div>
                           <button
                    onClick={()=>success()}
                    className="button primary"
                  >
                   Place
                  </button>
                </div>
            </div>
            
            </div>
            
                    )}
            </div> 
        </div>
    )
}

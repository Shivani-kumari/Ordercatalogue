import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import formatCurrency from "../util";

export default function ProductCart() {
  const history = useHistory()
    const location = useLocation();
console.log(location)
const cartItems = location.state
    return (
        <div>
               {cartItems.length===0 ? (
                   <div className="cart cart-header">cart is empty</div>
               ) : (<div className="cart cart-header">You hava {cartItems.length} in the cart</div>)}
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
                      <div className="right">
                        {formatCurrency(item.price)} x {item.count}{" "}
                        
                      </div>
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
                    onClick={() =>
                      history.push({
                          pathname: `/OrderSummary`,
                          state: cartItems
                        })}
                    className="button primary"
                  >
                    Order
                  </button>
                </div>
            </div>
            
            </div>
            
                    )}
            </div> 
        </div>
    )
}

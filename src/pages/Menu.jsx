import { useState } from "react";
function Menu(){
    const [cartCount, setCartCount] = useState(0)
    return(
        <div className="container mt-5">
            <h1 className="text-center mb-4">
                Our Coffee Menu
            </h1>
         
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src="/images/cappuccino.jpg"className="card-img-top coffee-img"alt="Cappuccino"/>
                   <div className="card-body">
                            <h5 className="card-title">Cappuccino</h5>
                            <p className="card-text">Rich espresso with steamed milk and foam.</p>
                            <h6>₹150</h6>
                               <h5 className="text-end">
           🛒 Cart: {cartCount}</h5>
                            <button className="btn btn-warning" onClick={() => setCartCount(cartCount + 1)}>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                         <img src="/images/latte.jpg"className="card-img-top coffee-img"alt="Latte"/>
                        <div className="card-body">
                            <h5 className="card-title">Cafe Latte</h5>
                            <p className="card-text">
                                Smooth espresso blended with creamy milk.
                            </p>
                            <h6>₹180</h6>
                            <button className="btn btn-warning" onClick={() => setCartCount(cartCount + 1)}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                         <img src="/images/coldcoffee.jpg"className="card-img-top coffee-img"alt="Cold Coffee"/>
                        <div className="card-body">
                            <h5 className="card-title">Cold Coffee</h5>
                            <p className="card-text">Refreshing chilled coffee with milk. </p> 
                            <h6>₹130</h6>
                            <button className="btn btn-warning" onClick={() => setCartCount(cartCount + 1)}>Add to Cart</button>
                                                  
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Menu;
import { Link } from "react-router-dom";

function Cart({cartItems,updateQuantity,removeFromCart}){
    const totalPrice=cartItems.reduce(
        (total,item)=>total+item.price*item.quantity,0
    );
    return(
        <div className="container mt-5">
            <h1 className="text-center mb-4">Your Shopping Cart</h1>
            {cartItems.length==0?(
                <div className="text-center">

    <h4>Your cart is empty!</h4>

    <Link to="/menu" className="btn btn-warning mt-3">
        Explore Our Menu
    </Link>

</div>
            ):(<>{cartItems.map((item)=>(
                <div className="card mb-3"key={item.id}>
                    <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <h5>{item.name}</h5>
                            <p>Price:  ₹{item.price}</p>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-secondary btn-sm"onClick={()=>updateQuantity(item.id,-1)}>
                                -
                            </button>
                            <span className="mx-3">{item.quantity}</span>
                            <button className="btn btn-secondary btn-sm"onClick={()=>updateQuantity(item.id,1)}>
                                +</button>                        </div>
                                <div className="col-md-4">
                                    <h6>Subtotal: ₹{item.price * item.quantity}</h6>
                                    <button className="btn btn-danger btn-sm"onClick={()=>removeFromCart(item.id)}>
                                        Remove</button> 
                        </div>
                    </div>
                </div>
        </div>
    ))}
     <div className="text-end mt-4">

    <h3>Total: ₹{totalPrice}</h3>

    <Link to="/menu" className="btn btn-warning mt-3">
        Continue Shopping
    </Link>

   </div>
    </>
            )}
            </div>
    );
}
export default Cart;
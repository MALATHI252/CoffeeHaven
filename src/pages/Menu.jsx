
function Menu({addToCart}){
    const coffees=[
         {
            id: 1,
            name: "Cappuccino",
            description: "Rich espresso with steamed milk and foam.",
            price: 150,
            image: "/images/cappuccino.jpg"
        },
        {
            id: 2,
            name: "Cafe Latte",
            description: "Smooth espresso blended with creamy milk.",
            price: 180,
            image: "/images/latte.jpg"
        },
        {
            id: 3,
            name: "Cold Coffee",
            description: "Refreshing chilled coffee with milk.",
            price: 130,
            image: "/images/coldcoffee.jpg"
        }
    ]
 
    return(
        <div className="container mt-5">
            <h1 className="text-center mb-4">
                Our Coffee Menu
            </h1>
           
            <div className="row">
                {coffees.map((coffee)=>(
                      <div className="col-md-4" key={coffee.id}>
                          <div className="card h-100">
                            <img src={coffee.image}className="card-img-top coffee-img"alt={coffee.name}/>

           
              
                  
                        
                   <div className="card-body">
                            <h5 className="card-title">{coffee.name}</h5>
                            <p className="card-text">{coffee.description}</p>
                            <h6>₹{coffee.price}</h6>
                            
                            <button className="btn btn-warning" onClick={() => addToCart(coffee)}>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
                ))}
              

            </div>
        </div>
    );
}
export default Menu;
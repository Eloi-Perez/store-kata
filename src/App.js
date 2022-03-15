import { useEffect, useState } from 'react';

import './App.css';



const DB_ITEMS = {
  a: { price: 0.5, offer: { items: 3, price: 1.3 } },
  b: { price: 0.3, offer: { items: 2, price: 0.45 } },
  c: { price: 0.2 },
  d: { price: 0.15 }
};

export default function App() {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState();

  const handleButton = (key, n) => {
    let tempVal = 0;
    cart[key] ? (tempVal = cart[key]) : (tempVal = 0);
    let newVal = Math.max((tempVal + n), 0);
    let newObjectState = { ...cart, [key]: newVal };
    setCart(newObjectState);
  };

  //Total calculation
  useEffect(() => {
    let t = 0;
    for (const property in cart) {
      if (DB_ITEMS[property].offer && (cart[property] >= DB_ITEMS[property].offer.items)) { //if offer        
        let subTPrice = //apply offer
          (Math.floor(cart[property] / DB_ITEMS[property].offer.items))
          * DB_ITEMS[property].offer.price
          + (cart[property] % DB_ITEMS[property].offer.items)
          * DB_ITEMS[property].price;
        t = t + subTPrice;
      } else {
        t = t + cart[property] * DB_ITEMS[property].price;
      }
    }
    setTotal(Math.round(t * 100) / 100); //round for floating point number precision
  }, [cart]);


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello
        </p>
      </header>
      <div className="store">
        <div className="items_list">
          Items:
          {DB_ITEMS && Object.keys(DB_ITEMS).map(key => {
            return <div className="item" key={key}>{key.toUpperCase()}
              <span className="column">
                <button onClick={() => handleButton(key, 1)} className="item_button">Add 1 to cart</button>
                <button onClick={() => handleButton(key, -1)} className="item_button">Remove 1 from cart</button>
              </span>
            </div>
          })}
        </div>
        <div className="checkout">
          <span>Cart:</span>
          {Object.keys(cart).map(item => <div key={item}>{item.toUpperCase()}: {cart[item]}</div>)}
          <br />
          <span>Total:</span>
          <br />
          {total && <span data-testid="total" >£{total}</span>}
        </div>
      </div>

    </div>
  );
}

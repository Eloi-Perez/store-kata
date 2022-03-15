import { useState } from 'react';

import './App.css';



const DB_ITEMS = {
  a: { price: 0.5, offer: { items: 3, price: 1.3 } },
  b: { price: 0.3, offer: { items: 2, price: 0.45 } },
  c: { price: 0.2 },
  d: { price: 0.15 }
};

export default function App() {
  const [cart, setCart] = useState({});

  const handleButton = (key, n) => {
    let tempVal = 0;
    cart[key] ? (tempVal = cart[key]) : (tempVal = 0);
    let newVal = Math.max((tempVal + n), 0);
    let newObjectState = { ...cart, [key]: newVal };
    setCart(newObjectState);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello
        </p>
      </header>
      <div class="store">
        <div class="items_list">
          Items:
          {DB_ITEMS && Object.keys(DB_ITEMS).map(key => {
            return <div className="item" key={key}>{key.toUpperCase()}
              <span className="column">
                <button onClick={() => handleButton(key, 1)} class="item_button">Add 1 to cart</button>
                <button onClick={() => handleButton(key, -1)} class="item_button">Remove 1 from cart</button>
              </span>
            </div>
          })}
          {JSON.stringify(cart)/*testing*/}
        </div>
        <div class="checkout">
          Cart:
        </div>
      </div>

    </div>
  );
}

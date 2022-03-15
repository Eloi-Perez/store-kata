import './App.css';



const DB_ITEMS = {
  a: { price: 0.5, offer: { items: 3, price: 1.3 } },
  b: { price: 0.3, offer: { items: 2, price: 0.45 } },
  c: { price: 0.2 },
  d: { price: 0.15 }
}

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello
        </p>
      </header>
      Items:
      {DB_ITEMS && Object.keys(DB_ITEMS).map(key => {
        return <div className="item">{key.toUpperCase()}
          <span className="column">
            <button class="item_button">Add 1 to cart</button>
            <button class="item_button">Remove 1 from cart</button>
          </span>
        </div>
      })}

    </div>
  );
}

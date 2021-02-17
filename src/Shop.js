import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-api.theapinetwork.com/store/get');
    const items = await data.json();
    console.log(items.data);
    setItems(items.data);
  }

  return (
    <div>
      <h1>Shop page</h1>
      {items.map((item) => {
        return (
          <h4 key={item.itemId}>
            <Link to={`/shop/${item.itemId}`}>
              {item.item.name}
            </Link>
          </h4>
        );
      })}
    </div>
  );
}

export default Shop;

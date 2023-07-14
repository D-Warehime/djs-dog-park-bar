import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Bar.css";

const BACKEND_PORT = 'http://localhost:4000/api';

function Bar() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    async function fetchMenuItems() {
      try {
        const response = await axios.get(`${BACKEND_PORT}/menu-items`, { timeout: 100000 });
        setMenuItems(response.data.filter(item => item.type === 'drink'));
      } catch (error) {
        console.log('Error fetching menu items:', error.message);
      }
    }
    fetchMenuItems();
  }, []);

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  const groupByCategory = (items) => {
    return items.reduce((groupedItems, item) => {
      (groupedItems[item.category] = groupedItems[item.category] || []).push(item);
      return groupedItems;
    }, {});
  };

  const getCategoryTitle = (category) => {
    switch (category) {
      case 'NA':
        return 'Non-Alcoholic';
      case 'Beer':
        return 'Brewery';
      case 'Wine':
        return 'Winery';
      case 'Mead':
        return 'Meadery';
      case 'Cider':
        return 'Cidery';
      case 'Cocktail':
      case 'Spirit':
        return 'Distiller/Producer';
      case 'Seltzer':
        return 'Producer';
      default:
        return category;
    }
  };

  const groupedItems = groupByCategory(menuItems);

  return (
    <div className="bar-menu">
      <h1>Bar Menu</h1>
      {Object.keys(groupedItems).map((category) => (
        <div key={category}>
          <h2>{getCategoryTitle(category)}</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>{getCategoryTitle(category)}</th>
                <th>ABV</th>
                <th>Size (oz)</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {groupedItems[category].map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.source}</td>
                  <td>{item.abv}%</td>
                  <td>{item.size}</td>
                  <td>{item.description}</td>
                  <td>{formatPrice(item.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Bar;

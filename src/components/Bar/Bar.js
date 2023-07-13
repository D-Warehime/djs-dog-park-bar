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

  return (
    <div className="bar-menu">
      <h1>Bar Menu</h1>
      {menuItems.map((item) => (
        <div key={item._id}>
          <h2>{item.category}</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>{item.type === 'drink' ? 'Brewery' : 'Region'}</th>
                {item.type === 'drink' && <th>ABV</th>}
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.name}</td>
                <td>{item.type === 'drink' ? item.variety : item.description}</td>
                {item.type === 'drink' && <td>{item.abv}%</td>}
                <td>x</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Bar;

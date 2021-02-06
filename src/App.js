import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {

  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCategories] = useState([]);

  return <main>
    <section className="menu section" >

      <div className="title" >

        <h2>our menu</h2>
        
        <div className="underline"></div>npm

        <Categories />
        <Menu  items={menuItem} />
        
      </div>

    </section>
  </main>
}

export default App;
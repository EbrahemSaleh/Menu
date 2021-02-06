import React from 'react';

const Menu = ({items }) => {
  return <section className="section-center">
    {items.map((menuItem) => {
      const { id, title, price, img, desc } = menuItem;

      return (

        <article key={id} className="menu-item" >
          <img src={img} alt={title} className="photo" />
          <div className="item-info" >
            <header>
              <h4>{title}</h4>
              <h4>{ price }</h4>
            </header>
            <p> {desc} </p>
          </div>
        </article>

        
      );
    })}
  </section>;
};

export default Menu;

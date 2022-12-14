
import './App.css';
import items from './data';
import { useState } from 'react';
import Categories from './Categories';
import Menu from './Menu';
// testing branch
const allCategories = ['All', ...new Set(items.map((item) => item.category))];

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(items);

      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }


  return (
    <>
      <main>
        <section className='menu-section'>
          <div className='title'>
            <h2>Our Menu</h2>
            <div className='underline'></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
          
        </section>
      </main>
    </>
  );
}

export default App;

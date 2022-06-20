import SidebarItem from './SidebarItem';
import items from '../data/sidebar.json';
import { useState } from 'react';
export default function Sidebar() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <div className={`sidebar ${showLinks ? 'show-sidebar' : 'hide-sidebar'}`}>
      <div className="sidebar-links">
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>
      <button className="sidebar-burger" onClick={handleShowLinks}>
        {' '}
        <span className="burger-bar"></span>
      </button>
    </div>
  );
}

// This Sidebar is created following this tuto https://www.youtube.com/watch?v=sOhLV-lfgjs

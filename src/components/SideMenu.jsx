import React from 'react';
import Button from './Button';
import '../styles/components/Sidebar.css';

const SideMenu = () => {
  return (
    <aside className="side-menu">
      <Button>Action 1</Button>
      <Button>Action 2</Button>
      <Button>Action 3</Button>
      <Button>Action 4</Button>
    </aside>
  );
};

export default SideMenu;

import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

export const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <Link to='/rick-and-morty/' >Home</Link>
        <Link to='characters' >characters</Link>
        <Link to='locations' >locations</Link>
        <Link to='episodes' >episodes</Link>
      </nav>

      <Outlet />
    </div>
  )
}

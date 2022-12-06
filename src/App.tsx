import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import { Outlet } from 'react-router-dom';

export const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Outlet />
    </div>
  )
}

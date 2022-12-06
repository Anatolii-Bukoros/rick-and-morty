import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import { Layout } from './components/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Characters } from './components/Characters';

function App() {
  return (
    <div className="App">
      <div></div>
      <Routes>
        <Route
          path='/'
          element={<h1>Home Page</h1>}
        />
        <Route
          path='characters/:characterId'
          element={<Characters />}
        />
        <Route
          path='locations'
          element={<h1>Locations</h1>}
        />
        <Route
          path='episodes'
          element={<h1>Episodes</h1>}
        />
        <Route
          path='*'
          element={<h1>Page not found</h1>}
        />
        <Route
          path='home'
          element={<Navigate to='/' replace/>}
        />
      </Routes>

      React
      <Layout />
    </div>
  );
}

export default App;

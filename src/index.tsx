import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Characters } from './components/Characters';
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="rick-and-morty" element={<App />}>
          <Route path="characters" element={<Characters />}>
            <Route index element={<Characters />} />
            <Route path=":charactersId" element={<Characters />} />
          </Route>
          <Route path="locations" element={<h1>Locations</h1>} />
          <Route path="episodes" element={<h1>Episodes</h1>} />
          <Route index element={<h1>Home</h1>} />
          <Route path='home' element={<Navigate to="rick-and-morty" replace />} />
          <Route path="*" element={<h1>Not Found Page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

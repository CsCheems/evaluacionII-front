import React from 'react';
import AppRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';
import './App.module.css';

function App() {

  return (
    <>
    <BrowserRouter>
       <AppRoutes/>
    </BrowserRouter>
    </>    
  )
}

export default App;

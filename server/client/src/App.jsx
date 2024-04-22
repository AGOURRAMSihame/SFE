
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Index from './pages/index';
import About from './pages/about';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/about',
    element: <About /> 
  }
]);


function App() {
  
  return (
    <RouterProvider router={router}>
     
    </RouterProvider>
  );
}


export default App;


import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Index from './pages/index';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  }
]);


function App() {
  
  return (
    <RouterProvider router={router}>
     
    </RouterProvider>
  );
}


export default App;

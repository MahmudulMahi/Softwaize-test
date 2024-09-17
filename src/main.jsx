import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main/Main';
import Home from './Component/Home/Home/Home';
import ItemPage from './Component/Home/ItemPage/ItemPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/item/:title',
      element:<ItemPage></ItemPage>
    }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

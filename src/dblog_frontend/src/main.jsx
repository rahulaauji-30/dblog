import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blogs from './components/Blogs';
import Post from './components/Post';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Blogs/>
  },
  {
    path:"/blogs",
    element:<Post/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ReactProvider router={router}/> */}
    <App/>
  </React.StrictMode>,
);

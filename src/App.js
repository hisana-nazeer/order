
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import RestaurantCard from './components/RestaurantCard';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';



const AppLayout = () => {
  return (
    <div className="App">
      <Header/>
      
      <Outlet/>
     
      
    </div>
  );
}
const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
  
  {
    path:"/about",
    element:<About />
  
  },

  {
    path:"/",
    element:<Body />
  
  },
  {
    path:"/contact",
    element:<Contact />
  },
  {
    path:"/restaurants/:resId",
    element:<RestaurantMenu />
  }
  
]}])


export default function App() {
  return <RouterProvider router={appRouter} />;
}

import './App.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import RestaurantCard from './components/RestaurantCard';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/userContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';



const AppLayout = () => {
  const [userName, setUserName]=useState()
   
useEffect(()=>{
   const data={
    name:"Zidan"
   }
   setUserName(data.name)

},[])



  return (
    <Provider store = {appStore}>
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>

  
   
    <div className="App">
      <Header/>
      
      <Outlet/>
     
      
    </div>
    </UserContext.Provider> 
    </Provider>
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
    path:"/cart",
    element:<Cart/>
  },
  {
    path:"/restaurants/:resId",
    element:<RestaurantMenu />
  }

  
]}])


export default function App() {
  return <RouterProvider router={appRouter} />;
}
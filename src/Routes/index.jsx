import {  useRoutes } from 'react-router-dom';
import { useContext } from 'react';
import {ShoppingCartContext} from '../Context';

import Home from '../pages/Home'
import MyAccount from '../pages/MyAccount';
import MyOrder from '../pages/MyOrder';
import MyOrders from '../pages/MyOrders';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';



export const AppRoutes = ()=>{
    const {signOut} = useContext (ShoppingCartContext)
  let routes = useRoutes ([
    { path:'/', element: signOut ? <Signin/> :<Home />},
    {path: '/category/:category', element: signOut ? <Signin/> :<Home />},
    { path:'/my-account', element:signOut ? <Signin/> : <MyAccount/> },
    { path:'/my-order', element: signOut ? <Signin/> : <MyOrder/>},
    { path:'/my-orders', element: signOut ? <Signin/> :<MyOrders/>},
    { path:'/my-orders/last', element: signOut ? <Signin/> :<MyOrder/>},
    { path:'/my-orders/:id', element: signOut ? <Signin/> :<MyOrder/>},
    { path:'/Signin', element: <Signin/>},
    { path:'/*', element: <NotFound/>},
  ]
  )
  return routes
}



// usamos react-router-dom nos ayuda a enlazar las rutas
import { useRoutes, BrowserRouter } from 'react-router-dom';
import {ShoppingCartProvider} from '../../Context'
import '../../../src/index.css'
import Home from '../Home'
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import Signin from '../Signin';
import Navbar from '../../Componentes/Navbar';
import CheckoutSideMenu  from "../../Componentes/CheckoutSideMenu";



const AppRoutes = ()=>{
  let routes = useRoutes ([
    { path:'/', element: <Home/> },
    {path: '/category/:category', element: <Home />},
    { path:'/my-account', element: <MyAccount/> },
    { path:'/my-order', element:  <MyOrder/>},
    { path:'/my-orders', element: <MyOrders/>},
    { path:'/my-orders/last', element: <MyOrder/>},
    { path:'/my-orders/:id', element: <MyOrder/>},
    { path:'/Signin', element: <Signin/>},
    { path:'/*', element: <NotFound/>},
  ]
  )
  return routes
}

const App = ()=> {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
          <AppRoutes/>
          <Navbar/>
          <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
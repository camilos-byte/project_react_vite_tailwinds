// usamos react-router-dom nos ayuda a enlazar las rutas
import {  BrowserRouter } from 'react-router-dom';
import {ShoppingCartProvider} from '../../Context'
import { AppRoutes } from "../../Routes";
import CheckoutSideMenu  from "../../Componentes/CheckoutSideMenu";
import Navbar from '../../Componentes/Navbar';
import '../../../src/index.css'


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
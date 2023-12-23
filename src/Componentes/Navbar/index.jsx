import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import {ShoppingCartContext} from '../../Context';
//tambien podemos crear un array de objetos para cargar el navbar de una forma mas moderna
const Navbar = () =>{
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4 '

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0  w-full py-5 px-8 text-sm font-light  bg-white'>
            <ul className="flex items-center gap-3 ">
                <li className="font-semibold text-lg hover:text-purple-400">
                    <NavLink  to='/'
                    onClick={()=>context.setSearchByCategory('')}
                    >
                        
                       ShopiHome
                    </NavLink>
                </li>
                <li className="hover:text-purple-400" >
                    <NavLink  
                    to='/' 
                    onClick={()=>context.setSearchByCategory('')}
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                       All
                    </NavLink>
                </li>
                <li className="hover:text-purple-400" >
                    <NavLink  
                    to='/category/mens clothing'
                    onClick={()=>context.setSearchByCategory(`men's clothing`)}
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                       men's clothing
                    </NavLink>
                </li>
                <li  className="hover:text-purple-400" >
                    <NavLink  
                    to='/category/electronics'
                    onClick={()=>context.setSearchByCategory('electronics')}
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                       Electronics
                    </NavLink>
                </li>
                <li className="hover:text-purple-400" >
                    <NavLink  
                    to='/category/jewelery'
                    onClick={()=>context.setSearchByCategory('jewelery')}
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                       Jewelery
                    </NavLink>
                </li>
                <li className="hover:text-purple-400" >
                    <NavLink  
                    to='/category/womens clothing'
                    onClick={()=>context.setSearchByCategory(`women's clothing`)}
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                       Women's Clothing
                    </NavLink>
                </li>
                <li className="hover:text-purple-400" >
                    <NavLink  
                    to='/Others'
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                       Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="hover:text-purple-400" >
                    andressalgado742
                </li>
                <li className="hover:text-purple-400" >
                    <NavLink  
                    to='/my-orders'
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                       My Orders
                    </NavLink>
                </li>
                <li className="hover:text-purple-400" >
                    <NavLink  
                    to='/my-account'
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                       My Account
                    </NavLink>
                </li>
                <li className="hover:text-purple-400" >
                    <NavLink  
                    to='Signin'
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                       Sing In
                    </NavLink>
                </li>
                <li className="hover:text-purple-400" >
                    🛒{context.count}
                </li>
            </ul>
        </nav>
    )
}


export default Navbar;
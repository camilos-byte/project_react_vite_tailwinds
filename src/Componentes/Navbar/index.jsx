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
                    <NavLink  to='/'>
                       ShopiHome
                    </NavLink>
                </li>
                <li className="hover:text-purple-400" >
                    <NavLink  
                    to='/' 
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                       All
                    </NavLink>
                </li>
                <li className="hover:text-purple-400" >
                    <NavLink  
                    to='/Clothes'
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                       Clothes
                    </NavLink>
                </li>
                <li  className="hover:text-purple-400" >
                    <NavLink  
                    to='/Electronics'
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                       Electronics
                    </NavLink>
                </li>
                <li className="hover:text-purple-400" >
                    <NavLink  
                    to='/Furnitures'
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                       Furnitures
                    </NavLink>
                </li>
                <li className="hover:text-purple-400" >
                    <NavLink  
                    to='/Toys'
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                       Toys
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
                    andressalgado742@gmail.com
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
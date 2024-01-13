import {UseContextGlobal} from '../../Context';
import {Link} from 'react-router-dom';
import OrderCard  from "../OrderCard";
const CheckoutSideMenu = () => {
    const context = UseContextGlobal()
    const  valuesLocal = context.accountLocalStorage()

    if (context.isCheckoutSideMenuOpen) {
        return ( 
            <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex flex-col fixed right-3 border bg-white opacity-100   border-black rounded-lg top-[70px] w-[360px] h-[calc(100vh-80px)] bottom-4 `}>
                <div className='flex items-start justify-between p-3'>
                    <h2 className='r-3 font-medium text-xl ml-5'>My Order</h2> 
                    <div className=" text-black-500 cursor-pointer"  onClick={() => context.closeCheckoutSideMenu(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="mt-0">
                        <div className="flow-root font-bold ">
                            <ul role="list" className=" -my-6  divide-gray-200">
                                <li  className="flex py-6 ">
                                <div className=" flex flex-1 flex-col divide-y">
                                    {
                                        context.cardProducts.map(product =>(
                                            <OrderCard
                                            key={product.index}
                                            index={product.index}
                                            title={product.title}
                                              image={product.image}
                                              price={product.price}
                                              category={product.category}
                                              deleteProduct={context.deleteProduct}
                                            /> 
                                        ))
                                    }
                                </div>
                                </li>
                            </ul>
                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6 mt-6">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>{context.totalPrice(context.cardProducts)}</p>
                                </div>
                                 <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                            </div>
                            <div className="">
                                <Link to={valuesLocal.hasUserAnAccount ? '/my-orders/last' :'/Signin'}   >
                                    <button
                                    className="w-full rounded-lg  border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                    onClick={()=> context.handleCheckout()}
                                    >
                                    Checkout
                                    </button>
                                </Link>
                            </div>

                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                <p>
                                    or
                                    <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                    // onClick={() => setOpen(false)}
                                    >
                                    Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

         );
    }   
    }
 
export default CheckoutSideMenu;
import {UseContextGlobal} from '../../Context';
const ProductDetails = () => {
    const context = UseContextGlobal()

    if (context.isProductDetailOpen) {
        return ( 
            <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} flex flex-col fixed right-2 border bg-white opacity-100   border-black rounded-lg top-[70px] w-[315px] h-[calc(100vh-80px)] bottom-4 `}>
                <div className='flex justify-between items-center p-3'>
                    <h2 className='r-3 font-medium text-xl ml-5'>Detail Order</h2> 
                    <div className=" text-black-500 cursor-pointer"  onClick={() => context.closeProductDetail(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
                <figure className='p-8 mt-4' style={{ width: '300px', height: '300px' }} >
                    <img className='w-full h-full rounded-lg' src={context.productToShow.image} alt=""/>
                </figure>
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="mt-8">
                        <div className="flow-root font-bold">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                              <li  className="flex py-6">
                                <div className=" flex flex-1 flex-col">
                                    <div className='flex  justify-between text-base font-medium '>
                                        <label className='mt-1 ml-4 text-lg text-gray-500 '> {context.productToShow.title}  </label>
                                    </div>
                                    <div className='flex items-end justify-between text-base font-medium '>
                                        <h3>Categoria:</h3>
                                    <p className="mt-1 ml-4 text-lg text-gray-500 ">{context.productToShow.category}  </p>
                                    </div>
                                    <div className="flex justify-between items-end text-base font-medium">
                                        <h3>Precio:</h3>
                                        <p className="text-gray-500 text-lg">{context.productToShow.price}  </p>
                                    </div>
                                </div>
                              </li>
                          </ul>
                        </div>
                      </div>
                    </div>
            </aside>

         );
    }   
    }
 
export default ProductDetails;
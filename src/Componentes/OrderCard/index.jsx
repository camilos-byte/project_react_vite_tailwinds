import PropTypes from 'prop-types';

const OrderCard = (props) => {
    return ( 
        <div className="mt-4">
                <div className="flow-root "> 
                    <ul role="list" className="-my-6  divide-gray-200 ">
                        <li  className="flex py-6 mt-3" >
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                    src={props.image}
                                    alt=''
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col ">
                                <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                        <a >{props.title}</a>
                                    </h3>
                                    <p className="ml-4 items-end"> {props.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{props.category}</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty 3</p>

                                    <div className="flex">
                                        { props.deleteProduct ? (
                                                <button
                                                    type="button"
                                                    className="font-medium text-indigo-600 hover:text-indigo-500 items-end"
                                                onClick={ () => props.deleteProduct(props.keyUid)  }
                                                > 
                                                    Remove
                                                </button>
                                            ): null
                                        }
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
     );
}
 

OrderCard.propTypes = {
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    price: PropTypes.number.isRequired, 
    // deleteProduct: PropTypes.string.isRequired,  
    keyUid:PropTypes.string.isRequired,  
}
export default OrderCard;
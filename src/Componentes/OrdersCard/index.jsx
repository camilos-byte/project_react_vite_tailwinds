import PropTypes from 'prop-types';

const OrdersCard = (props) => {
    const {totalPrice, totalProducts} = props
    // totalPrice, totalProducts
    return ( 
        <div className="mt-4">
            <div className="flow-root ">
                <ul role="list" className="-my-6  divide-gray-200 ">
                    {/* <li  className="flex py-6 mt-3" > */}
                    <div className="ml-4 flex flex-1 flex-col ">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p className="ml-4 items-end"> 
                                <span>01/02/2023</span>
                                <span>{totalProducts}</span>
                                <span>{totalPrice}</span>
                            </p>
                        </div>
                    </div>
                    {/* </li> */}
                </ul>
            </div>
        </div>
    );
}
 

OrdersCard.propTypes = {
    totalPrice: PropTypes.string.isRequired,
    totalProducts: PropTypes.string.isRequired, 
    // keyUid:PropTypes.string.isRequired,  
}
export default OrdersCard;
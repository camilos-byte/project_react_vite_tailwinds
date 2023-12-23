import PropTypes from 'prop-types'; 

import { ShoppingCartIcon,CurrencyDollarIcon,CalendarDaysIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const OrdersCard = props => {
    const {orderDate, totalPrice, totalProducts} = props
    
    return ( 
        <div className="mt-4">
            <div className="flow-root ">
                <div className="flex justify-between items-center mb-3 border rounded-lg p-3">
                    <div className="flex items-center justify-between grow gap-2 px-4">
                        <div className="flex gap-1 items-center justify-center">
                            <ShoppingCartIcon className="h-6 w-6 text-black" />
                            <p className="font-light text-sm">{`${totalProducts} ${totalProducts === 1 ? "producto" : "productos"}`}</p>
                        </div>
                        <div className="flex gap-1 items-center justify-center">
                            <CurrencyDollarIcon className="h-6 w-6 text-black" />
                            <p className="font-light text-sm">${totalPrice}</p>
                        </div>
                        <div className="flex gap-1 items-center justify-center">
                            <CalendarDaysIcon className="h-6 w-6 text-black" />
                            <p className="font-light text-sm">{orderDate}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <ChevronRightIcon className="h-6 w-6 text-black" />
                    </div>
                </div>
            </div>
        </div>
    )
}
 

OrdersCard.propTypes = {
    totalPrice: PropTypes.number.isRequired,
    totalProducts: PropTypes.number.isRequired, 
    orderDate: PropTypes.string.isRequired,
    // keyUid:PropTypes.string.isRequired,  
}
export default OrdersCard;
import OrdersCard  from "../../Componentes/OrdersCard";
import {UseContextGlobal} from '../../Context';
import {Link} from 'react-router-dom';
function MyOrders() {
  const context = UseContextGlobal();
    return (
      <div>
        My orders
          {
            context.order.map((order,index)=>{
              <Link key={index} to={`/my-orders/${order.id}`}>
                <OrdersCard 
                totalPrice = {order.totalPrice} 
                totalProducts={order.totalProducts}/>
              </Link>

            })
          }
      </div>
    )
  }
  
  export default MyOrders
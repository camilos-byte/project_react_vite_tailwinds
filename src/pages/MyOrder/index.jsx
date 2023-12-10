import {UseContextGlobal} from '../../Context';
import OrderCard  from "../../Componentes/OrderCard";
import {Link} from 'react-router-dom';

function MyOrder() {
  const context = UseContextGlobal();
  return (
    <div>
      <div className="flex items-center justify-center relative W-80">

        <Link to='/my-orders' className="absolute left-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
        </svg>
        </Link>
        <h1>
          My Order 
        </h1>

      </div>
      <div className=" flex flex-1  flex-col divide-y">
      <h2 className='flex justify-center'>ORDEN NUMERO </h2>
      {console.log(context.order)}
        {
          context.order?.slice(-1)[0].products.map(product =>(
              <OrderCard
              key={product.keyUid}
              keyUid={product.keyUid}
              title={product.title}
              image={product.image}
              price={product.price}
              category={product.category}
              /> 
          ))
        }
      </div>
        
    </div>
  )
}
  
  export default MyOrder
import Card from '../../Componentes/Card';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'
import {UseContextGlobal} from '../../Context';
import ProductDetails from '../../Componentes/ProductDetail'


function Home() {
  const context = UseContextGlobal();
    return (
     <div>
        <div className='flex items-center mb-10'>
          <div className='relative w-full'>
            <h1 className='font-medium text-xl'>HOME</h1>
          </div>
          <input
            type="search" 
            id="default-search" 
            className="flex items-end justify-end p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            onChange={(e)=>{context.setSearchByTitle(e.target.value)}}
            placeholder="Search Mockups, Logos..." required/>
        </div>
        <section className='grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-xl'>
          {context.filteredItems?.map(product => (
            <Card 
            key={product?.id} 
            keyUid={uuidv4()}
            title={product?.title} 
            category={product?.category} 
            price={product.price} 
            image={product.image} />
          ))}
        </section>
        <ProductDetails/>

     </div>

    )
  }
  
  export default Home
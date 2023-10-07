import Card from '../../Componentes/Card';
import { v4 as uuidv4 } from 'uuid'
import { useFetch } from '../../Hooks/useFetch';
import UrlApi from '../../Api';
import ProductDetails from '../../Componentes/ProductDetail'


function Home() {
  const data = useFetch(UrlApi[0].getProduct);
    return (
     <div>
        <section className='grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-xl'>
        {data?.map(product => (
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
import PropTypes from 'prop-types';
import {UseContextGlobal} from '../../Context';


const Card = (props) => {
    const context = UseContextGlobal();
    return ( 
        <div 
        className='flex flex-col w-60 rounded-lg overflow-hidden border border-gray-400 pb-2 cursor-pointer bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500' 
        >
        
        <figure className='relative w-full h-40'  onClick={() => context.showProduct(props)}>
            <img
                src={props.image}
                alt='Product'
                className='w-full h-full object-cover'
            />
            <span className='px-2 absolute text-xs text-black bg-white/60 rounded-lg bottom-2 left-2'>{props.category}</span>
        </figure>
        <section className='flex flex-col h-full justify-between p-2 gap-4'>
            <div className='flex flex-row justify-between items-center'>
                <h3 className='text-sm font-light'>{props.title}</h3>
                <p className='font-medium'>{props.price}</p>
            </div>
            {context.renderIcon(props.keyUid,props)}
        </section>
    </div>
      );
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    price: PropTypes.number.isRequired, 
    keyUid: PropTypes.string.isRequired, 
}
export default Card
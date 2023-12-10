
import { createContext, useState,useContext} from 'react'
export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
  const [count, setCount] = useState(0)
  //abrir y cerrar la cart del pruducto
  const [isProductDetailOpen, closeProductDetail] = useState(false)
    //detalle del producto
  const [productToShow, setProductToShow] = useState({})
  //CardProducts 
  const [cardProducts, setcardProducts] = useState([])
 //CheckoutSideMenu 
 const [isCheckoutSideMenuOpen, closeCheckoutSideMenu ] = useState(false)
 // order checkout 
 const [order, setOrders] = useState([])



  const showProduct  = (data) => {
   closeProductDetail(true);
   setProductToShow(data);
  }

  const producData = (event, data) =>{
    event.stopPropagation();
    setCount(count + 1)
    closeCheckoutSideMenu(true);
    setcardProducts([...cardProducts, data])
  }


 const renderIcon = (keyUid,props) =>{
    const  isInCart = cardProducts.filter(product => product.keyUid == keyUid).length > 0
    if (isInCart) {
      return (
        <button className='bg-black text-white rounded-lg w-full py-2 font-medium hover:bg-black/95 didsabled:cursor-not-allowed disabled:opacity-50'
       disabled>Add to Cart 🛒</button>
      )
    } else {
      return (
          <button className='bg-black text-white rounded-lg w-full py-2 font-medium hover:bg-black/95 '
          onClick={(event) => producData(event, props)}>Add to Cart 🛒</button>
      )
  }
 }

 const deleteProduct = (keyUid) => {
  const filterProducts =  cardProducts.filter(product => product.keyUid != keyUid)
  setcardProducts(filterProducts)
  setCount(count - 1)
 }

const totalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price, 0)
}

const handleCheckout = () => {
  // console.log(order);
  const orderToAdd = {
    date : new Date(),
    products: cardProducts,
    totalProducts: cardProducts.length,
    totalPrice: totalPrice(cardProducts)
  }
  
  setOrders([...order, orderToAdd])
  setcardProducts([])
  setCount(0)
  closeCheckoutSideMenu(false)
}
  
  return (
    <ShoppingCartContext.Provider 
    value={
      {
        isProductDetailOpen,
        closeProductDetail,
        productToShow,
        setProductToShow,
        showProduct,
        producData,
        setCount,
        count,
        cardProducts,
        setcardProducts,
        closeCheckoutSideMenu,
        isCheckoutSideMenuOpen,
        renderIcon,
        deleteProduct,
        totalPrice,
        handleCheckout,
        order,
        setOrders
        }
        }>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export const UseContextGlobal = () => {
  return useContext(ShoppingCartContext);
}


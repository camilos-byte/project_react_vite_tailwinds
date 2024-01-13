import { createContext, useState,useContext, useRef} from 'react'
import { Navigate } from "react-router-dom";
export const ShoppingCartContext = createContext()
import { useFetch } from '../Hooks/useFetch';
import UrlApi from '../Api';
import { v4 as uuidv4 } from 'uuid'

export const ShoppingCartProvider = ({children}) => {
  const [count, setCount] = useState(0)
//open and off 
const [isProductDetailOpen, closeProductDetail] = useState(false)
//product detail
const [productToShow, setProductToShow] = useState({})
//CardProducts 
const [cardProducts, setCardProducts] = useState([])
 //CheckoutSideMenu 
 const [isCheckoutSideMenuOpen, closeCheckoutSideMenu ] = useState(false)
 // order checkout 
 const [order, setOrders] = useState([])
 //quantity products 
 const [quantity, setQuantity] = useState(1);
 //  const [items, setItems] = useState(null)
 const dataFetch = useFetch(UrlApi[0].getProduct);
 //searchByTitle 
 const [searchByTitle , setSearchByTitle ] = useState('')
 //searchByCategory
 const [searchByCategory , setSearchByCategory ] = useState('')
 //added to card 
 const [addedToCart, setAddedToCart] = useState({});
//my account 
const [account , setAccount] = useState ({})
//sign out 
const [signOut, setSignOut] = useState(false)
//view return
const [view, setView] = useState('')

const form = useRef(null)
//funcion para filtrar por categoria y titulo
const filteredItems =dataFetch?.filter(todo=>{
  //filtramos los elementos por titulos 
  const titleMatch = todo.title.toLowerCase().includes(searchByTitle.toLowerCase())
  //filtramos por las categorias 
  const categoryMatch = searchByCategory.toLowerCase() === 'all' || 
  todo.category.toLowerCase().includes(searchByCategory.toLowerCase());
  return titleMatch && categoryMatch;
})



const renderView = () => {
  const signOut = localStorage.getItem('sign-out');
  const parsedSignOut = JSON.parse(signOut);
  var isUserSignOut = signOut || parsedSignOut;
  return isUserSignOut;
};

const accountLocalStorage = () =>{
    // Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
    // Has an account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = account ? Object.keys(account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
   return {
    parsedAccount: parsedAccount,
    hasUserAnAccount: hasUserAnAccount
   }
}

const handleSignOut = () => {
  const stringifiedSignOut = JSON.stringify(true)
  localStorage.setItem('sign-out', stringifiedSignOut)
  setSignOut(true)
  setView('user-info')
}

const showProduct  = (data) => {
  closeCheckoutSideMenu(false)
   closeProductDetail(true);
   setProductToShow(data);
}

const producData = (e, data, keyUid) =>{
    closeProductDetail(false);
    e.stopPropagation();
    if (!addedToCart[keyUid]) {
      setCount(count + 1)
      closeCheckoutSideMenu(true);
      setCardProducts([...cardProducts, data]);
      setAddedToCart(prevState => ({
        ...prevState,
        [keyUid]: true,
      }));
    }
    
}

  
  const renderIcon = (keyUid, props ) =>{
    return (
      <button
      className={`bg-black text-white rounded-lg w-full py-2 font-medium hover:bg-black/95 ${addedToCart[keyUid] ? 'cursor-not-allowed opacity-50' : ''}`}
        disabled={addedToCart[keyUid]}
        onClick={(e) => {producData(e, props, keyUid)
        }}
      >
        {addedToCart[keyUid] ? 'Already in Cart' : 'Add to Cart 🛒'}
      </button>
    );
  }

  const handleIncrement = () => {
    // Lógica para incrementar la cantidad
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    // Lógica para decrementar la cantidad
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

 const deleteProduct = (keyUid) => {
  const filterProducts =  cardProducts.filter((product) => product.index != keyUid)
  setCardProducts(filterProducts)
  setCount(count - 1)
  console.log(count);
  count == 1 ? closeCheckoutSideMenu(false) : null
  setAddedToCart(prevState => ({
    ...prevState,
    [keyUid]: false,
  }));
 }

const totalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price, 0)
}

const handleCheckout = () => {
      // console.log(order);
      const orderToAdd = {
        id: uuidv4(),
        date : new Date(),
        products: cardProducts,
        totalProducts: cardProducts.length,
        totalPrice: totalPrice(cardProducts)
        
      }
      setAddedToCart(false);
      setOrders([...order, orderToAdd])
      setCardProducts([])
      setCount(0)
      closeCheckoutSideMenu(false)

}

const handleSignIn = () => {
  const stringifiedSignOut = JSON.stringify(false)
  localStorage.setItem('sign-out', stringifiedSignOut)
  setSignOut(false)
  // Redirect
  return <Navigate replace to={'/'} />
}
  
const createAnAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name:formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
     // Create account
     const stringifiedAccount = JSON.stringify(data)
     localStorage.setItem('account', stringifiedAccount)
     setAccount(data)

     handleSignIn()
}

const editAccount = () => {
  const formData = new FormData(form.current);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const stringifiedAccount = JSON.stringify(data)
  localStorage.setItem('account', stringifiedAccount)
  setAccount(data);
};
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
        setCardProducts,
        closeCheckoutSideMenu,
        isCheckoutSideMenuOpen,
        renderIcon,
        deleteProduct,
        totalPrice,
        handleCheckout,
        order,
        setOrders,
        quantity,
        setQuantity,
        filteredItems,
        searchByTitle,
        setSearchByTitle,
        searchByCategory,
        setSearchByCategory,
        addedToCart, setAddedToCart,
        handleIncrement,
        handleDecrement,
        account,
        setAccount,
        signOut,
        setSignOut,
        handleSignOut,
        renderView,
        form,
        createAnAccount,
        handleSignIn,
        accountLocalStorage,
        view,
        setView,
        editAccount
        }
        }>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export const UseContextGlobal = () => {
  return useContext(ShoppingCartContext);
}


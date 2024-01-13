import { Link } from "react-router-dom";
import { useContext } from 'react'
import {ShoppingCartContext} from '../../Context';

function Signin() {
  const context = useContext(ShoppingCartContext)
  // const [view, setView] = useState('user-info')
  const  valuesLocal = context.accountLocalStorage()
  const renderLogIn = () => {
    return (
      <div className="flex min-h-full flex-1 flex-col justify-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input 
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={valuesLocal.parsedAccount?.email}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  disabled
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  disabled
                  autoComplete="current-password"
                  value={valuesLocal.parsedAccount?.password}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <Link to={"/"}>
                <button
                  type="submit"
                  className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                    !valuesLocal.hasUserAnAccount ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600'
                  }`}
                  disabled={!valuesLocal.hasUserAnAccount}
                  onClick={()=>context.handleSignIn()}
                >
                  Log in
                </button>
              </Link>
            </div>
            <div>
              {/* <Link
              to={"/"}> */}
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  disabled ={valuesLocal.hasUserAnAccount}
                  onClick={()=> context.setView('create-user-info')}
                >
                  Sign in
                </button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    )
  }
  const renderCreateUserInfo = () => {
    // TODO: Create render view
    return (
      <>
       <form ref={context.form} className="space-y-3" >
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Your name:
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  defaultValue={valuesLocal.parsedAccount?.name}
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Your Email:
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  defaultValue={valuesLocal.parsedAccount?.email}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                 Your Password
                </label>
              </div>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  defaultValue={valuesLocal.parsedAccount?.password}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <Link to={"/"}>
                <button
                  type="submit"
                  className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                   'bg-indigo-600'
                  }`}
                  onClick={ ()=> context.createAnAccount()}
                >
                  Create
                </button>
              </Link>
            </div>
            
          </form>
      </>
    )
  }

  const renderView = () => context.view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn()
  return (
    <>
    <h1 className="font-medium text-xl text-center py-5">Welcome</h1>
      {renderView()}
    </>

  )
  }
  
  export default Signin
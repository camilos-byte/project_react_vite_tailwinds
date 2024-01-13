import { useContext } from 'react'
import {ShoppingCartContext} from '../../Context';

// function MyAccount() {

//   return (
//     // <>
//       <div className="flex items-center">
//         {/* <div className="w-full"> */}
//           <div className="bg-white p-4 rounded-lg  ">
//             <form action="">
//               <div className="mb-5">
//                 <label  className="block mb-2 font-bold text-gray-600">Name</label>
//                 <input 
//                 type="text" 
//                 id="name" 
//                 name="name" 
//                 placeholder="Put in your fullname." 
//                 className="border border-gray-300  p-3 w-full rounded mb-"/>
//               </div>
//               <div className="mb-5">
//                 <label  className="block mb-2 font-bold text-gray-600">Twitter</label>
//                 <input 
//                 type="text" 
//                 id="twitter" 
//                 name="twitter" 
//                 placeholder="Put in your fullname." 
//                 className="border border-red-300  p-3 w-full rounded mb-"/>
//                 <p className="text-sm text-red-400 mt-2">Twitter username is required</p>
//               </div>

//               <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
//             </form>
//           </div>
//         {/* </div> */}
//         </div>
//     // </>
//   )
// }
  
//   export default MyAccount 



function MyAccount() {
  const context = useContext(ShoppingCartContext)
  const  valuesLocal = context.accountLocalStorage()
  const renderUserInfo = () => {
    return (
      <div className="flex flex-col w-80">
        <p>
          <span className="font-light text-sm">Name: </span>
          <span>{valuesLocal.parsedAccount?.name}</span>
        </p>
        <p>
          <span className="font-light text-sm">Email: </span>
          <span>{valuesLocal.parsedAccount?.email}</span>
        </p>
        <button
          className="border border-black rounded-lg mt-6 py-3"
          onClick={() => context.setView("edit-user-info")}
        >
          Edit
        </button>
      </div>
    );
  };

  const renderEditUserInfo = () => {
    return (
      <form ref={context.form} className="flex flex-col gap-4 w-80">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-light text-sm">
            Your name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={valuesLocal.parsedAccount?.name}
            placeholder="Peter"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-light text-sm">
            Your email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={valuesLocal.parsedAccount?.email}
            placeholder="hi@helloworld.com"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-light text-sm">
            Your password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            defaultValue={valuesLocal.parsedAccount?.password}
            placeholder="******"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <button
          className="bg-black text-white w-full rounded-lg py-3"
          onClick={() => {
            context.setView("user-info"), context.editAccount();
          }}
        >
          Save
        </button>
      </form>
    );
  };

  const renderView = () =>
    context.view === "edit-user-info" ? renderEditUserInfo() : renderUserInfo();

  return (
    <>
      <h1 className="font-medium text-xl text-center mb-6 w-80">My account</h1>
      {renderView()}
    </>
  );
}
export default MyAccount;

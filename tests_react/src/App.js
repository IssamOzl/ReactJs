import ProductTable from "./Liste_produits/ProductTable";
import React from "react";
import ReactDOM from 'react-dom';
import UseToggle from "./HooksPerso/UseToggle";
import Memo from "./Memorisation/Memo";
import Def from "./Portaills/Portal";
import Reducer from "./UseReducer/Reducer";
//import Main from "./ReactRouterDom/Main";
import Form from "./FormValidation/Form";
import { DarkModeContext, DarkModeContextProvider } from "./UseContext/DarkMode";
import UsersApp from "./UsersManagement/Components/UsersApp";
import {UsersTableContextProvider} from "./UsersManagement/Hooks/UsersTableContext"
import Storage from "./LocalStorage/Storage";
import HookForm from "./ReactHookForm/HookForm";
import HookFormWithZod from "./ReactHookForm/HookFormWithZod";
import DataFetch from "./FetchData/DataFetch";
import ReactQueryMain from "./FetchData/ReactQueryMain";
import ReactQuery from "./FetchData/ReactQuery";
import Main from './RouterDomRoutesFromElements/Main'
// import {
//   useQuery,
//   useMutation,
//   useQueryClient,
//   QueryClient,
//   QueryClientProvider,
// } from '@tanstack/react-query'

// const queryClient = new QueryClient()

 function App() {
//   function test(){
//     console.log("Test is called")
//   }

  return (
   // <ProductTable/>
  //<UseToggle/>
  //<Memo/>
  //<Def/>
  //<Reducer/>
   <Main/>
 
// <DarkModeContextProvider>
// <Form/>
// </DarkModeContextProvider>
//  <UsersTableContextProvider>
//     <UsersApp/>
//  </UsersTableContextProvider>
  //<Storage/>
 // <HookForm/>
//<HookFormWithZod/>  
//<DataFetch/>  
);

}
export default App;

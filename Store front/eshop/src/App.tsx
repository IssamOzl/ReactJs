import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartCountContextProvider } from './Context/CartCountCntext';
import Main from './Pages/Main';


const queryClient = new QueryClient();
function App() {

  return (
    <CartCountContextProvider>
      <QueryClientProvider client={queryClient}>
        <Main />
           
       </QueryClientProvider>
    </CartCountContextProvider>
  )
}

export default App

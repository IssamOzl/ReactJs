import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartCountContextProvider } from './Context/CartCountCntext';
import Main from './Pages/Main';


const queryClient = new QueryClient();
function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <CartCountContextProvider>
        <Main />
           
    </CartCountContextProvider>
    </QueryClientProvider>
  )
}

export default App

import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartCountContextProvider } from './Context/CartCountCntext';
import Main from './Pages/Main';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundback from './Components/ErrorBoundaryFallback/ErrorBoundback';
 
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

import './App.css'
import LatestProducts from './Components/LatestProducts/LatestProducts';
import NavBar from './Components/NavBar/NavBar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { categories, product } from './Utils/Types';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import { CartCountContextProvider } from './Context/CartCountCntext';
import { CartListing } from './Components/CartListing/CartListing';
import Main from './Pages/Main';

const cat: categories = {
  "category_id": 15,
  "category_name": "Montres",
  "category_status": "active"
}

const slug: string = "Pack-Tigre"

const queryClient = new QueryClient();
function App() {

  return (
    <CartCountContextProvider>

      <QueryClientProvider client={queryClient}>
        <Main/>
      </QueryClientProvider>

    </CartCountContextProvider>
  )
}

export default App

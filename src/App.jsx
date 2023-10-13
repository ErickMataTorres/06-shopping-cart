import { Header } from './components/Header';
import {products as initialProducts} from './mocks/products.json';
import {Products} from './components/Products.jsx'

import { Footer } from './components/Footer';
import {IS_DEVELOPMENT} from './config.js'
import { useFilters } from './hooks/useFilters';
import { Cart } from './components/Cart';
import { CartProvider } from './context/cart';

function App() {

  
  const { filterProducts}=useFilters();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
    <Header></Header>
    <Cart></Cart>
    <Products products={filteredProducts}></Products>
    {IS_DEVELOPMENT && <Footer></Footer>}
    </CartProvider>
    )
}

export default App

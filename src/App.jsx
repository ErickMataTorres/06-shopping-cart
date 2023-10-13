import { Header } from './components/Header';
import {products as initialProducts} from './mocks/products.json';
import {Products} from './components/Products.jsx'

import { Footer } from './components/Footer';
import {IS_DEVELOPMENT} from './config.js'
import { useFilters } from './hooks/useFilters';

function App() {

  
  const { filterProducts}=useFilters();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <>
    <Header></Header>
    <Products products={filteredProducts}></Products>
    {IS_DEVELOPMENT && <Footer></Footer>}
    </>
    )
}

export default App

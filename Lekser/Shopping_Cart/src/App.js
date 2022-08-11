import './App.css';
import Products from './components/Products';
import Header from './components/Header';
import { Checkout } from './components/Checkout';
import { ProductProvider } from './components/ProdContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProductProvider>
          <Header />
          <Routes>
            <Route path="/KodeHode/Lekser/Shopping_Cart/build/" element={ <Products /> } />
            <Route path="/KodeHode/Lekser/Shopping_Cart/build/checkout" element={ <Checkout /> } />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

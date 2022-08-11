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
            <Route path="/" element={ <Products /> } />
            <Route path="/checkout" element={ <Checkout /> } />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

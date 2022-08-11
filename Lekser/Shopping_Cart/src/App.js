import './App.css';
import Products from './components/Products';
import Header from './components/Header';
import { Checkout } from './components/Checkout';
import { ProductProvider } from './components/ProdContext';
import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ProductProvider>
          <Header />
          <Routes>
            <Route path="/" element={ <Products /> } />
            <Route path="/checkout" element={ <Checkout /> } />
          </Routes>
        </ProductProvider>
      </HashRouter>
    </div>
  );
}

export default App;

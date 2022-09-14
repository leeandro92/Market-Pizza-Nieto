
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Main from './component/Main/Main';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './Context/CartContext';
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header/>
          <Main />
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;

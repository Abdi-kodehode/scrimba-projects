import { NavBar, Cart, CartCount } from '../styled-components/NavBar'
import { FaShoppingCart } from 'react-icons/fa'
import { useContext } from 'react'
import ProdContext from './ProdContext'
import { StyledLink } from '../styled-components/StyledLinks'



const Header = () => {
  const { prod } = useContext(ProdContext)

  return (    
    <NavBar>
        <h2>
          <StyledLink to="/KodeHode/Lekser/Shopping_Cart/build/">Summer Project 2022</StyledLink>
        </h2>
        <Cart>
          <StyledLink to="/KodeHode/Lekser/Shopping_Cart/build/checkout">
            <FaShoppingCart size='25px' />
          </StyledLink>
          <CartCount>{ prod.length }</CartCount>
        </Cart>
    </NavBar>
        
  )

}
export default Header;

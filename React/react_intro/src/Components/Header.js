import logo from "../logo.svg"
import { StyledLinks } from "../Styled_comp/StyledLinks"

const Header = () => {
    return (
        <header>
            <h1>React Intro</h1>
            <img src={logo} className="logo" alt=""></img>
            <StyledLinks href="https://reactjs.org/" target="_blank">Visit reactjs.org</StyledLinks>
        </header>
    )
}




export default Header
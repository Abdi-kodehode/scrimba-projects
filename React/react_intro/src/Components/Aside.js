import { Link } from "react-router-dom"

export const Aside = () => {
    return (
        <section>
            <h3>
                <Link to="/">Welcome to React 101</Link>
            </h3>
            <p>In this short tutorial we are gonna learn:</p>
            <ul>
                <li>
                    <Link to="/first">What is React</Link>
                </li>
                <li>
                    <Link to="/second">Prerequisite for react</Link>
                </li>
                <li>
                    <Link to="/third">Hooks</Link>
                </li>
                <li>
                    <Link to="/fourth">Props</Link>
                </li>
                <li>
                    <Link to="/fifth">API</Link>
                </li>
                
            </ul>
        </section>
    )
}





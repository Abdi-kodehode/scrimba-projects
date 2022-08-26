import { ArticleProp } from "./ArticleProp";
import { H3 } from "../Styled_comp/Styledh";

export const ExampleProp = (props) => {
    return (
        <div>
            <H3>React Props</H3>
            <ArticleProp
                title='React Properties aka "Props"'
                paragraph='React Props are like function arguments in JavaScript and attributes in HTML.
                To send props into a component, use the same syntax as HTML attributes:
                const myElement = <Car brand="Ford" /> ' 
            />
        </div>
    )
        
}
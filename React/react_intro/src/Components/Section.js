import { StyledKbd } from "../Styled_comp/StyledKbd"
import { StyledCode } from "../Styled_comp/StyledCode"
import { H3 } from "../Styled_comp/Styledh"


export const SectionOne = () => {
    return (
        <section className="bg-red">
            <H3>A JavaScript library for building user interfaces</H3>
        </section>
    )
}

export const SectionTwo = () => {
    return (
        <section className="bg-blue">
            <H3>What is React</H3>
            <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.</p>
            <p>Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.
            It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have <StyledKbd> Node &gt;= 14.0.0 and npm &gt;= 5.6 </StyledKbd> on your machine. To create a project, run:</p>

            <StyledCode>
            npx create-react-app my-app <br />
            cd my-app <br />
            npm start 
            </StyledCode>
        </section>
    )
}

export const SectionThree = () => {
    return (
        <section className="bg-yellow">
            <H3>Prerequisite for react</H3>
            <p>We’ll assume that you have some familiarity with HTML and JavaScript, but you should be able to follow along even if you’re coming from a different programming language. We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.</p>
        </section>
    )
}



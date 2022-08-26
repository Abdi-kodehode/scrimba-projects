import { ButtonUp } from "../Styled_comp/ButtonUp";
import { ButtonDown } from "../Styled_comp/ButtonDown";
import { H3 } from "../Styled_comp/Styledh";
import { useEffect, useState } from "react";


export const Counter = () => {
    const [Autoincrement, setAutoincrement] = useState(0)
    const [number, setnumber] = useState(0)

    const [booolian, setbooolian] = useState(true)


    const Timer = () => {
        setTimeout(() => {
            setAutoincrement(Autoincrement + 1);
            setbooolian(number % 10 === 0 ? false : true)
        }, 1000)
       
      }

    useEffect(() => {
        Timer()
    },)

    return (
        <>
            <H3>Hooks</H3>
            <p>Just a quick example/try on how hooks can work</p>
        
            <div>
                <ButtonUp onClick={() => setnumber(number + 1)}></ButtonUp>
                <p> Du klikket {number} ganger</p>
                <p>{`Auto Increment: ${Autoincrement}`}</p>
                <p>{`Booolian State: ${booolian}`}</p>
                <ButtonDown onClick={() => setnumber(number - 1)}></ButtonDown>
            </div>
        </>
    )

}
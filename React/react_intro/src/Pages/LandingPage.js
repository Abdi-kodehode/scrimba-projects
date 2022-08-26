import Header from "../Components/Header"
import { Aside } from '../Components/Aside';
import { SectionOne, SectionTwo, SectionThree } from '../Components/Section';
import { Counter } from "../Components/Counter";
import { ExampleProp } from "../Components/ExampleProp";
import { ChuckNorris } from "../Components/ApiCall";
import { Routes, Route } from "react-router-dom"

export const LandingPage = () => {
    return (
        <>
        <Header />
        <div className="columns">            
            <div className="left-side">
                <Aside />
            </div>
            <div className="right-side">          
                <Routes>
                    <Route path="/" element={<SectionOne />} />
                    <Route path="/first" element={<SectionTwo />} />
                    <Route path="/second" element={<SectionThree />} />
                    <Route path="/third" element={<Counter />} />
                    <Route path="/fourth" element={<ExampleProp/>} />
                    <Route path="/fifth" element={<ChuckNorris/>} />
                </Routes>
            </div>
        </div>
      </>
    )
}



import { H3 } from "../Styled_comp/Styledh";
import { Button } from "../Styled_comp/Button";
import { useState, useEffect } from "react";
import axios from "axios";

export const ChuckNorris = () => {
    const [data, setData] = useState()
    const [apiError, setApiError] = useState()
    const getNorrisData = () => {
      axios
        .get("https://api.chucknorris.io/jokes/random")
        .then((res) => {
          setData(res.data.value)
          console.log(res.data)
        })
        // @ts-ignore
        .catch(setApiError(true))
    }
    useEffect(() => {
       getNorrisData()
    },[])
  
    if (data) {
      return (
        <section>
          <H3>Wise words from Chuck Norris</H3>
          <article>
             <p>{data}</p>
             <Button onClick={getNorrisData}>Next</Button>
          </article>
        </section>
      )
    } else if (apiError) {
      return (
        <section>
          <H3>Wise words from Chuck Norris</H3>
          <article>
            <p>Content failed to load, please try again later</p>
          </article>
        </section>
      )
    } else {
      return (
        <section>
          <H3>Wise words from Chuck Norris</H3>
          <article>
            <p>Loading...</p>
          </article>
        </section>
      )
    }
  }
  

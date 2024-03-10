import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {Link } from 'react-router-dom'

import styles from './Home.module.css'

import Loading from "../Layout/Loading"

const ApiKey = 'live_AG5nGcSRzUiXYFysLVdNpG2ibV5lo44Rds094Z6Pb15cdJY5Lb4vZqPWdhp14DEo'


function SearchCat() {

    const name = useParams().name
    const TypeCat = useParams()
    const [CatDefinit, setCatDefinit] = useState()


    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=${TypeCat.id}&api_key=${ApiKey}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCatDefinit(data)
            })
            .catch((err) => console.log(err))
    }, [TypeCat])





    return (
        <main className={styles.inicio}>

            <h1>{name}</h1>


            <section>

                {CatDefinit ? (
                    CatDefinit.map((cat) => (
                        <div className={styles.cat} key={cat.id} >

                            <Link to={`/PageCat/${cat.id}`}> <img key={cat.id} src={cat.url} alt='gato' /></Link>

                        </div>


                    ))
                ) : (<Loading />)}

            </section>
        </main>
    )

}
export default SearchCat
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from "../Layout/Loading"

import styles from './PageCat.module.css'

function PageCat() {

    const CatId = useParams()

    const [Gato, setGato] = useState([])

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/${CatId.id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setGato(data)
                // console.log(data.breeds.id)
            })
            .catch((error) => console.log(error))
    }, [CatId])
     console.log(Gato.breeds)
    return (
        <main className={styles.gato}>
            {Gato.breeds ?
                <section >
                    <div className={styles.info}>
                        <article>
                            <h3>Informações Principais</h3>
                            <p><span>Nome:</span> {Gato.breeds[0].name}</p>
                            <p><span>Origem:</span> {Gato.breeds[0].origin} {Gato.breeds[0].country_code}</p>
                            <p><span>Afeição:</span> {Gato.breeds[0].affection_level}</p>
                            <p><span>Temperamento:</span> {Gato.breeds[0].temperament}</p>
                            <p><span>Adaptabilidade:</span> {Gato.breeds[0].adaptability}</p>
                            <p className={styles.description}><span>Descrição:</span> {Gato.breeds[0].description}</p>
                        </article>
                    </div>
                    <div className={styles.image_cat}>
                        <img src={Gato.url} alt="gato" />
                        <p><a href={Gato.url} download>Download</a></p>
                    </div>





                </section>


                : <section><Loading /></section>}

        </main>)

}
export default PageCat
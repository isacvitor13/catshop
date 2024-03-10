import { useState, useEffect } from "react"
import RaceCardCat from "../Layout/RaceCardCAt"
import styles from "./Raças.module.css"
import Loading from '../Layout/Loading'


function Racas() {

    const [CatBreed, setCatBreed] = useState()

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/breeds', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCatBreed(data)

            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <section className={styles.breeds_container}>
            <div className={styles.breeds}>
            <h1 className={styles.breeds_title}>Raças de gatos</h1>
            {CatBreed ?(
                CatBreed.map((cat) => (
                    <div key={cat.id} className={styles.breeds_cat_container}>
                        <RaceCardCat
                            name={cat.name}
                            id={cat.id}
                            key={cat.id}
                            temperament={cat.temperament}
                            img={cat.reference_image_id}
                            description={cat.description} />
                    </div>
                    
                ))):(<Loading />)}
                </div>
        </section>)

}
export default Racas
import styles from './RaceCardCat.module.css'
import ButtonActions from './ButtonAction'
function RaceCardCat({ name, temperament, id, img, description }) {


    return (
        <div key={id} className={styles.cat_card}>

            <div className={styles.container_img}>
                <img src={`https://cdn2.thecatapi.com/images/${img}.jpg`} alt={name} />
            </div>
            <div className={styles.container_text}>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
            <div className={styles.container_button}>
                <ButtonActions to={`/SearchCat/${id}/${name}`} text='ver' />
            </div>
            {/* {ViewDescripition && <p>{temperament}</p>} */}
            

        </div>
    )
}
export default RaceCardCat
import styles from './Home.module.css'
import { useState, useEffect } from 'react'
import Input from './../Layout/Input'
import Loading from '../Layout/Loading'
import { Link } from 'react-router-dom'

const ApiKey = 'live_AG5nGcSRzUiXYFysLVdNpG2ibV5lo44Rds094Z6Pb15cdJY5Lb4vZqPWdhp14DEo'


function Home() {
    const [gatos, setGatos] = useState([])
    const [TypeCat, setTypeCat] = useState({ id: 'beng' })

    function PesquisarGato(CatId) {
        setTypeCat({ id: CatId.target.value })
    }

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=${TypeCat.id}&api_key=${ApiKey}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then((resp) => resp.json())
            .then((data) => {
                setGatos(data)
                // console.log(data)
            })
            .catch((err) => console.log(err))
    }, [TypeCat])


    return (
        <main className={styles.inicio}>
            <h1>Veja informações de todo tipo de gatos</h1>
            <p> Escolha a raça desejada e clique em uma foto para saber mais.</p>

            <Input type='text' placeholder='Procure raças de gatos aqui!' HandleCat={PesquisarGato} list="raça" />
            <p>Entre em contatos pelo instagram para encontrar o pet ideal para você</p>

            <section>
                {gatos.length > 0 ? (
                    gatos.map((gato) =>

                        <div className={styles.cat} key={gato.id}>

                            <Link to={`/PageCat/${gato.id}`}><img key={gato.id} src={gato.url} alt='gato' /></Link>

                        </div>

                    )
                ) : (<Loading />)}
            </section>
        </main>
    )

}
export default Home
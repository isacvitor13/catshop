import styles from './Contatos.module.css'
import logo from '../imgs/black-cat_3704886.png'
import { FaInstagram, FaFacebook, FaTwitter, FaReddit } from 'react-icons/fa'
import { useState } from 'react'

function Contatos() {

    const [GatoPosition, setGatoPosition] = useState(1)
    function MoverGato() {
        setGatoPosition(GatoPosition + 1)

        if (GatoPosition >= 3) {
            setGatoPosition(1)
        }
    }




    return (
        <div className={styles.contatos_container}>

            <section className={styles.desenvolvedor}>

                <h1><span>Isac</span><span> Vitor</span> </h1>

                <div>

                    <img src={logo} alt='isac' className={`${styles['Cat' + GatoPosition]}`} onMouseDown={MoverGato} onMouseOver={MoverGato}></img>
                </div>

            </section>

            <section className={styles.contatos}>

                <a href='https://www.instagram.com/isac_vitor_13/#' target='_blank' rel="noreferrer">
                  
                    <FaInstagram />

                    <span>Instagram</span>

                </a>

                <a href='https://www.facebook.com/isac.vitor.391' target='_blank' rel="noreferrer">
                    
                    <FaFacebook />

                    <span>Facebook</span>
                </a>

                <a href='https://twitter.com/Isac_vitor_13' target='_blank' rel='noreferrer'>
                    
                    <FaTwitter />

                    <span>X/Twitter</span>

                </a>

                <a href='https://www.reddit.com/user/ExpertAcanthaceae470' target='_black' rel='noreferrer'>
                    
                    <FaReddit />

                    <span>Reddit</span>

                </a>

            </section>
        </div>
    )
}
export default Contatos
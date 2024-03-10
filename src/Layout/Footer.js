import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
function Footer() {
    return (
        <footer className={styles.rodape}>
            <section>
                <h4>Desenvolvimento:</h4>
                <ul>
                    <li><Link to='/Contatos'>Isac Vitor</Link></li>
                    <li><Link to='/Sobre'><h4>Serviços</h4></Link></li>
                    {/* <li>Isac Vitor</li>
                    <li>Isac Vitor</li>
                    <li>Isac Vitor</li>
                    <li>Isac Vitor</li> */}
                </ul>
            </section>
            <section>
                <h4>Contatos:</h4>
                <ul>
                    <li><a href='https://www.instagram.com/isac_vitor_13/#' target='_blank' rel="noreferrer">Instagram</a></li>
                    <li><a href='https://www.facebook.com/isac.vitor.391' target='_blank' rel="noreferrer">Facebook</a></li>
                    <li><a href='https://twitter.com/Isac_vitor_13' target='_blank' rel='noreferrer'>X/Twitter</a></li>
                    <li><a href='https://www.reddit.com/user/ExpertAcanthaceae470' target='_black' rel='noreferrer'>Reddit</a></li>
                </ul>
            </section>
        </footer>
    )
}
export default Footer
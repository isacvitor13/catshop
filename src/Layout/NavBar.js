import logo from '../imgs/black-cat_3704886.png'
import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"
function NavBar() {
    return (

        <header className={styles.cabecalho}>
            <img src={logo} alt="gatos"></img>
            <h1>CatShop</h1>
            <div>
                <Link to='/'>Inicio</Link>
                <Link to='/Raças'>Raças</Link>
                <Link to='/Contatos'>Contato</Link>
                <Link to='/Sobre'>Serviços</Link>
            </div>

        </header>

    )

}
export default NavBar
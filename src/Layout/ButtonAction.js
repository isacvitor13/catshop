import { Link } from "react-router-dom";

import styles from './ButtonActions.module.css'
function ButtonActions({ to, text }) {

    return (
            <Link className={styles.button_action} to={to} >{text}</Link>

    )
}

export default ButtonActions
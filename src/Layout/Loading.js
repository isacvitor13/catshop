import styles from './Loading.module.css'

function Loading() {
    return (<>
        <div className={styles.container }>
            <div className={styles.ball}></div>
            <div className={styles.ball}></div>
            <div className={styles.ball}></div>
            <div className={styles.ball}></div>
            <div className={styles.ball}></div>
            <div className={styles.ball}></div>
            <div className={styles.ball}></div>
        </div>
    </>)
}
export default Loading
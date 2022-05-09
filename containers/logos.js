import styles from '../styles/Home.module.css'

const Logos = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logos}>
                <div>
                    <img src='/binance.png' alt='' />
                </div>
                <div>
                    <img src='/ethereum.png' alt='' />
                </div>
                <div>
                    <img src='/blockchain.png' alt='' />
                </div>
                <div>
                    <img src='/bitmex.png' alt='' />
                </div>
            </div>
        </div>
    );
}

export default Logos;
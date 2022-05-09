import styles from '../styles/nftcard.module.css'
import Glasscard from './glasscard'

const Nftcard = ({nftimg_src, title, img_src, hours, minutes, seconds}) => {
    return (
        <div className={styles.nftcard}>
            <img className={styles.nftcardimg} src={nftimg_src} alt='' />
            <Glasscard 
            nftcard='nftcard1'
            title={title}
            img_src={img_src}
            hours={hours}
            minutes={minutes}
            seconds={seconds}/>
        </div>
    );
}

export default Nftcard;
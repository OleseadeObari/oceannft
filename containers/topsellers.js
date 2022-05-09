import Button from '../components/button';
import Topseller from '../components/topseller';
import { topseller } from '../data';
import styles from '../styles/Home.module.css'

const Topsellers = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topsellers}>
                <div className={styles.topseller_top}>
                    <div>
                        <h1>Top Sellers this <span>Month</span></h1>
                        <img src='/dropdown.svg' alt='' />
                    </div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do<br/> amet sint. Velit officia consequat duis enim minim mollit.</p>
                </div>
                <div className={styles.topseller_middle}>
                    {topseller.map((seller) => (
                        <Topseller topseller={seller} color={seller.color} key={seller.sn} />
                    ))}
                </div>
                <div className={styles.topseller_button}>
                    <Button type='secondary' text='Explore all' />
                </div>
            </div>
        </div>
    );
}

export default Topsellers;
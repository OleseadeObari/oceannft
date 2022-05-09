import Button from '../components/button';
import { collections } from '../data';
import styles from '../styles/Home.module.css'

const Excollections = () => {
    return (
        <div className={styles.container}>
            <div className={styles.excollections}>
                <div className={styles.leftexplore}>
                    <h1>Explore Collections</h1>
                    <div className={styles.collectionbuttons}>
                        {collections.map((collection)=>(
                            <Button type='collection' text={collection.text} key={collection.id} />
                        ))}
                    </div>
                    <div className={styles.viewcollections}>
                        <p>View all</p>
                        <img src='/rightarrow.svg' alt='' />
                    </div>
                </div>
                <div className={styles.rightexplore}>
                    <img src='/exillus.png' alt='' />
                </div>
            </div>
        </div>
    );
}

export default Excollections;
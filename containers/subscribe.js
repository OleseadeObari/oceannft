import Button from '../components/button';
import styles from '../styles/Home.module.css'

const Subscribe = () => {
    return (
        <div className={styles.container}>
            <div className={styles.subscribe}>
                <div className={styles.left_subscribe}>
                    <img src='/subscribe.jpg' alt='' />
                </div>
                <div className={styles.right_subscribe}>
                    <h1>Subscribe to us</h1>
                    <p className={styles.subscribe_para}>Specially developed to help restore a more youthful <br/>appearance with improved radiance and bounce.</p>
                    <div className={styles.subscribe_button}>
                        <input type='email' placeholder='Your work email address' />
                        <Button type='subscribe' text='Subscribe' />
                </div>
            </div>
            </div>
        </div>
    );
}

export default Subscribe;
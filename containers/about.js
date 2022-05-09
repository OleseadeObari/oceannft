import styles from '../styles/Home.module.css'

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.aboutimg}>
                <img src='/aboutbg.jpg' alt='' />
            </div>
            <div className={styles.aboutcardcontainer}>
                <div className={styles.aboutcard}>
                    <h1>What are NFT's ?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum quis amet, faucibus lorem. Lectus amet odio quis sed adipiscing adipiscing magna non. Nullam turpis faucibus ridiculus suscipit. Et blandit suspendisse curabitur eu congue dui ut.</p>
                    <div className={styles.bottom_about}>
                        <p>Learn more</p>
                        <div className={styles.about_play}>
                            <img src='/play.svg' alt='' />
                            <p>Watch video</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
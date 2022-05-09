import styles from '../styles/Home.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <hr/>
                <div className={styles.footer_content}>
                    <div className={styles.compabout}>
                        <div className={styles.footer_logo}>
                            <img src='/logo.png' alt='' />
                            <h3>OceanNFT</h3>
                        </div>
                        <p>Lorem ipsum dolor amet, consectetur<br/> adipiscing elit. Eget nisl nunc quam ac<br/> sed turpis volutpat. Cursus sed<br/> massa non nisi, placerat.</p>
                        <div className={styles.socials}>
                            <div>
                                <img src='/instagram.svg' alt='' />
                            </div>
                            <div>
                                <img src='/dribble.svg' alt='' />
                            </div>
                            <div>
                                <img src='/twitter.svg' alt='' />
                            </div>
                            <div>
                                <img src='/youtube.svg' alt='' />
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer_links + ' ' + styles.footer_links_1}>
                        <h3>Market place</h3>
                        <p>Overview</p>
                        <p>Features<span>new</span></p>
                        <p>Tutorials</p>
                        <p>Pricing</p>
                        <p>Releases</p>
                    </div>
                    <div className={styles.footer_links}>
                        <h3>Collectibles</h3>
                        <p>About</p>
                        <p>Press</p>
                        <p>Careers</p>
                        <p>Contact</p>
                        <p>Partners</p>
                    </div>
                    <div className={styles.footer_links}>
                        <h3>Support</h3>
                        <p>Help Center</p>
                        <p>Safety Center</p>
                        <p>Legal</p>
                        <p>Privacy policy</p>
                        <p>Status</p>
                    </div>
                    <div className={styles.footer_links}>
                        <h3>Legal</h3>
                        <p>Cookies Policy</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Law Enforcement</p>
                        <p>Status</p>
                    </div>
                    <div className={styles.footer_links}>
                        <h3>Follow Us</h3>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Dribble</p>
                        <p>Instagram</p>
                        <p>LinkedIn</p>
                    </div>
                </div>
                <hr className={styles.secline}/>
                <div className={styles.footer_bottom}>
                    <p>&copy; 2022 olowo.dev. All rights reserved</p>
                    <div className={styles.footer_bottom_right}>
                        <p>Terms & Conditions</p>
                        <div></div>
                        <p>Privacy Policy</p>
                        <div></div>
                        <p>Sitemap</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
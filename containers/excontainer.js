import Nftcard from "../components/nftcard";
import styles from '../styles/Home.module.css'
import { profiles } from "../data";
import Profilecard from "../components/profilecard";

const Excontainer = ({nftcard, profilecard}) => {
    return (
        <div className={styles.container}>
            <div className={styles.topnft}>
                <div className={styles.topnft_top}>
                    <div>
                        <h3>Top NFT's now</h3>
                    </div>
                    <div className={styles.topnft_top_right}>
                        <h3>View all</h3>
                        <img src="/rightarrow.svg" alt="" />
                    </div>
                </div>
                <div className={styles.nftcardrow}>
                    {nftcard && <><Nftcard 
                    nftimg_src='/nftimg1.jpg'
                    title='Apollo Eth #1289 NFT'
                    img_src='/headerpp.png'
                    hours='18'
                    minutes='25'
                    seconds='44' />

                    <Nftcard 
                    nftimg_src='/nftimg2.jpg'
                    title='Sassy Bull #1169 Art'
                    img_src='/nftpp.png'
                    hours='09'
                    minutes='15'
                    seconds='23'/>

                    <Nftcard 
                    nftimg_src='/nftimg3.jpg'
                    title='Satisfying 3D Art'
                    img_src='/nftpp1.png'
                    hours='23'
                    minutes='32'
                    seconds='56'/></>}

                    {profilecard && <>{profiles.map((profile)=>(
                        <Profilecard profile={profile} key={profile.id}/>
                    ))}</>}
                </div>
            </div>
        </div>
    );
}

export default Excontainer;
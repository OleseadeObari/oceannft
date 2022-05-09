import pstyles from '../styles/profilecard.module.css'
import Button from './button';

const Profilecard = ({profile}) => {
    return (
        <div className={pstyles.profilecard}>
            <img className={pstyles.bgimage} src={profile.bgimage} alt='' />
            <div className={pstyles.profileglass}>
                <div className={pstyles.profilenames}>
                    <img src={profile.profileimage} alt='' />
                    <p className={pstyles.fullname}>{profile.fullname}</p>
                    <div className={pstyles.username}>
                        <p>{profile.username}</p>
                        <img src='/verify.svg' alt='' />
                    </div>
                </div>
                <div className={pstyles.profileinfo}>
                    <div>
                        <p>{profile.followers}</p>
                        <p>Followers</p>
                    </div>
                    <div>
                        <p>{profile.following}</p>
                        <p>Following</p>
                    </div>
                    <div>
                        <p>{profile.artworks}</p>
                        <p>Artworks</p>
                    </div>
                </div>
                <Button type='secondary' text='Follow' />
            </div>
        </div>
    );
}

export default Profilecard;
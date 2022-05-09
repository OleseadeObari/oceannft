import gstyles from '../styles/glasscard.module.css'
import Button from './button';

const Glasscard = ({position, border, nftcard, title, img_src, hours, minutes, seconds}) => {
    return (
        <div className={gstyles.glasscard + ' ' + gstyles[position] + ' ' + gstyles[border] + ' ' + gstyles[nftcard]}> {/*or className={`${gstyles.glasscard} ${gstyles[position]}`}*/}
            <div className={gstyles.leftglasscard}>
                <h3>{title}</h3>
                <div className={gstyles.glassprofile}>
                    <img src={img_src} alt='' />
                    <p>@jhonartist</p>
                    <img src='/verify.svg' alt='' />
                </div>
                <p className={gstyles.reserve}>Reserve price</p>
                <div className={gstyles.glassprice}>
                    <img src='/ethereum.svg' alt='' />
                    <p>ETH 9.31 <span>[$29,884]</span></p>
                </div>
            </div>
            <div className={gstyles.rightglasscard}>
                <p>Auction Ends in</p>
                <div className={gstyles.glasstime}>
                    <div>
                        <p className={gstyles.glasstimefigures}>{hours}</p>
                        <p className={gstyles.glasstimewords}>Hours</p>
                    </div>
                    <div>
                        <p className={gstyles.glasstimefigures}>{minutes}</p>
                        <p className={gstyles.glasstimewords}>Mins</p>
                    </div>
                    <div>
                        <p className={gstyles.glasstimefigures}>{seconds}</p>
                        <p className={gstyles.glasstimewords}>Secs</p>
                    </div>
                </div>
                <Button icon text='Place Bid' type='primary'/>
            </div>
        </div>
    );
}

export default Glasscard;
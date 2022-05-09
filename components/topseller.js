import tstyles from '../styles/topseller.module.css'

const Topseller = ({topseller, color}) => {
    return (
        <div className={tstyles.topseller}>
            <div className={tstyles.sn}>
                <p>{topseller.sn}</p>
            </div>
            <div className={tstyles.profile}>
                <img src={topseller.pp} alt='' />
                <div>
                    <p className={tstyles.name}>{topseller.name}</p>
                    <div className={tstyles.amount}>
                        <img src='/ethereum.svg' alt='' />
                        <p>{topseller.amount}</p>
                    </div>
                </div>
            </div>
            <div className={tstyles.percentage + ' ' + tstyles[color]}>
                <p>{topseller.percentage}</p>
            </div>
        </div>
    );
}

export default Topseller;
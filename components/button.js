import bstyles from '../styles/buttons.module.css'

const Button = ({type, text, icon}) => {
    return (
        <div className={bstyles.buttons + ' ' + bstyles[type] }>
            <p className={bstyles.text}>{text}</p>
            {icon && <img src='/rightarrow.svg' alt='' />}
        </div>
    );
}



export default Button;
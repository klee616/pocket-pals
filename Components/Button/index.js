import style from './Button.module.css'

export default function Button({name, onClick,  disabled=false}) {
    return (<>
        <button  onClick={onClick} className={`button-font-style-1  ${style.button1}`} disabled={disabled}>{name}</button>
        </>)
}
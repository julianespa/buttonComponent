
import "../public/css/button.css"

export const Button = (props) => {
    const {color, children, variant, disableShadow, disabled, startIcon, endIcon, size} = props
    const classes =`${color ? color : ""} ${variant ? variant : ""} ${disableShadow ? "disableShadow" : ""} ${size ? size : ""}`
    const iconClass = `${startIcon || endIcon ? 'material-icons' : ""}`

    const clickHandler = ()=> {
        alert("click")
    }

    return (
        disabled ?
            <button type="button" disabled className={classes} onClick={clickHandler}> {children} </button>
        :
            <button type="button" className={classes} onClick={clickHandler}> <span className={iconClass}>{startIcon ? startIcon : ""}</span> {children} <span className={iconClass}>{endIcon ? endIcon : ""}</span></button>
    )
}


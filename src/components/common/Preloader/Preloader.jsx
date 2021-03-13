import react from 'react'
import classes from "./Preloader.module.css";

let Preloader=(props)=>{
    return (
        <div className={classes.spinner_page}>
            <div className={classes.lds_spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    ) 
}

export default Preloader
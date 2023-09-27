import React from 'react'
import classes from "./Home.module.css"

const CommonCard = ({ card }) => {
    const { image, desc } = card
    return (
        <div className={classes.mainCommon}>
            <div className={classes.cardimg}><img src={image} alt="top" style={{width:"100%" , height: "100%"}}/></div>
            <div className={classes.descCommon} >
                {desc}
            </div>
        </div>
    )
}

export default CommonCard
import React from 'react'
import classes from "./incomeCalcultor.module.css"
import { Divider, TextField } from '@mui/material'

const CalculatorCard = () => {
    return (
        <>
            <div className={classes.card}>
                <div className={classes.mainHeader}>
                    <div className={classes.header}>Banking Services</div>
                    <div className={classes.header}> No. of Daily Transactions</div>
                    <div className={classes.header}>Income (₹) </div>
                </div>
                <div className={classes.mainHeaderOne}>
                    <div className={classes.header}>
                        <div className={classes.firstColumn}>Money Transfer</div>
                        <div className={classes.firstColumnone}>Avg transaction of ₹4500</div>
                    </div>
                    <div className={classes.header}>
                        <TextField id="outlined-basic" variant="outlined" />
                    </div>
                    <div className={classes.header}>₹22</div>
                </div>
                <Divider />
                <div className={classes.mainHeaderOne}>
                    <div className={classes.header}>
                        <div className={classes.firstColumn}>Aadhaar ATM - AePS</div>
                        <div className={classes.firstColumnone}>Avg transaction of ₹3500</div>
                    </div>
                    <div className={classes.header}>
                        <TextField id="outlined-basic" variant="outlined" />
                    </div>
                    <div className={classes.header}>₹7</div>
                </div>
                <Divider />
                <div className={classes.mainHeaderOne}>
                    <div className={classes.header}>
                        <div className={classes.firstColumn}>Micro ATM</div>
                        <div className={classes.firstColumnone}>Avg transaction of ₹3500</div>
                    </div>
                    <div className={classes.header}>
                        <TextField id="outlined-basic" variant="outlined" />
                    </div>
                    <div className={classes.header}>₹7</div>
                </div>
                <Divider />
                <div className={classes.mainHeaderOne}>
                    <div className={classes.header}>
                        <div className={classes.firstColumn}>Mini Statement</div>
                        <div className={classes.firstColumnone} style={{width:'9vw'}}>N/A</div>
                    </div>
                    <div className={classes.header}>
                        <TextField id="outlined-basic" variant="outlined" />
                    </div>
                    <div className={classes.header}>₹1</div>
                </div>

            </div>
        </>
    )
}

export default CalculatorCard
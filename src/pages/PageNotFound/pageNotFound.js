import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import classes from '../PageNotFound/pageNotFound.module.css'
import pnf from '../../images/404.png'
import merchantLoan from "../../images/MerchantLoan.png"
import individualLoan from "../../images/Individual_Loan.png"
const PageNotFound = () => {


    return (
        <div>
            <div className={classes.main1}>
                <div className={classes.pnfimage}>
                    <img src={pnf} alt='UPI' />
                </div>
            </div>
        </div>

    );
};

export default PageNotFound;

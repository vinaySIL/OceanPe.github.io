import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import classes from '../Services/LoanServices.module.css'
import dpl from '../../images/DigitalLoan.png'
import merchantLoan from "../../images/MerchantLoan.png"
import individualLoan from "../../images/Individual_Loan.png"
const LoanServices = () => {


    return (
        <div>
            <div className={classes.main1}>
                <div className={classes.heading1}>
                    Digital Point Loan
                </div>
                <div className={classes.mainDiv}>
                    <div className={classes.txt}>
                        <div className={classes.text}>
                            The term "Digital Loan Point" can refer to a service or platform that provides digital solutions for loans and lending. It can entail offering loans online, utilizing technology to speed up the loan application and approval process, and giving borrowers access to and management of their loans through a digital interface. The term "Digital Loan Point" can refer to a service or platform that provides digital solutions for loans and lending. It can entail offering loans online, utilizing technology to speed up the loan application and approval process, and giving borrowers access to and management of their loans through a digital interface.The term "Digital Loan Point" can refer to a service or platform that provides digital solutions for loans and lending. It can entail offering loans online, utilizing technology to speed up the loan application and approval process, and giving borrowers access to and management of their loans through a digital interface.
                        </div>
                    </div>
                    <div className={classes.DMTimage}>
                        <img src={dpl} alt='UPI' />
                    </div>
                </div>
            </div>


            <div className={classes.main1}>
                <div className={classes.heading2}>
                    Merchant Loan
                </div>
                <div className={classes.mainDiv1}>
                    <div className={classes.DMTimage1}>
                        <img src={merchantLoan} alt='UPI' />
                    </div>
                    <div className={classes.txt}>
                        <div className={classes.text1}>
                            medium-sized businesses (SMEs). Businesses can access funds for a variety of purposes with the help of this form of loan, including operations expansion, inventory purchases, marketing initiatives, and managing short-term financial gaps. This sort of loan is customized to the distinctive cash flow patterns of businesses. A merchant loan, sometimes referred to as a business loan or merchant cash advance, is a sort of finance created especially to meet the needs of small and medium-sized businesses (SMEs). Businesses can access funds for a variety of purposes with the help of this form of loan, including operations expansion, inventory purchases, marketing initiatives, and managing short-term financial gaps. This sort of loan is customized to the distinctive cash flow patterns of businesses.
                        </div>
                    </div>

                </div>
            </div>

            <div className={classes.main1}>
                <div className={classes.heading3}>
                    Individual Loan
                </div>
                <div className={classes.mainDiv}>
                    <div className={classes.txt}>
                        <div className={classes.text}>
                            A personal loan, also known as an individual loan, is a financial product that enables borrowers to borrow money for a variety of requirements and expenses. Personal loans are often unsecured, meaning they are not backed by collateral, unlike specific-purpose loans like mortgages or auto loans. People utilize personal loans for many different things, from debt consolidation to paying for medical costs, home upgrades, or even funding vacations. A personal loan, also known as an individual loan, is a financial product that enables borrowers to borrow money for a variety of requirements and expenses. Personal loans are often unsecured, meaning they are not backed by collateral, unlike specific-purpose loans like mortgages or auto loans. People utilize personal loans for many different things, from debt consolidation to paying for medical costs, home upgrades, or even funding vacations.
                        </div>
                    </div>
                    <div className={classes.DMTimage}>
                        <img src={individualLoan} alt='UPI' />
                    </div>
                </div>
            </div>



        </div>

    );
};

export default LoanServices;

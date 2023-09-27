import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import classes from '../Services/BBPS.module.css'
import bbps from '../../images/bbps.png'

const BBPS = () => {


    return (
        <div>
            <div className={classes.main1}>
                <div className={classes.heading1}>
                    BBPS
                </div>
                <div className={classes.mainDiv}>
                    <div className={classes.txt}>
                        <div className={classes.text1}>
                            The Bharat Bill Payment System, also known as BBPS, is an interoperable and centralized platform used in India to enable online bill payments. Through a single platform, it simplifies the procedure for paying a variety of utility bills, including those for electricity, water, gas, telecommunications, and more. With the help of BBPS, people can conveniently pay their bills using a variety of channels and payment methods.
                        </div>
                        <div className={classes.textRow}>

                            <div className={classes.text1}>
                                <b>Key features and aspects of AEPS include:</b>
                            </div>
                        </div>
                        <div className={classes.textRow}>
                            <div className={classes.number}>
                                1.
                            </div>
                            <div className={classes.text1}>
                                <b>Centralized System:</b>  In order to create a single platform for bill payments, BBPS functions as a centralized system that links billers (businesses that generate bills) with payment service providers (banks, digital wallets, etc.).
                            </div>
                        </div>

                        <div className={classes.textRow}>
                            <div className={classes.number}>
                                2.
                            </div>
                            <div className={classes.text1}>
                                <b>Multiple Payment Channels: </b>Bill payment options from BBPS include physical locations, mobile apps, online banking portals from banks, and even online platforms. Users can select the approach that suits them the most thanks to this.
                            </div>
                        </div>

                        <div className={classes.textRow}>
                            <div className={classes.number}>
                                3.
                            </div>
                            <div className={classes.text1}>
                                <b>Interoperability:</b> By enabling users to pay any registered biller via any authorized payment agent, BBPS encourages interoperability. As a result, there is no longer a need to have separate accounts for every biller.
                            </div>
                        </div>

                        <div className={classes.textRow}>
                            <div className={classes.number}>
                                4.
                            </div>
                            <div className={classes.text1}>
                                <b>Convenience: </b>Users can pay several bills via BBPS, saving time by avoiding the need to visit various biller websites or payment locations. Time and effort are saved by this streamlined procedure.
                            </div>
                        </div>
                    </div>

                    <div className={classes.DMTimage}>

                        <img src={bbps} alt='UPI' />

                        <div className={classes.imgMoon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="144" height="152" viewBox="0 0 144 152" fill="none">
                                <g opacity="0.2">
                                    <path d="M81.3631 85.0764L72.0509 90.3591L70.1234 85.8472C69.3868 84.1232 68.776 82.3603 68.286 80.5732C60.5801 69.1199 45.8522 65.4618 33.1575 72.6634C18.8232 80.7951 12.4233 99.7459 18.9011 114.902L10.3661 119.744C1.76513 99.6115 10.2603 74.442 29.3023 63.6397C42.042 56.4126 56.3287 57.418 66.9639 64.9055C68.3001 50.6267 76.318 36.9652 89.0608 29.7392C108.103 18.9369 130.594 26.5281 139.195 46.6605L130.66 51.5023C124.184 36.3424 107.25 30.6312 92.916 38.7629C80.2213 45.9645 73.7555 61.6456 76.9345 75.664C77.8635 77.2051 78.7047 78.8343 79.4412 80.5584L81.3631 85.0764Z" fill="#005E9E" />
                                </g>
                            </svg>
                        </div>
                        <div className={classes.traingleImg}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="47" height="71" viewBox="0 0 47 71" fill="none">
                                <path d="M41.3692 38.1408C43.4206 20.392 31.9697 5.23415 15.8445 4.3501L14.1799 18.7524C23.0909 19.241 29.418 27.617 28.2844 37.4246C27.151 47.2309 18.9796 54.8121 10.0686 54.3236L8.40394 68.7259C24.5304 69.6088 39.3178 55.8895 41.3692 38.1408Z" fill="#187A91" fill-opacity="0.5" />
                                <path d="M30.9268 30.2056C32.736 14.5598 22.6425 1.1963 8.427 0.416504L7.6433 7.19393C18.464 7.7875 26.146 17.9596 24.769 29.8678C23.392 41.776 13.4681 50.9823 2.64851 50.3888L1.86482 57.1662C16.0814 57.946 29.1176 45.8513 30.9268 30.2056Z" fill="#005E9E" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default BBPS;

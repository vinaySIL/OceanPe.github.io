import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import classes from '../Services/Service.module.css'
import AADHAR from '../../images/aadhar.png'

const Services = () => {
    const [age, setAge] = React.useState('');
    // setAge(event.target.value);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <div className={classes.main1}>
                
                <div className={classes.heading1}>
                    Aadhaar Enabled Payment System (AEPS)
                </div>
                <div className={classes.mainDiv}>
                    <div className={classes.txt}>
                        <div className={classes.text1}>
                            The Aadhaar Enabled Payment System (AEPS) is a ground-breaking program for digital financial inclusion in India that uses Aadhaar, the nation's biometric identity system, to make financial transactions safe and simple. Using their Aadhaar number and biometric authentication, users can use AEPS to access basic banking services and carry out a range of financial activities. The way people access and manage their funds has changed as a result of this system's contribution to the expansion of banking services into underserved and rural locations.
                        </div>
                        <div className={classes.textRow}>
                            <div className={classes.texts}>
                                <b>Key features and aspects of AEPS include:</b>
                            </div>
                        </div>
                        <div className={classes.textRow}>
                            <div className={classes.number}>
                                1.
                            </div>
                            <div className={classes.text1}>
                                <b>Biometric Authentication: </b>To confirm transactions, AEPS uses biometric verification techniques including fingerprint and iris scans. This increases security and makes sure that only the Aadhaar number's legitimate owner can carry out transactions.
                            </div>
                        </div>

                        <div className={classes.textRow}>
                            <div className={classes.number}>
                                2.
                            </div>
                            <div className={classes.text1}>
                                <b> Basic Transactions:  </b>
                                Users of AEPS can carry out fundamental financial operations such fund transfers, cash withdrawals, cash deposits, and balance enquiries. Frequently, these services are provided via small ATMs or business correspondents.
                            </div>
                        </div>

                        <div className={classes.textRow}>
                            <div className={classes.number}>
                                3.
                            </div>
                            <div className={classes.text1}>
                                <b>Interoperability: </b> AEPS is intended to work with various banks and financial institutions. This promotes financial inclusivity and accessibility by allowing clients of any bank to use AEPS services.
                            </div>
                        </div>


                    </div>


                    <div className={classes.DMTimage}>

                        <img src={AADHAR} alt='UPI' />

                        <div className={classes.imgMoon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="101" height="99" viewBox="0 0 101 99" fill="none">
                                <g opacity="0.2">
                                    <path d="M53.5516 56.0567L57.7791 52.1912L55.8417 50.4198C55.1014 49.7429 54.3204 49.1238 53.5067 48.5625C49.0651 42.6217 49.7238 34.4264 55.4869 29.1568C61.9943 23.2066 72.5865 23.2048 79.0939 29.1568L82.9686 25.6139C74.324 17.7096 60.2569 17.7096 51.6122 25.6139C45.8287 30.9022 43.9138 38.4112 45.8695 45.1688C38.479 43.3806 30.2667 45.1297 24.4832 50.4198C15.8386 58.3241 15.8386 71.1867 24.4832 79.0911L28.3579 75.5482C21.8484 69.5961 21.8505 59.9128 28.3579 53.9627C34.121 48.6931 43.0838 48.0908 49.579 52.152C50.1949 52.8961 50.8699 53.6102 51.6102 54.2871L53.5516 56.0567Z" fill="#005E9E" />
                                </g>
                            </svg>
                        </div>
                        <div className={classes.traingleImg}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="83" height="87" viewBox="0 0 83 87" fill="none">
                                <g opacity="0.2">
                                    <path d="M0.867681 69.2098L20.3391 0.295537L73.2645 52.4564L0.867681 69.2098Z" fill="#14B2F6" />
                                </g>
                            </svg>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default Services;


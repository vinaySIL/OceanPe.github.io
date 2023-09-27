import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import classes from '../Services/PrepaidCard.module.css'
import Prepaid from '../../images/Prepaid.png'

const PrepaidCard = () => {


    return (
        <div>
            <div className={classes.main1}>
                <div className={classes.heading1}>
                    Prepaid Card
                </div>
                <div className={classes.mainDiv}>
                    <div className={classes.txt}>
                        <div className={classes.text1}>
                            Prepaid cards are flexible financial instruments that give users a simple, in-charge method of controlling their expenditure. Prepaid cards are not connected to a bank account, unlike conventional credit or debit cards. Instead, before making a purchase, users load a preset amount onto the card. Prepaid cards are suitable for a range of financial purposes because they include a variety of features and advantages.
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
                                <b> Budgeting and Control:</b> A good option for budgeting is prepaid cards. To prevent overspending, users can load a predetermined amount onto the card. The card cannot be used after the loaded amount has been used up until it has been refilled.
                            </div>
                        </div>

                        <div className={classes.textRow}>
                            <div className={classes.number}>
                                2.
                            </div>
                            <div className={classes.text1}>
                                <b>Security: </b>Prepaid cards offer security advantages. Since they are not directly connected to a bank account, the risk of exposing sensitive account information is reduced. In case of loss or theft, only the balance on the card is at risk.
                            </div>
                        </div>

                        <div className={classes.textRow}>
                            <div className={classes.number}>
                                3.
                            </div>
                            <div className={classes.text1}>
                                <b>No Credit Check: </b>Prepaid cards have benefits in terms of security. They don't have a direct connection to a bank account, thus there is less chance that private account information may be revealed. The only thing that might be lost or stolen is the card's balance.
                            </div>
                        </div>


                        <div className={classes.textRow}>
                            <div className={classes.number}>
                                4.
                            </div>
                            <div className={classes.text1}>
                                <b>Online and In-Store Purchases: </b>Prepaid cards work similarly to credit or debit cards in that they can be used for both in-person and online purchases. Major card networks like Visa, Mastercard, or American Express are frequently linked to them.
                            </div>
                        </div>
                    </div>
                    <div className={classes.DMTimage}>

                        <img src={Prepaid} alt='UPI' />

                        <div className={classes.imgMoon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path opacity="0.2" d="M32.7922 6.4837L35.2413 0.0165644L29.7094 4.16632C23.1592 9.07753 14.7025 10.4118 7.19856 7.72145L0.859965 5.44702L4.80618 10.904C9.47574 17.3648 10.5439 25.8592 7.64626 33.5162L5.19712 39.9834L10.729 35.8336C17.2792 30.9224 25.736 29.5881 33.2399 32.2784L39.5785 34.5529L35.6323 29.0959C30.9627 22.6351 29.8945 14.1407 32.7922 6.4837Z" fill="#005E9E" />
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

export default PrepaidCard;

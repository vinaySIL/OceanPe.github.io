import classes from "./incomeCalcultor.module.css"
// import CalculatorCard from './calculatorCard'

// import CalCalcyBackgroungcy from "../../assets/images/background/calcy-background.jpg"
// import Calcy from "./assets/images/background/calcy.png"
import container from "../../assets/images/background/container.png"
import RS from "../../assets/images/rs.svg"
import { Button, Divider, TextField } from '@mui/material'
import DownloadApp from '../../pages/common/downloadapp/downloadApp'
import { styled } from '@mui/material/styles';

const TextFields = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#067FC0',
            borderRadius: '10px'
        },
        '&:hover fieldset': {
            borderColor: '#067FC0',
            borderRadius: '10px'
        },
        '&.Mui-focused fieldset': {
            borderColor: '#067FC0',
            borderRadius: '10px'
        },
    },
});


const IncomeCalculator = () => {


    return (
        <>
            <div className={classes.mainCard}>
                <div className={classes.uppertext}>
                    Income Calculator
                </div>
                <div className={classes.uppertext1}>
                    Change  the number of transactions to calculate earnings.
                </div>
                <div className={classes.rightSide}>
                    <div className={classes.mainImage}>
                        <img src={container} className={classes.bImage} />
                        {/* <img src={Calcy} className={classes.mImage} /> */}
                        <div className={classes.imagetext}>
                            <div className={classes.imagetext1}> Income Per Day
                                <div className={classes.imagetext2}>  ₹ 446</div>
                            </div>
                            <div className={classes.imagetext3}> X </div>
                            <div className={classes.imagetext4}> Number of Days
                                <div className={classes.imagetext5}> 30</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.totalIncome}>
                        <h3>Total Income</h3>
                        <div className={classes.rupees}>
                            <img src={RS} />
                            <h2>13,389 / Month</h2>
                        </div>
                        <button className={classes.joinOcean}>Join Oceanpay</button>
                    </div>

                </div>

                <div className={classes.cardRow}>
                    <div className={classes.card}>
                        <div className={classes.mainHeader}>
                            <div className={classes.header}>Banking Services</div>
                            <div className={classes.header}> No. of Daily Transactions</div>
                            <div className={classes.header}>Income (₹) </div>
                        </div>
                        <div className={classes.mainHeaderOne}>
                            <div className={classes.headerdata}>
                                <div className={classes.firstColumn}>Money Transfer</div>
                                <div className={classes.firstColumnone}>Avg transaction of ₹4500</div>
                            </div>
                            <div className={classes.headerfield}>
                                <TextFields id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={classes.headerprice}>₹22</div>
                        </div>
                        <Divider />
                        <div className={classes.mainHeaderOne}>
                            <div className={classes.headerdata}>
                                <div className={classes.firstColumn}>Aadhaar ATM - AePS</div>
                                <div className={classes.firstColumnone}>Avg transaction of ₹3500</div>
                            </div>
                            <div className={classes.headerfield}>
                                <TextFields id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={classes.headerprice}>₹7</div>
                        </div>
                        <Divider />
                        <div className={classes.mainHeaderOne}>
                            <div className={classes.headerdata}>
                                <div className={classes.firstColumn}>Micro ATM</div>
                                <div className={classes.firstColumnone}>Avg transaction of ₹3500</div>
                            </div>
                            <div className={classes.headerfield}>
                                <TextFields id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={classes.headerprice}>₹7</div>
                        </div>
                        <Divider />

                        <div className={classes.mainHeaderOne}>
                            <div className={classes.headerdata}>
                                <div className={classes.firstColumn}>Mini Statement</div>
                                <div className={classes.firstColumnone}>NA</div>
                            </div>
                            <div className={classes.headerfield}>
                                <TextFields id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={classes.headerprice}>₹1</div>
                        </div>


                    </div>




                    {/* <CalculatorCard /> */}
                </div>
                <div className={classes.cardRow}>


                    <div className={classes.card}>
                        <div className={classes.mainHeader}>
                            <div className={classes.header}>Utility Services</div>
                            <div className={classes.header}> No. of Daily Transactions</div>
                            <div className={classes.header}>Income (₹) </div>
                        </div>
                        <div className={classes.mainHeaderOne}>
                            <div className={classes.headerdata}>
                                <div className={classes.firstColumn}>Mobile Recharge</div>
                                <div className={classes.firstColumnone}>Avg transaction of ₹140</div>
                            </div>
                            <div className={classes.headerfield}>
                                <TextFields id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={classes.headerprice}>₹2.45</div>
                        </div>
                        <Divider />
                        <div className={classes.mainHeaderOne}>
                            <div className={classes.headerdata}>
                                <div className={classes.firstColumn}>DTH Recharge</div>
                                <div className={classes.firstColumnone}>Avg transaction of ₹250</div>
                            </div>
                            <div className={classes.headerfield}>
                                <TextFields id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={classes.headerprice}>₹5</div>
                        </div>
                        <Divider />
                        <div className={classes.mainHeaderOne}>
                            <div className={classes.headerdata}>
                                <div className={classes.firstColumn}>Electricity BP</div>
                                <div className={classes.firstColumnone}>Avg transaction of ₹700</div>
                            </div>
                            <div className={classes.headerfield}>
                                <TextFields id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={classes.headerprice}>₹0.25</div>
                        </div>
                        <Divider />

                        <div className={classes.mainHeaderOne}>
                            <div className={classes.headerdata}>
                                <div className={classes.firstColumn}>Gas BP</div>
                                <div className={classes.firstColumnone}>Avg transaction of ₹800</div>
                            </div>
                            <div className={classes.headerfield}>
                                <TextFields id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={classes.headerprice}>₹0.25</div>
                        </div>
                        <Divider />


                        <div className={classes.mainHeaderOne}>
                            <div className={classes.headerdata}>
                                <div className={classes.firstColumn}>Water BP</div>
                                <div className={classes.firstColumnone}>Avg transaction of ₹280</div>
                            </div>
                            <div className={classes.headerfield}>
                                <TextFields id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={classes.headerprice}>₹0.25</div>
                        </div>
                        <Divider />

                        <div className={classes.mainHeaderOne}>
                            <div className={classes.headerdata}>
                                <div className={classes.firstColumn}>Credit Card BP</div>
                                <div className={classes.firstColumnone}>Avg transaction of ₹5000</div>
                            </div>
                            <div className={classes.headerfield}>
                                <TextFields id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={classes.headerprice}>₹25</div>
                        </div>
                        <Divider />


                        <div className={classes.mainHeaderOne}>
                            <div className={classes.headerdata}>
                                <div className={classes.firstColumn}>Postpaid</div>
                                <div className={classes.firstColumnone}>Avg transaction of ₹600</div>
                            </div>
                            <div className={classes.headerfield}>
                                <TextFields id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={classes.headerprice}>₹0.50</div>
                        </div>
                        <Divider />


                        <div className={classes.mainHeaderOne}>
                            <div className={classes.headerdata}>
                                <div className={classes.firstColumn}>Fastag Recharge</div>
                                <div className={classes.firstColumnone}>Avg transaction of ₹800</div>
                            </div>
                            <div className={classes.headerfield}>
                                <TextFields id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={classes.headerprice}>₹0.80</div>
                        </div>

                    </div>



                    {/* <CalculatorCard /> */}
                </div>
                <div className={classes.cardRow}>


                    <div className={classes.card}>
                        <div className={classes.mainHeader}>
                            <div className={classes.header}>Insurance</div>
                            <div className={classes.header}> No. of Daily Transactions</div>
                            <div className={classes.header}>Income (₹) </div>
                        </div>
                        <div className={classes.mainHeaderOne}>
                            <div className={classes.headerdata}>
                                <div className={classes.firstColumn}>Bike Insurance</div>
                                <div className={classes.firstColumnone}>Avg transaction of ₹1682</div>
                            </div>
                            <div className={classes.headerfield}>
                                <TextFields id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={classes.headerprice}>₹100</div>
                        </div>


                    </div>


                    {/* <CalculatorCard /> */}
                </div>
                <div className={classes.cardRow}>

                    <div className={classes.card}>
                        <div className={classes.mainHeader}>
                            <div className={classes.header}>Travel</div>
                            <div className={classes.header}> No. of Daily Transactions</div>
                            <div className={classes.header}>Income (₹) </div>
                        </div>
                        <div className={classes.mainHeaderOne}>
                            <div className={classes.headerdata}>
                                <div className={classes.firstColumn}>Domestic Flight Ticket</div>
                                <div className={classes.firstColumnone}>Avg transaction of ₹3500</div>
                            </div>
                            <div className={classes.headerfield}>
                                <TextFields id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={classes.headerprice}>₹42</div>
                        </div>
                        <Divider />
                        <div className={classes.mainHeaderOne}>
                            <div className={classes.headerdata}>
                                <div className={classes.firstColumn}>Rail AC</div>
                                <div className={classes.firstColumnone}>Avg transaction of ₹1500</div>
                            </div>
                            <div className={classes.headerfield}>
                                <TextFields id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={classes.headerprice}>₹40</div>
                        </div>
                        <Divider />
                        <div className={classes.mainHeaderOne}>
                            <div className={classes.headerdata}>
                                <div className={classes.firstColumn}>Rail Non AC</div>
                                <div className={classes.firstColumnone}>Avg transaction of ₹750</div>
                            </div>
                            <div className={classes.headerfield}>
                                <TextFields id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={classes.headerprice}>₹20</div>
                        </div>


                    </div>



                    {/* <CalculatorCard /> */}
                </div>
                <div className={classes.cardRow}>


                    <div className={classes.card}>
                        <div className={classes.mainHeader}>
                            <div className={classes.header}>Cash Collection (Agent , Group & Customer Collection from 60+ partners) </div>
                            <div className={classes.header}> No. of Daily Transactions</div>
                            <div className={classes.header}>Income (₹) </div>
                        </div>
                        <div className={classes.mainHeaderOne}>
                            <div className={classes.headerdata}>
                                <div className={classes.firstColumn}>Agent Collection</div>
                                <div className={classes.firstColumnone}>Avg transaction of ₹50000</div>
                            </div>
                            <div className={classes.headerfield}>
                                <TextFields id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={classes.headerprice}>₹65</div>
                        </div>
                        <Divider />
                        <div className={classes.mainHeaderOne}>
                            <div className={classes.headerdata}>
                                <div className={classes.firstColumn}>Group Collection</div>
                                <div className={classes.firstColumnone}>Avg transaction of ₹25000</div>
                            </div>
                            <div className={classes.headerfield}>
                                <TextFields id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={classes.headerprice}>₹32.50</div>
                        </div>
                        <Divider />
                        <div className={classes.mainHeaderOne}>
                            <div className={classes.headerdata}>
                                <div className={classes.firstColumn}>Customer Collection</div>
                                <div className={classes.firstColumnone}>Avg transaction of ₹4000</div>
                            </div>
                            <div className={classes.headerfield}>
                                <TextFields id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={classes.headerprice}>₹3</div>
                        </div>

                    </div>

                    {/* <CalculatorCard /> */}
                </div>

                <div className={classes.cardRow}>


                    <div className={classes.card}>
                        <div className={classes.mainHeader}>
                            <div className={classes.header}> Earn More </div>
                            <div className={classes.header}> No. of Daily Transactions</div>
                            <div className={classes.header}>Income (₹) </div>
                        </div>
                        <div className={classes.mainHeaderOne}>
                            <div className={classes.headerdata}>
                                <div className={classes.firstColumn}>Amazon Easy Store</div>
                                <div className={classes.firstColumnone}>Avg transaction of ₹500</div>
                            </div>
                            <div className={classes.headerfield}>
                                <TextFields id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={classes.headerprice}>₹48</div>
                        </div>
                        <Divider />
                        <div className={classes.mainHeaderOne}>
                            <div className={classes.headerdata}>
                                <div className={classes.firstColumn}>PAN Card</div>
                                <div className={classes.firstColumnone}>Avg transaction of ₹72</div>
                            </div>
                            <div className={classes.headerfield}>
                                <TextFields id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={classes.headerprice}>₹2</div>
                        </div>
                        <Divider />
                        <div className={classes.mainHeaderOne}>
                            <div className={classes.headerdata}>
                                <div className={classes.firstColumn}>Gift Cards</div>
                                <div className={classes.firstColumnone}>Avg transaction of ₹500</div>
                            </div>
                            <div className={classes.headerfield}>
                                <TextFields id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={classes.headerprice}>₹15</div>
                        </div>
                        <Divider />
                        <div className={classes.mainHeaderOne}>
                            <div className={classes.headerdata}>
                                <div className={classes.firstColumn}>Entertainment subscription (Zee5)</div>
                                <div className={classes.firstColumnone}>Avg transaction of ₹99</div>
                            </div>
                            <div className={classes.headerfield}>
                                <TextFields id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={classes.headerprice}>₹7</div>
                        </div>

                    </div>

                    {/* <CalculatorCard /> */}
                </div>



            </div>
            <DownloadApp />
        </>
    )
}

export default IncomeCalculator
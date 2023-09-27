import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import classes from '../Services/DMT.module.css'
import GROUP from '../../images/Group.png'

const DMT = () => {


  return (
    <div>
      <div className={classes.main1}>
        <div className={classes.heading1}>
          Domestic Money Transfer(DMT)
        </div>
        <div className={classes.mainDiv}>
          <div className={classes.txt}>
            <div className={classes.text1}>
              The way people and businesses exchange money has been completely transformed by direct money transmission, sometimes referred to as peer-to-peer (P2P) money transfer. By doing away with real cash and conventional middlemen, this novel approach enables smooth and quick transactions.
            </div>
            <div className={classes.textRow}>
              <div className={classes.number}>
                1.
              </div>
              <div className={classes.text1}>
                <b>Expanding Financial Access :</b> By bridging the gap between conventional banking services and distant areas, micro ATMs have emerged as a paradigm-shifting option in the field of financial inclusion. In places where there are few or no physical bank branches, these lightweight, adaptable gadgets serve as digital touchpoints and enable necessary financial transactions.
              </div>
            </div>

            <div className={classes.textRow}>
              <div className={classes.number}>
                2.
              </div>
              <div className={classes.text1}>
                <b>Banking at Your Doorstep: </b>Micro ATMs bring banking services directly to communities that have long been underserved. Equipped with biometric authentication and integrated with the Aadhaar database, these devices enable residents to conduct transactions such as cash withdrawals, balance inquiries, fund transfers, and even mobile recharges. For many individuals, this represents their first taste of formal banking services, fostering financial empowerment and literacy.
              </div>
            </div>

            <div className={classes.textRow}>
              <div className={classes.number}>
                3.
              </div>
              <div className={classes.text1}>
                <b>Digital Security and Convenience: </b>Micro ATMs deliver financial services to previously underserved communities. These devices give users access to the Aadhaar database and biometric authentication, allowing them to undertake operations including cash withdrawals, balance checks, fund transfers, and even mobile recharges. Many people get their first experience of official banking services using this, which promotes financial empowerment and literacy.
              </div>
            </div>


          </div>


          <div className={classes.DMTimage}>

            <img src={GROUP} alt='UPI' />

            <div className={classes.imgMoon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="47" height="71" viewBox="0 0 47 71" fill="none">
                <path d="M41.8653 38.2255C43.9167 20.4767 32.4658 5.31887 16.3406 4.43481L14.676 18.8371C23.587 19.3257 29.9141 27.7017 28.7805 37.5093C27.6471 47.3157 19.4757 54.8968 10.5646 54.4083L8.90003 68.8106C25.0265 69.6935 39.8139 55.9743 41.8653 38.2255Z" fill="#187A91" fill-opacity="0.5" />
                <path d="M31.4229 30.2903C33.2321 14.6445 23.1386 1.28101 8.9231 0.501221L8.13939 7.27865C18.9601 7.87222 26.6421 18.0444 25.2651 29.9525C23.8881 41.8607 13.9642 51.067 3.1446 50.4735L2.36091 57.2509C16.5775 58.0307 29.6137 45.9361 31.4229 30.2903Z" fill="#005E9E" />
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

export default DMT;

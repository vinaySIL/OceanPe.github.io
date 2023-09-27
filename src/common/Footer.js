import React from 'react'
import classes from './common.module.css'
import OceanPay from '../images/oceanpaynontransparent.jpg'
import GooglePlay from '../images/PlayStore.jpg'
import AppStore from '../images/AppleStore.jpg'


const Footer = () => {
  return (
    <div className={classes.main}>
      <div className={classes.footer}>
        <div className={classes.leftfooter}>
            <div>
              <img src={OceanPay} alt="logo" className={classes.logo} />
            </div>
            <div>OceanPe, our trusted partner in the world of digital financial services.</div>
        </div>
        <div className={classes.sweep}>
            <div className={classes.sweesh}>
                <div>Services</div>
                <div><a href='#'>Payment</a></div>
                <div><a href='#'>Banking</a></div>
                <div><a href='#'>Loan</a></div>
                <div><a href='#'>UPI</a></div>
            </div>
            <div className={classes.sweesh}>
                <div>Devices</div>
                <div><a href='/microatm'>Micro ATM</a></div>
                <div><a href='/pos'>POS</a></div>
                <div><a href='/soundbox'>Sound Box</a></div>
            </div>
            <div className={classes.sweesh}>
                <div>Become a Distrubutor</div>
                <div><a href='#'>Unlimited Retail Creation</a></div>
                <div><a href='#'>Life Time Earning</a></div>
                <div><a href='#'>All Services Training</a></div>
                <div><a href='#'>24*7 Support</a></div>
            </div>
            <div className={classes.storesparent}>
                <div className={classes.downloadApp}>Download Our Application</div>
                <div className={classes.stores}>
                    <div><a href='#'><img src={GooglePlay} alt="google" className={classes.logo} /></a></div>
                    <div><a href='#'><img src={AppStore} alt="app" className={classes.logo}  /></a></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

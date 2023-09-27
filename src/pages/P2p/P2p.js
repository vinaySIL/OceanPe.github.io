import React from 'react'
import classes from './P2p.module.css'
import p2p from '../../assets/p2p.png'

const P2p = () => {
  return (
   <>
    <div className={classes.page}>
        <div className={classes.content}>

            
            <div className={classes.uppercontainer}>
                <div className={classes.uppertext}>
            <div className={classes.text1}>
            Person 2 Person (P2P)
            </div>
            <div className={classes.text2}>
            The Unified Payments Interface (UPI) is a game-changing financial service in India that has revolutionized Person-to-Person (P2P) money transfers. It offers a seamless and instant way for individuals to send and receive money directly from their bank accounts. 






            </div>
            <div className={classes.text2}>
            UPI has simplified the entire process of P2P payments, making it incredibly convenient and accessible to everyone. With UPI, you no longer need to share intricate bank account details or wait for traditional fund transfers to clear. Instead, you can use a UPI-supported mobile app or platform to initiate transactions. All you need is the recipient's UPI ID or mobile number. Alternatively, you can scan a QR code linked to their UPI account, making the transfer process even more effortless.

            </div>
            <div className={classes.text2}>
            One of the standout features of UPI is its real-time transaction processing. Payments occur instantly, allowing for quick settlements and reducing the reliance on cash transactions. This not only enhances convenience but also contributes to a more secure and transparent financial ecosystem.

            </div>
        
            </div>
          <div className={classes.photo}>
          <img src={p2p} alt='UPI' className={classes.imgupi} />
          </div>
          <div className={classes.photoheader}>
            Person 2 Person (P2P)
            </div>
          </div>

          <div className={classes.text3}>
          Moreover, UPI has played a pivotal role in advancing financial inclusion. Its accessibility and ease of use have made digital financial services available to a broad spectrum of the population, even those in remote areas. It has significantly reduced the dependency on cash transactions, aligning with India's push for a cashless economy.



	
            </div>

            <div className={classes.text3}>

            Whether it's splitting bills with friends, sending money to family members, or settling dues, UPI has made P2P payments a seamless experience in India. Its impact goes beyond just convenience; it symbolizes the nation's transition towards a digital and financially inclusive future, where individuals can manage their financial affairs effortlessly and securely.
            </div>
         
           
        </div>
        <div className={classes.topicon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="101" height="99" viewBox="0 0 101 99" fill="none">
  <g opacity="0.2">
    <path d="M53.5516 56.0566L57.7791 52.1911L55.8417 50.4197C55.1014 49.7428 54.3204 49.1237 53.5067 48.5625C49.0651 42.6216 49.7238 34.4264 55.4869 29.1568C61.9943 23.2066 72.5865 23.2047 79.0939 29.1568L82.9686 25.6139C74.324 17.7095 60.2569 17.7095 51.6122 25.6139C45.8287 30.9021 43.9138 38.4112 45.8695 45.1688C38.479 43.3805 30.2667 45.1296 24.4832 50.4197C15.8386 58.3241 15.8386 71.1866 24.4832 79.091L28.3579 75.5481C21.8484 69.5961 21.8505 59.9128 28.3579 53.9626C34.121 48.693 43.0838 48.0907 49.579 52.152C50.1949 52.896 50.8699 53.6102 51.6102 54.287L53.5516 56.0566Z" fill="#005E9E"/>
  </g>
</svg>
        </div>
        
    
    </div>
   </>
  )
}

export default P2p
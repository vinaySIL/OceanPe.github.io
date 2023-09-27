import React from 'react'
import classes from './P2m.module.css'
import p2m from '../../assets/p2m.png'

const P2m = () => {
  return (
   <>
    <div className={classes.page}>
        <div className={classes.content}>

            
            <div className={classes.uppercontainer}>
                <div className={classes.uppertext}>
            <div className={classes.text1}>
            Person 2 Merchant (P2M)
            </div>
            <div className={classes.text2}>
            The Unified Payments Interface (UPI) has not only revolutionized Person-to-Person (P2P) transactions but has also transformed Person-to-Merchant (P2M) payments in India. UPI is a digital payment system that enables individuals to make payments to merchants swiftly and securely through their bank accounts, using UPI-supported mobile apps or platforms.






            </div>
            <div className={classes.text2}>
            Paying merchants through UPI is an efficient and convenient process. It eliminates the need for cash transactions, making it safer and more hygienic, especially in the context of the COVID-19 pandemic. To make a payment, a customer only needs to scan the merchant's UPI QR code or enter their UPI ID, which is often a simple and recognizable name associated with the business. This reduces errors and ensures that payments reach the intended recipients.

            </div>
            <div className={classes.text2}>
            The real-time nature of UPI payments is a significant advantage for both customers and merchants. Transactions occur instantly, providing immediate confirmation of payment. For merchants, this means they can efficiently manage their cash flows and inventory without worrying about delayed settlements.


            </div>
        
            </div>
          <div className={classes.photo}>
          <img src={p2m} alt='UPI' className={classes.imgupi} />
          </div>

          <div className={classes.photoheader}>
            Person 2 Merchant (P2M)
            </div>
          </div>

          <div className={classes.text3}>
          UPI also supports a wide range of use cases, including payments at physical retail stores, online shopping, utility bill payments, and even payments to small businesses and street vendors. This versatility has made it a popular choice among businesses of all sizes, from large retailers to local shops and street vendors.


	
            </div>

            <div className={classes.text3}>

            
Overall, UPI has become the backbone of digital payments in India, offering a secure, efficient, and inclusive way for individuals to make payments to merchants, fostering financial inclusion, and reducing the reliance on cash transactions. It has transformed the payments landscape, making financial transactions more accessible and convenient for both consumers and businesses.

            </div>
         
           
        </div>
        <div className={classes.topicon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="83" height="87" viewBox="0 0 83 87" fill="none">
  <g opacity="0.2">
    <path d="M5.11625e-06 68.9143L19.4714 2.00894e-05L72.3968 52.1609L5.11625e-06 68.9143Z" fill="#14B2F6"/>
  </g>
</svg>
        </div>
        
      
    </div>
   </>
  )
}

export default P2m
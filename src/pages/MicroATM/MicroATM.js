import React from 'react'
import classes from './MicroATM.module.css'
import microATM from '../../assets/microATM.png'

const MicroATM = () => {
  return (
    <>
      <div className={classes.page}>
        <div className={classes.content}>


          <div className={classes.uppercontainer}>
            <div className={classes.uppertext}>
              <div className={classes.text1}>
                Micro ATM
              </div>
              <div className={classes.text2}>
                Frequently, we are unable to locate a local ATM when we need to make a payment and are low on cash. To solve this issue, OceanPe provides you with a cash withdrawal option through its assortment of retail locations. The MICRO ATM Device from OceanPe makes it very convenient to do everything from paying for the goods or services you buy to withdrawing cash from a retail location. By using any bank's Debit/ATM card, you can withdraw money from this gadget. Card acceptance at the customer's doorstep is also possible with the help of this ultraportable equipment. Retailers only need to purchase OcenPe's MICRO ATM Device in order to begin processing transactions.
              </div>
              <div className={classes.text3}>
                Here are the key features and functions of a Micro ATM:
              </div>
              <div className={classes.text4}>
                <b> 1.Basic Banking Transactions:</b> Users of micro ATMs can carry out common banking operations like cash withdrawals, balance checks,
                funds transfers, and more.
              </div>
              <div className={classes.text4}>

                <b>2.Biometric Authentication:</b> Micro ATMs frequently use biometric identification techniques, including fingerprint or iris scans,
                to confirm users' identities. Security is maintained, and fewer physical identification documents are required as a result.
              </div>
              <div className={classes.text4}>
                <b>3.Aadhaar Integration:</b> Micro ATMs frequently use biometric identification techniques, including fingerprint or iris scans,
                to confirm users' identities. Security is maintained, and fewer physical identification documents are required as a result.
              </div>
            </div>
            
            <div className={classes.photo}>
              <img src={microATM} alt='UPI' className={classes.imgupi} />
            </div>
            <div className={classes.photoheader}>
              Micro ATM
            </div>
          </div>

          <div className={classes.text7}>
            <b>4.Card and Cardless Transactions: </b>

            Micro ATMs commonly verify users' identities using biometric authentication methods like fingerprint or
            iris scans. Less physical identification documents are needed as a result, and security is maintained..
          </div>

          <div className={classes.text7}>
            <b>5.Mobile Connectivity: </b>For micro ATMs to execute transactions and connect with the bank's servers, mobile connectivity, such as GPRS or 3G/4G,
            is necessary..
          </div>
          <div className={classes.text7}>
            <b>6.Business Correspondents:</b>
            Business correspondents are people or organizations that banks have given permission to offer banking services in
            places where there isn't much of an infrastructure for it. This is relevant to micro ATMs. Customers' transactions are facilitated via micro ATMs.
          </div>
          <div className={classes.text7}>
            <b>7.Receipts and Confirmations:</b>
            A micro ATM normally gives the user a receipt or confirmation explaining the transaction's specifics after the
            transaction is finished. Cash handling: Although micro ATMs can dispense cash, they may need to be refilled with real money by a bank staff..
          </div>

        </div>
        <div className={classes.topicon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path opacity="0.2" d="M32.7922 6.4837L35.2413 0.0165644L29.7094 4.16632C23.1592 9.07753 14.7025 10.4118 7.19856 7.72145L0.859965 5.44702L4.80618 10.904C9.47574 17.3648 10.5439 25.8592 7.64626 33.5162L5.19712 39.9834L10.729 35.8336C17.2792 30.9224 25.736 29.5881 33.2399 32.2784L39.5785 34.5529L35.6323 29.0959C30.9627 22.6351 29.8945 14.1407 32.7922 6.4837Z" fill="#005E9E" />
          </svg>
        </div>

        <div className={classes.bottomicon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="83" height="87" viewBox="0 0 83 87" fill="none">
            <g opacity="0.2">
              <path d="M0.867681 69.2098L20.3391 0.295537L73.2645 52.4564L0.867681 69.2098Z" fill="#14B2F6" />
            </g>
          </svg>
        </div>
      </div>
    </>
  )
}

export default MicroATM
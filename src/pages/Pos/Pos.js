import React from 'react'
import classes from './Pos.module.css'
import pos from '../../assets/pos.png'

const Pos = () => {
  return (
   <>
   <div className={classes.mainpage}>
    <div className={classes.content}>
      <div className={classes.text}>
<div className={classes.text1}>
POS- Point of Sale
</div>
<div className={classes.text2}>
A point of sale (POS) is the crucial junction where transactions take place, including the exchange of goods or services in exchange for money. This encounter might happen digitally on digital platforms for online purchases or physically at the checkout counter of a real retail store. POS systems have become essential tools across many industries, especially in companies that handle client transactions. These systems include a combination of hardware and software elements that work together to orchestrate a smooth transactional experience. Inventory management is one of the core features offered by POS systems, enabling firms to keep track of stock levels in real-time and streamline restocking procedures. A wide variety of payment methods, including credit cards, debit cards, mobile payments, and conventional cash transactions, are also processed by POS systems.


</div>
<div className={classes.text22}>
The mutually beneficial integration of these elements results in the production of receipts, which serve as proof of the completed transaction, and also produces thorough sales reports that give firms useful information for making educated decisions. Additionally, POS systems can act as databases for customer information, including purchase histories and involvement in loyalty programs, enabling targeted marketing campaigns that appeal to specific consumer preferences.
</div>
      </div>
      <div className={classes.photoimage}>
        <img src={pos} alt='pos' />

      </div>
      <div className={classes.photoheader}>
POS- Point of Sale

      </div>

<div className={classes.topiconimage}>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path opacity="0.2" d="M32.7922 6.4837L35.2413 0.0165644L29.7094 4.16632C23.1592 9.07753 14.7025 10.4118 7.19856 7.72145L0.859965 5.44702L4.80618 10.904C9.47574 17.3648 10.5439 25.8592 7.64626 33.5162L5.19712 39.9834L10.729 35.8336C17.2792 30.9224 25.736 29.5881 33.2399 32.2784L39.5785 34.5529L35.6323 29.0959C30.9627 22.6351 29.8945 14.1407 32.7922 6.4837Z" fill="#005E9E"/>
</svg>

</div>
<div className={classes.bottomiconimage}>
<svg xmlns="http://www.w3.org/2000/svg" width="83" height="87" viewBox="0 0 83 87" fill="none">
  <g opacity="0.2">
    <path d="M5.11625e-06 68.9142L19.4714 4.83059e-06L72.3968 52.1609L5.11625e-06 68.9142Z" fill="#14B2F6"/>
  </g>
</svg>
</div>
    </div>
   </div>
   
   
   
   
   </>
  )
}

export default Pos
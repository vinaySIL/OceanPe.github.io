import React from 'react'
import classes from './SoundBox.module.css'
import soundbox from '../../assets/soundbox.png'

const SoundBox = () => {
  return (
   <>
    <div className={classes.page}>
        <div className={classes.content}>

            
            <div className={classes.uppercontainer}>
                <div className={classes.uppertext}>
            <div className={classes.text1}>
            Sound Box
            </div>
            <div className={classes.text11}>
            Sound Box for Payment Alerts
            </div>
            <div className={classes.text22}>
           
Payment alerts are no longer just visual messages thanks to our sound box. Each transaction has a distinct sound that draws your attention without interfering with your workflow, whether it's a successful purchase, an incoming payment, or a fund transfer. Your financial interactions gain a sense of immediacy because of this audio dimension, which enables you to stay informed even while your eyes are occupied with other activities.
            </div>

            <div className={classes.text2}>
           <b>1. Personalized Sound Profiles:</b> Our sound box lets you create unique sound profiles for various types of payment alerts, just like you may select different ringtones for individual contacts on your phone. Give each type of payment, including bills, internet purchases, and salary deposits, a separate sound. This customization guarantees that you can easily distinguish between various warnings, boosting your general financial awareness.

            </div>
            <div className={classes.text2}>
           
<b>2.Seamless Integration:</b> Our sound box easily interacts with your current online banking and payment systems. It's made to synchronize with your devices using Bluetooth or Wi-Fi, making setup simple. The sound box offers a dynamic and interesting method to be informed about your financial actions once it is connected and synchronized with your payment alerts.

            </div>

            <div className={classes.text2}>

<b>3.Enhanced Accessibility:</b> Our sound box isn't just about convenience; it's also about accessibility. For individuals with visual impairments or those who prefer auditory cues, our solution bridges the gap between technology and inclusivity. By offering both visual and auditory alerts, we empower users to choose the notification method that best suits their needs.
            </div>
        
            </div>
          <div className={classes.photo}>
          <img src={soundbox} alt='UPI' className={classes.imgupi} />
          </div>
          <div className={classes.photoheader}>
            Sound Box
            </div>
          </div>

          <div className={classes.text3}>
        
<b>4. Elevate Your Financial Experience:</b> In addition to being practical, our sound box is also easily accessible. Our approach bridges the gap between technology and inclusivity for people with visual impairments or those who prefer audio signals. We provide people the power to select the notification type that best meets their needs by providing both visual and aural notifications.

	
            </div>

            <div className={classes.text33}>

   
Our sound box reimagines how you interact with your financial transactions in a world where digital interactions rule. Experience the payment notifications of the future, where sound improves attentiveness and adds a fun new layer of engagement to your daily financial activities.
            </div>
         
           
        </div>
        <div className={classes.topicon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="101" height="99" viewBox="0 0 101 99" fill="none">
  <g opacity="0.2">
    <path d="M53.5517 56.0566L57.7792 52.1911L55.8418 50.4196C55.1016 49.7428 54.3205 49.1237 53.5069 48.5624C49.0652 42.6216 49.724 34.4263 55.487 29.1567C61.9945 23.2065 72.5867 23.2047 79.0941 29.1567L82.9688 25.6138C74.3241 17.7095 60.257 17.7095 51.6124 25.6138C45.8289 30.9021 43.9139 38.4111 45.8696 45.1687C38.4792 43.3805 30.2669 45.1295 24.4834 50.4196C15.8387 58.324 15.8387 71.1866 24.4834 79.0909L28.3581 75.548C21.8486 69.596 21.8506 59.9127 28.3581 53.9625C34.1212 48.6929 43.0839 48.0907 49.5792 52.1519C50.195 52.8959 50.87 53.6101 51.6103 54.287L53.5517 56.0566Z" fill="#005E9E"/>
  </g>
</svg>
        </div>
        
      
    </div>
   </>
  )
}

export default SoundBox
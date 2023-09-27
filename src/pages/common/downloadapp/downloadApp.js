import classes from "./downloadApp.module.css"
import GooglePlay from '../../../images/PlayStore.jpg'
import AppStore from '../../../images/AppleStore.jpg'
import ManLogo from '../../../assets/images/home/manlogo.png'
import SmallLogo from '../../../assets/images/home/smalllogo.svg'

const DownloadApp = () => {
  return (
   <div className={classes.downloadMain}>
    <div className={classes.download}>
      <div className={classes.leftSide}>
      <div className={classes.downloadDiv}>
      <img src={ManLogo} alt="app" className={classes.manLogo} />
      <img src={SmallLogo} alt="app" className={classes.smallLogo} />
      </div>
        <h2>Download Our Application</h2>
        <p>Downloading an application can vary depending on the platform.</p>
        <div className={classes.logoImage}><img src={GooglePlay} alt="google" className={classes.logo} />
        <img src={AppStore} alt="app" className={classes.logo} /></div>
      </div>
      
    </div>
   </div>
    
  )
}

export default DownloadApp
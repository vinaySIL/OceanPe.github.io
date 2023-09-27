import React from 'react'
import classes from './Home.module.css'
import LandingPage from '../../images/landing-page.png';
import { Button, styled } from '@mui/material'
import PiggyBank from '../../images/piggy-bank.png'
import People6 from '../../images/customers6.svg'
import People5 from '../../images/people5.svg'
import People3 from '../../images/people3.svg'
import Upi from '../../images/upi-logo.png'
import Bharat from '../../images/Bharat_billpay.png'
import Npci from '../../images/npci-logo.png'
import One from '../../images/onenumber.png'
import Two from '../../images/twonumber.png'
import Three from '../../images/number3.png'
import Four from '../../images/number4.png'
import Five from '../../images/number5.png'
import Six from '../../images/number6.png'
import CommonCard from './commonHomeCard';
import { commonList } from './commonHomeList'
import ServiceCard from './serviceCard'
import { serviceCardList } from './serviceCardList'
import CURVETOP from "../../images/curvetop.svg";
import CURVEBOTTOM from "../../images/curvebottom.svg";
import DownloadApp from '../common/downloadapp/downloadApp';
import { useNavigate } from 'react-router';




const Home = () => {
  const navigate = useNavigate()
    const handleNavigate = (route) => {
        navigate(route)
    }
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    // backgroundColor: "#F84B67",
    backgroundColor: "#005E9E",
    border: "1px solid #CCC",
    borderRadius: "4px",
    padding: "0px 24px",
    height: "50px",
    "&:hover": {
        background: "#808080",
        color: "white",
    },
}));
  return (
    <div>
      <div  className={classes.maincont}>
        <div className={classes.maintext}>
        <div className={classes.bigfont}>Make your life Easy with OceanPe</div>
        <div className={classes.smallfont}>We envision a future where financial services are accessible to everyone.</div>
        <ColorButton>Get Started</ColorButton>
        </div>
        <div className={classes.mainimg}>
          <img src={LandingPage} style={{width:"100%" , height:"100%"}} alt="LandingPage" />
        </div>
      </div>
      <div className={classes.abovecard}>
        {/* <img src={CURVETOP} alt="CURVETOP" className={classes.curvetop} /> */}
        <div className={classes.cardscommmon}>
      {
        commonList?.map((card, i) => {
          return <CommonCard key={i} card={card} />
        })
      }</div>
      </div>
      <div className={classes.ourservices}>
      {/* <img src={CURVEBOTTOM} alt="CURVEBOTTOM" className={classes.curvebottom} /> */}
        <div className={classes.servicesbig}>Services</div>
        <div className={classes.servicessmall}>To meet your various financial demands, we provide a wide range of digital financial services. With the help of our intuitive platform, you can easily manage your money, conduct transactions, and reach your financial objectives.</div>
        <div className={classes.servicescard}>
      {
        serviceCardList?.map((card, i) => {
          return <ServiceCard key={i} card={card} />
        })
      }</div>
      
      </div>
      <div className={classes.aboutus}>
          <div className={classes.aboutcont}>
              <div className={classes.leftabout}>
                  <div className={classes.bigtextabout}>About Us</div>
                  <div className={classes.smalltextabout}>Welcome to Ocean Pe, our dependable business partner in the realm of online finance. Our goal is to provide organizations and individuals with cutting-edge, frictionless financial solutions that are suitable for the digital era. Welcome to Ocean Pe, our dependable business partner in the realm of online finance. Our goal is to provide organizations and individuals with cutting-edge, frictionless financial solutions that are suitable for the digital era. Welcome to Ocean Pe, our dependable business partner in the realm of online finance. Our goal is to provide organizations and individuals with cutting-edge, frictionless financial solutions that are suitable for the digital era. Welcome to Ocean Pe, our dependable business partner in the realm of online finance. Our goal is to provide businesses and individuals with the</div>
              </div>
              <div className={classes.aboutusimg}><img src={PiggyBank} style={{width: "100%", height:"100%"}} alt="PiggyBank" /></div>
          </div>
      </div>
      <div className={classes.customers}>
        <div className={classes.custbox}>
            <div className={classes.peopleimg}><img src={People6} alt="People6" style={{width: "100%", height:"100%"}}  /></div>
            <div className={classes.valuetext}>50000+</div>
            <div className={classes.customertext}>RETAILERS</div>
        </div>
        <div className={classes.custbox}>
            <div className={classes.peopleimg}><img src={People5} alt="People5" style={{width: "100%", height:"100%"}}  /></div>
            <div className={classes.valuetext}>1500+</div>
            <div className={classes.customertext}>Distributor</div>
        </div>
        <div className={classes.custbox}>
            <div className={classes.peopleimg}><img src={People5} alt="People5" style={{width: "100%", height:"100%"}}  /></div>
            <div className={classes.valuetext}>150+</div>
            <div className={classes.customertext}>RETAILERS</div>
        </div>
        <div className={classes.custbox}>
            <div className={classes.peopleimg}><img src={People3} alt="People3" style={{width: "100%", height:"100%"}}  /></div>
            <div className={classes.valuetext}>10+</div>
            <div className={classes.customertext}>RETAILERS</div>
        </div>
      </div>
      <div className={classes.rbilogo}>
        <div><img src={Bharat} alt="Bharat" style={{width: "100%", height:"100%"}}  /></div>
        <div><img src={Npci} alt="Npci" style={{width: "100%", height:"100%"}}  /></div>
        <div><img src={Upi} alt="Upi" style={{width: "100%", height:"100%"}}  /></div>
      </div>
      <div className={classes.distributor}>
        <div className={classes.mainstext}>Join the Distributorship</div>
        <div className={classes.undertext}>In order to distribute a company's or manufacturer's goods to retailers, customers, or other enterprises, you must first create a commercial relationship with them.</div>
        <div className={classes.undercards}>
            <div className={classes.commonlogs}>
              <div className={classes.leftphotodiv}>
                <div className={classes.numbers}>
                  <img src={One} alt="One" style={{width:"100%" , height:"100%"}}/>
                </div>
              </div>
              <div className={classes.rightcontentdiv}>
                <div className={classes.numbermaintext}>Infinite number of retailers</div>
                <div className={classes.numbersubtext}>The phrase "Infinite number of retailers" refers to a hypothetical possibility.</div>
              </div>
            </div>
            <div className={classes.commonlogs}>
              <div className={classes.leftphotodiv}>
                <div className={classes.numbers}>
                  <img src={Two} alt="Two" style={{width:"100%" , height:"100%"}}/>
                </div>
              </div>
              <div className={classes.rightcontentdiv}>
                <div className={classes.numbermaintext}>lifetime income</div>
                <div className={classes.numbersubtext}>"Lifetime income" refers to the total amount of money a person makes in their whole life.</div>
              </div>
            </div>
            <div className={classes.commonlogs}>
              <div className={classes.leftphotodiv}>
                <div className={classes.numbers}>
                  <img src={Three} alt="Three" style={{width:"100%" , height:"100%"}}/>
                </div>
              </div>
              <div className={classes.rightcontentdiv}>
                <div className={classes.numbermaintext}>Complete training</div>
                <div className={classes.numbersubtext}>"Complete training" could refer to a variety of different training courses.</div>
              </div>
            </div>
            <div className={classes.commonlogs}>
              <div className={classes.leftphotodiv}>
                <div className={classes.numbers}>
                  <img src={Four} alt="Four" style={{width:"100%" , height:"100%"}}/>
                </div>
              </div>
              <div className={classes.rightcontentdiv}>
                <div className={classes.numbermaintext}>24*7 Support</div>
                <div className={classes.numbersubtext}>"24/7 support" denotes a service that is available around-the-clock, seven days a week.</div>
              </div>
            </div>
            <div className={classes.commonlogs}>
              <div className={classes.leftphotodiv}>
                <div className={classes.numbers}>
                  <img src={Five} alt="Five" style={{width:"100%" , height:"100%"}}/>
                </div>
              </div>
              <div className={classes.rightcontentdiv}>
                <div className={classes.numbermaintext}>Attractive Commission</div>
                <div className={classes.numbersubtext}>An "attractive commission" is a commission schedule or compensation.</div>
              </div>
            </div>
            <div className={classes.commonlogs}>
              <div className={classes.leftphotodiv}>
                <div className={classes.numbers}>
                  <img src={Six} alt="Six" style={{width:"100%" , height:"100%"}}/>
                </div>
              </div>
              <div className={classes.rightcontentdiv}>
                <div className={classes.numbermaintext}>Unlimited Retailer creation</div>
                <div className={classes.numbersubtext}>I"unlimited retail creation" refers to a notion or potential.</div>
              </div>
            </div>
        </div>
        <div><ColorButton onClick={()=>handleNavigate("/becomedistributor")}>Become a distrubutor</ColorButton></div>
      </div>
      <DownloadApp/>
    </div>
  )
}

export default Home

import React, { useState } from 'react'
import classes from './common.module.css'
import OceanPay from '../images/OceanPayLogo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button, styled } from '@mui/material'
import '../App.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import dropdown from "../assets/images/drawer.svg";
import close from "../assets/images/close.svg";
import LoginButtonModal from './LoginButtonModal'

const Header = () => {

  const navigate = useNavigate()
  const handleNavigate = (route) => {
    navigate(route)
  }
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


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

  const [openModal, setOpenModal] = useState(false)
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <div className={classes.mainheader}>
        <div className={classes.header}>
          <div><a href='/home'><img src={OceanPay} alt="OceanPayHeader" /></a></div>
          <nav className={classes.navs}>
            <NavLink to={"/home"} >Home</NavLink>
            <NavLink to={'/about'} >About Us</NavLink>
            <NavLink to={"/services"}>Services</NavLink>
            <NavLink to={"/microatm"}>Devices</NavLink>
            <NavLink to={'/no'}>Select a language</NavLink>
            <ColorButton onClick={handleOpen} >Login</ColorButton>
            <ColorButton onClick={() => handleNavigate('/becomedistributor')}>Become a Distributor <ArrowForwardIcon /> </ColorButton>
          </nav>

        </div>
      </div>

      {/* Mobile Div */}

      <div className={classes.mainheaderresp}>
        <header className={classes.mainHeader}>
          <div className={classes.g20}>
            <a href="." className={classes.fpic} style={{ maxWidth: "100%", maxHeight: "100%" }}>
              <img src={OceanPay} alt="logo_image" style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </a>
          </div>
          <div className={classes.rightlogo}>
            {!open ? <img src={dropdown} alt="logo_image" onClick={() => handleDrawerOpen()} style={{ maxWidth: "100%", maxHeight: "100%" }} /> :
              <img src={close} alt="logo_image" onClick={() => handleDrawerClose()} style={{ maxWidth: "100%", maxHeight: "100%" }} />
            }
          </div>
        </header>
        {open ? <div className={classes.navbar}>
          <div className={classes.newdropdowncontent}>
            <NavLink to={"/home"} style={{ textDecoration: "none" }} className={classes.dropdown}>
              <div className={classes.home}>HOME</div>
            </NavLink>
            <NavLink to={'/about'} style={{ textDecoration: "none" }} className={classes.dropdown}>
              <div className={classes.home}>ABOUT US</div>
            </NavLink>
            <NavLink to={"/services"} style={{ textDecoration: "none" }} className={classes.dropdown}>
              <div className={classes.home}>SERVICES</div>
            </NavLink>
            <NavLink to={"/microatm"} style={{ textDecoration: "none" }} className={classes.dropdown}>
              <div className={classes.home}>DEVICES</div>
            </NavLink>
            <a className={classes.dropdown}>
              <div className={classes.dropbtn}>SELECT A LANGUAGE</div>
              <div className={classes.dropdowncontent}>
                <a >English</a>
                <a >Hindi</a>
                <a >Marathi</a>
                <a >Gujarati</a>
              </div>
            </a>
            <NavLink  className={classes.dropdown} onClick={handleOpen}>
            <div className={classes.home}>Login</div>
            </NavLink>
            <NavLink className={classes.dropdown} to={'/becomedistributor'}>
              <div className={classes.home}>Become a Distributor <ArrowForwardIcon /> </div>
            </NavLink>
          </div>
        </div> : null}
        <div />
        
      </div>
      {
          openModal ? <LoginButtonModal open={openModal} handleClose={handleClose} /> : null
        }
    </>
  )
}

export default Header

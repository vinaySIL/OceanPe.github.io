import classes from "./services.module.css";
import { useEffect } from "react";

import MainServicePic from "../../assets/images/servicesPics/MainServicePic.png";
import Aadhar from "../../assets/images/servicesPics/Aadhar.png";
import MoneyTransfer from "../../assets/images/servicesPics/MoneyTransfer.png";
import MiniATM from "../../assets/images/servicesPics/MiniATM.png";

import DigitalPointLoan from "../../assets/images/servicesPics/DigitalPointLoan.png";
import MerchantLoan from "../../assets/images/servicesPics/MerchantLoan.png";
import IndividualLoan from "../../assets/images/servicesPics/IndividualLoan.png";

import P2P from "../../assets/images/servicesPics/P2P.png";
import P2M from "../../assets/images/servicesPics/P2M.png";

import MicroATM from "../../assets/images/servicesPics/MicroATM.png";
import POS from "../../assets/images/servicesPics/POS.png";
import SoundBox from "../../assets/images/servicesPics/SoundBox.png";

import DMT from "../../assets/images/servicesPics/DMT.png";
import AEPS from "../../assets/images/servicesPics/AEPS.png";
import BBPS from "../../assets/images/servicesPics/BBPS.png";
import PrepaidCard from "../../assets/images/servicesPics/PrepaidCard.png";

import LeftArrow from "../../assets/images/servicesPics/LeftArrow.png";
import RightArrow from "../../assets/images/servicesPics/RightArrow.png";

import { Box, Card, CardContent, Grid, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DownloadApp from "../common/downloadapp/downloadApp";

export default function MainServices() {
  const navigate = useNavigate();

  return (
    <Box>
      <Stack className={classes.mainStackServices}>
        <Typography
          color="black"
          fontWeight="bold"
          gutterBottom
          variant="h3"
          component="div"
        >
          Our Services
        </Typography>

        <Typography
          className={classes.paymentServiceSecondGridCardsTypography}
          color="#262626"
          fontWeight="bold"
          gutterBottom
          variant="h7"
          component="div"
        >
          Any and all details about the Services Agreement are part of the
          Services Information.
        </Typography>

        <Box>
          <img
            src={MainServicePic}
            alt="logo"
            className={classes.ourServicesImage}
          />
        </Box>
      </Stack>

      {/* <Grid className={classes.paymentServiceMainBox} item xd={12}> */}
      <Box className={classes.paymentServiceMainBox}>
        <Grid item xs={4} width={286}>
          <Stack spacing={3} padding={2}>
            <Typography
              color="black"
              gutterBottom
              variant="h3"
              component="div"
              fontWeight="bold"
            >
              Payment Service
            </Typography>
            <Typography
              className={classes.paymentServiceSecondGridCardsTypography}
              variant="h7"
              color="text.secondary"
            >
              OceanPe provides seamless acceptance and settlement of payments to
              its customers.. A third-party corporation called a payment service
              provider (PSP) enables companies to accept electronic payments.
            </Typography>
            <Box className={classes.paymentServiceButton}>
              <img alt="leftArrow" src={LeftArrow} />
              <img alt="rightArrow" src={RightArrow} />
            </Box>
          </Stack>
        </Grid>
        <Grid className={classes.paymentServiceSecondGrid} item xs={8}>
          <Card
            className={classes.paymentServiceSecondGridCard}
            sx={{ width: 194 }}
            onClick={() => navigate("/servicedmt")}
          >
            <img
              className={classes.paymentServiceSecondGridCardsDMTPic}
              alt="dmt"
              src={DMT}
            />
            <CardContent>
              <Typography
                className={classes.paymentServiceSecondGridCardsTypography}
                color="#005E9E"
                gutterBottom
                variant="h6"
                component="div"
                fontWeight="bold"
              >
                Domestic Money Transfer(DMT)
              </Typography>
              <Typography
                className={classes.paymentServiceSecondGridCardsTypography}
                variant="body2"
                color="text.secondary"
              >
                Send money between Indian bank accounts easily without visiting
                a bank with Domestic Money Transfer service.
              </Typography>
            </CardContent>
          </Card>
          <Card
            className={classes.paymentServiceSecondGridCard}
            sx={{ width: 194 }}
            onClick={() => navigate("/servicesadhaar")}
          >
            <img
              className={classes.paymentServiceSecondGridCardsDMTPic}
              alt="aeps"
              src={AEPS}
            />

            <CardContent>
              <Typography
                className={classes.paymentServiceSecondGridCardsTypography}
                color="#005E9E"
                gutterBottom
                variant="h6"
                component="div"
                fontWeight="bold"
              >
                Aadhaar Enabled Payment System (AEPS)
              </Typography>
              <Typography
                className={classes.paymentServiceSecondGridCardsTypography}
                variant="body2"
                color="text.secondary"
              >
                AEPS lets bank customers use their Aadhaar identity to access
                accounts.
              </Typography>
            </CardContent>
          </Card>
          <Card
            className={classes.paymentServiceSecondGridCard}
            sx={{ width: 194 }}
            onClick={() => navigate("/servicebbps")}
          >
            <img
              className={classes.paymentServiceSecondGridCardsDMTPic}
              alt="bbps"
              src={BBPS}
            />
            <CardContent>
              <Typography
                className={classes.paymentServiceSecondGridCardsTypography}
                color="#005E9E"
                gutterBottom
                variant="h6"
                component="div"
                fontWeight="bold"
              >
                BBPS
              </Typography>
              <Typography
                className={classes.paymentServiceSecondGridCardsTypography}
                variant="body2"
                color="text.secondary"
              >
                BBPS offers secure one-stop bill payments for services like
                electricity, gas, insurance, and more via electronic or cash
                payments.
              </Typography>
            </CardContent>
          </Card>
          <Card
            className={classes.paymentServiceSecondGridCard}
            sx={{ width: 194 }}
            onClick={() => navigate("/serviceprepaid")}
          >
            <img
              className={classes.paymentServiceSecondGridCardsDMTPic}
              alt="prepaid card"
              src={PrepaidCard}
            />
            <CardContent>
              <Typography
                className={classes.paymentServiceSecondGridCardsTypography}
                color="#005E9E"
                gutterBottom
                variant="h6"
                component="div"
                fontWeight="bold"
              >
                Prepaid Card
              </Typography>
              <Typography
                className={classes.paymentServiceSecondGridCardsTypography}
                variant="body2"
                color="text.secondary"
              >
                OceanPe accepts major prepaid debit cards (American Express,
                Visa, MasterCard, Discover) while store gift cards work only
                within the respective retailer.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Box>

      <Box className={classes.bankingServicesBox}>
        <Typography
          className={classes.allMainHeadingTypography}
          variant="h3"
          fontWeight="bold"
          color="black"
        >
          Banking Services
        </Typography>
        <Typography
          className={classes.allMainHeadingAboutTypography}
          variant="h6"
          gutterBottom
        >
          A bank is a type of financial institution authorized to grant loans
          and accept deposits for checking and savings accounts.
        </Typography>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Box className={classes.bankingServicesIndividualCardBox}>
              <Card className={classes.bankingServicesIndividualCard}>
                <img alt="aadhaar logo" src={Aadhar} />
                <CardContent>
                  <Typography
                    color="#005E9E"
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight="bold"
                  >
                    Aadhar Enabled Payment System
                  </Typography>
                  <Typography
                    className={classes.paymentServiceSecondGridCardsTypography}
                    variant="h6"
                    color="text.secondary"
                  >
                    OceanPe's AEPS enables cashless payments, offering
                    businesses and customers secure, seamless, and convenient
                    payment management, eliminating daily cash handling.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box className={classes.bankingServicesIndividualCardBox}>
              <Card className={classes.bankingServicesIndividualCard}>
                <img alt="money transfer" src={MoneyTransfer} />

                <CardContent>
                  <Typography
                    color="#005E9E"
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight="bold"
                  >
                    Money Transfer
                  </Typography>
                  <Typography
                    className={classes.paymentServiceSecondGridCardsTypography}
                    variant="h6"
                    color="text.secondary"
                  >
                    OceanPe simplifies interbank transfers through NEFT, RTGS,
                    and IMPS, ensuring seamless payment acceptance and
                    settlement services for customers.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box className={classes.bankingServicesIndividualCardBox}>
              <Card className={classes.bankingServicesIndividualCard}>
                <img alt="mini ATM" src={MiniATM} />
                <CardContent>
                  <Typography
                    color="#005E9E"
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight="bold"
                  >
                    Cash withdrawal through mini ATM
                  </Typography>
                  <Typography
                    className={classes.paymentServiceSecondGridCardsTypography}
                    variant="h6"
                    color="text.secondary"
                  >
                    OceanPe MiniATM enables cash withdrawals from checking
                    accounts using Debit & Credit cards, including RuPay,
                    MasterCard, Visa, and Maestro.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.loanServicesMainBox}>
        <Typography
          className={classes.allMainHeadingTypography}
          variant="h3"
          gutterBottom
          fontWeight="bold"
          color="black"
        >
          Loan Services
        </Typography>
        <Typography
          className={classes.allMainHeadingAboutTypography}
          variant="h6"
          gutterBottom
        >
          Principal, interest, and late escrow payments are collected by a
          financial company (a lender) through loan servicing.
        </Typography>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Box className={classes.bankingServicesIndividualCardBox}>
              <Card
                className={classes.bankingServicesIndividualCard}
                onClick={() => navigate("/loanservices")}
              >
                <img alt="digital point loan" src={DigitalPointLoan} />
                <CardContent>
                  <Typography
                    color="#005E9E"
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight="bold"
                  >
                    Digital Point Loan
                  </Typography>
                  <Typography
                    className={classes.paymentServiceSecondGridCardsTypography}
                    variant="h6"
                    color="text.secondary"
                  >
                    OceanPe offers fully customized digital personal loans with
                    no manual processing or paperwork. Apply easily online via
                    laptop, mobile, or tablet.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box className={classes.bankingServicesIndividualCardBox}>
              <Card
                className={classes.bankingServicesIndividualCard}
                onClick={() => navigate("/loanservices")}
              >
                <img alt="merchant loan" src={MerchantLoan} />

                <CardContent>
                  <Typography
                    color="#005E9E"
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight="bold"
                  >
                    Merchant Loan
                  </Typography>
                  <Typography
                    className={classes.paymentServiceSecondGridCardsTypography}
                    variant="h6"
                    color="text.secondary"
                  >
                    OceanPe connects customers to a vast network of Indian banks
                    and NBFCs, providing secure, low-documentation, and quick
                    turnaround loans for business growth.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box className={classes.bankingServicesIndividualCardBox}>
              <Card
                className={classes.bankingServicesIndividualCard}
                onClick={() => navigate("/loanservices")}
              >
                <img alt="individual loan" src={IndividualLoan} />
                <CardContent>
                  <Typography
                    color="#005E9E"
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight="bold"
                  >
                    Individual Loan
                  </Typography>
                  <Typography
                    className={classes.paymentServiceSecondGridCardsTypography}
                    variant="h6"
                    color="text.secondary"
                  >
                    OceanPe offers customized individual loans for various
                    needs, with a simple application process and competitive,
                    low-interest rates to fulfill your desires.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box className={classes.upiServicesBox}>
        <Typography
          className={classes.allMainHeadingTypography}
          variant="h3"
          gutterBottom
          fontWeight="bold"
          color="black"
        >
          UPI Services
        </Typography>
        <Typography
          className={classes.allMainHeadingAboutTypography}
          variant="h6"
          gutterBottom
        >
          UPI is primarily a virtual debit card, where the system merges
          different bank accounts into a single application on your mobile.
        </Typography>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Box className={classes.upiServicesCardBox1}>
              <Card
                className={classes.upiServicesCard}
                sx={{ maxWidth: 345 }}
                onClick={() => navigate("/p2p")}
              >
                <img alt="p2p" src={P2P} />
                <CardContent>
                  <Typography
                    color="#005E9E"
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight="bold"
                  >
                    Person to Person (P2P)
                  </Typography>
                  <Typography
                    className={classes.paymentServiceSecondGridCardsTypography}
                    variant="h6"
                    color="text.secondary"
                  >
                    OceanPe offers fully customized digital personal loans with
                    no manual processing or paperwork. Apply easily online via
                    laptop, mobile, or tablet.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box className={classes.upiServicesCardBox2}>
              <Card
                className={classes.upiServicesCard}
                sx={{ maxWidth: 345 }}
                onClick={() => navigate("/p2m")}
              >
                <img alt="p2m" src={P2M} />

                <CardContent>
                  <Typography
                    color="#005E9E"
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight="bold"
                  >
                    Person to Merchant (P2M)
                  </Typography>
                  <Typography
                    className={classes.paymentServiceSecondGridCardsTypography}
                    variant="h6"
                    color="text.secondary"
                  >
                    OceanPe connects customers to a vast network of Indian banks
                    and NBFCs, providing secure, low-documentation, and quick
                    turnaround loans for business growth.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Typography
          className={classes.allMainHeadingTypography}
          variant="h3"
          gutterBottom
          fontWeight="bold"
          color="black"
        >
          Devices
        </Typography>
        <Typography
          className={classes.allMainHeadingAboutTypography}
          variant="h6"
          gutterBottom
        >
          Devices are things or systems with a particular function or aim, such
          as electronic communication tools like cell phones.
        </Typography>
      </Box>

      <Box
        sx={{ display: { xs: "none", md: "block" } }}
        className={classes.devicesMainBox}
      >
        <Grid className={classes.microATMGrid} container>
          <Grid className={classes.microATMGrid} item md={8}>
            <Typography
              color="#005E9E"
              gutterBottom
              variant="h4"
              component="div"
              fontWeight="bold"
            >
              Micro ATM
            </Typography>
            <Typography
              className={classes.microATMTypography}
              variant="h6"
              color="text.secondary"
            >
              With the help of micro ATMs, banks can connect remotely to their
              main banking system. This device has a fingerprint scanner built
              right into it. In other terms, a micro ATM is a portable
              point-of-sale device used to disburse cash in areas where bank
              facilities are inaccessible. Banks can connect remotely to their
              main banking system with micro ATMs. This device has a fingerprint
              scanner built right into it. In other terms, a micro ATM is a
              portable point-of-sale device used to disburse cash in areas where
              bank facilities are inaccessible.With the help of micro ATMs,
              banks can connect remotely to their main banking system. This
              device has a fingerprint scanner built right into it. In other
              terms, a micro ATM is a portable point-of-sale device used to
              disburse cash in areas where bank facilities are inaccessible.
            </Typography>
          </Grid>
          <Grid className={classes.allCardBackGroundColor} item md={4}>
            <Box>
              <img
                className={classes.microATMPic}
                alt="micro ATM"
                src={MicroATM}
                onClick={() => navigate("/microatm")}
              />
            </Box>
          </Grid>
        </Grid>

        <Box paddingTop="50px">
          <Grid className={classes.posGrid} container spacing={2}>
            <Grid className={classes.posPicGrid} item md={4}>
              <img
                className={classes.microATMPic}
                alt="pos"
                src={POS}
                onClick={() => navigate("/pos")}
              />
            </Grid>
            <Grid item md={8}>
              <Typography
                color="#005E9E"
                gutterBottom
                variant="h4"
                component="div"
                fontWeight="bold"
              >
                POS
              </Typography>
              <Typography
                className={classes.posTypography}
                variant="h6"
                color="text.secondary"
              >
                A POS system is the gear and software that allows you to make
                sales, take payments, and check customers out. You need a POS
                system to accept payments and sell in person, whether you want
                to create a retail store, pop up shop, sell at events, or sell
                out of the trunk of your vehicle.A POS system is the gear and
                software that allows you to make sales, take payments, and check
                customers out. You need a POS system to accept payments and sell
                in person, whether you want to create a retail store, pop up
                shop, sell at events, or sell out of the trunk of your vehicle.
                A POS system is the gear and software that allows you to make
                sales, take payments, and check customers out. You need a POS
                system to accept payments and sell in person, whether you want
                to create a retail store, pop up shop, sell at events, or sell
                out of the trunk of your vehicle.A POS system is the gear and
                software that allows you to make sales, take payments, and check
                customers out. You need a POS system to accept payments and sell
                in person, whether you want to create a retail store, pop up
                shop, sell at events, or sell out of the trunk of your vehicle.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box paddingTop="50px">
          <Grid className={classes.soundBoxGrid} container spacing={2}>
            <Grid item md={8}>
              <Typography
                color="#005E9E"
                gutterBottom
                variant="h4"
                component="div"
                fontWeight="bold"
              >
                Sound Box
              </Typography>
              <Typography
                className={classes.soundBoxTypography}
                variant="h6"
                color="text.secondary"
              >
                A musical instrument's body contains an open chamber called a
                sound box or sounding box (sometimes spelt sound box), which
                changes the sound of the instrument and aids in transferring it
                to the surrounding air. The gear and software that allow you to
                conduct transactions, accept payments, and check out customers
                is known as a point-of-sale (POS) system. You need a POS system
                to take payments and conduct in-person sales whether you want to
                start a brick-and-mortar business, pop-up shop, sell at events,
                or sell from the trunk of your vehicle.The gear and software
                that allow you to conduct transactions, accept payments, and
                check out customers is known as a point-of-sale (POS) system.
                You need a POS system to take payments and conduct in-person
                sales whether you want to start a brick-and-mortar business,
                pop-up shop, sell at events, or sell from the trunk of your
                vehicle. The gear and software that allow you to conduct
                transactions, accept payments, and check out customers is known
                as a point-of-sale (POS) system. You need a POS system to take
                payments and conduct in-person sales whether you want to start a
                brick-and-mortar business, pop-up shop, sell at events, or sell
                from the trunk of your vehicle.
              </Typography>
            </Grid>
            <Grid className={classes.soundBoxPicGrid} item md={4}>
              <img
                className={classes.microATMPic}
                alt="sound box"
                src={SoundBox}
                onClick={() => navigate("/soundbox")}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box
        sx={{ display: { xs: "block", md: "none" } }}
        className={classes.devicesMainBox}
      >
        <Grid className={classes.microATMGrid} container>
          <Grid className={classes.microATMGrid} item md={8}>
            <Typography
              color="#005E9E"
              gutterBottom
              variant="h4"
              component="div"
              fontWeight="bold"
            >
              Micro ATM
            </Typography>
            <Grid className={classes.allCardBackGroundColor} item md={4}>
              <Box>
                <img
                  className={classes.microATMPic}
                  alt="micro ATM"
                  src={MicroATM}
                  onClick={() => navigate("/microatm")}
                />
              </Box>
            </Grid>
            <Typography
              className={classes.microATMTypography}
              variant="h6"
              color="text.secondary"
            >
              With the help of micro ATMs, banks can connect remotely to their
              main banking system. This device has a fingerprint scanner built
              right into it. In other terms, a micro ATM is a portable
              point-of-sale device used to disburse cash in areas where bank
              facilities are inaccessible. Banks can connect remotely to their
              main banking system with micro ATMs. This device has a fingerprint
              scanner built right into it. In other terms, a micro ATM is a
              portable point-of-sale device used to disburse cash in areas where
              bank facilities are inaccessible.With the help of micro ATMs,
              banks can connect remotely to their main banking system. This
              device has a fingerprint scanner built right into it. In other
              terms, a micro ATM is a portable point-of-sale device used to
              disburse cash in areas where bank facilities are inaccessible.
            </Typography>
          </Grid>
        </Grid>

        <Box paddingTop="50px">
          <Grid className={classes.posGrid} container spacing={2}>
            <Typography
              color="#005E9E"
              gutterBottom
              variant="h4"
              component="div"
              fontWeight="bold"
            >
              POS
            </Typography>
            <Grid className={classes.posPicGrid} item md={4}>
              <img
                className={classes.microATMPic}
                alt="pos"
                src={POS}
                onClick={() => navigate("/pos")}
              />
            </Grid>
            <Grid item md={8}>
              <Typography
                className={classes.posTypography}
                variant="h6"
                color="text.secondary"
              >
                A POS system is the gear and software that allows you to make
                sales, take payments, and check customers out. You need a POS
                system to accept payments and sell in person, whether you want
                to create a retail store, pop up shop, sell at events, or sell
                out of the trunk of your vehicle.A POS system is the gear and
                software that allows you to make sales, take payments, and check
                customers out. You need a POS system to accept payments and sell
                in person, whether you want to create a retail store, pop up
                shop, sell at events, or sell out of the trunk of your vehicle.
                A POS system is the gear and software that allows you to make
                sales, take payments, and check customers out. You need a POS
                system to accept payments and sell in person, whether you want
                to create a retail store, pop up shop, sell at events, or sell
                out of the trunk of your vehicle.A POS system is the gear and
                software that allows you to make sales, take payments, and check
                customers out. You need a POS system to accept payments and sell
                in person, whether you want to create a retail store, pop up
                shop, sell at events, or sell out of the trunk of your vehicle.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box paddingTop="50px">
          <Grid className={classes.soundBoxGrid} container spacing={2}>
            <Grid item md={8}>
              <Typography
                color="#005E9E"
                gutterBottom
                variant="h4"
                component="div"
                fontWeight="bold"
              >
                Sound Box
              </Typography>
              <Grid className={classes.soundBoxPicGrid} item md={4}>
                <img
                  className={classes.soundBoxPic}
                  alt="sound box"
                  src={SoundBox}
                  onClick={() => navigate("/soundbox")}
                />
              </Grid>
              <Typography
                className={classes.soundBoxTypography}
                variant="h6"
                color="text.secondary"
              >
                A musical instrument's body contains an open chamber called a
                sound box or sounding box (sometimes spelt sound box), which
                changes the sound of the instrument and aids in transferring it
                to the surrounding air. The gear and software that allow you to
                conduct transactions, accept payments, and check out customers
                is known as a point-of-sale (POS) system. You need a POS system
                to take payments and conduct in-person sales whether you want to
                start a brick-and-mortar business, pop-up shop, sell at events,
                or sell from the trunk of your vehicle.The gear and software
                that allow you to conduct transactions, accept payments, and
                check out customers is known as a point-of-sale (POS) system.
                You need a POS system to take payments and conduct in-person
                sales whether you want to start a brick-and-mortar business,
                pop-up shop, sell at events, or sell from the trunk of your
                vehicle. The gear and software that allow you to conduct
                transactions, accept payments, and check out customers is known
                as a point-of-sale (POS) system. You need a POS system to take
                payments and conduct in-person sales whether you want to start a
                brick-and-mortar business, pop-up shop, sell at events, or sell
                from the trunk of your vehicle.
              </Typography>
            </Grid>
            {/* <Grid className={classes.soundBoxPicGrid} item md={4}>
              <img
                className={classes.microATMPic}
                alt="sound box"
                src={SoundBox}
                onClick={() => navigate("/soundbox")}
              />
            </Grid> */}
          </Grid>
        </Box>
      </Box>

      <DownloadApp />
    </Box>
  );
}

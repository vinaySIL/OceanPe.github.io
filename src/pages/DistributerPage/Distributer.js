// import classes from "./services.module.css";
import classes from "./distributer.module.css";
import * as React from "react";

import DistibuterHeaderMainPic from "../../assets/images/distributerPics/DistibuterHeaderMainPic.png";
import DistributerMainPic from "../../assets/images/distributerPics/DistributerMainPic.png";
import Intermediary from "../../assets/images/distributerPics/Intermediary.png";
import SignUpPic from "../../assets/images/distributerPics/SignUpPic.png";
import Store from "../../assets/images/distributerPics/Store.png";
import Support from "../../assets/images/distributerPics/Support.png";
import Traning from "../../assets/images/distributerPics/Traning.png";
import Wallet from "../../assets/images/distributerPics/Wallet.png";

import FiftyRetailers from "../../assets/images/distributerPics/50000Retailers.png";
import Distributer from "../../assets/images/distributerPics/1500Distributer.png";
import OneFiftyRetailers from "../../assets/images/distributerPics/150Retailers.png";
import TenRetailers from "../../assets/images/distributerPics/10Retailers.png";

import NPCI from "../../assets/images/distributerPics/NPCI.png";
import UPIoriginal from "../../assets/images/distributerPics/UPIoriginal.png";
import BharatBillPay from "../../assets/images/distributerPics/BharatBillPay.png";

import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  Stack,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DownloadApp from "../common/downloadapp/downloadApp";
import { RemoveFromQueue } from "@mui/icons-material";

export default function MainServices() {
  const navigate = useNavigate();

  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box className={classes.mainEntryBox}>
      <Box className={classes.mainPicBox}>
        <Grid container>
          <Grid className={classes.mainPicGridFirst} item lg={6}>
            <Stack spacing={4}>
              <Typography
                className={classes.EarnUpToTypography}
                color="black"
                gutterBottom
                variant="h4"
                component="div"
                fontWeight="bold"
              >
                Earn up to 60% return per month
              </Typography>

              <Typography
                className={classes.EarnUpToDiscriptionTypography}
                variant="h6"
                color="text.secondary"
              >
                Get large profits on your investment in the distribution company
                of PayNearby. No actual stock is needed. There is no cost for
                retail space. No employees or actual transfer of goods.
              </Typography>

              <Box>
                <Button
                  className={classes.calculateIncomeButton}
                  variant="contained"
                  onClick={() => navigate("/income-calculator")}
                >
                  Calculate Your Income
                </Button>
              </Box>
            </Stack>
          </Grid>
          <Grid item lg={6}>
            <img
              alt="DistibuterHeaderMainPic"
              src={DistibuterHeaderMainPic}
              className={classes.distibuterHeaderMainPic}
            />
          </Grid>
        </Grid>
      </Box>

      <Box className={classes.mainFormBox}>
        <Box className={classes.formMainGrid}>
          <Box>
            <img
              alt="SignUpPic"
              src={SignUpPic}
              className={classes.formMainPic}
            />
          </Box>
          <Stack spacing={4}>
            <Typography
              className={classes.SignUpMainHeadingTypography}
              color="black"
              gutterBottom
              variant="h4"
              component="div"
              fontWeight="bold"
            >
              SIGN UP & Start Your Income Today
            </Typography>

            <Typography
              className={classes.SignUpMainHeadingAboutTypography}
              variant="h6"
              color="text.secondary"
            >
              Add your basic information which help us to know you better
            </Typography>

            <Box>
              <Box className={classes.feilds}>
                <TextField
                  sx={{
                    "& fieldset": { top: 3 },
                    "& legend": { display: "none" },
                  }}
                  margin="normal"
                  size="small"
                  className={classes.textfield}
                  label="Enter Your Shop Name*"
                  variant="outlined"
                  id="shopName"
                />
                <TextField
                  sx={{
                    "& fieldset": { top: 3 },
                    "& legend": { display: "none" },
                  }}
                  size="small"
                  className={classes.textfield}
                  label="Enter Owner Name*"
                  variant="outlined"
                  id="ownerName"
                />
              </Box>
              <Box className={classes.feilds}>
                <TextField
                  sx={{
                    "& fieldset": { top: 3 },
                    "& legend": { display: "none" },
                  }}
                  size="small"
                  className={classes.textfield}
                  label="Enter Mobile Number*"
                  variant="outlined"
                  id="mobileNumber"
                />
                <TextField
                  sx={{
                    "& fieldset": { top: 3 },
                    "& legend": { display: "none" },
                  }}
                  size="small"
                  className={classes.textfield}
                  label="Enter E-Mail Address*"
                  variant="outlined"
                  id="userEmail"
                />
              </Box>
              <Box className={classes.feilds}>
                <TextField
                  sx={{
                    "& fieldset": { top: 3 },
                    "& legend": { display: "none" },
                  }}
                  size="small"
                  className={classes.textfield}
                  label="Enter Aadhar Number*"
                  variant="outlined"
                  id="aadharNumber"
                />
                <TextField
                  sx={{
                    "& fieldset": { top: 3 },
                    "& legend": { display: "none" },
                  }}
                  size="small"
                  className={classes.textfield}
                  label="Enter PAN Number*"
                  variant="outlined"
                  id="panNumber"
                />
              </Box>
              <Box className={classes.feilds}>
                <TextField
                  sx={{
                    "& fieldset": { top: 3 },
                    "& legend": { display: "none" },
                  }}
                  size="small"
                  className={classes.textfield}
                  label="Enter Your Village*"
                  variant="outlined"
                  id="villageName"
                />
                <TextField
                  sx={{
                    "& fieldset": { top: 3 },
                    "& legend": { display: "none" },
                  }}
                  size="small"
                  className={classes.textfield}
                  label="Enter Your Block*"
                  variant="outlined"
                  id="userBlock"
                />
              </Box>
              <Box className={classes.feilds}>
                <TextField
                  sx={{
                    "& fieldset": { top: 3 },
                    "& legend": { display: "none" },
                  }}
                  size="small"
                  className={classes.textfield}
                  label="Enter Your State*"
                  variant="outlined"
                  id="stateName"
                />
                <TextField
                  sx={{
                    "& fieldset": { top: 3 },
                    "& legend": { display: "none" },
                  }}
                  size="small"
                  className={classes.textfield}
                  label="Enter Your District*"
                  variant="outlined"
                  id="userDistrict"
                />
              </Box>
            </Box>
            <Box>
              <TextField
                sx={{
                  "& fieldset": { top: 3 },
                  "& legend": { display: "none" },
                }}
                className={classes.shopAddressField}
                label="Enter Your Shop Address*"
                variant="outlined"
                id="userAddress"
                fullWidth={true}
                multiline
                rows={3}
              />
            </Box>

            <Box className={classes.radioButtonGroup}>
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
              <Typography className={classes.radioButtonText}>
                State Head
              </Typography>
              <Radio
                checked={selectedValue === "b"}
                onChange={handleChange}
                value="b"
                name="radio-buttons"
                inputProps={{ "aria-label": "B" }}
              />
              <Typography className={classes.radioButtonText}>
                District Manager
              </Typography>
              <Radio
                checked={selectedValue === "c"}
                onChange={handleChange}
                value="c"
                name="radio-buttons"
                inputProps={{ "aria-label": "C" }}
              />
              <Typography className={classes.radioButtonText}>
                Distributer
              </Typography>
              <Radio
                checked={selectedValue === "d"}
                onChange={handleChange}
                value="d"
                name="radio-buttons"
                inputProps={{ "aria-label": "D" }}
              />
              <Typography className={classes.radioButtonText}>
                Retailer
              </Typography>
            </Box>
            <Box>
              <Button
                className={classes.submitButtonForm}
                size="large"
                variant="contained"
              >
                SUBMIT
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>

      <Box className={classes.retailersFrameMainBox}>
        <Grid className={classes.retailersFrameMainGrid} item xs={12}>
          <Grid item xs={3}>
            <img
              className={classes.retailersAllPicsResize}
              alt="50000Retailers"
              src={FiftyRetailers}
            />
          </Grid>
          <Grid item xs={3}>
            <img
              className={classes.retailersAllPicsResize}
              alt="1500Distributer"
              src={Distributer}
            />
          </Grid>
          <Grid item xs={3}>
            <img
              className={classes.retailersAllPicsResize}
              alt="150Retailers"
              src={OneFiftyRetailers}
            />
          </Grid>
          <Grid item xs={3}>
            <img
              className={classes.retailersAllPicsResize}
              alt="10Retailers"
              src={TenRetailers}
            />
          </Grid>
        </Grid>
      </Box>

      <Box className={classes.ourPartnersFrameMainBox}>
        <Box>
          <Typography
            className={classes.ourPartnerMainHeadlineTypography}
            color="#3E3E3E"
            gutterBottom
            variant="h3"
            component="div"
            fontWeight="bold"
          >
            Our Partners
          </Typography>
          <Grid className={classes.ourPartnersFrameMainGrid} item xs={12}>
            <Grid item xs={4}>
              <img
                className={classes.ourPartnersPicSize}
                alt="BharatBillPay"
                src={BharatBillPay}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                className={classes.ourPartnersPicSize}
                alt="NPCI"
                src={NPCI}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                className={classes.ourPartnersPicSize}
                alt="UPIoriginal"
                src={UPIoriginal}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box className={classes.distibuterBenifitsAbout}>
        <Typography
          className={classes.distributerBenifitsHeadlineTypography}
          color="black"
          gutterBottom
          variant="h4"
          component="div"
          fontWeight="bold"
        >
          Distributor Benefits
        </Typography>

        <Typography
          className={classes.distributerBenifitsHeadlineAboutTypography}
          variant="h7"
          color="text.secondary"
        >
          Becoming a distributor involves establishing a business relationship
          with a company or manufacturer to distribute their products or
          services to retailers, consumers, or other businesses.
        </Typography>
      </Box>

      <Box className={classes.distibuterBenifitsMainBox}>
        <Grid className={classes.distibuterBenifitsFirstGrid} md={4}>
          <Card
            className={classes.allCardBackground}
            sx={{ maxWidth: 250, display: { xs: "none", md: "block" } }}
          >
            <img className={classes.allImagesSize} alt="Wallet" src={Wallet} />
            <CardContent>
              <Typography
                className={classes.distributerBenifitsDiscriptionTypography}
                color="#005E9E"
                gutterBottom
                variant="h5"
                component="div"
                fontWeight="bold"
              >
                Unlimited retail creation
              </Typography>
              <Typography
                className={classes.distributerBenifitsDiscriptionTypography}
                variant="h6"
                color="text.secondary"
              >
                "Unlimited retail creation" appears to refer to a concept or
                capability.
              </Typography>
            </CardContent>
          </Card>

          <Card
            className={classes.allCardBackground}
            sx={{ maxWidth: 250, display: { xs: "none", md: "block" } }}
          >
            <img className={classes.allImagesSize} alt="Store" src={Store} />
            <CardContent>
              <Typography
                className={classes.distributerBenifitsDiscriptionTypography}
                color="#005E9E"
                gutterBottom
                variant="h5"
                component="div"
                fontWeight="bold"
              >
                Life time earning
              </Typography>
              <Typography
                className={classes.distributerBenifitsDiscriptionTypography}
                variant="h6"
                color="text.secondary"
              >
                "Lifetime earning" refers to the total amount of money an
                individual earns.
              </Typography>
            </CardContent>
          </Card>
          <Card
            className={classes.allCardBackground}
            sx={{ maxWidth: 250, display: { xs: "none", md: "block" } }}
          >
            <img
              className={classes.allImagesSize}
              alt="Traning"
              src={Traning}
            />
            <CardContent>
              <Typography
                className={classes.distributerBenifitsDiscriptionTypography}
                color="#005E9E"
                gutterBottom
                variant="h5"
                component="div"
                fontWeight="bold"
              >
                All services training
              </Typography>

              <Typography
                className={classes.distributerBenifitsDiscriptionTypography}
                variant="h6"
                color="text.secondary"
              >
                "All services training" could pertain to a wide range of
                training programs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <img
            className={classes.distibuterBenifitsSecondGrid}
            alt="DistributerMainPic"
            src={DistributerMainPic}
          />
        </Grid>
        <Grid className={classes.distibuterBenifitsFirstGrid} item md={4}>
          <Card
            className={classes.allCardBackground}
            sx={{ maxWidth: 250, display: { xs: "block", md: "none" } }}
          >
            <img className={classes.allImagesSize} alt="Wallet" src={Wallet} />
            <CardContent>
              <Typography
                color="#005E9E"
                gutterBottom
                variant="h5"
                component="div"
                fontWeight="bold"
              >
                Unlimited retail creation
              </Typography>
              <Typography variant="h6" color="text.secondary">
                "Unlimited retail creation" appears to refer to a concept or
                capability.
              </Typography>
            </CardContent>
          </Card>

          <Card
            className={classes.allCardBackground}
            sx={{ maxWidth: 250, display: { xs: "block", md: "none" } }}
          >
            <img className={classes.allImagesSize} alt="Store" src={Store} />
            <CardContent>
              <Typography
                color="#005E9E"
                gutterBottom
                variant="h5"
                component="div"
                fontWeight="bold"
              >
                Life time earning
              </Typography>
              <Typography variant="h6" color="text.secondary">
                "Lifetime earning" refers to the total amount of money an
                individual earns.
              </Typography>
            </CardContent>
          </Card>
          <Card
            className={classes.allCardBackground}
            sx={{ maxWidth: 250, display: { xs: "block", md: "none" } }}
          >
            <img
              className={classes.allImagesSize}
              alt="Traning"
              src={Traning}
            />
            <CardContent>
              <Typography
                className={classes.distributerBenifitsDiscriptionTypography}
                color="#005E9E"
                gutterBottom
                variant="h5"
                component="div"
                fontWeight="bold"
              >
                All services training
              </Typography>

              <Typography
                className={classes.distributerBenifitsDiscriptionTypography}
                variant="h6"
                color="text.secondary"
              >
                "All services training" could pertain to a wide range of
                training programs.
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.allCardBackground} sx={{ maxWidth: 250 }}>
            <img
              className={classes.allImagesSize}
              alt="Support"
              src={Support}
            />
            <CardContent>
              <Typography
                className={classes.distributerBenifitsDiscriptionTypography}
                color="#005E9E"
                gutterBottom
                variant="h5"
                component="div"
                fontWeight="bold"
              >
                24*7 Support
              </Typography>
              <Typography
                className={classes.distributerBenifitsDiscriptionTypography}
                variant="h6"
                color="text.secondary"
              >
                "24/7 support" refers to a service (i.e) 24 hours a day, 7 days
                a week.
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.allCardBackground} sx={{ maxWidth: 250 }}>
            <img
              className={classes.allImagesSize}
              alt="Intermediary"
              src={Intermediary}
            />
            <CardContent>
              <Typography
                className={classes.distributerBenifitsDiscriptionTypography}
                color="#005E9E"
                gutterBottom
                variant="h5"
                component="div"
                fontWeight="bold"
              >
                Attractive Commission
              </Typography>
              <Typography
                className={classes.distributerBenifitsDiscriptionTypography}
                variant="h6"
                color="text.secondary"
              >
                "Attractive commission" refers to a commission structure or
                compensation.
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.allCardBackground} sx={{ maxWidth: 250 }}>
            <img className={classes.allImagesSize} alt="Store" src={Store} />
            <CardContent>
              <Typography
                className={classes.distributerBenifitsDiscriptionTypography}
                color="#005E9E"
                gutterBottom
                variant="h5"
                component="div"
                fontWeight="bold"
              >
                Unlimited retail creation
              </Typography>

              <Typography
                className={classes.distributerBenifitsDiscriptionTypography}
                variant="h6"
                color="text.secondary"
              >
                "Unlimited retail creation" appears to refer to a concept or
                capability.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Box>
      <DownloadApp />
    </Box>
  );
}

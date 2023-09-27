import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import classes from '../../pages/AboutUs/about.module.css'
import dpl from '../../images/DigitalLoan.png'
import merchantLoan from "../../images/MerchantLoan.png"
import individualLoan from "../../images/Individual_Loan.png"
import AboutCard from './aboutcard';
import { aboutList } from './aboutlist';
import AboutCard1 from './aboutcard1';
import { aboutList1 } from './aboutlist1';
const About = () => {


    return (
        <div>
            <div className={classes.main}>
                <div className={classes.container}>
                    <div className={classes.uppercontainer}>
                        <div className={classes.text1}>
                            Our board of directors
                        </div>
                        <div className={classes.text2}>
                        Lorem ipsum dolor sit amet consectetur. Curabitur in vitae nunc est. Eget venenatis in ac tellus lorem sit in tempor enim.
                        </div>
                        <div className={classes.text3}>
                        Lorem ipsum dolor sit amet consectetur. Id sociis placerat convallis egestas. Velit sed egestas diam magna sit fames. Tempor pellentesque lectus pharetra risus amet amet. Lacus sed purus ut tellus. At non sit ipsum eget purus tellus maecenas facilisi egestas. Quis vestibulum pharetra ultricies sem massa sapien justo. Arcu id ipsum tristique sed parturient. At pellentesque praesent senectus tortor at. Viverra praesent scelerisque urna purus molestie id augue viverra aliquet. Iaculis dignissim justo dui et nam curabitur commodo id. Porttitor netus et dictum egestas maecenas eget auctor vestibulum amet.

                        </div>
                    </div>
                    <div className={classes.box1}>
                       {
                        aboutList.map((card,index)=>{
                            return <AboutCard card={card} key={index}/>
                        })
                       } 
                    </div>
                    

                    <div className={classes.middlecontainer}>
                        <div className={classes.text4}>
                            Our leadership team
                        </div>
                        <div className={classes.text5}>
                        Lorem ipsum dolor sit amet consectetur. Curabitur in vitae nunc est. Eget venenatis in ac tellus lorem sit in tempor enim.
                        </div>
                    </div>

                    <div className={classes.box2}>
                       {
                        aboutList1.map((card,index)=>{
                            return <AboutCard1 card={card} key={index}/>
                        })
                       } 
                    </div>
                  
                </div>
            </div>
        </div>

    );
};

export default About;

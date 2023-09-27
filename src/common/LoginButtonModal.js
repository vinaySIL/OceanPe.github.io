import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import { Button, styled } from '@mui/material'
import classes from '../common/LoginButtonModal.module.css'
import { useNavigate } from 'react-router-dom';

const LoginButtonModal = ({ open, handleClose }) => {

    const style = {
        position: 'absolute',
        top: "50%",
        left: "50%",
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    const ColorButton = styled(Button)(({ theme }) => ({
        color: "#FFFFFF",
        // backgroundColor: "#F84B67",
        backgroundColor: "#005E9E",
        fontFamily:"Montserrat",
        border: "1px solid #CCC",
        borderRadius: "4px",
        padding: "0px 26px",
        height: "50px",
        "&:hover": {
            background: "#808080",
            color: "white",
        },
    }));

    const navigate = useNavigate()

    const handleNavigate = (route) => {
        navigate(route)
    }

    return (
        <Modal
        sx={ {backgroundColor :" rgba(0, 0, 0, 0.1)"}}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className={classes.box1}>
                <div className={classes.buttonLogin}>
                {/* <ColorButton  href='https://youcloud.silsaas.co.in/ucloudIndiaAdminPortal6/admin/login' >ADMIN</ColorButton> */}
                <ColorButton  href='https://youcloud.silsaas.co.in/ucloudIndiaMerchantPortal/merchant/login' >MERCHANT PORTAL</ColorButton>
                <ColorButton  href='https://youcloud.silsaas.co.in/ucloudUtilityPortal/reference/login' >UTILITY PORTAL</ColorButton>
                </div>
            
            </Box>
        </Modal>
    )
}

export default LoginButtonModal


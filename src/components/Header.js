import { AppBar, createTheme, MenuItem, Select, Toolbar, Typography , ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { makeStyles } from '@mui/styles';
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import AuthModal from "./Authentication/AuthModal";

const useStyles=makeStyles(()=>({
    title:{
        flex:1,
        color:"gold",
        fontFamily:"Montserrat",
        fontWeight:"bold",
        cursor:"pointer",
    }
}))

const Header=()=>{
    const classes=useStyles();

    const history= useNavigate();

    const {currency, setCurrency }=CryptoState()

    const darkTheme=createTheme({
        palette:{
            primary:{
                main:"#fff",
            },
            mode:"dark",
        }
    });

    return (
        <ThemeProvider theme={darkTheme}> 
            <AppBar color="transparent" position="static">
            <Container>
                <Toolbar>
                    <Typography onClick={()=> history("/")} className={classes.title} variant="h5">Crypto Crest</Typography>

                    <Select variant="outlined" style={{widht:100,height:40,marginRight:15,}}
                    value={currency}
                    onChange={(e)=> setCurrency(e.target.value)}
                    >
                        <MenuItem value='USD' >USD</MenuItem>
                        <MenuItem value='INR'>INR</MenuItem>
                    </Select>

                    <AuthModal/>
                </Toolbar>
            </Container>
        </AppBar>
        </ThemeProvider>
        

    )
}

export default Header 
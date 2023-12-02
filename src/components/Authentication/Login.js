import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useActionData } from "react-router-dom";
import { CryptoState } from "../../CryptoContext";
import { auth } from "../../firebase";
// import {signInWithEmailAndPassword} from "firebase/auth";
const Login =(handleClose)=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {setAlert } = CryptoState();
    const handleSubmit=async()=>{
        if(!email|| !password){
            setAlert({
                open:true,
                message:"Please fill all the fields",
                type:"error",
            });
            return;
        }
        try {
            const result = await signInWithEmailAndPassword(auth,email,password);
            setAlert({
                open:true,
                message:`Login Up Successful. Welcome ${result.user.email}`,
                type:"success,"
            });
        } catch (error) {
            setAlert({
                open:true,
                message:error.message,
                type:"error,"
            });
            return;
        }

    };

    return (
        <Box p={3}
        style={{display:"flex", flexDirection:"column", gap:"20px"}}>
            <TextField
            variant="outlined"
            type="email"
            label="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            fullWidth
            ></TextField>
            <TextField
            variant="outlined"
            type="password"
            label="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            fullWidth
            ></TextField>

            <Button
            variant="contained"
            size="large"
            style={{backgroundColor: "#EEBC1D"}}
            onClick={handleSubmit}>Login</Button>
        </Box>
    )
}
export default Login;
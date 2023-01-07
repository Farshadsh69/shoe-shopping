import React, { useState, useEffect,useContext } from "react";
import Modal from "@mui/material/Modal";
import useStyles from "./indexStyles";
import { Button, Typography } from "@mui/material";
import ReactCodeInput from "react-code-input";
import { LoginContext } from "../../contexts/LoginContext";
import {SIGNUP,FORGET_PASSWORD,CHANGE_PASSWORD} from '../../constants/ActionTypes'

export default function CodedModal() {
  const classes = useStyles();
  const [counter, setCounter] = useState(10);
  const {state,dispatch}=useContext(LoginContext)

  useEffect(() => {
    setInterval(() => {
      setCounter((oldCounter) => (oldCounter === 0 ? 0 : oldCounter - 1));
    }, 1000);
  }, []);
  const codeType=localStorage.getItem('localCodeType')
  const requestAgain=()=>{
    setCounter(50)
  }
  const checkCode=()=>{
    if(codeType==='signIn'){
    
    }else{
      dispatch({type:CHANGE_PASSWORD})
    }
        }
  return (
    <>
      <Modal open={state.code} onClose={()=>dispatch({type:'closeAll'})} className={classes.modal}>
        <div className={classes.rootCode}>
          <Typography variant="body2">کد دریافتی را وارد کنید</Typography>
          <div className={classes.CodeInput}>
            <ReactCodeInput
              fields={5}
              inputStyle={{
                width: 40,
                height: 40,
                marginLeft: 5,
                marginRight: 5,
                backgroundColor: "#78868c",
                textAlign: "center",
                borderRadius: 5,
                border: "1px solid #3f7fa2",
                color: "#fff",
                fontSize: 20,
              }}
            />
          </div>
          {counter===0?(<Button onClick={requestAgain} size='small' fullWidth color='success' variant='text'>درخواست مجدد کد</Button>):(     <Typography style={{ fontSize: 12 }}>
            <div style={{ width: 20, margin: 0, display: "inline-block" }}>
              {counter}
            </div>
            ثانیه تا پایان اعتبار کد
          </Typography>)}
     
          <div  className={classes.ForgetPassword}>
            <Button disabled={counter===0} onClick={checkCode} variant="outlined" fullWidth color="info">
              تایید کد
            </Button>
          </div>
          <Button onClick={()=>{
            dispatch({type:codeType==='forgetPassword'?FORGET_PASSWORD:SIGNUP})
          }} variant="text" color="info">
            اصلاح شماره تلفن
          </Button>
          <br />
          <Button variant="text" color="info">
            ورود به سایت
          </Button>
        </div>
      </Modal>
    </>
  );
}

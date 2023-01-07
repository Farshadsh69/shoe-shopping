import React, { useContext } from "react";
import Modal from "@mui/material/Modal";
import useStyles from "./indexStyles";
import { Button } from "@mui/material";
import Input from "@mui/material/Input";
import { LoginContext } from "../../contexts/LoginContext";
import {SIGNIN,SIGNUP,CODE} from '../../constants/ActionTypes'
export default function ForgetPasswordModal() {
  const {state,dispatch}=useContext(LoginContext)
  const classes = useStyles();
  const forgetPassword=()=>{
    localStorage.setItem('localCodeType','forgetPassword')
    dispatch({type:CODE})
  }
  return (
    <>
      <Modal open={state.forgetPassword} onClose={()=>dispatch({type:'closeAll'})} className={classes.modal}>
        <div className={classes.root}>
          <div className={classes.InputDivForget}>
            <Input fullWidth placeholder="شماره تلفن"></Input>
          </div>
          <div className={classes.ForgetPassword}>
            <Button onClick={forgetPassword} variant="outlined" fullWidth color="info">
              فراموشی رمز عبور
            </Button>
          </div>
          <Button onClick={()=>dispatch({type:SIGNIN})} variant="text" color="info">
            بازگشت به فرم ورود
          </Button>
          <br />
          <Button onClick={()=>dispatch({type:SIGNUP})} variant="text" color="info">
            ثبت نام
          </Button>
        </div>
      </Modal>
    </>
  );
}

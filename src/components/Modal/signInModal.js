import React, {useContext } from "react";
import Modal from "@mui/material/Modal";
import useStyles from "./indexStyles";
import { Button } from "@mui/material";
import Input from "@mui/material/Input";
 import { LoginContext } from "../../contexts/LoginContext";
 import {FORGET_PASSWORD,SIGNUP} from '../../constants/ActionTypes'
export default function SignInModal() {
  const classes = useStyles();
  const {state,dispatch}=useContext(LoginContext)
  return (
    <>
      <Modal open={state.signIn} onClose={()=>dispatch({type:'closeAll'})} className={classes.modal}>
        <div className={classes.root}>
          <div className={classes.InputDiv}>
            <Input fullWidth placeholder="شماره تماس"></Input>
          </div>
          <div className={classes.InputDiv}>
            <Input fullWidth placeholder="رمز عبور"></Input>
          </div>
          <Button variant='outlined' fullWidth color='info'>
            ورود
          </Button>
          <div>
            <Button onClick={()=>dispatch({type:FORGET_PASSWORD})} variant='text' color='info'>رمز عبور را فراموش کرده اید؟</Button>
            <Button onClick={()=>dispatch({type:SIGNUP})} variant='text' color='info'>ثبت نام نکرده اید؟</Button>
            </div>
        </div>
      </Modal>
    </>
  );
}

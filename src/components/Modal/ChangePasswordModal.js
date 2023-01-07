import React, {useContext} from "react";
import Modal from "@mui/material/Modal";
import useStyles from "./indexStyles";
import { Button } from "@mui/material";
import Input from "@mui/material/Input";
import {LoginContext} from '../../contexts/LoginContext'
import {SIGNIN} from '../../constants/ActionTypes'
export default function ChangePasswordModal() {
  const {state,dispatch}=useContext(LoginContext)
  const classes = useStyles();
  return (
    <>
      <Modal open={state.changePassword} onClose={()=>dispatch({type:'closeAll'})} className={classes.modal}>
        <div className={classes.root}>
          <div className={classes.InputDivForget}>
            <Input fullWidth placeholder="رمز عبور جدید "></Input>
          </div>
          <div className={classes.InputDivForget}>
            <Input fullWidth placeholder=" تکرار رمز عبور"></Input>-
          </div>
          <div className={classes.ForgetPassword}>
            <Button variant="outlined" fullWidth color="info">
               تغییر رمز عبور
            </Button>
          </div>
          <Button onClick={()=>dispatch({type:SIGNIN})} variant="text" color="info">
            بازگشت به فرم ورود
          </Button>
        </div>
      </Modal>
    </>
  );
}

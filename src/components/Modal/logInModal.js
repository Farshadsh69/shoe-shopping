import React, { useContext } from "react";
import Modal from "@mui/material/Modal";
import useStyles from "./indexStyles";
import { Button, Grid } from "@mui/material";
import Input from "@mui/material/Input";
import {LoginContext} from '../../contexts/LoginContext'
import {SIGNIN,CODE} from  '../../constants/ActionTypes'


export default function LogInModal() {
  const classes = useStyles();
  const {state,dispatch}=useContext(LoginContext)
  const SignUp=()=>{
    localStorage.setItem('localCodeType','signUP')
    dispatch({type:CODE})
  }
  return (
    <>
      <Modal open={state.signUp} onClose={()=>dispatch({type:'closeAll'})} className={classes.modal}>
        <div className={classes.rootLogin}>
          <Grid container lg={12} className={classes.grid}>
            <Grid item lg={6}>
              <div className={classes.InputDivGrid}>
                <Input fullWidth placeholder="نام و نام خانوادگی"></Input>
              </div>
            </Grid>
            <Grid item lg={6}>
              <div className={classes.InputDivGrid}>
                <Input fullWidth placeholder="شماره تماس"></Input>
              </div>
            </Grid>
          </Grid>
          <Grid container>
          <Grid item lg={6}>
            <div className={classes.InputDivGrid}>
              <Input fullWidth placeholder="رمز عبور"></Input>
            </div>
            </Grid>
            <Grid item lg={6}>

            <div className={classes.InputDivGrid}>
              <Input fullWidth placeholder="تکرار رمز عبور "></Input>
            </div>
          </Grid>
          </Grid>
          <Button onClick={SignUp} variant="outlined"  fullWidth color="info" >
            ثبت نام
          </Button>
          <div className={classes.btnLogIn}>
            <Button onClick={()=>dispatch({type:SIGNIN})} variant="text" color="info" size='medium' >
              قبلا ثبت نام کرده اید؟
            </Button>
         
          </div>
        </div>
      </Modal>
    </>
  );
}

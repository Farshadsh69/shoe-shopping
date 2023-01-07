import React,{useState,useContext,useRef} from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProfileImage from "../../../assets/images/profile.png";
import useStyles from "./profile.style";
import { Button } from "@mui/material";
import Fade from '@mui/material/Fade';
import {LoginContext} from '../../../contexts/LoginContext'
import {SIGNIN,SIGNUP} from '../../../constants/ActionTypes'
import  UseOnClickOutside  from "../../Hook/UseOnClickOutside";



export default function Profile() {
  const ref = useRef();
  UseOnClickOutside(ref, () => setOpen(false));

  const{dispatch}=useContext(LoginContext)
  const classes = useStyles();
  const [open,setOpen]=useState(false)
  return (
    <div className={classes.root} ref={ref}>
      <div className={classes.topMenu}>
        <KeyboardArrowDownIcon  onClick={()=>setOpen(!open)}/>
        <img src={ProfileImage} alt="پروفایل" className={classes.ProfileImg} />
      </div>
    <Fade in={open}>
      <div className={classes.menuContent}>
        {localStorage.token ? (
          <>
            <Button variant="contained" fullWidth className={classes.btnSing}>
            پروفایل
            </Button>
            <Button variant="text" fullWidth className={classes.btnNewUser}>
            خروج            </Button>
          </>
        ) : (
          <>
            <Button
            onClick={()=>{
              setOpen(false)
              dispatch({type:SIGNIN})
            }}
             variant="contained" fullWidth className={classes.btnSing}>
              ورود
            </Button>
            <Button 
            onClick={()=>{
              setOpen(false)
              dispatch({type:SIGNUP})
            }}
            variant="text" fullWidth className={classes.btnNewUser}>
           ثبت نام
            </Button>
          </>
        )}
      </div>
      </Fade>
    </div>
  );
}

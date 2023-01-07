import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    backgroundColor: "#2a343d",
    marginTop: 64,
    marginLeft: "40%",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 5,
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      marginLeft: "10%",
    },
  },
  rootLogin: {
    width: 600,
    backgroundColor: "#2a343d",
    marginTop: 64,
    marginLeft: "32%",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 5,
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      marginLeft: "10%",
    },
  },
  InputDiv: {
    textAlign: "left",
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    "&:hover": {
      borderColor: "#30c5ff2e!important",
      borderWidth: 1,
      borderStyles: "solid",
    },
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
  },
  InputDivGrid:{
     margin:25
  },
  btnSingIn:{
padding:25
  },
  btnSingInDiv:{
size:200
  },
  btnLogIn:{
    marginTop:15
  },
  ForgetPassword:{
    marginBottom:20,
    marginTop:20,
  },
  InputDivForget:{
marginTop:25,
marginBottom:35
  },
  CodeInput:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:25,
    marginBottom:15,
    direction:'rtl'
  },
  rootCode:{
      width: 400,
      backgroundColor: "#2a343d",
      marginTop: 64,
      marginLeft: "40%",
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 40,
      paddingRight: 40,
      borderRadius: 5,
      [theme.breakpoints.down("sm")]: {
        width: "90%",
        marginLeft: "5%",
      },
    
  }

}));
export default useStyles;

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
 
  },
  topMenu: {
    position: "relative",
    border: "1px solid #31315b",
    borderRadius: 20,
    paddingRight: 10,
    paddingLeft: 10,
    cursor: "pointer",
    transition: ".5s",
    boxShadow: "0px 2px 3px #00C7D5",
    "&:hover": {
      opacity: 0.4,
      transition: ".5s",
    },
  },
  menuContent: {
    backgroundColor: "#ececec",

    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    width: 200,
    top: 54,
    padding: 15,
    border: "1px solid #55cfff",
    borderRadius: 10,
    position: "absolute",
    zIndex:1,
  },
  ProfileImg: {
    width: 25,
    height: 25,
  },
  btnSing:{
  },
  btnNewUser:{

"&:hover":{
  color:'#fff!important'
}
  },
}));
export default useStyles;

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  iconProfile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    paddingRight: 10,
    paddingLeft: 10,
    width: 70,
    height: 30,
    border: "1px solid #252a2b",
    borderRadius: 50,
    cursor: "pointer",
    transition: ".5s",
    position: "relative",

    "&:hover": {
      opacity: 0.4,
      transition: ".5s",
    },
    [theme.breakpoints.down('sm')]: {
      "&:hover":{ 
      opacity:0.1,
      transition: "0.1s",
    }
    }
  },
  iconHeader: {
    color: "#fff",
  },
  badge: {
    width: 15,
    height: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E74C3C",
    borderRadius: 50,
    position: "absolute",
    top: 2,
    left: 12,
    color: "#fff",
  },
  shoesContent: {
    display: "flex",
    flexDirection: "column",
    width: 200,
    position: "absolute",
    backgroundColor: "#ececec",
    padding: 15,
    border: "1px solid #30c5ff",
    borderRadius: 10,
    top: 61,
    right: 10,
    zIndex:2,
  },
  shoesImage:{
width:40,
height:40,
  },
  text:{
    margin:0,
color:'#000',
  },
  border:{
    display:"flex",
    justifyContent:'space-between',
    borderBottom:'1px solid #163c48',
    marginBottom:5
    
  },
  iconDel:{
    color:"#f00",
    cursor:'pointer'

  },
  close:{
    color:"#f00",
    marginBottom:15,
    cursor:'pointer'

  },
  btn:{
    marginTop:20
  },
  sum:{
    paddingBottom:20
  }

}));
export default useStyles;

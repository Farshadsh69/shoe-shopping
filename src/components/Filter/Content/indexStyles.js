import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
  },
  ItemRoot: {
    marginTop: 10,
    width: 200,
    height: 250,
    border: "1px solid #173245",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#1a2833",
    borderRadius: 10,
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      margin: 4,
      width: 160,
      height: 200,
    },
  },
  imageItem: {
    width: 150,
    height: 150,
    transition: "0.5s",
    "&:hover": {
      transform: "scale(1.6)",
      transition: "0.5s",
      zIndex: 100,
    },
    [theme.breakpoints.down("sm")]: {
      width: 160,
      height: 100,
    },
  },
  captionItem: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  divScore: {
    position: "absolute",
    top: 0,
    right: 2,
    width: 35,
    height: 20,
    backgroundColor: "#ff0000ad",
    textAlign: "right",
    borderBottomLeftRadius: 25,
  },
  pagination:{
    width:'100%',
    marginTop:30,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
   
  }
}));
export default useStyles;

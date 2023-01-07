import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  rootMens: {
    width: "100%",
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    msOverflowStyle:'none',
    '&::-webkit-scrollbar': {
      display: 'none',
  },
    [theme.breakpoints.down('sm')]:{
      overflow:'scroll',
      marginTop:5,
    },
  },
  rootWomen: {
    width: "100%",
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    msOverflowStyle:'none',

    '&::-webkit-scrollbar': {
      display: 'none',
  },
    [theme.breakpoints.down('sm')]:{
      overflow:'scroll',
      marginTop:5,
    },
  },
  rootChildish: {
    width: "100%",
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    msOverflowStyle:'none',

    '&::-webkit-scrollbar': {
      display: 'none',
  },
    [theme.breakpoints.down('sm')]:{
      overflow:'scroll',
      marginTop:5,
    },
  },
  rootSafety: {
    width: "100%",
    marginTop: 20,
    marginBottom: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    msOverflowStyle:'none',

    '&::-webkit-scrollbar': {
      display: 'none',
  },
    [theme.breakpoints.down('sm')]:{
      overflow:'scroll',
      marginTop:5,
    },
  },
  imageItem: {
    width: 150,
    height: 150,
    transition: "0.5s",
    "&:hover": {
      transform: "scale(1.6)",
      transition: "0.5s",
      zIndex:100,
    },
    [theme.breakpoints.down('sm')]:{
      width:160,
      height:100,
      
    }
  },
  captionItem: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  ItemRoot: {
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
    [theme.breakpoints.down('sm')]:{
      margin:10,
      width:250,
      height:220
    }
  },
  divTitle: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 100,
    position: "relative",
    "&:before": {
      content: "''",
      width: 5,
      height: "100%",
      backgroundColor: "#30c5ff",
      position: "absolute",
      borderRadius: 5,
    },
    [theme.breakpoints.down('sm')]:{
      marginTop:30
    }
  },
  textTitle: {
    paddingLeft: 15,
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

}));
export default useStyles;

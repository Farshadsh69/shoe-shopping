import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  root: {
    width: 200,
    height: 250,
    border: "1px solid #173245",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#1a2833",
    borderRadius: 10,
  },
  image: {
    backgroundColor: "#99b7c026",
    borderRadius: 10,
  },
  title: {
    backgroundColor: "#99b7c026",
    borderRadius: 10,
    width:80,
    height:25
  },
  subtitle:{
    backgroundColor: "#99b7c026",
    borderRadius: 10,
    width:130,
    height:25  
  },
  price:{
    backgroundColor: "#99b7c026",
    borderRadius: 10,
    width:50,
    height:25  
  },
}));
export default useStyles;

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 60,
    display: "flex",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#13181b",
    boxShadow: "0px 3px 10px 10px  #1a324b78",
  },
  IconMenuTop: {
    width: 40,
  },
  brandLogoDiv: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    marginLeft:70,
  },
  brandLogo: {
    width: 100,
    height:60
  },
  shopContent:{
    width:70,
    zIndex:1
  },
  drawer:{
    left:0,
    backgroundColor:"#00000080!important"
  },
  SearchIcon:{
    width:25,
      }

}));
export default useStyles;

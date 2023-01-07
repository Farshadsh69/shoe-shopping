import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor:'#13181b',
    marginBottom:15,
    

  boxShadow: '0px 3px 10px 10px  #1a324b78',

 
  },
  brandDiv: {
    width: 100,
  },
  brandImg: {
    width: "75%",
  },
  menuDiv: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    height: "100%",

  },
  activeMenu: {
    color:theme.palette.text.primary
  },
  inactiveMenu: {
    color: theme.palette.text.inActiveMenu,
  },
  borderActiveMenu:{
borderBottomColor:theme.palette.text.borderBottomColor,
borderBottomWidth:1,
borderBottomStyle:'solid',
borderRadius:10,
  },
  profileDiv:{
    width:160,
    height:'100',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  
  },
  SearchIcon:{
width:40,
marginRight:25
  }
}));
export default useStyles;

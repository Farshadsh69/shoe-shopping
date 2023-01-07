import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width:200,
    height:'100%',
    padding:5,
    backgroundColor:'#131a21'
    
  },
  brandLogo:{
    width:"100%",
    height:100,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:'#303a41',
    borderBottomWidth:1,
    borderBottomStyle:'solid',
    marginBottom:30

  },
  imageLogo:{
    width:100,
    height:100
  },
  borderBottom:{
  },
  Drawer:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  menuBtn:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',


  },
  imageMenu:{
    width:25,
    height:25
  },
  textAlign:{
    textAlign:'left'
  }


}));
export default useStyles;

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme)=>({
  root: {
    backgroundColor: "#13181b",
    padding: 15,
    boxShadow: "0px 3px 10px 10px  #1a324b78",
    [theme.breakpoints.down('sm')]:{
padding:8
    }
  },

  rootGrid: {
  
    [theme.breakpoints.down('sm')]:{
      paddingTop:10,
      paddingBottom:10,
      borderBottom:'1px solid #28292a'
}
  },
  TextFooter:{
    color:'#888f92',  
  paddingTop:10,
  
  },
  DivBtn:{
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    marginTop:10
    
  },
  container:{
    '&.MuiContainer-root ':{
      display:'inherit',
      [theme.breakpoints.down('sm')]:{
        display:'block'
      }
    }
  }
}));
export default useStyles;

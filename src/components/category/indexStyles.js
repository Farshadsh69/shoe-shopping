import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height:'auto',

  },
  image: {
    width: 100,
    height: 100,
    marginRight:30,
    marginLeft:5,
    
  },
  ItemCat: {
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      border:'1px solid #163c58',
      position:'relative',
      marginTop:1,
      marginBottom:15,
      boxShadow: "0px 1px 2px #00C7D5",
      borderRadius:5



      
  },
  btn:{
      position:'absolute',
      bottom:3,
      right:3

  }
}));
export default useStyles;

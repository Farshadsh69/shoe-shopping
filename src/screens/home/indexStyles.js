import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root:{
[theme.breakpoints.up('md')]:{
  height:500
}
  },
  sliderGrid: {
    height: 450,
    padding:10,
    paddingLeft:0,
    [theme.breakpoints.down('sm')]:{
      height:'auto',
      padding:5,

    }
  },
  categoryGrid: {
    display:'flex',
    flexDirection:'column',
    height: 450,
    padding:10,
    [theme.breakpoints.down('sm')]:{
      height:'auto',
      padding:5,

    }
  
  },
  itemGrid:{
      height:180,
      marginBottom:10,
      marginTop:100

  }
}));
export default useStyles;

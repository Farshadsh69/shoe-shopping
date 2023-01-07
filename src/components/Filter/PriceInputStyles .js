import { makeStyles } from "@mui/styles";
const useStyles=makeStyles(()=>({
    root:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:15,
    marginBottom:15,
    padding:7,
    borderRadius:10,
    boxShadow: '0px 0px 7px 0px #0c3747',
},
    Input:{
    display:'flex',
    flex:1,
    marginRight:15,
    textAlign:'center',
    fontSize:16,
    backgroundColor:'transparent',
    color:'#fff',
    border:'none',
    "&:focus":{
        outline:'none'
    }
    }
}))
export default useStyles
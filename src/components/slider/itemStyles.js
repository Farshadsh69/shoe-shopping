import { makeStyles } from "@mui/styles";
const useStyles=makeStyles((theme)=>({
    root:{
        width:'100%',
        height:450,
        backgroundColor:"#1b3c543b",
        border:'1px solid #163c58',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        boxShadow: "0px 0px 0px #00C7D5",
        zIndex:0,
        [theme.breakpoints.down('sm')]:{
            height:250,
        }

        
        
    },
    img:{
width:350,
marginLeft:10,
marginRight:10,
[theme.breakpoints.down('sm')]:{
    width:100
}
    },
    titleDiv:{
        flex:1,
        marginLeft:30
    },
    tyT:{
        paddingBottom:15
    },
    tyP:{
        paddingTop:15,
    
 
    },
    disDiv:{
        position:'absolute',
        top:0,
        left:0,
        backgroundColor:'red',
        borderBottomRightRadius:50,
        width:100,
        
},
btnDiv:{
   position:'absolute',
   bottom:0,
   right:0 
}

}))
export default useStyles
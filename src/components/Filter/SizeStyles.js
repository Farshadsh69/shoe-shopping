import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  root: {
    marginTop: 10,
    padding: 10,
    borderBottom: "1px solid #202526",
  },
  divTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0px 0px 10px 0px #000 ",
    height: 40,
    padding: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  divButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  divCheckBox:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      flexWrap:'wrap',
      width:'90%'
  },
  widthSize:{
      width:70
  },
}));
export default useStyles;

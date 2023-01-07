import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  root: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    borderBottom:'1px solid #202526',
    paddingBottom:15,
  },
  ItemRoot: {
    margin: 6,
    border: "1px solid #2d597859",
   boxShadow: '0px 0px 7px 0px #0c3747',
   borderRadius:5,
    padding: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    cursor:'pointer',
  },
  iconItemAdd: {
    marginLeft: 5,
  },
  iconItemClose:{
    marginLeft: 5,

  }
}));
export default useStyles;

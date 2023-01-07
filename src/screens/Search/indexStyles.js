import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
    },
  },
  FilterGrid: {
    width: "100%",
    backgroundColor: "#13181b",
    padding: 10,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10,
    "&.MuiGrid-root": {
      marginRight: 20,
      marginBottom: 30,
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      "&.MuiGrid-root": {
      margin:15
      },
    },
  },
  ContentGrid: {
    width: "100%",
    padding: 10,
    "&.MuiGrid-root": {
      marginBottom: 30,
    },
  },
}));
export default useStyles;

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    width: 100,
  },
  Typography: {
    position: "relative",
    paddingBottom: 20,
    "&:after": {
      content: "''",
      width: 100,
      height: 4,
      background: "#243641",
      position: "absolute",
      bottom: 0,
      right: 0,
      borderRadius: 4,
    },
    "&:before": {
      content: "''",
      width: 60,
      height: 2,
      background: "#30c5ff",
      position: "absolute",
      bottom: 0,
      left: 0,
      zIndex: 1,
      borderRadius: 20,
    },
  },
});
export default useStyles;

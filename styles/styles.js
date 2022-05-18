import { makeStyles } from "@mui/styles";
// import { hover } from "@testing-library/user-event/dist/hover";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icon: {
    marginRight: "20px",
  },
  buttons: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "20px 50px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: "1",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
  },
  footer3: {
    color: "white",
  },
  footer2: {
    color: "#bfbdbd",
    "&:hover": {
      color: "#22c1d8",
    },
  },
}));

export default useStyles;

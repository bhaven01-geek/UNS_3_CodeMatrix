import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icon: {
    marginRight: "20px",
    margin: "10px",
    fontSize: "2rem",
  },
  button: {
    marginTop: "40px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default useStyles;

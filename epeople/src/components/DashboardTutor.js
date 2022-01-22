import React from "react";
import {
  TextField,
  Typography,
  Button,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import { PhotoCamera, Search } from "@material-ui/icons";
import useStyles from "./styles";
import "./App.css";
import { Notifications, Person } from "@material-ui/icons";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import Learner from "./Learner";
import learnerData from "./learner-data";
import { useState } from "react";

const App = () => {
  const [arrLen, setArrLen] = useState(0);
  const classes = useStyles();

  // useEffect(() => {
  //     if (arrLen > 0) {
  //         setArrLen(learnerData.length)
  //     }
  // })

  // const renderRequest = () => {

  // }

  const theme = createMuiTheme({
    typography: {
      h2: {
        fontSize: 36,
      },
    },
    palette: {
      primary: {
        main: "#e23c52",
        light: "#757ce8",
        dark: "#002884",
        contrastText: "#fff",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <AppBar position='relative' color='primary'>
            <Toolbar className={classes.toolbar} color='primary'>
              <div className='logo-name'>
                <PhotoCamera className={classes.icon} />
                <Typography variant='h6'>Gather.ly</Typography>
              </div>
              <div className='icons-div'>
                <Notifications className={classes.icon} />
                <Person className={classes.icon} />
              </div>
            </Toolbar>
          </AppBar>

          <div className='main-tutor-div'>
            <div className='search-section'>
              <Search
                style={{
                  fontSize: "2rem",
                  color: "rgb(95, 94, 94)",
                  marginLeft: "1rem",
                }}
              />
              <TextField
                id='standard-basic'
                label='Search For Students based on Domain'
                variant='standard'
                style={{ width: "80%", marginBottom: "1rem" }}
              >
                Search For Students based on Domain
              </TextField>
            </div>

            <div className='tutor-div'>
              {learnerData.length > 0 ? (
                <>
                  {learnerData.map((learner) => {
                    return (
                      <Learner
                        image={learner.image}
                        name={learner.name}
                        field={learner.field}
                      />
                    );
                  })}
                </>
              ) : (
                <div className='request-section' style={{ overflow: "hidden" }}>
                  <img src='void.png' className='void-img' />
                  <span>No Requests Found</span>
                </div>
              )}
            </div>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
};

export default App;

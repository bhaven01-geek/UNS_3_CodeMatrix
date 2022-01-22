import React, { Component } from "react";
import { Input, Button, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Home.css";
import {
  TextField,
  Typography,
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
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import useStyles from "./styles";
import { PhotoCamera, Notifications, Person } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
  }

  handleChange = (e) => this.setState({ url: e.target.value });

  join = () => {
    if (this.state.url !== "") {
      var url = this.state.url.split("/");
      window.location.href = `/${url[url.length - 1]}`;
    } else {
      var url = Math.random().toString(36).substring(2, 7);
      window.location.href = `/${url}`;
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <AppBar position='relative' color='primary'>
          <Toolbar
            className={classes.toolbar}
            style={{ backgroundColor: "#e23c52" }}
          >
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
        <div className='container2'>
          <img
            src='./images/logo.svg'
            style={{ width: "200px", height: "150px" }}
          ></img>

          <div>
            <div>
              <h1 style={{ fontSize: "45px" }}>Video Meeting</h1>
              <p style={{ fontWeight: "200" }}>
                Join to connect and learn from your tutor
              </p>
            </div>

            <div
              style={{
                background: "white",
                width: "30%",
                height: "auto",
                padding: "20px",
                minWidth: "400px",
                textAlign: "center",
                margin: "auto",
                marginTop: "50px",
              }}
            >
              <p
                style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}
              >
                join the meeting
              </p>
              <Input placeholder='URL' onChange={(e) => this.handleChange(e)} />
              <Button
                variant='contained'
                onClick={this.join}
                style={{ margin: "20px", backgroundColor: "#e23c52" }}
              >
                Go
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withStyles(useStyles)(Home);

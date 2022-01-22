import React from "react";
import { Typography, Button, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import useStyles from './styles'
import './App.css'
import DashCard from './components-ldash/DashCard'
import SearchCard from './components-ldash/SearchCard'
import Meetup from './components-ldash/Meetup'
import { Notifications, Person } from '@material-ui/icons'


const App = () => {

  const classes = useStyles();

  return (
    <>
      <CssBaseline>
        <AppBar position="relative" >
          <Toolbar className={classes.toolbar}>
            <div className="logo-name">
              <PhotoCamera className={classes.icon} />
              <Typography variant="h6">Gather.ly</Typography>
            </div>
            <div className="icons-div">
              <Notifications className={classes.icon} />
              <Person className={classes.icon} />
            </div>

          </Toolbar>
        </AppBar>
        <main className="main-section">
          <div className="main-card">
            <div className="dash-div">
              <DashCard />
            </div>
            <div className="search-div">
              <SearchCard />
            </div>

          </div>
          <div className="meetup-section">
            <Meetup />
          </div>
        </main>
      </CssBaseline>
    </>
  )
}

export default App
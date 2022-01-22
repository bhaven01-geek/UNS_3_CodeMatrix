import React from "react";
import useStyles from '../styles'
import { Card, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import './CompStyle.css'


const DashCard = () => {
    const classes = useStyles();
    return (
        <div id="card-div">
            <div id="pic-details">
                <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350g" alt="" id="picture" />
                    <div id="text">
                        <div id="heading">Varun Sharma</div>
                        <div id="subtitle"><span id="dev-tools">Student</span></div>
                    </div>
            </div>

            <div id="download">
                <button id="download-btn">View Profile</button>
                <div id="rating"><span class="fa fa-star checked"></span>
                </div>
            </div>
        </div>
    )
}

export default DashCard
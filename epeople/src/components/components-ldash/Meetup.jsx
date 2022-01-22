import React from "react";
import Tutor from "./Tutor"
import useStyles from '../styles'

const Meetup = () => {
    const classes = useStyles();
    return (
        <>
            <div className="meetup-div">
                <h2>Available Tutors will be listed Here</h2>
                <div className="tutor-div">
                    <Tutor />
                    <Tutor />
                    <Tutor />
                    <Tutor />
                    <Tutor />
                </div>
            </div>
        </>
    )
}

export default Meetup
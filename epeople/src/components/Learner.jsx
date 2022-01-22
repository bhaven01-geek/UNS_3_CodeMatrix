import React from "react";
import { Avatar, Button } from '@material-ui/core';
import './App.css'

const Learner = ({image, name, field}) => {
    return (
        <div className="tutor">

           
            <Avatar alt="Remy Sharp" src={image} />
           

            
            <div className="tutor-name">
                <h4>{name}</h4>
                <p>Field: {field}</p>
            </div>
           

           
            <Button href="#text-buttons" color="primary" size="small">Connect</Button>
       


            
            
           
           
        </div>

    );
}

export default Learner
import React from "react";
import { Avatar, Button } from '@material-ui/core';

const Tutor = () => {
    return (
        <div className="tutor">
            <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
            <div className="tutor-name">
                <h4>Remmy Sharp</h4>
                <p>Software Engineer at Google</p>
            </div>
           
            <Button href="#text-buttons" color="primary" size="small">Join</Button>
        </div>

    );
}

export default Tutor
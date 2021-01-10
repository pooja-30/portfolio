import React from 'react';
import './Experience.css';


function Work(props) {
    return (
        <div className = "WorkMain">
            <p className = "role">{props.role}</p>
            <div className = "detail">
                <p className = "organisation">{props.organisation}</p>
                <p className = "duration">{props.duration}</p>
            </div>           
            <br /> 
            <p className = "work-description">{props.description1}</p>
            <br />
            <p className = "work-description">{props.description2}</p>
        </div>
    )
}

export default Work;
import React, { Component } from 'react';
import './Education.css';

function School(props) {
    return (
        <div className = "school">
                <div className = "left">
                    <p className = "school-name">{props.name}</p>
                    <br />
                    <p className = "type">{props.study}</p>
                </div>

                <div className = "right">
                    <p className = "field">{props.field}</p>
                    <p className = "score">{props.score}</p>
                    <br />
                    <p className = "duration">{props.duration}</p>
                </div>                
            </div>
    )
}

export default School;

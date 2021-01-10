import React from 'react';
import '../App.css';

function PageTitle(props) {
    return <div className = "title">
    <p className = {props.class}>{props.title}</p>
    <p className = "line"></p>
   </div>;
}

export default PageTitle;
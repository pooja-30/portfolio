import React from 'react';
import PageTitle from './PageTitle';
import '../App.css';
import './Education.css';
import School from './School';
import Division from './Division';

function Education() {

    return <div className = "education" id = "education">
        <PageTitle title = "EDUCATION" class = "heading"/>
            <div className = "edu-content">
                <School name = "CHITKARA UNIVERSITY, PUNJAB" 
                study = "BACHELOR OF ENGINEERING" 
                field = "Computer Science" 
                score = "CGPA: 9.19" 
                duration = "Graduated: 2019"/>

                <Division />

                <School name = "GMSSS SEC 37, CHANDIGARH" 
                study = "INTERMEDIATE" 
                field = "C.B.S.E." 
                score = "Percentage: 79%" 
                duration = "May 2015"/>

                <Division />

                <School name = "GMHS SEC 37, CHANDIGARH" 
                study = "HIGH SCHOOL" 
                field = "C.B.S.E" 
                score = "CGPA: 9.2" 
                duration = "May 2013"/>
            </div>   
        </div>;
}

export default Education;
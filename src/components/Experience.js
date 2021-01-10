import React from 'react';
import PageTitle from './PageTitle';
import '../App.css';
import './Experience.css';
import Work from './Work';
import Division from './Division';
function Experience() {

    const mentor = "Worked as a student mentor and reviewer for Udacity's Front-End Nanodegree Program. For the role as Mentor, I was assigned bunch of students and the job was"+ 
    " to clear their doubts, help them if they are stuct anywhere in projects and guide them throughout the course.";
    const reviewer = "For the role as a Reviewer, " + 
    "students who enroll for a nanodegree submit projects as per course, my job was to review a perticular project of Front-End Nanodegree and sed back the review if the project meets the specification or not.";

    const kony1 = "Worked as a developer with development and testing team to develop robust solutions to meet client requirements for functionality, scalability and performance." +
    " Working as a senior developer in developing the IndusInd Bank App. App is live on play store and app store, currently working on new releases.";
    const kony2 = " Won Exceptional Developer and Gem Team Awards."

    return <div className = "experience" id = "experience">
        <PageTitle title = "WORK EXPERIENCE" class = "heading"/>
            <div className = "work-content">
  
                <Work       
                    role = "ASSOCIATE ENGINEER"
                    organisation = "KONY (TEMENOS)"
                    duration = "June 2018 - Current"
                    description1 = {kony1}
                    description2 = {kony2}
                />

                <Division />

                <Work 
                    role = "MENTOR AND REVIEWER"
                    organisation = "UDACITY"
                    duration = "February 2018 - November 2019"
                    description1 = {mentor}
                    description2 = {reviewer}
                />
            </div>   
        </div>;
}

export default Experience;
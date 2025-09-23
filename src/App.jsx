import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//SIDE BAR PROFILE SECTION

function ProfileImage() {
  return <img src="Images/Profile.jpg" alt="Profile Picture" />

}
function FL_Name(props) {
  return <h2 className="name">{props.name}</h2>
}

function Profile() {
  return <div className="Profile">
    <ProfileImage />
    <FL_Name name="Aaron" />
    <FL_Name name="Laxamana" />
  </div>
}

//SIDE BAR CONTACT SECTION

function Contact() {
  return <div className="SideContact">
    <h1>Contact</h1>
  </div>
}
function InfoTitle(props) {
  return <h3>{props.title}</h3>
}
function InfoDescription(props) {
  return <p>{props.Description}</p>
}
function ContactInfo() {
  return <div className="Infocontacts">
    <InfoTitle title="Address" />
    <InfoDescription Description="Sta Lucia Masantol Pampanga" />
    <InfoTitle title="Phone" />
    <InfoDescription Description="+63 0919 639 6475" />
    <InfoTitle title="E-mail" />
    <InfoDescription Description="amlaxamana.student@ua.edu.ph" />
  </div>
}
//SIDE BAR SKILL SECTION
function SkillSection() {
  return <div className="SideSkills">
    <h1>Skills</h1>
  </div>
}

function SkillList(props) {
  return <ul>
    <li>{props.info}</li>
  </ul>

}

function DivSkill() {
  return <div className="Infoskills">
    <SkillList info="Proficient in all stages of video production, from pre-production to final post-production." />
    <SkillList info="Skilled in developing visual content, including digital graphics, marketing materials, and logos." />
    <SkillList info="Quickly learns new tools and adjusts to changing project requirements." />
    <SkillList info="Demonstrates a consistent ability to complete projects and meet all deadlines." />
    <SkillList info="Certified IT Specialist Databases." />

  </div>
}
//MAIN CONTENT SECTION

function Heading() {
  return <div className="Heading">
    <h1>
      Versatile professional with expertise in programming, complemented by
      creative skills in video editing and graphic design. Skilled in
      delivering efficient software solutions and engaging digital content
      with a balance of technical precision and artistic vision.
    </h1>
  </div>
}
//EDUCATION SECTION
function Course(props) {
  return <h1>{props.Course}</h1>
}
function SchoolAdd(props) {
  return <p>{props.Add}</p>
}

function EducationContent() {
  return <div className="EducationContent">
    <Course Course="Bachelor of Science: Information Technology" />
    <SchoolAdd Add="University of The Assumption - Unisite Subdivision, Barangay Del
                Pilar City of San Fernando, Pampanga Philippines"/>

    <Course Course="Senior High School" />
    <SchoolAdd Add="University of The Assumption - Unisite Subdivision, Barangay Del
                Pilar City of San Fernando, Pampanga Philippines"/>
  </div>
}

function EducationTitle() {
  return <div className="MainEducation">
    <hr />
    <h1>Education</h1>
    <hr />
  </div>
}
function Leftside() {
  return <div className="leftside"></div>
}
function Education() {
  return <div className="Education">
    <Leftside />
    <EducationContent />
  </div>
}
function EducInfo() {
  return <div className="EducationInfo">
    <Education />
  </div>
}
// EXPERIENCE SECTION

function ExperienceTitle() {
  return <div className="MainExperience">
    <hr />
    <h1>Experience</h1>
    <hr />
  </div>
}
function YearDate(props) {
  return <div className="leftDate">
    <p>{props.Year}</p>
  </div>
}



//REUSABLE COMPONENT FOR JOBENTRY
function JobList() {
  return <div className="ExperienceInfo">
    <div className="Exp">
      <YearDate Year="2030 - Now" />
      <ExperienceContent
        JobTitle="Senior Software Engineer"
        Company="Markem-Imaje Asia Pacific"
        Desc1="Collaborated with QA and DevOps teams to deliver smooth releases and maintain system reliability."
        Desc2="Led updates and enhancements to web applications to ensure performance, security, and scalability."
        Desc3="Mentored junior and mid-level engineers through code reviews, training, and knowledge sharing." />
    </div>

    <div className="Exp">
      <YearDate Year="2028 - 2029" />
      <ExperienceContent
        JobTitle="Software Developer"
        Company="Cloud Staff"
        Desc1="Developed and optimized applications by analyzing performance and improving scalability and security."
        Desc2="Performed rigorous testing, debugging, and performance optimization to ensure reliability and efficiency."
        Desc3="Translated business requirements into efficient technical solutions through coding and system design." />
    </div>

    <div className="Exp">
      <YearDate Year="2026 - 2028" />
      <ExperienceContent
        JobTitle="Junior Developer"
        Company="Digital Room, Inc."
        Desc1="Learned emerging tools, frameworks, and methodologies to build technical expertise and coding skills."
        Desc2="Supported code reviews and followed established development standards and best practices."
        Desc3="Contributed to application development by fixing bugs, writing small features, and assisting senior engineers." />

    </div>

  </div>
}

function ExperienceContent(props) {
  return <div className="ExpContent">
    <h1>{props.JobTitle}</h1>
    <p>{props.Company}</p>
    <ul>
      <li>{props.Desc1}</li>
      <li>{props.Desc2}</li>
      <li>{props.Desc3}</li>
    </ul>

  </div>
}

//MAIN DISPLAY
function SideBar() {
  return <div className="side-content">
    <Profile />
    <Contact />
    <ContactInfo />
    <SkillSection />
    <DivSkill />
  </div>

}

// MAIN FUNCTION
function App() {
  return (

    <div className="container">
      {/*LEFT SIDE BAR CONTENT */}
      <SideBar />
      {/*END OF LEFT SIDE BAR*/}

      {/*RIGHT SIDE MAIN CONTENT */}
      <div className="main-content">
        <Heading />
        {/*EDUCATION CONTENT */}
        <EducationTitle />
        <EducInfo />

        {/*EXPERIENCE CONTENT */}
        <ExperienceTitle />

        {/*JOB ENTRIES */}
        <JobList />
      </div>
    </div >
  )
}

export default App

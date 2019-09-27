import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                            <h2 style={{ paddingTop: '2em' }}>Mikhael Hermanus</h2>
                            <h4 style={{ color: 'grey' }}>Programmer</h4>
                            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                            <p>DESCRIBE YOUR RESUME HERE YOUR PERSNONALITY,SKILL,EXPERIENCE ETC</p>
                            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                            <h5>Adress</h5>
                            <p>Depok, Jawa Barat</p>
                            <h5>Phone</h5>
                            <p>someone@example.com</p>
                            <h5>web</h5>
                            <p>examplesite.com</p>
                            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        </div>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education
                            startYear={2015}
                            endYear={2019}
                            schoolName="UPN Veteran Jakarta University"
                            schoolDescription="Descripe your school your faculty, and your graduate"
                        />
                        <Education
                            startYear={2012}
                            endYear={2015}
                            schoolName="SMAN 97 Jakarta"
                            schoolDescription="Descripe your school your faculty, and your graduate"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2018}
                            endYear={2019}
                            jobName="IT Support - Etobee Ecom Indonesia"
                            jobDescription="Descripe your job"
                        />
                        <Experience
                            startYear={2019}
                            endYear={2019}
                            jobName="Junior Full Stack Developer at PT.SRA"
                            jobDescription="Descripe your job"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills
                            skills="javascript"
                            progress={75}
                        />
                        <Skills
                            skills="HTML/CSS"
                            progress={80}
                        />
                        <Skills
                            skills="NodeJs"
                            progress={60}
                        />
                        <Skills
                            skills="React"
                            progress={45}
                        />
                        <Skills
                            skills="java"
                            progress={80}
                        />



                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
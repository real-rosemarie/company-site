
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {FormattedMessage} from 'react-intl';


const JobsSvg = (props) => {
    const jobList = [ {job: 'Game Planner(Mobile Games)', desc: `<p><strong>Job Description</strong></p><p>&nbsp;</p><p><span style="font-weight: 400;">The game planner focuses on game planning and development. Part of his /her duty is to monitor the progress of the team, manage data production and lay out document specification. &nbsp;&nbsp;He/she is expected to leverage collaborative ideas to increase team performance and eventually produce quality games.</span></p><p>&nbsp;</p><p><strong>Job Responsibilities</strong></p><ul><li style="font-weight: 400;"><span style="font-weight: 400;">Plan, direct and manage mobile game creation.</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Design game balance, level design &amp; any data to operate game.</span></li></ul><ul><li style="font-weight: 400;"><span style="font-weight: 400;">Make specification document.</span></li></ul><ul><li style="font-weight: 400;"><span style="font-weight: 400;">Assist the director in producing and delegating tasks to team.</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Analyze user action data to improve game.</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Do quality control of the game.</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Plan and promote campaigns for game improvement.</span></li></ul><p><strong>Job Qualifications</strong></p><ul><li style="font-weight: 400;"><span style="font-weight: 400;">Experience in mobile game industry &amp; web marketing </span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Experience in outsourcing and project management</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Producer/ Director experience for mobile games</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Japanese language knowledge is an advantage.</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Director experience and operation for contents</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Experience in planning and analysis of KPI's</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Interested in releasing games worldwide</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Extensive knowledge of games and entertainment and a gamer themselves</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Passion for mobile games</span></li></ul>`,jslink: "", mynimoLink: ""},
                       {job: 'Unity Developer', desc: `<p><span style="font-weight: 400;">Unity or Unity3D Developer is generally responsible for building games for various target platforms based on the Unity framework. Specifically, the Unity Developer will be responsible for implementing game functionality, translating design ideas, concepts, and requirements into a functional and engaging game</span></p><p>&nbsp;</p><p><strong>Responsibilities</strong></p><ul><li style="font-weight: 400;"><span style="font-weight: 400;">Code Review</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Publish mobile games</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Native plugin creation for Unity3D</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Design code structure</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Plan and implement game functionality</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Transform design specification into functional games</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Establish effective strategy and development pipeline</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Design, build, and maintain efficient, reusable, and reliable code</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Ensure the best performance, quality, and responsiveness of applications and games</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Identify process and application bottlenecks and bugs</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Offer and implement solutions in a timely manner</span></li></ul><p>&nbsp;</p><p><strong>Qualifications</strong></p><ul><li style="font-weight: 400;"><span style="font-weight: 400;">At least one (3) year experience in Unity programming</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Experience in publishing at least one (1) mobile games in Android and IOS</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Strong background in Design Patterns, Unity, C# and Java</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Experience in testing/test driven development is an advantage</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Experience with game physics, optimizing memory and space usage is an advantage</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Experience with version control systems (Git, SVN)</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Critical thinker, problem-solver and detail-oriented</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Should have deep passion for mobile games</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Should have a happy &amp; positive disposition</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Should have good communication skills (written and spoken English)</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">BS/MS in Computer Science, Game Design and Development or a related courses preferred</span></li></ul>`, link: "https://www.jobstreet.com.ph/en/job/unity-developer-8294381", mynimoLink: ""},
                       {job: 'Game Data Analyst', desc: `<p><span style="font-weight: 400;">The Game Data Analyst objective generally analyzes data effectively data to help make data-informed decisions. Furthermore, the said position is responsible for creating business intelligence dashboards and key strategic recommendations for user acquisition, mobile game product optimization and network management.</span></p><p><br /><br /></p><p><strong>Responsibilities</strong></p><ul><li style="font-weight: 400;"><span style="font-weight: 400;">Design, experiment and implement effective methods for data retrieval and analysis</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Maintain and improve existing data analysis techniques and reports</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Organize, analyze and interpret data to identify key insights and trends useful for game development</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Develop reports to present the data in the most easily consumable way</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Recommend actions for improvement based on information acquired</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Document marketing data standards and processes for accuracy and auditing purposes. </span></li></ul><p>&nbsp;</p><p><strong>Qualifications</strong></p><ul><li style="font-weight: 400;"><span style="font-weight: 400;">Bachelor's degree in a technical or quantitative discipline</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Familiar with basic performance metrics</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Experience in data analysis</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Experience with Google Analytics</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Experience in any of following statistical analysis software: R, Matlab, SPSS, Minitab 18, Stata, Statistix, etc.</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Should have effective communication and presentation skills (written and spoken English)</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Analytical and creative mind</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Strong sense of initiative</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">BS/MS in Computer Science, Mathematics, Statistics or a related technical or quantitative courses preferred</span></li></ul>`, jsLink: "https://www.jobstreet.com.ph/en/job/game-data-analyst-8253206", mynimoLink:""},
                       {job: 'Software Engineer', desc: `<p><strong>Job Responsibilities</strong></p><ul><li style="font-weight: 400;"><span style="font-weight: 400;">Deploy, develop, and manage backend servers and databases.</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Develop high-performance and scalable apps</span></li></ul><p><strong>Qualifications</strong></p><ul><li style="font-weight: 400;"><span style="font-weight: 400;">Programming abilities in one of the following languages: C#, Java, Go</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Strong foundation in object-oriented programming</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Background in web development</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Experience in testing/test driven development is an advantage</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Experience in designing APIs and DBs is an advantage</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Experience with version control systems (Git, SVN)</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Team player that really enjoys problem solving</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Willing to learn and highly trainable</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Has attention to details</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Good communication skills (English written and spoken)</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">BS/MS in Computer Science or a related technical field preferred</span></li></ul><p><strong></strong></p>`, jsLink: "https://www.jobstreet.com.ph/en/job/software-engineer-8294408", mynimoLink:""},
                       {job: 'Admin Officer', desc: `<p><strong>Responsibilities</strong></p><ul><li style="font-weight: 400;"><span style="font-weight: 400;">Participate in Admin and HR planning</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Help in system improvement</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Handle business and IT contracts and legal documents</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Collaborate with HR on implementing processes and policies</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Assist management and other staff to ensure compliance with applicable federal, state and local laws</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Assist in processing/updating permits and documents for PEZA, BIR, SSS, SEC, etc.</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Resolve administrative issues</span></li></ul><p><span style="font-weight: 400;"></span><strong>Qualifications</strong></p><ul><li style="font-weight: 400;"><span style="font-weight: 400;">Deep passion for work</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Strong analytical skills and implementation skills</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Strong sense of initiative</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Strong background in the following:</span></li><ul><li style="font-weight: 400;"><span style="font-weight: 400;">General financial functions</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Business law &amp; legal documentation</span></li></ul><li style="font-weight: 400;"><span style="font-weight: 400;">Can work cross-functionally in a team</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Comfortable working in a startup company</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Has happy &amp; positive disposition</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Should have a degree in Accounting, Business Management, or any related field.</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Strong time management and organizational skills</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Excellent verbal and written communication skills</span></li></ul><p><strong></strong></p>`, jslink: "", mynimoLink:""},
                    ];
        
    const jobs = jobList.map(item => <div className="jobs__item">
                                        <div className="item__title">
                                            <a className="job-item" target="blank_">{item.job}</a>
                                        </div>
                                        <div className="item__desc">
                                            <div className="desc__job" dangerouslySetInnerHTML={{__html: item.desc}}/>
                                        </div>
                                        <div className="item__desc">
                                            <a href={`mailto:recruitment@frecre.com?subject=[${item.job}]`} className="desc__button">Apply Now</a>
                                        </div>
                                    </div>);
                                    // <p>{item.desc}</p></div>
    return (
        <div className="section-info tc section-info--p10px">
                <div className={`section-info__image section--svg ${props.isVisible?'active animate':''}`}>
                        <svg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                            <style type="text/css">
                                {`.st0{fill:#B2B2B2;}
                                .st1{fill:none;stroke:#E5E5E5;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                                .st2{fill:none;stroke:#BD66D3;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}`}
                            </style>
                            <g id='XMLID_53_'>
                                <circle id='XMLID_41_' className='st0' cx='100.7' cy='333' r='19.8' />
                                <circle id='XMLID_43_' className='st0' cx='69.7' cy='297.5' r='12' />
                                <circle id='XMLID_44_' className='st0' cx='91.3' cy='263.2' r='12' />
                                <circle id='XMLID_45_' className='st0' cx='62.7' cy='251.2' r='7.7' />
                                <circle id='XMLID_46_' className='st0' cx='81.7' cy='231.7' r='5.1' />
                            </g>
                            <g id='XMLID_17_'>
                                <circle id='XMLID_38_' className='st1' cx='255.3' cy='255.9' r='227.7'
                                />
                            </g>
                            <g id='XMLID_9_'>
                                <path id='XMLID_42_' className='st1' d='M354.3,31.9c26.4,11.7,50.4,27.9,70.9,47.7'
                                />
                                <path id='XMLID_40_' className='st1' d='M27.6,346.1c-11.1-27.9-17.1-58.3-17.1-90.1c0-135.2,109.6-244.8,244.8-244.8 c19.4,0,38.4,2.3,56.5,6.6'
                                />
                                <path id='XMLID_39_' className='st1' d='M468.9,136.1c19.9,35.4,31.3,76.3,31.3,119.8c0,135.2-109.6,244.8-244.8,244.8 c-55.3,0-106.2-18.3-147.2-49.2'
                                />
                            </g>
                            <g id='XMLID_52_'>
                                <circle id='XMLID_51_' className='st0' cx='409.9' cy='353.8' r='19.8'
                                />
                                <circle id='XMLID_50_' className='st0' cx='441' cy='318.3' r='12' />
                                <circle id='XMLID_49_' className='st0' cx='419.4' cy='284' r='12' />
                                <circle id='XMLID_48_' className='st0' cx='448' cy='272' r='7.7' />
                                <circle id='XMLID_47_' className='st0' cx='428.9' cy='252.5' r='5.1' />
                            </g>
                            <g id='XMLID_94_'>
                                <circle id='XMLID_89_' className='st0' cx='270.1' cy='450.6' r='14.5'
                                />
                                <circle id='XMLID_91_' className='st0' cx='175.3' cy='431.9' r='14.9'
                                />
                                <circle id='XMLID_90_' className='st0' cx='222.1' cy='428.4' r='11.3'
                                />
                                <circle id='XMLID_88_' className='st0' cx='317.5' cy='433.7' r='18' />
                                <circle id='XMLID_87_' className='st0' cx='262.3' cy='419.6' r='6.7' />
                                <circle id='XMLID_86_' className='st0' cx='234' cy='454.3' r='3.6' />
                            </g>
                            <g id='XMLID_4_'>
                                <path id='XMLID_1_' className='st2' d='M368.4,247.3L256.7,284L145,247.3c-9.7-3.9-19-8.6-19-19V178c0-10.4,8.5-19,19-19h223.3 c10.5,0,19,8.6,19,19v50.3C387.4,238.8,379.8,243,368.4,247.3z'
                                />
                                <path id='XMLID_2_' className='st2' d='M379.1,245v85.3c0,10.4-8.5,19-19,19H153.2c-10.5,0-19-8.6-19-19V245'
                                />
                                <path id='XMLID_3_' className='st2' d='M209.5,159v-15.7c0-10.5,8.6-19,19-19h56.3c10.5,0,19,8.5,19,19V159'
                                />
                            </g>
                        </svg>
                        </div>
                        <h1 className="section-info__text section--text-center"><FormattedMessage id="FreCre_CareersTitle"/></h1>
                        <p className="section-info__text section--text-gray"><FormattedMessage id="FreCre_CareersDescription"/></p>
                        <div className="section-info__jobs">
                            {jobs}
                        </div>
                    </div>
    )
}

export default JobsSvg;
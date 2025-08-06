import React, { useState, useEffect } from 'react'
import "../Course.css"
import "./IntroAIArticle.css"

// Intercomponent imports
import Header from '../../Header/Header.jsx'
import Footer from '../../Footer/Footer.jsx'

// External dependencies
import { Link } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const IntroAIArticle = () => {
    return (
        <div className='intro-ai-article-shell'>
            <Header />
            
            {/* Breadcrumb Navigation */}
            <div className="breadcrumb-nav">
                <div className="breadcrumb-left">
                    <Link to="/my-courses" className="breadcrumb-link">My Courses</Link>
                    <ChevronRightIcon className="breadcrumb-arrow" />
                    <Link to="/introai/overview" className="breadcrumb-link">Introduction to Artificial Intelligence</Link>
                    <ChevronRightIcon className="breadcrumb-arrow" />
                    <span>Lesson 1: What Is AI?</span>
                </div>
                
                {/* Prev/Next Navigation */}
                <div className="prev-next-nav">
                    <Link to="/introai/lesson1/video" className="nav-button">
                        <ChevronLeftIcon className="nav-icon" />
                        Prev
                    </Link>
                    <Link to="/introai/lesson1/challenge" className="nav-button">
                        Next
                        <ChevronRightIcon className="nav-icon" />
                    </Link>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="main-layout">
                {/* Left Sidebar */}
                <div className="course-sidebar">
                    <div className="course-info">
                        <div className="course-icon">📖</div>
                        <div className="course-details">
                            <div className="course-label">Course</div>
                            <div className="course-title">Introduction to Artificial Intelligence</div>
                        </div>
                    </div>
                    
                    <div className="course-sections-menu">
                        <Link to="/introai/lesson1/video" className="course-section">
                            <span>Watch Video</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                        <div className="course-section-divider"></div>
                        <div className="course-section active">
                            <span>Read Article</span>
                            <ChevronRightIcon className="section-arrow" />
                        </div>
                        <div className="course-section-divider"></div>
                        <Link to="/introai/lesson1/challenge" className="course-section">
                            <span>Course Activity</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                        <div className="course-section-divider"></div>
                        <Link to="/introai/lesson1/quiz" className="course-section">
                            <span>Course Quiz</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                    </div>
                </div>

                {/* Right Content Area */}
                <div className="content-area">
                    <div className="unit-label">Article</div>
                    <h1 className="content-title">What is AI?</h1>
                    
                    {/* Article Content */}
                    <div className="article-content">
                        <h2>Definition of AI</h2>
                        <p>
                            Artificial Intelligence (AI) is the ability to perform tasks that normally require human intelligence. AI is utilized in understanding language, recognizing images, making decisions, or even learning from experience.
                        </p>
                        
                        <h2>Examples of AI</h2>
                        <p>
                            AI is used in many tools of our daily lives. For example:
                        </p>
                        <ul>
                            <li>Voice assistants like Siri or Alexa</li>
                            <li>Social media feeds that recommend what to watch</li>
                            <li>Maps and GPS apps that find the fastest route</li>
                            <li>Online shopping suggestions</li>
                            <li>Healthcare tools that help doctors diagnose faster</li>
                        </ul>
                        
                        <h2>AI Branches</h2>
                        <p>
                            AI is a large area that contains many branches that specialize in different things. These include:
                        </p>
                        <ul>
                            <li><strong>Machine Learning:</strong> AI that learns from data and gets better over time (like YouTube learning what videos you like)</li>
                            <li><strong>Computer Vision:</strong> AI that sees and understands pictures or videos (like face recognition)</li>
                            <li><strong>Natural Language Processing (NLP):</strong> AI that reads, writes, and speaks in human language (like ChatGPT)</li>
                            <li><strong>Robotics:</strong> AI that controls physical machines to move and act in the real world</li>
                        </ul>
                        
                        <h2>Types of AI</h2>
                        <p>
                            There are different types of AI that AI may advance in the future. There are three main types:
                        </p>
                        <ul>
                            <li><strong>Narrow AI:</strong> This is AI that specializes in certain tasks, which is what we have today. They are intelligent, but in only one area.</li>
                            <li><strong>General AI:</strong> General AI is a theoretical concept that we do not have yet. This type of AI would have all the same capabilities as a human. It could solve problems, learn new things, and adapt to new situations on its own.</li>
                            <li><strong>Super AI:</strong> The final type is Super AI. This is also a theoretical concept, and it would have capabilities smarter than a human in every area, like creativity, problem-solving, and decision-making.</li>
                        </ul>
                        
                        <h2>AI Ethical Concerns</h2>
                        <p>
                            AI is a powerful tool that makes life easier and allows for technical advancements; however, there are many ethical concerns surrounding decision-making, privacy violations, and job security.
                        </p>
                        <ol>
                            <li>
                                <strong>Bias and Fairness</strong>
                                <p>
                                    Information that AI generates comes from data, and this data can be provided by anybody to train the AI. Therefore, data from one group that trained the AI may result in biases that are then also transferred to another group's work. For example, a hiring algorithm trained on past job applications might favor male candidates over equally qualified female ones, simply because of patterns in past decisions. These biases can hurt people and reinforce unfair systems. That's why it's important to train AI on diverse, balanced data and test it for fairness before using it in real life.
                                </p>
                            </li>
                            <li>
                                <strong>Privacy and Data Use</strong>
                                <p>
                                    AI platforms collect and use data to generate accurate responses and make predictions. However, this data can include personal information, like one's voice, age, location, or even search history. While AI can provide many solutions and make life easier, it still raises privacy concerns. Most of the time, people don't know what data is being collected on them by their web browsers, voice assistants, and smartphones. Everyone deserves to know what data is being collected on them and how it is being used by AI.
                                </p>
                            </li>
                            <li>
                                <strong>Misinformation and Hallucination</strong>
                                <p>
                                    AI models, especially language tools like ChatGPT, can sometimes generate answers that sound right but are wrong or made up. This is called "hallucination." It's not always obvious when AI is making a mistake, because it usually sounds confident and convincing. AI might make up a quote or fact to answer a user's question, but instead, it misinforms them of critical information. In a world full of digital information, it's important to double-check what AI says, especially for important topics like health, schoolwork, or news.
                                </p>
                            </li>
                            <li>
                                <strong>Job Loss and Automation</strong>
                                <p>
                                    AI can complete certain tasks at much faster and cheaper rates than humans, causing concern for people losing their jobs to AI. It's being used in self-checkout machines, delivery robots, and even tools that can write emails or generate art. This is beneficial for businesses as it helps them reduce costs, but AI replacements of these jobs result in fewer jobs for people in areas like retail, transportation, or customer service.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default IntroAIArticle 
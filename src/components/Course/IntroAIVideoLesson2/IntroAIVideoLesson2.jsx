import React, { useState, useEffect } from 'react'
import "../Course.css"
import "./IntroAIVideoLesson2.css"

// Intercomponent imports
import Header from '../../Header/Header.jsx'
import Footer from '../../Footer/Footer.jsx'
import { suggestedVideoData } from '../../Home/homeHelper.js'

// External dependencies
import { Link } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const IntroAIVideoLesson2 = () => {
    const videoId = "dQw4w9WgXcQ"; // Placeholder video ID for lesson 2

    return (
        <div className='intro-ai-video-lesson2-shell'>
            <Header />
            
            {/* Breadcrumb Navigation */}
            <div className="breadcrumb-nav">
                <div className="breadcrumb-left">
                    <Link to="/my-courses" className="breadcrumb-link">My Courses</Link>
                    <ChevronRightIcon className="breadcrumb-arrow" />
                    <Link to="/introai/overview" className="breadcrumb-link">Introduction to Artificial Intelligence</Link>
                    <ChevronRightIcon className="breadcrumb-arrow" />
                    <span>Lesson 2: Prompt Engineering</span>
                </div>
                
                {/* Prev/Next Navigation */}
                <div className="prev-next-nav">
                    <Link to="/introai/lesson1/quiz" className="nav-button">
                        <ChevronLeftIcon className="nav-icon" />
                        Prev
                    </Link>
                    <Link to="/introai/lesson2/article" className="nav-button">
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
                        <div className="course-section active">
                            <span>Watch Video</span>
                            <ChevronRightIcon className="section-arrow" />
                        </div>
                        <div className="course-section-divider"></div>
                        <Link to="/introai/lesson2/article" className="course-section">
                            <span>Read Article</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                        <div className="course-section-divider"></div>
                        <Link to="/introai/lesson2/challenge" className="course-section">
                            <span>Course Activity</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                        <div className="course-section-divider"></div>
                        <Link to="/introai/lesson2/quiz" className="course-section">
                            <span>Course Quiz</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                    </div>
                </div>

                {/* Right Content Area */}
                <div className="content-area">
                    <div className="unit-label">Video</div>
                    
                    {/* YouTube Video */}
                    <div className="video-container">
                        <iframe 
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`} 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope" 
                            allowFullScreen
                            title="Prompt Engineering"
                        ></iframe>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default IntroAIVideoLesson2 
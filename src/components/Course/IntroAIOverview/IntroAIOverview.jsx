import React, { useState, useEffect } from 'react'
import "../Course.css"
import "./IntroAIOverview.css"

// Intercomponent imports
import Header from '../../Header/Header.jsx'
import Footer from '../../Footer/Footer.jsx'

// External dependencies
import { Link } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const IntroAIOverview = () => {
    // Course data
    const courseTitle = "Introduction to Artificial Intelligence";
    const courseDescription = "Discover the fundamentals of AI, including key concepts, applications, and the impact of artificial intelligence on modern society and various industries.";
    
    // Lesson data with completion status (for future implementation)
    const lessons = [
        { id: 1, title: "Lesson 1: What Is AI?", completed: false },
        { id: 2, title: "Lesson 2: Prompt Engineering", completed: false },
        { id: 3, title: "Lesson 3: Recommender Systems", completed: false },
        { id: 4, title: "Lesson 4: Computer Vision", completed: false },
        { id: 5, title: "Lesson 5: Building a Chatbot", completed: false }
    ];

    return (
        <div className='intro-ai-overview-shell'>
            <Header />
            
            {/* Breadcrumb Navigation */}
            <div className="breadcrumb-nav">
                <div className="breadcrumb-left">
                    <Link to="/my-courses" className="breadcrumb-link">My Courses</Link>
                    <ChevronRightIcon className="breadcrumb-arrow" />
                    <span>{courseTitle}</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="overview-content">
                <div className="course-header">
                    <h1 className="course-title">{courseTitle}</h1>
                    <p className="course-description">{courseDescription}</p>
                </div>

                <div className="lessons-container">
                    {lessons.map((lesson) => (
                        <div key={lesson.id}>
                            {lesson.id === 1 ? (
                                <Link to="/introai/lesson1/video" className="lesson-box">
                                    <div className="lesson-content">
                                        <div className="lesson-title">{lesson.title}</div>
                                        <div className="completion-circle">
                                            {lesson.completed && (
                                                <svg 
                                                    className="checkmark" 
                                                    viewBox="0 0 24 24" 
                                                    fill="none" 
                                                    stroke="currentColor"
                                                >
                                                    <polyline points="20,6 9,17 4,12"></polyline>
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ) : lesson.id === 2 ? (
                                <Link to="/introai/lesson2/video" className="lesson-box">
                                    <div className="lesson-content">
                                        <div className="lesson-title">{lesson.title}</div>
                                        <div className="completion-circle">
                                            {lesson.completed && (
                                                <svg 
                                                    className="checkmark" 
                                                    viewBox="0 0 24 24" 
                                                    fill="none" 
                                                    stroke="currentColor"
                                                >
                                                    <polyline points="20,6 9,17 4,12"></polyline>
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ) : lesson.id === 3 ? (
                                <Link to="/introai/lesson3/video" className="lesson-box">
                                    <div className="lesson-content">
                                        <div className="lesson-title">{lesson.title}</div>
                                        <div className="completion-circle">
                                            {lesson.completed && (
                                                <svg 
                                                    className="checkmark" 
                                                    viewBox="0 0 24 24" 
                                                    fill="none" 
                                                    stroke="currentColor"
                                                >
                                                    <polyline points="20,6 9,17 4,12"></polyline>
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ) : lesson.id === 4 ? (
                                <Link to="/introai/lesson4/video" className="lesson-box">
                                    <div className="lesson-content">
                                        <div className="lesson-title">{lesson.title}</div>
                                        <div className="completion-circle">
                                            {lesson.completed && (
                                                <svg 
                                                    className="checkmark" 
                                                    viewBox="0 0 24 24" 
                                                    fill="none" 
                                                    stroke="currentColor"
                                                >
                                                    <polyline points="20,6 9,17 4,12"></polyline>
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ) : lesson.id === 5 ? (
                                <Link to="/introai/lesson5/video" className="lesson-box">
                                    <div className="lesson-content">
                                        <div className="lesson-title">{lesson.title}</div>
                                        <div className="completion-circle">
                                            {lesson.completed && (
                                                <svg 
                                                    className="checkmark" 
                                                    viewBox="0 0 24 24" 
                                                    fill="none" 
                                                    stroke="currentColor"
                                                >
                                                    <polyline points="20,6 9,17 4,12"></polyline>
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                <div className="lesson-box">
                                    <div className="lesson-content">
                                        <div className="lesson-title">{lesson.title}</div>
                                        <div className="completion-circle">
                                            {lesson.completed && (
                                                <svg 
                                                    className="checkmark" 
                                                    viewBox="0 0 24 24" 
                                                    fill="none" 
                                                    stroke="currentColor"
                                                >
                                                    <polyline points="20,6 9,17 4,12"></polyline>
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default IntroAIOverview 
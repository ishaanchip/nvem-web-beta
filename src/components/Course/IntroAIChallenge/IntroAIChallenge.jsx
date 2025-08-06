import React, { useState, useEffect } from 'react'
import "../Course.css"
import "./IntroAIChallenge.css"

// Intercomponent imports
import Header from '../../Header/Header.jsx'
import Footer from '../../Footer/Footer.jsx'

// External dependencies
import { Link } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const IntroAIChallenge = () => {
    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleAnswerChange = (questionKey, value) => {
        setAnswers({
            ...answers,
            [questionKey]: value
        });
    };

    const handleSubmit = () => {
        // Check if all questions have been answered
        if (answers.question1.trim() && answers.question2.trim() && answers.question3.trim()) {
            setIsSubmitted(true);
        } else {
            alert('Please answer all questions before submitting.');
        }
    };

    const resetActivity = () => {
        setAnswers({
            question1: '',
            question2: '',
            question3: ''
        });
        setIsSubmitted(false);
    };

    return (
        <div className='intro-ai-challenge-shell'>
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
                    <Link to="/introai/lesson1/article" className="nav-button">
                        <ChevronLeftIcon className="nav-icon" />
                        Prev
                    </Link>
                    <Link to="/introai/lesson1/quiz" className="nav-button">
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
                        <Link to="/introai/lesson1/article" className="course-section">
                            <span>Read Article</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                        <div className="course-section-divider"></div>
                        <div className="course-section active">
                            <span>Course Activity</span>
                            <ChevronRightIcon className="section-arrow" />
                        </div>
                        <div className="course-section-divider"></div>
                        <Link to="/introai/lesson1/quiz" className="course-section">
                            <span>Course Quiz</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                    </div>
                </div>

                {/* Right Content Area */}
                <div className="content-area">
                    <div className="unit-label">Course Activity</div>
                    <h1 className="content-title">Online Scavenger Hunt</h1>
                    
                    {!isSubmitted ? (
                        <div className="activity-content">
                            <h2>Activity</h2>
                            <p>
                                Students will search the internet for sites that use AI and answer these questions about AI:
                            </p>

                            <div className="questions-container">
                                <div className="question-item">
                                    <h3>1. What is the website and what does the AI do on this site?</h3>
                                    <textarea
                                        className="answer-textbox"
                                        value={answers.question1}
                                        onChange={(e) => handleAnswerChange('question1', e.target.value)}
                                        placeholder="Describe the website and how it uses AI..."
                                        rows={4}
                                    />
                                </div>

                                <div className="question-item">
                                    <h3>2. Is it personalized? If so, how?</h3>
                                    <textarea
                                        className="answer-textbox"
                                        value={answers.question2}
                                        onChange={(e) => handleAnswerChange('question2', e.target.value)}
                                        placeholder="Explain if and how the AI personalizes the experience..."
                                        rows={4}
                                    />
                                </div>

                                <div className="question-item">
                                    <h3>3. What's one way it could improve?</h3>
                                    <textarea
                                        className="answer-textbox"
                                        value={answers.question3}
                                        onChange={(e) => handleAnswerChange('question3', e.target.value)}
                                        placeholder="Suggest an improvement for the AI feature..."
                                        rows={4}
                                    />
                                </div>
                            </div>

                            <div className="activity-controls">
                                <button 
                                    className="submit-button" 
                                    onClick={handleSubmit}
                                >
                                    Submit Activity
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="submission-success">
                            <div className="success-message">
                                <h2>Activity Submitted Successfully! 🎉</h2>
                                <p>Great work completing the AI Scavenger Hunt! Your responses show you're thinking critically about how AI works in the real world.</p>
                            </div>

                            <div className="submitted-answers">
                                <h3>Your Submitted Answers:</h3>
                                
                                <div className="answer-review">
                                    <h4>1. What is the website and what does the AI do on this site?</h4>
                                    <div className="submitted-answer">{answers.question1}</div>
                                </div>

                                <div className="answer-review">
                                    <h4>2. Is it personalized? If so, how?</h4>
                                    <div className="submitted-answer">{answers.question2}</div>
                                </div>

                                <div className="answer-review">
                                    <h4>3. What's one way it could improve?</h4>
                                    <div className="submitted-answer">{answers.question3}</div>
                                </div>
                            </div>

                            <div className="activity-actions">
                                <button className="secondary-button" onClick={resetActivity}>
                                    Redo Activity
                                </button>
                                <Link to="/introai/lesson1/quiz" className="primary-button">
                                    Continue to Quiz
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default IntroAIChallenge; 
 
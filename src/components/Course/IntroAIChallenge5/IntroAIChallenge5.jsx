import React, { useState, useEffect } from 'react'
import "../Course.css"
import "./IntroAIChallenge5.css"

// Intercomponent imports
import Header from '../../Header/Header.jsx'
import Footer from '../../Footer/Footer.jsx'

// External dependencies
import { Link } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const IntroAIChallenge5 = () => {
    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: ''
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
        if (answers.question1.trim() && answers.question2.trim() && answers.question3.trim() && answers.question4.trim()) {
            setIsSubmitted(true);
        } else {
            alert('Please answer all questions before submitting.');
        }
    };

    const resetActivity = () => {
        setAnswers({
            question1: '',
            question2: '',
            question3: '',
            question4: ''
        });
        setIsSubmitted(false);
    };

    return (
        <div className='intro-ai-challenge5-shell'>
            <Header />
            
            {/* Breadcrumb Navigation */}
            <div className="breadcrumb-nav">
                <div className="breadcrumb-left">
                    <Link to="/my-courses" className="breadcrumb-link">My Courses</Link>
                    <ChevronRightIcon className="breadcrumb-arrow" />
                    <Link to="/introai/overview" className="breadcrumb-link">Introduction to Artificial Intelligence</Link>
                    <ChevronRightIcon className="breadcrumb-arrow" />
                    <span>Lesson 5: Building a Chatbot</span>
                </div>
                
                {/* Prev/Next Navigation */}
                <div className="prev-next-nav">
                    <Link to="/introai/lesson5/article" className="nav-button">
                        <ChevronLeftIcon className="nav-icon" />
                        Prev
                    </Link>
                    <Link to="/introai/lesson5/quiz" className="nav-button">
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
                        <Link to="/introai/lesson5/video" className="course-section">
                            <span>Watch Video</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                        <div className="course-section-divider"></div>
                        <Link to="/introai/lesson5/article" className="course-section">
                            <span>Read Article</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                        <div className="course-section-divider"></div>
                        <div className="course-section active">
                            <span>Course Activity</span>
                            <ChevronRightIcon className="section-arrow" />
                        </div>
                        <div className="course-section-divider"></div>
                        <Link to="/introai/lesson5/quiz" className="course-section">
                            <span>Course Quiz</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                    </div>
                </div>

                {/* Right Content Area */}
                <div className="content-area">
                    <div className="unit-label">Course Activity</div>
                    <h1 className="content-title">Design Your Own Chatbot</h1>
                    
                    {!isSubmitted ? (
                        <div className="activity-content">
                            <h2>Activity</h2>
                            <p>
                                Time to become a chatbot designer! This hands-on activity will guide you through the process of planning and designing your own chatbot from scratch. Think about real problems you could solve and how you would create a chatbot to address them.
                            </p>

                            <div className="questions-container">
                                <div className="question-item">
                                    <h3>1. Choose a specific use case for your chatbot (customer service, appointment booking, learning assistant, etc.). Describe the problem it will solve, who your target users are, and what main tasks it should handle.</h3>
                                    <textarea
                                        className="answer-textbox"
                                        value={answers.question1}
                                        onChange={(e) => handleAnswerChange('question1', e.target.value)}
                                        placeholder="Describe your chatbot's purpose, target users, and main functions..."
                                        rows={4}
                                    />
                                </div>

                                <div className="question-item">
                                    <h3>2. Design a conversation flow for your chatbot. Map out how a typical interaction would go from start to finish. Include the opening greeting, main conversation paths, and how it would handle when users ask for something it can't do.</h3>
                                    <textarea
                                        className="answer-textbox"
                                        value={answers.question2}
                                        onChange={(e) => handleAnswerChange('question2', e.target.value)}
                                        placeholder="Write out a sample conversation flow with your chatbot..."
                                        rows={4}
                                    />
                                </div>

                                <div className="question-item">
                                    <h3>3. What type of chatbot would work best for your use case (rule-based, AI-powered, or hybrid)? Explain your choice and what technologies or platforms you would use to build it. Consider factors like complexity, budget, and technical requirements.</h3>
                                    <textarea
                                        className="answer-textbox"
                                        value={answers.question3}
                                        onChange={(e) => handleAnswerChange('question3', e.target.value)}
                                        placeholder="Explain your chatbot type choice and technical approach..."
                                        rows={4}
                                    />
                                </div>

                                <div className="question-item">
                                    <h3>4. How would you measure the success of your chatbot? What metrics would you track, and how would you improve it over time? Think about both user satisfaction and business goals.</h3>
                                    <textarea
                                        className="answer-textbox"
                                        value={answers.question4}
                                        onChange={(e) => handleAnswerChange('question4', e.target.value)}
                                        placeholder="Describe your success metrics and improvement strategy..."
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
                                <p>Fantastic work designing your chatbot! Your responses show you're thinking like a true chatbot designer, considering user needs, technical requirements, and success metrics. You're ready to start building!</p>
                            </div>

                            <div className="submitted-answers">
                                <h3>Your Chatbot Design:</h3>
                                
                                <div className="answer-review">
                                    <h4>1. Chatbot use case, target users, and main tasks.</h4>
                                    <div className="submitted-answer">{answers.question1}</div>
                                </div>

                                <div className="answer-review">
                                    <h4>2. Conversation flow design from start to finish.</h4>
                                    <div className="submitted-answer">{answers.question2}</div>
                                </div>

                                <div className="answer-review">
                                    <h4>3. Chatbot type and technology choices with reasoning.</h4>
                                    <div className="submitted-answer">{answers.question3}</div>
                                </div>

                                <div className="answer-review">
                                    <h4>4. Success metrics and continuous improvement strategy.</h4>
                                    <div className="submitted-answer">{answers.question4}</div>
                                </div>
                            </div>

                            <div className="activity-actions">
                                <button className="secondary-button" onClick={resetActivity}>
                                    Redo Activity
                                </button>
                                <Link to="/introai/lesson5/quiz" className="primary-button">
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

export default IntroAIChallenge5; 
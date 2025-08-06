import React, { useState } from 'react'
import "../Course.css"
import "./IntroAIChallenge3.css"

// Intercomponent imports
import Header from '../../Header/Header.jsx'
import Footer from '../../Footer/Footer.jsx'

// External dependencies
import { Link } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const IntroAIChallenge3 = () => {
    const [answers, setAnswers] = useState({
        userProfile: '',
        recommendations: '',
        whyRecommended: '',
        dataInfluence: '',
        improvement: ''
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
        if (answers.userProfile.trim() && answers.recommendations.trim() && answers.whyRecommended.trim() && answers.dataInfluence.trim() && answers.improvement.trim()) {
            setIsSubmitted(true);
        } else {
            alert('Please answer all questions before submitting.');
        }
    };

    const resetActivity = () => {
        setAnswers({
            userProfile: '',
            recommendations: '',
            whyRecommended: '',
            dataInfluence: '',
            improvement: ''
        });
        setIsSubmitted(false);
    };

    return (
        <div className='intro-ai-challenge3-shell'>
            <Header />
            
            {/* Breadcrumb Navigation */}
            <div className="breadcrumb-nav">
                <div className="breadcrumb-left">
                    <Link to="/my-courses" className="breadcrumb-link">My Courses</Link>
                    <ChevronRightIcon className="breadcrumb-arrow" />
                    <Link to="/introai/overview" className="breadcrumb-link">Introduction to Artificial Intelligence</Link>
                    <ChevronRightIcon className="breadcrumb-arrow" />
                    <span>Lesson 3: Recommender Systems</span>
                </div>
                
                {/* Prev/Next Navigation */}
                <div className="prev-next-nav">
                    <Link to="/introai/lesson3/article" className="nav-button">
                        <ChevronLeftIcon className="nav-icon" />
                        Prev
                    </Link>
                    <Link to="/introai/lesson3/quiz" className="nav-button">
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
                        <Link to="/introai/lesson3/video" className="course-section">
                            <span>Watch Video</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                        <div className="course-section-divider"></div>
                        <Link to="/introai/lesson3/article" className="course-section">
                            <span>Read Article</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                        <div className="course-section-divider"></div>
                        <div className="course-section active">
                            <span>Course Activity</span>
                            <ChevronRightIcon className="section-arrow" />
                        </div>
                        <div className="course-section-divider"></div>
                        <Link to="/introai/lesson3/quiz" className="course-section">
                            <span>Course Quiz</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                    </div>
                </div>

                {/* Right Content Area */}
                <div className="content-area">
                    <div className="unit-label">Course Activity</div>
                    <h1 className="content-title">Recommender Systems Analysis</h1>
                    
                    {!isSubmitted ? (
                        <div className="activity-content">
                            <h2>Activity: Recommendation Debugging</h2>
                            <p>
                                Help understand how recommenders work by analyzing user profiles and predicting recommendations! You'll work with fake user profiles with specific interests, then match them to the most likely recommendations and explain your reasoning.
                            </p>

                            <div className="user-profile-box">
                                <h3>Sample User Profile:</h3>
                                <div className="profile-details">
                                    <p><strong>User:</strong> Alex, 19 years old, college student</p>
                                    <p><strong>Recent Activity:</strong></p>
                                    <ul>
                                        <li>Watched 3 Marvel superhero movies in the past week</li>
                                        <li>Liked 15 action movie trailers on YouTube</li>
                                        <li>Searched for "best action movies 2024"</li>
                                        <li>Rated The Dark Knight 5/5 stars</li>
                                        <li>Skipped/stopped watching 2 romantic comedies halfway through</li>
                                        <li>Added Wonder Woman to watchlist</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="questions-container">
                                <div className="question-item">
                                    <h3>1. Create your own user profile or use the sample above. Describe the user's interests and recent activity:</h3>
                                    <textarea
                                        className="answer-textbox"
                                        value={answers.userProfile}
                                        onChange={(e) => handleAnswerChange('userProfile', e.target.value)}
                                        placeholder="Describe the user's age, interests, and recent viewing/listening/browsing activity..."
                                        rows={4}
                                    />
                                </div>

                                <div className="question-item">
                                    <h3>2. Based on this profile, what are the 3 most likely recommendations a system would make? List them:</h3>
                                    <textarea
                                        className="answer-textbox"
                                        value={answers.recommendations}
                                        onChange={(e) => handleAnswerChange('recommendations', e.target.value)}
                                        placeholder="List 3 specific recommendations (movies, songs, products, etc.) and be specific..."
                                        rows={3}
                                    />
                                </div>

                                <div className="question-item">
                                    <h3>3. Why were those recommendations made? Explain the reasoning:</h3>
                                    <textarea
                                        className="answer-textbox"
                                        value={answers.whyRecommended}
                                        onChange={(e) => handleAnswerChange('whyRecommended', e.target.value)}
                                        placeholder="Explain the patterns and connections that led to these recommendations..."
                                        rows={4}
                                    />
                                </div>

                                <div className="question-item">
                                    <h3>4. What specific data might have influenced these suggestions? (user behavior, content features, etc.)</h3>
                                    <textarea
                                        className="answer-textbox"
                                        value={answers.dataInfluence}
                                        onChange={(e) => handleAnswerChange('dataInfluence', e.target.value)}
                                        placeholder="Identify the specific data points that influenced the recommendations..."
                                        rows={4}
                                    />
                                </div>

                                <div className="question-item">
                                    <h3>5. Suggest one new idea for improving this recommender system:</h3>
                                    <textarea
                                        className="answer-textbox"
                                        value={answers.improvement}
                                        onChange={(e) => handleAnswerChange('improvement', e.target.value)}
                                        placeholder="Describe how you would improve the recommendation algorithm or user experience..."
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
                                <p>Great work debugging the recommender system! You've demonstrated a solid understanding of how AI systems analyze user data to make personalized recommendations.</p>
                            </div>

                            <div className="submitted-answers">
                                <h3>Your Submitted Answers:</h3>
                                
                                <div className="answer-review">
                                    <h4>1. User Profile Description:</h4>
                                    <div className="submitted-answer">{answers.userProfile}</div>
                                </div>

                                <div className="answer-review">
                                    <h4>2. Most Likely Recommendations:</h4>
                                    <div className="submitted-answer">{answers.recommendations}</div>
                                </div>

                                <div className="answer-review">
                                    <h4>3. Why Those Recommendations Were Made:</h4>
                                    <div className="submitted-answer">{answers.whyRecommended}</div>
                                </div>

                                <div className="answer-review">
                                    <h4>4. Data That Influenced The Suggestions:</h4>
                                    <div className="submitted-answer">{answers.dataInfluence}</div>
                                </div>

                                <div className="answer-review">
                                    <h4>5. Improvement Idea:</h4>
                                    <div className="submitted-answer">{answers.improvement}</div>
                                </div>
                            </div>

                            <div className="activity-actions">
                                <button className="secondary-button" onClick={resetActivity}>
                                    Redo Activity
                                </button>
                                <Link to="/introai/lesson3/quiz" className="primary-button">
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

export default IntroAIChallenge3; 
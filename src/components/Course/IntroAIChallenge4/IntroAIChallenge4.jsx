import React, { useState } from 'react'
import "../Course.css"
import "./IntroAIChallenge4.css"

// Intercomponent imports
import Header from '../../Header/Header.jsx'
import Footer from '../../Footer/Footer.jsx'

// External dependencies
import { Link } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const IntroAIChallenge4 = () => {
    const [answers, setAnswers] = useState({
        projectType: '',
        trainingProcess: '',
        results: '',
        challenges: '',
        learnings: ''
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
        if (answers.projectType.trim() && answers.trainingProcess.trim() && answers.results.trim() && answers.challenges.trim() && answers.learnings.trim()) {
            setIsSubmitted(true);
        } else {
            alert('Please answer all questions before submitting.');
        }
    };

    const resetActivity = () => {
        setAnswers({
            projectType: '',
            trainingProcess: '',
            results: '',
            challenges: '',
            learnings: ''
        });
        setIsSubmitted(false);
    };

    return (
        <div className='intro-ai-challenge4-shell'>
            <Header />
            
            {/* Breadcrumb Navigation */}
            <div className="breadcrumb-nav">
                <div className="breadcrumb-left">
                    <Link to="/my-courses" className="breadcrumb-link">My Courses</Link>
                    <ChevronRightIcon className="breadcrumb-arrow" />
                    <Link to="/introai/overview" className="breadcrumb-link">Introduction to Artificial Intelligence</Link>
                    <ChevronRightIcon className="breadcrumb-arrow" />
                    <span>Lesson 4: Computer Vision</span>
                </div>
                
                {/* Prev/Next Navigation */}
                <div className="prev-next-nav">
                    <Link to="/introai/lesson4/article" className="nav-button">
                        <ChevronLeftIcon className="nav-icon" />
                        Prev
                    </Link>
                    <Link to="/introai/lesson4/quiz" className="nav-button">
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
                        <Link to="/introai/lesson4/video" className="course-section">
                            <span>Watch Video</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                        <div className="course-section-divider"></div>
                        <Link to="/introai/lesson4/article" className="course-section">
                            <span>Read Article</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                        <div className="course-section-divider"></div>
                        <div className="course-section active">
                            <span>Course Activity</span>
                            <ChevronRightIcon className="section-arrow" />
                        </div>
                        <div className="course-section-divider"></div>
                        <Link to="/introai/lesson4/quiz" className="course-section">
                            <span>Course Quiz</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                    </div>
                </div>

                {/* Right Content Area */}
                <div className="content-area">
                    <div className="unit-label">Course Activity</div>
                    <h1 className="content-title">Computer Vision in Action</h1>
                    
                    {!isSubmitted ? (
                        <div className="activity-content">
                            <h2>Activity: Train Your Own Image Classifier</h2>
                            <p>
                                Learn how computers recognize images by creating and training your own simple image classifier using Teachable Machine by Google! This hands-on activity will help you understand how AI learns to identify different objects and images.
                            </p>

                            <div className="activity-box">
                                <h3>📚 Instructions:</h3>
                                <ol>
                                    <li>Go to <a href="https://teachablemachine.withgoogle.com/" target="_blank" rel="noopener noreferrer" className="tm-link">https://teachablemachine.withgoogle.com/</a></li>
                                    <li>Choose "Image Project" to start training an image classifier</li>
                                    <li>Create at least 2 different classes (categories) of images</li>
                                    <li>Upload or take photos for each class (at least 10 images per class)</li>
                                    <li>Train your model and test it with new images</li>
                                    <li>Answer the questions below about your experience</li>
                                </ol>
                                <p><strong>Example project ideas:</strong> Dogs vs Cats, Different types of food, Your friends vs other people, Indoor vs Outdoor scenes, Different hand gestures</p>
                            </div>

                            <div className="questions-container">
                                <div className="question-item">
                                    <h3>1. What type of image classifier did you create? Describe your project and the classes/categories you chose:</h3>
                                    <textarea
                                        className="answer-textbox"
                                        value={answers.projectType}
                                        onChange={(e) => handleAnswerChange('projectType', e.target.value)}
                                        placeholder="Describe your image classifier project (e.g., 'I created a classifier to distinguish between cats and dogs')..."
                                        rows={3}
                                    />
                                </div>

                                <div className="question-item">
                                    <h3>2. Describe your training process. How many images did you use for each class? What types of images did you choose and why?</h3>
                                    <textarea
                                        className="answer-textbox"
                                        value={answers.trainingProcess}
                                        onChange={(e) => handleAnswerChange('trainingProcess', e.target.value)}
                                        placeholder="Explain how you trained your model - number of images, variety, etc..."
                                        rows={4}
                                    />
                                </div>

                                <div className="question-item">
                                    <h3>3. How well did your trained model perform? Test it with new images and describe the results. Were there any surprising successes or failures?</h3>
                                    <textarea
                                        className="answer-textbox"
                                        value={answers.results}
                                        onChange={(e) => handleAnswerChange('results', e.target.value)}
                                        placeholder="Describe how your model performed when you tested it with new images..."
                                        rows={4}
                                    />
                                </div>

                                <div className="question-item">
                                    <h3>4. What challenges did you encounter? What made it difficult for the model to correctly classify certain images?</h3>
                                    <textarea
                                        className="answer-textbox"
                                        value={answers.challenges}
                                        onChange={(e) => handleAnswerChange('challenges', e.target.value)}
                                        placeholder="Describe any challenges or limitations you noticed..."
                                        rows={4}
                                    />
                                </div>

                                <div className="question-item">
                                    <h3>5. What did you learn about how computers "see" and recognize images? How is it similar to or different from how humans recognize images?</h3>
                                    <textarea
                                        className="answer-textbox"
                                        value={answers.learnings}
                                        onChange={(e) => handleAnswerChange('learnings', e.target.value)}
                                        placeholder="Reflect on what you learned about computer vision and image recognition..."
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
                                <p>Excellent work training your own image classifier! You've gained hands-on experience with how computer vision systems learn to recognize and classify images.</p>
                            </div>

                            <div className="submitted-answers">
                                <h3>Your Submitted Answers:</h3>
                                
                                <div className="answer-review">
                                    <h4>1. Your Image Classifier Project:</h4>
                                    <div className="submitted-answer">{answers.projectType}</div>
                                </div>

                                <div className="answer-review">
                                    <h4>2. Training Process:</h4>
                                    <div className="submitted-answer">{answers.trainingProcess}</div>
                                </div>

                                <div className="answer-review">
                                    <h4>3. Model Performance and Results:</h4>
                                    <div className="submitted-answer">{answers.results}</div>
                                </div>

                                <div className="answer-review">
                                    <h4>4. Challenges Encountered:</h4>
                                    <div className="submitted-answer">{answers.challenges}</div>
                                </div>

                                <div className="answer-review">
                                    <h4>5. What You Learned:</h4>
                                    <div className="submitted-answer">{answers.learnings}</div>
                                </div>
                            </div>

                            <div className="activity-actions">
                                <button className="secondary-button" onClick={resetActivity}>
                                    Redo Activity
                                </button>
                                <Link to="/introai/lesson4/quiz" className="primary-button">
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

export default IntroAIChallenge4; 
import React, { useState } from 'react'
import "../Course.css"
import "./IntroAIQuiz3.css"

// Intercomponent imports
import Header from '../../Header/Header.jsx'
import Footer from '../../Footer/Footer.jsx'

// External dependencies
import { Link } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const IntroAIQuiz3 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [
        {
            question: "What does a recommender system do?",
            options: [
                "Build robots",
                "Suggest content or products you might like",
                "Fix broken code",
                "Delete emails"
            ],
            correct: 1,
            explanation: "Recommender systems are AI-driven tools that analyze user preferences and behavior to give personalized suggestions or recommendations for content, products, or services."
        },
        {
            question: "What kind of filtering recommends items based on what similar users liked?",
            options: [
                "Content-based filtering",
                "Collaborative filtering",
                "Vision filtering",
                "Neural filtering"
            ],
            correct: 1,
            explanation: "Collaborative filtering looks at what other users who are similar to you liked and recommends items based on those patterns of similarity."
        },
        {
            question: "Which of these platforms uses recommender systems?",
            options: [
                "YouTube",
                "Netflix",
                "Spotify",
                "All of the above"
            ],
            correct: 3,
            explanation: "All of these platforms use recommender systems - YouTube for video recommendations, Netflix for show suggestions, and Spotify for music playlists and discoveries."
        },
        {
            question: "Which data helps a content-based recommender system?",
            options: [
                "GPS",
                "Item features like genre or topic",
                "Friend lists",
                "Chat transcripts"
            ],
            correct: 1,
            explanation: "Content-based filtering analyzes the features and characteristics of items (like genre, topic, style) to recommend similar content based on what you've previously liked."
        },
        {
            question: "What is a possible downside of recommender systems?",
            options: [
                "They help too much",
                "They can trap users in \"filter bubbles\"",
                "They are never wrong",
                "They work slowly"
            ],
            correct: 1,
            explanation: "Filter bubbles occur when recommender systems only show content similar to what you've seen before, potentially limiting exposure to diverse perspectives and new ideas."
        }
    ];

    const handleAnswerSelect = (answerIndex) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [currentQuestion]: answerIndex
        });
    };

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const prevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const submitQuiz = () => {
        let correctCount = 0;
        questions.forEach((question, index) => {
            if (selectedAnswers[index] === question.correct) {
                correctCount++;
            }
        });
        setScore(correctCount);
        setShowResults(true);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setSelectedAnswers({});
        setShowResults(false);
        setScore(0);
    };

    const getScoreMessage = () => {
        const percentage = (score / questions.length) * 100;
        if (percentage >= 80) return "Outstanding! You have a solid understanding of recommender systems.";
        if (percentage >= 60) return "Great job! You're grasping the key concepts of recommendation algorithms.";
        if (percentage >= 40) return "Good effort! Review the lesson to strengthen your understanding of recommender systems.";
        return "Keep learning! Recommender systems are complex but important - don't give up!";
    };

    return (
        <div className='intro-ai-quiz3-shell'>
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
                    <Link to="/introai/lesson3/challenge" className="nav-button">
                        <ChevronLeftIcon className="nav-icon" />
                        Prev
                    </Link>
                    <Link to="/introai/overview" className="nav-button">
                        Complete
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
                        <Link to="/introai/lesson3/challenge" className="course-section">
                            <span>Course Activity</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                        <div className="course-section-divider"></div>
                        <div className="course-section active">
                            <span>Course Quiz</span>
                            <ChevronRightIcon className="section-arrow" />
                        </div>
                    </div>
                </div>

                {/* Right Content Area */}
                <div className="content-area">
                    <div className="unit-label">Course Quiz</div>
                    <h1 className="content-title">Test Your Recommender Systems Knowledge</h1>
                    
                    {!showResults ? (
                        <div className="quiz-content">
                            <div className="quiz-progress">
                                <div className="progress-bar">
                                    <div 
                                        className="progress-fill" 
                                        style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                    ></div>
                                </div>
                                <span className="progress-text">
                                    Question {currentQuestion + 1} of {questions.length}
                                </span>
                            </div>

                            <div className="question-container">
                                <h2 className="question-title">
                                    {questions[currentQuestion].question}
                                </h2>

                                <div className="options-container">
                                    {questions[currentQuestion].options.map((option, index) => (
                                        <button
                                            key={index}
                                            className={`option-button ${
                                                selectedAnswers[currentQuestion] === index ? 'selected' : ''
                                            }`}
                                            onClick={() => handleAnswerSelect(index)}
                                        >
                                            <span className="option-letter">
                                                {String.fromCharCode(65 + index)}
                                            </span>
                                            <span className="option-text">{option}</span>
                                        </button>
                                    ))}
                                </div>

                                <div className="question-navigation">
                                    <button 
                                        className="nav-btn secondary" 
                                        onClick={prevQuestion}
                                        disabled={currentQuestion === 0}
                                    >
                                        Previous
                                    </button>
                                    
                                    {currentQuestion === questions.length - 1 ? (
                                        <button 
                                            className="nav-btn primary" 
                                            onClick={submitQuiz}
                                            disabled={Object.keys(selectedAnswers).length !== questions.length}
                                        >
                                            Submit Quiz
                                        </button>
                                    ) : (
                                        <button 
                                            className="nav-btn primary" 
                                            onClick={nextQuestion}
                                            disabled={selectedAnswers[currentQuestion] === undefined}
                                        >
                                            Next
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="results-content">
                            <div className="score-display">
                                <h2>Quiz Complete!</h2>
                                <div className="score-circle">
                                    <span className="score-number">{score}</span>
                                    <span className="score-total">/ {questions.length}</span>
                                </div>
                                <p className="score-percentage">
                                    {Math.round((score / questions.length) * 100)}%
                                </p>
                                <p className="score-message">{getScoreMessage()}</p>
                            </div>

                            <div className="answer-review">
                                <h3>Review Your Answers</h3>
                                {questions.map((question, index) => {
                                    const isCorrect = selectedAnswers[index] === question.correct;
                                    const userAnswer = selectedAnswers[index];
                                    const correctAnswer = question.correct;
                                    
                                    return (
                                        <div key={index} className="review-question">
                                            <div className="review-header">
                                                <span className="question-number">Q{index + 1}</span>
                                                <span className={`result-indicator ${isCorrect ? 'correct' : 'incorrect'}`}>
                                                    {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                                                </span>
                                            </div>
                                            <p className="review-question-text">{question.question}</p>
                                            
                                            {!isCorrect && (
                                                <div className="answer-comparison">
                                                    <div className="user-answer">
                                                        <strong>Your answer:</strong> {question.options[userAnswer]}
                                                    </div>
                                                    <div className="correct-answer">
                                                        <strong>Correct answer:</strong> {question.options[correctAnswer]}
                                                    </div>
                                                </div>
                                            )}
                                            
                                            <div className="explanation-box">
                                                <strong>Explanation:</strong> {question.explanation}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="results-actions">
                                <button className="nav-btn secondary" onClick={resetQuiz}>
                                    Retake Quiz
                                </button>
                                <Link to="/introai/overview" className="nav-btn primary">
                                    Continue Learning
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

export default IntroAIQuiz3; 
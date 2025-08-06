import React, { useState } from 'react'
import "../Course.css"
import "./IntroAIQuiz4.css"

// Intercomponent imports
import Header from '../../Header/Header.jsx'
import Footer from '../../Footer/Footer.jsx'

// External dependencies
import { Link } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const IntroAIQuiz4 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [
        {
            question: "What is computer vision?",
            options: [
                "A camera lens",
                "AI that reads and understands images",
                "A new type of glasses",
                "A filter bubble"
            ],
            correct: 1,
            explanation: "Computer vision is a branch of AI that enables machines to analyze visual information and make decisions based on what they see, essentially giving computers the ability to 'see' and understand images."
        },
        {
            question: "Which task does computer vision NOT usually do?",
            options: [
                "Identify faces",
                "Recognize objects",
                "Speak different languages",
                "Sort images"
            ],
            correct: 2,
            explanation: "Computer vision focuses on visual tasks like identifying faces, recognizing objects, and sorting images. Speaking different languages is primarily handled by natural language processing, not computer vision."
        },
        {
            question: "Which is an example of computer vision in real life?",
            options: [
                "Google Translate",
                "Spotify playlists",
                "Face unlock on a phone",
                "Text messaging"
            ],
            correct: 2,
            explanation: "Face unlock on phones uses computer vision to analyze facial features and recognize the user. The other options don't primarily rely on visual analysis."
        },
        {
            question: "What is used to train an image model?",
            options: [
                "Random numbers",
                "Labeled data",
                "Internet speed",
                "Barcode scanners"
            ],
            correct: 1,
            explanation: "Labeled data (images that are correctly tagged with what they contain) is essential for training computer vision models so the AI can learn to recognize patterns and make accurate predictions."
        },
        {
            question: "Which of these is an optional demo tool to train a model?",
            options: [
                "YouTube",
                "Photoshop",
                "Teachable Machine",
                "WordPress"
            ],
            correct: 2,
            explanation: "Teachable Machine by Google is a user-friendly tool that allows people to train their own machine learning models, including image classification models, without needing programming experience."
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
        if (percentage >= 80) return "Outstanding! You have a solid understanding of computer vision concepts.";
        if (percentage >= 60) return "Great job! You're grasping the key principles of computer vision technology.";
        if (percentage >= 40) return "Good effort! Review the lesson to strengthen your understanding of computer vision.";
        return "Keep learning! Computer vision is a fascinating field - keep exploring!";
    };

    return (
        <div className='intro-ai-quiz4-shell'>
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
                    <Link to="/introai/lesson4/challenge" className="nav-button">
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
                        <Link to="/introai/lesson4/challenge" className="course-section">
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
                    <h1 className="content-title">Test Your Computer Vision Knowledge</h1>
                    
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

export default IntroAIQuiz4; 
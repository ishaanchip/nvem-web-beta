import React, { useState, useEffect } from 'react'
import "../Course.css"
import "./IntroAIQuiz5.css"

// Intercomponent imports
import Header from '../../Header/Header.jsx'
import Footer from '../../Footer/Footer.jsx'

// External dependencies
import { Link } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const IntroAIQuiz5 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [
        {
            question: "What is a chatbot?",
            options: [
                "A robot that can move around and chat with people",
                "An AI-powered software that simulates human conversation through text or voice",
                "A video calling application for businesses",
                "A social media platform for automated messaging"
            ],
            correct: 1,
            explanation: "A chatbot is an AI-powered software application designed to simulate human conversation through text or voice interactions, providing automated responses to user queries."
        },
        {
            question: "Which technology is most important for helping chatbots understand human language?",
            options: [
                "Computer graphics",
                "Natural Language Processing (NLP)",
                "Database management",
                "Web design"
            ],
            correct: 1,
            explanation: "Natural Language Processing (NLP) is crucial for chatbots as it enables them to understand, interpret, and respond to human language in a meaningful way."
        },
        {
            question: "What type of chatbot follows predetermined rules and decision trees?",
            options: [
                "AI-powered chatbot",
                "Rule-based chatbot",
                "Hybrid chatbot",
                "Voice chatbot"
            ],
            correct: 1,
            explanation: "Rule-based chatbots follow predetermined rules and decision trees. They work well for simple, structured conversations but struggle with unexpected inputs."
        },
        {
            question: "What is the main advantage of chatbots for businesses?",
            options: [
                "They can completely replace all human employees",
                "They only work during business hours",
                "They provide 24/7 availability and can handle multiple conversations simultaneously",
                "They are only useful for large companies"
            ],
            correct: 2,
            explanation: "The main advantage of chatbots is their ability to provide 24/7 availability and handle multiple conversations simultaneously, improving customer service efficiency and reducing costs."
        },
        {
            question: "What should you do first when building a chatbot?",
            options: [
                "Choose the most expensive platform available",
                "Define the purpose, goals, and target users",
                "Start coding immediately",
                "Design the visual interface"
            ],
            correct: 1,
            explanation: "The first step in building a chatbot is to clearly define its purpose, goals, and target users. This foundation guides all subsequent decisions about features, platform, and design."
        },
        {
            question: "What is intent recognition in chatbots?",
            options: [
                "The chatbot's ability to speak multiple languages",
                "The process of identifying what the user is trying to accomplish",
                "The chatbot's memory of previous conversations",
                "The speed at which the chatbot responds"
            ],
            correct: 1,
            explanation: "Intent recognition is the process of identifying what the user is trying to accomplish with their message, allowing the chatbot to provide appropriate responses and take correct actions."
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
        if (percentage >= 80) return "Outstanding! You're ready to start building your own chatbot!";
        if (percentage >= 60) return "Great job! You have a solid understanding of chatbot fundamentals.";
        if (percentage >= 40) return "Good effort! Review the lesson to strengthen your chatbot knowledge.";
        return "Keep learning! Chatbot development is an exciting field with lots to discover!";
    };

    return (
        <div className='intro-ai-quiz5-shell'>
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
                    <Link to="/introai/lesson5/challenge" className="nav-button">
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
                        <Link to="/introai/lesson5/challenge" className="course-section">
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
                    <h1 className="content-title">Test Your Chatbot Knowledge</h1>
                    
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

export default IntroAIQuiz5; 
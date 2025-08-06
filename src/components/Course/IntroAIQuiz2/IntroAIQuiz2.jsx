import React, { useState } from 'react'
import "../Course.css"
import "./IntroAIQuiz2.css"

// Intercomponent imports
import Header from '../../Header/Header.jsx'
import Footer from '../../Footer/Footer.jsx'

// External dependencies
import { Link } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const IntroAIQuiz2 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [
        {
            question: "What is a \"prompt\"?",
            options: [
                "A robot's brain",
                "Instructions given to an AI model",
                "A file storage system",
                "The internet browser"
            ],
            correct: 1,
            explanation: "A prompt is a set of instructions or input text given to an AI model to guide it in generating a specific response or completing a task."
        },
        {
            question: "Which of these prompts is likely to give the best result?",
            options: [
                "Tell me something.",
                "Write.",
                "You are a science tutor. Explain gravity to a 7th grader in 3 sentences.",
                "Blah blah."
            ],
            correct: 2,
            explanation: "This prompt is specific, provides a role for the AI (science tutor), defines the audience (7th grader), and sets clear parameters (3 sentences), making it much more likely to produce a useful response."
        },
        {
            question: "Which is NOT a tip for writing good prompts?",
            options: [
                "Be specific",
                "Use clear roles",
                "Use random words",
                "Give a format"
            ],
            correct: 2,
            explanation: "Using random words makes prompts confusing and unclear. Good prompts should be specific, use clear roles, and specify the desired format."
        },
        {
            question: "Which of these tools generates images from prompts?",
            options: [
                "ChatGPT",
                "DALL·E",
                "Netflix",
                "Siri"
            ],
            correct: 1,
            explanation: "DALL·E is an AI tool specifically designed to create images from text prompts, while ChatGPT focuses on text generation."
        },
        {
            question: "How do large language models like ChatGPT work with prompts?",
            options: [
                "They guess at random",
                "They respond based on patterns in training data",
                "They search Google",
                "They ignore prompts"
            ],
            correct: 1,
            explanation: "Large language models analyze prompts and generate responses based on patterns they learned from vast amounts of text data during their training process."
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
        if (percentage >= 80) return "Outstanding! You have a solid grasp of prompt engineering principles.";
        if (percentage >= 60) return "Great job! You're developing strong prompt engineering skills.";
        if (percentage >= 40) return "Good effort! Review the lesson material to strengthen your prompting abilities.";
        return "Keep learning! Prompt engineering skills improve with practice - don't give up!";
    };

    return (
        <div className='intro-ai-quiz2-shell'>
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
                    <Link to="/introai/lesson2/challenge" className="nav-button">
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
                        <Link to="/introai/lesson2/video" className="course-section">
                            <span>Watch Video</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
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
                        <div className="course-section active">
                            <span>Course Quiz</span>
                            <ChevronRightIcon className="section-arrow" />
                        </div>
                    </div>
                </div>

                {/* Right Content Area */}
                <div className="content-area">
                    <div className="unit-label">Course Quiz</div>
                    <h1 className="content-title">Test Your Prompt Engineering Knowledge</h1>
                    
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

export default IntroAIQuiz2; 
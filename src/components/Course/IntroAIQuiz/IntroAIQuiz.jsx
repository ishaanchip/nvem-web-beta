import React, { useState, useEffect } from 'react'
import "../Course.css"
import "./IntroAIQuiz.css"

// Intercomponent imports
import Header from '../../Header/Header.jsx'
import Footer from '../../Footer/Footer.jsx'

// External dependencies
import { Link } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const IntroAIQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [
        {
            question: "Which of the following is an example of Narrow AI?",
            options: [
                "A robot that can feel emotions",
                "A machine that paints like Picasso and writes poems",
                "A chatbot that answers your questions about weather",
                "A computer that controls the entire internet"
            ],
            correct: 2,
            explanation: "A chatbot that answers weather questions is Narrow AI because it's designed to perform one specific task. Narrow AI systems are specialized for particular functions, unlike the other options which would require more general intelligence."
        },
        {
            question: "What is one key difference between General AI and Super AI?",
            options: [
                "General AI is imaginary, Super AI is real",
                "General AI matches human intelligence, Super AI exceeds it",
                "Super AI is slower",
                "General AI can only be used for games"
            ],
            correct: 1,
            explanation: "General AI would match human intelligence across all domains, while Super AI would exceed human intelligence in every field. Both are currently theoretical, but Super AI represents the next level beyond human-level artificial general intelligence."
        },
        {
            question: "Which of these is NOT a concern about AI?",
            options: [
                "Privacy",
                "Personalization",
                "Misinformation",
                "Bias"
            ],
            correct: 1,
            explanation: "Personalization is actually a benefit of AI, not a concern. AI's ability to personalize experiences (like recommending content you might like) is generally seen as positive, while privacy, misinformation, and bias are legitimate concerns about AI systems."
        },
        {
            question: "Where might you already use AI without realizing it?",
            options: [
                "Riding a bike",
                "Using voice assistants like Siri or Alexa",
                "Drinking water",
                "Doing push-ups"
            ],
            correct: 1,
            explanation: "Voice assistants like Siri or Alexa use AI technologies including natural language processing and machine learning. The other activities (riding a bike, drinking water, doing push-ups) are purely physical activities that don't involve AI technology."
        },
        {
            question: "Why is Narrow AI considered \"narrow\"?",
            options: [
                "It doesn't use much electricity",
                "It only works on one task or skill",
                "It's not real AI",
                "It's slow to learn"
            ],
            correct: 1,
            explanation: "Narrow AI is called 'narrow' because it's designed to perform only one specific task or skill very well, such as playing chess, recognizing faces, or translating languages. It cannot transfer its learning to other unrelated tasks like humans can."
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
        if (percentage >= 80) return "Excellent work! You have a great understanding of AI basics.";
        if (percentage >= 60) return "Good job! You're getting the hang of AI concepts.";
        if (percentage >= 40) return "Not bad! Review the material and try again to improve.";
        return "Keep learning! AI is a complex topic, so don't worry about taking time to understand it.";
    };

    return (
        <div className='intro-ai-quiz-shell'>
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
                    <Link to="/introai/lesson1/challenge" className="nav-button">
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
                        <Link to="/introai/lesson1/challenge" className="course-section">
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
                    <h1 className="content-title">Test Your AI Knowledge</h1>
                    
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

export default IntroAIQuiz; 
 
import React from 'react'
import "../Course.css"
import "./IntroAIArticle3.css"

// Intercomponent imports
import Header from '../../Header/Header.jsx'
import Footer from '../../Footer/Footer.jsx'

// External dependencies
import { Link } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const IntroAIArticle3 = () => {
    return (
        <div className='intro-ai-article3-shell'>
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
                    <Link to="/introai/lesson3/video" className="nav-button">
                        <ChevronLeftIcon className="nav-icon" />
                        Prev
                    </Link>
                    <Link to="/introai/lesson3/challenge" className="nav-button">
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
                        <div className="course-section active">
                            <span>Read Article</span>
                            <ChevronRightIcon className="section-arrow" />
                        </div>
                        <div className="course-section-divider"></div>
                        <Link to="/introai/lesson3/challenge" className="course-section">
                            <span>Course Activity</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                        <div className="course-section-divider"></div>
                        <Link to="/introai/lesson3/quiz" className="course-section">
                            <span>Course Quiz</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                    </div>
                </div>

                {/* Right Content Area */}
                <div className="content-area">
                    <div className="unit-label">Article</div>
                    <h1 className="content-title">Recommender Systems</h1>
                    
                    {/* Article Content */}
                    <div className="article-content">
                        <p>
                            Recommender Systems are AI-driven tools that give the user personalized suggestions or recommendations. These are commonly used by social media apps and streaming services. For example, Netflix suggests a movie based on your previous watches, or TikTok provides content based on which previous videos you've interacted with. These systems help you find new things without having to search for them yourself.
                        </p>
                        
                        <h2>How Recommender Systems Work</h2>
                        <p>
                            At a basic level, recommender systems try to answer this question:<br />
                            <strong>What should we show this person next?</strong>
                        </p>
                        
                        <p>To figure that out, the system considers a couple of factors:</p>
                        <ul>
                            <li>What you've watched, listened to, or clicked on</li>
                            <li>How long did you spend on it</li>
                            <li>What you skipped or ignored</li>
                            <li>What people similar to you liked</li>
                        </ul>
                        
                        <p>
                            Over time, the system gets better at guessing your preferences, allowing you to be engaged with a service for a longer period of time.
                        </p>
                        
                        <h2>Types of Recommender Systems</h2>
                        <p>AI decides what to recommend to you using these two methods.</p>
                        
                        <h3>1. Collaborative Filtering</h3>
                        <p>
                            This first method looks at what other users who are similar to you liked. If you and another user both like Movie A, and they also liked Movie B, the system might recommend Movie B to you based on a pattern of similarities.
                        </p>
                        
                        <h3>2. Content-Based Filtering</h3>
                        <p>
                            This method looks at the features of the items you like. For example, if you like action movies with car chases and spies, the AI will look for other movies that match that description, even if no one else has watched them yet.
                        </p>
                        
                        <p>Most modern apps use a mix of both for better results.</p>
                        
                        <h2>Real-life examples</h2>
                        <ul>
                            <li><strong>YouTube:</strong> Recommends videos based on what you've watched and liked</li>
                            <li><strong>Netflix:</strong> Suggests shows based on your viewing history and ratings</li>
                            <li><strong>TikTok:</strong> Uses your watch time and likes to build a "For You Page"</li>
                            <li><strong>Spotify:</strong> Creates playlists like "Discover Weekly" based on your listening habits</li>
                        </ul>
                        
                        <h2>Ethical Concerns</h2>
                        <p>While recommender systems are helpful, they also come with ethical questions.</p>
                        
                        <p>
                            One big issue is the "filter bubble". This is when you only see content that agrees with your past choices and never get exposed to new ideas. For example, if you always watch one type of news or listen to one genre of music, the AI might hide everything else from you. This can make it hard to learn about new perspectives while being stuck in a loop.
                        </p>
                        
                        <p>
                            Another concern is bias. If the AI is trained on data that favors certain people, topics, or cultures, it might ignore or exclude others. The AI's data can unfairly determine which content should be recommended over another.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default IntroAIArticle3 
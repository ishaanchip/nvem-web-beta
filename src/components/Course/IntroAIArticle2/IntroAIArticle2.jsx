import React from 'react'
import "../Course.css"
import "./IntroAIArticle2.css"

// Intercomponent imports
import Header from '../../Header/Header.jsx'
import Footer from '../../Footer/Footer.jsx'

// External dependencies
import { Link } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const IntroAIArticle2 = () => {
    return (
        <div className='intro-ai-article2-shell'>
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
                    <Link to="/introai/lesson2/video" className="nav-button">
                        <ChevronLeftIcon className="nav-icon" />
                        Prev
                    </Link>
                    <Link to="/introai/lesson2/challenge" className="nav-button">
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
                        <Link to="/introai/lesson2/video" className="course-section">
                            <span>Watch Video</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                        <div className="course-section-divider"></div>
                        <div className="course-section active">
                            <span>Read Article</span>
                            <ChevronRightIcon className="section-arrow" />
                        </div>
                        <div className="course-section-divider"></div>
                        <Link to="/introai/lesson2/challenge" className="course-section">
                            <span>Course Activity</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                        <div className="course-section-divider"></div>
                        <Link to="/introai/lesson2/quiz" className="course-section">
                            <span>Course Quiz</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                    </div>
                </div>

                {/* Right Content Area */}
                <div className="content-area">
                    <div className="unit-label">Article</div>
                    <h1 className="content-title">Prompt Engineering</h1>
                    
                    {/* Article Content */}
                    <div className="article-content">
                        <p>
                            AI generates information or completes a task that it is told to do, but how should you tell the AI? This concept is called prompting, and it is crucial in determining the way the AI will respond to the user. Prompts can be questions, commands, or even descriptions. Learning how to write better prompts is a big part of working with AI— this is called prompt engineering.
                        </p>
                        
                        <h2 className="green-title">Why Prompts Matter</h2>
                        <p>
                            AI tools like ChatGPT, Claude, and DALL-E don't understand the world like humans do. They analyze the prompt they're given, look for patterns in their memory, and generate a response. If your prompt is vague, you'll get a vague answer. If your prompt is clear and specific, the AI will usually give you something much better. Think of prompts as instructions: the better the instructions, the better the results.
                        </p>
                        
                        <h2 className="green-title">How AI Analyzes Prompts</h2>
                        <p>
                            Large Language Models (LLMs) are trained on huge amounts of text from the internet. They don't "think," but they're good at guessing what word (or image or idea) comes next. When you type something like "Write a poem about pizza," the AI finds patterns in its training to create a fun poem. When you say, "You are a friendly science teacher. Explain gravity," it acts like that character and responds clearly. Prompts control how the AI acts and what information it delivers.
                        </p>
                        
                        <h2 className="green-title">Prompting Tips</h2>
                        <p>These tips can help make your AI assistant more helpful and creative:</p>
                        <ol>
                            <li>
                                <strong>Be Specific:</strong> Instead of "Tell me about animals," try "Give me 5 fun facts about elephants."
                            </li>
                            <li>
                                <strong>Use Roles:</strong> Begin your prompt with "You are a…" Example: "You are a math tutor who explains in simple steps."
                            </li>
                            <li>
                                <strong>Give a Format:</strong> Tell the AI what kind of answer you want: a list, a poem, a story, a chart, etc. Example: "List 3 study tips in bullet points."
                            </li>
                        </ol>

                        <h2 className="green-title">Different Types of AI</h2>
                        <p>There are a variety of AI tools that specialize in creating different things like research, stories, art, music, and more. Here are a few popular AI tools that generate different types of creations:</p>
                        <ul>
                            <li><strong>ChatGPT</strong> – Writes and answers questions</li>
                            <li><strong>DALL·E</strong> – Creates images from text prompts</li>
                            <li><strong>MusicLM</strong> – Makes music from your description</li>
                            <li><strong>Craiyon</strong> – A free image generator like DALL·E</li>
                        </ul>

                        <h2 className="green-title">Creative Prompt Examples</h2>
                        <ul>
                            <li>"Write a joke about a robot learning to dance."</li>
                            <li>"Make a short poem about missing the school bus."</li>
                            <li>"Draw a picture of a taco flying through space." (DALL·E prompt)</li>
                            <li>"You are a helpful teacher. Create a 3-question quiz on the water cycle."</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default IntroAIArticle2 
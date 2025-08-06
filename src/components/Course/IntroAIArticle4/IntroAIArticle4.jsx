import React from 'react'
import "../Course.css"
import "./IntroAIArticle4.css"

// Intercomponent imports
import Header from '../../Header/Header.jsx'
import Footer from '../../Footer/Footer.jsx'

// External dependencies
import { Link } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const IntroAIArticle4 = () => {
    return (
        <div className='intro-ai-article4-shell'>
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
                    <Link to="/introai/lesson4/video" className="nav-button">
                        <ChevronLeftIcon className="nav-icon" />
                        Prev
                    </Link>
                    <Link to="/introai/lesson4/challenge" className="nav-button">
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
                        <div className="course-section active">
                            <span>Read Article</span>
                            <ChevronRightIcon className="section-arrow" />
                        </div>
                        <div className="course-section-divider"></div>
                        <Link to="/introai/lesson4/challenge" className="course-section">
                            <span>Course Activity</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                        <div className="course-section-divider"></div>
                        <Link to="/introai/lesson4/quiz" className="course-section">
                            <span>Course Quiz</span>
                            <ChevronRightIcon className="section-arrow" />
                        </Link>
                    </div>
                </div>

                {/* Right Content Area */}
                <div className="content-area">
                    <div className="unit-label">Article</div>
                    <h1 className="content-title">Computer Vision</h1>
                    
                    {/* Article Content */}
                    <div className="article-content">
                        <p>
                            Computer Vision is another popular type of AI that can be seen in many different technologies like facial recognition software, Snapchat filters, and self-driving cars. This branch of AI helps machines and computers "see" their environment, allowing them to analyze their environment. But how exactly does it do this?
                        </p>
                        
                        <h2 className="green-title">What Is Computer Vision?</h2>
                        <p>
                            Computer vision is the science of teaching machines to analyze visual information and make decisions based on what they see. Similar to how our brains recognize a cat or a tree by its shape and color, AI models learn to spot patterns and label them. However, instead of learning images after looking at them like humans, AI sees the images as numbers. It uses those numbers to recognize patterns, edges, and shapes, which it compares to things it has learned before.
                        </p>
                        
                        <h2 className="green-title">What Can Computer Vision Do?</h2>
                        
                        <h3>Image Classification</h3>
                        <p>
                            The AI looks at an entire image and decides what single category it belongs to. It doesn't point out where something is; instead, it just says what the whole picture is mostly about. The AI compares the patterns in the image (like shapes and textures) with things it has learned before. It picks the label with the highest match.
                        </p>
                        <p><strong>Examples:</strong></p>
                        <ul>
                            <li>A photo of a golden retriever is labeled: "dog."</li>
                            <li>A satellite image might be labeled: "forest."</li>
                            <li>A food recognition app might label a photo: "cheeseburger."</li>
                        </ul>
                        
                        <h3>Object Detection</h3>
                        <p>
                            Object detection says what's in the image, and it also finds and locates multiple objects by drawing boxes around them. The AI scans the image in small sections, using sliding windows or feature maps, and predicts what object is in each region.
                        </p>
                        <p><strong>Examples:</strong></p>
                        <ul>
                            <li>Detecting 3 people, 1 dog, and a car in a photo</li>
                            <li>Identifying bananas and apples in a grocery shelf image</li>
                            <li>Spotting all cars and traffic signs in a street photo</li>
                        </ul>
                        
                        <h3>Facial Recognition</h3>
                        <p>
                            Facial detection finds where a face is in an image or video. Facial recognition goes further—it tries to identify whose face it is. AI learns facial landmarks like the distance between eyes, the shape of the nose, and the jawline. For recognition, it compares this data to stored profiles.
                        </p>
                        <p><strong>Examples:</strong></p>
                        <ul>
                            <li>Your phone uses face detection to know where your face is for filters</li>
                            <li>Face recognition logs you into your phone without a password</li>
                            <li>Some social media apps tag friends in photos automatically</li>
                        </ul>
                        
                        <h3>Scene Comprehension</h3>
                        <p>
                            Scene understanding lets the AI recognize an entire environment and label each part of it. It can tell what objects are present and how they relate to one another. The AI analyzes each pixel or area and assigns it a label (like "road," "sky," "tree," or "person"). It also considers context, like how objects interact (e.g., a person sitting on a couch).
                        </p>
                        <p><strong>Examples:</strong></p>
                        <ul>
                            <li>Recognizing a kitchen by labeling "stove," "sink," "fridge"</li>
                            <li>In AR apps, identifying the floor and walls to place virtual objects</li>
                            <li>Helping self-driving cars understand roads vs. sidewalks</li>
                        </ul>
                        
                        <h3>Text Recognition</h3>
                        <p>
                            AI detects and reads printed or handwritten text from images and videos. The system detects where text is located in an image, then converts the shapes of the letters into digital text that can be edited or read aloud.
                        </p>
                        <p><strong>Examples:</strong></p>
                        <ul>
                            <li>Taking a photo of your homework and turning it into editable text</li>
                            <li>Translating signs in another language using your phone camera</li>
                            <li>Reading license plates or scanned documents</li>
                        </ul>
                        
                        <h3>Motion Tracking</h3>
                        <p>
                            AI detects where the major points of a person's body are (head, hands, feet, etc.) and tracks how they move over time. Using keypoints (dots on elbows, knees, etc.), the AI creates a kind of "stick figure" from the camera input. This helps it understand gestures, balance, or posture.
                        </p>
                        <p><strong>Examples:</strong></p>
                        <ul>
                            <li>A fitness app gives feedback on your squats</li>
                            <li>A video game recognizes your jumping or dancing</li>
                            <li>A sports app tracks athletes' movements for performance review</li>
                        </ul>
                        
                        <h3>Visual Search</h3>
                        <p>
                            Visual search tools let you search the internet or a database using a picture instead of words. The AI analyzes the visual features (color, shape, size) and compares them to a massive collection of images to find the closest matches.
                        </p>
                        <p><strong>Examples:</strong></p>
                        <ul>
                            <li>Take a picture of the shoes and find similar ones online</li>
                            <li>Scan a flower to find its name</li>
                            <li>Snap a mystery snack to find what it's called and where to buy it</li>
                        </ul>
                        
                        <h2 className="green-title">How Computer Vision Works</h2>
                        <p>
                            Computer vision works by teaching computers to understand images the way humans do, but with math and data. When a machine sees a picture, it first turns it into a grid of pixels, with each pixel represented by numbers showing color and brightness. These numbers are processed by special AI systems called convolutional neural networks (CNNs), which are designed to detect patterns like edges, shapes, and textures. As the data passes through different layers of the network, the AI learns to recognize more complex features like eyes, cars, or traffic signs. Then, they use this labeled data to build a pattern. This labeled data will train the AI by giving it thousands of images that are correctly tagged. At last, the AI model can analyze its environment visually and identify objects based on the data it's given.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default IntroAIArticle4 
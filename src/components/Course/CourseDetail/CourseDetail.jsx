import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './CourseDetail.css';

const CourseDetail = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const navigate = useNavigate();

  // Updated course data to match Dashboard previews with longer descriptions
  const courses = {
    1: {
      id: 1,
      title: "Introduction to Artificial Intelligence",
      description: "Discover the fundamentals of AI, including key concepts, applications, and the impact of artificial intelligence on modern society and various industries. This comprehensive course covers machine learning basics, neural networks, natural language processing, and computer vision. You'll explore real-world AI applications in healthcare, finance, transportation, and entertainment while understanding ethical considerations and future implications of AI technology. Perfect for beginners who want to understand how AI is transforming our world.",
      difficulty: "Beginner",
      duration: "4 weeks",
      students: "2,341",
      type: "Self-Paced",
      lessons: "5",
      instructors: ["Dr. Sarah Chen", "Prof. Michael Rodriguez"],
      courseName: "intro_ai",
      canEnroll: true,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    2: {
      id: 2,
      title: "Python Basics",
      description: "Master the fundamentals of Python programming, including syntax, data structures, functions, and object-oriented programming concepts. This course provides hands-on experience with Python's core features, teaching you how to write clean, efficient code. You'll learn about variables, loops, conditionals, functions, classes, and modules while building practical projects. The course covers debugging techniques, best practices, and prepares you for advanced programming concepts and data science applications.",
      difficulty: "Beginner",
      duration: "3 weeks", 
      students: "3,456",
      type: "Self-Paced",
      lessons: "8",
      instructors: ["Dr. Emily Watson"],
      courseName: "python_basics",
      canEnroll: false,
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    3: {
      id: 3,
      title: "Introduction to Machine Learning",
      description: "Learn the core principles of machine learning, including supervised and unsupervised learning, model evaluation, and practical applications. This comprehensive course covers regression, classification, clustering, and neural networks while providing hands-on experience with popular ML libraries like scikit-learn and TensorFlow. You'll work with real datasets, learn data preprocessing techniques, feature engineering, and model optimization. The course includes projects in predictive analytics, recommendation systems, and automated decision-making.",
      difficulty: "Intermediate",
      duration: "6 weeks",
      students: "1,897",
      type: "Self-Paced",
      lessons: "15",
      instructors: ["Dr. James Liu", "Prof. Maria Garcia"],
      courseName: "machine_learning",
      canEnroll: false,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    4: {
      id: 4,
      title: "Natural Language Processing",
      description: "Understand how computers process and analyze human language using modern NLP techniques, from text analysis to language models. This advanced course covers tokenization, sentiment analysis, named entity recognition, and language modeling using state-of-the-art frameworks like spaCy, NLTK, and Transformers. You'll explore attention mechanisms, BERT, GPT models, and learn to build chatbots, text summarization systems, and language translation applications. Perfect for those interested in conversational AI and text analytics.",
      difficulty: "Intermediate",
      duration: "7 weeks",
      students: "1,234",
      type: "Self-Paced",
      lessons: "18",
      instructors: ["Dr. Rachel Kim", "Prof. David Anderson"],
      courseName: "nlp_course",
      canEnroll: false,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    5: {
      id: 5,
      title: "Computer Vision Basics",
      description: "Learn how machines interpret and understand visual information, covering image processing, feature detection, and object recognition. This practical course teaches you to work with OpenCV, implement CNN architectures for image classification, and explore advanced topics like object detection, facial recognition, and image segmentation. You'll build real-time computer vision applications, understand convolutional neural networks, and learn techniques for medical imaging, autonomous vehicles, and augmented reality applications.",
      difficulty: "Intermediate",
      duration: "8 weeks",
      students: "987",
      type: "Self-Paced",
      lessons: "20",
      instructors: ["Dr. Kevin Zhang", "Prof. Lisa Murphy"],
      courseName: "computer_vision",
      canEnroll: false,
      image: "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    6: {
      id: 6,
      title: "Deep Learning Fundamentals",
      description: "Dive deep into neural networks, backpropagation, and advanced deep learning architectures including CNNs, RNNs, and transformers. This comprehensive course covers the mathematical foundations of deep learning, optimization algorithms, regularization techniques, and practical implementation using TensorFlow and PyTorch. You'll explore cutting-edge architectures, learn about transfer learning, generative models, and work on projects in computer vision, natural language processing, and reinforcement learning applications.",
      difficulty: "Advanced",
      duration: "10 weeks",
      students: "765",
      type: "Self-Paced",
      lessons: "25",
      instructors: ["Dr. Priya Patel", "Prof. Robert Johnson"],
      courseName: "deep_learning",
      canEnroll: false,
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  };

  const checkEnrollmentStatus = () => {
    const existingCourses = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
    const enrolled = existingCourses.some(c => c.id === parseInt(courseId));
    setIsEnrolled(enrolled);
  };

  const handleEnroll = () => {
    if (!course.canEnroll || isEnrolled) return;
    
    // Get existing enrolled courses
    const existingCourses = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
    
    // Add course to enrolled courses
    const enrolledCourse = {
      id: course.id,
      title: course.title,
      difficulty: course.difficulty,
      lessons: course.lessons,
      progress: 0,
      image: course.image,
      courseName: course.courseName,
      // Use a more stable date format to prevent inconsistencies
      enrolledDate: new Date().toISOString().split('T')[0] // YYYY-MM-DD format
    };
    
    const updatedCourses = [...existingCourses, enrolledCourse];
    localStorage.setItem('enrolledCourses', JSON.stringify(updatedCourses));
    
    setIsEnrolled(true);
    
    // Redirect to My Courses
    navigate('/my-courses');
  };

  useEffect(() => {
    const courseData = courses[courseId];
    if (courseData) {
      setCourse(courseData);
      checkEnrollmentStatus();
    }

    // Listen for storage changes to update enrollment status
    const handleStorageChange = () => {
      checkEnrollmentStatus();
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Remove the aggressive interval polling that was causing UI updates every second
    // Instead, we'll rely on storage events and component state

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [courseId]);

  if (!course) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#000000', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Course not found</p>
      </div>
    );
  }

  return (
    <div className="course-detail-container">
      <Header />
      <div className="course-detail-content">
        {/* Back Button */}
        <Link to="/courses" className="back-arrow">
          <svg className="back-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Courses
        </Link>

        <div className="course-main-layout">
          <div className="course-left-section">
            {/* Title Row */}
            <div className="course-header-row">
              <h1 className="course-detail-title">{course.title}</h1>
            </div>
            
            {/* Course Image */}
            <div className="course-image-section">
              <img src={course.image} alt={course.title} className="course-detail-image" />
            </div>
            
            {/* Course Description */}
            <div className="course-description-section">
              <p className="course-detail-description">{course.description}</p>
            </div>
          </div>

          <div className="course-right-section">
            {/* Enroll Button - positioned at title height */}
            <div className="sidebar-enroll-button">
              {course.canEnroll ? (
                isEnrolled ? (
                  <button className="enroll-button enrolled" disabled>
                    Enrolled!
                  </button>
                ) : (
                  <button onClick={handleEnroll} className="enroll-button">
                    Enroll
                  </button>
                )
              ) : (
                <button className="enroll-button coming-soon" disabled>
                  Coming Soon
                </button>
              )}
            </div>

            {/* Course Info Menu - positioned at image top */}
            <div className="sidebar-course-info">
              <div className="course-info-card">
                <h3>Course Info</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <strong>Difficulty:</strong>
                    <span>{course.difficulty}</span>
                  </div>
                  <div className="info-item">
                    <strong>Course Type:</strong>
                    <span>{course.type}</span>
                  </div>
                  <div className="info-item">
                    <strong>Lesson Count:</strong>
                    <span>{course.lessons}</span>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetail; 
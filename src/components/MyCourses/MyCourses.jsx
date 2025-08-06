import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MyCourses = () => {
  // State for search functionality and enrolled courses
  const [searchTerm, setSearchTerm] = useState('');
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    // Load enrolled courses from localStorage
    const courses = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
    
    // Update any existing "Introduction to Artificial Intelligence" courses to have correct lesson count
    const updatedCourses = courses.map(course => {
      if (course.title === "Introduction to Artificial Intelligence" && course.lessons === "12") {
        return { ...course, lessons: "5" };
      }
      return course;
    });
    
    // Only update localStorage and state if there are actual changes
    if (JSON.stringify(updatedCourses) !== JSON.stringify(courses)) {
      localStorage.setItem('enrolledCourses', JSON.stringify(updatedCourses));
      setEnrolledCourses(updatedCourses);
    } else {
      setEnrolledCourses(courses);
    }
  }, []); // Remove dependency array to prevent unnecessary re-runs

  // Filter courses based on search term
  const filteredCourses = enrolledCourses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRemoveCourse = (courseId) => {
    const updatedCourses = enrolledCourses.filter(course => course.id !== courseId);
    setEnrolledCourses(updatedCourses);
    localStorage.setItem('enrolledCourses', JSON.stringify(updatedCourses));
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#000000',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    paddingTop: '100px'
  };

  const titleStyle = {
    color: 'white',
    fontSize: '3.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '3rem',
    background: 'linear-gradient(135deg, #16a34a, #22c55e, #ffffff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const coursesContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    paddingBottom: '3rem'
  };

  const searchFilterBarStyle = {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    marginBottom: '2rem',
    maxWidth: '1200px',
    margin: '0 auto 2rem auto',
    width: '100%'
  };

  const searchInputStyle = {
    flex: '1',
    padding: '0.75rem 1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease'
  };

  const editButtonStyle = {
    backgroundColor: '#dc2626',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '0.75rem 1.5rem',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    outline: 'none',
    minWidth: '80px',
    textAlign: 'center'
  };

  const emptyStateStyle = {
    textAlign: 'center',
    padding: '4rem 2rem',
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '1.1rem'
  };

  const coursesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
    maxWidth: '1200px',
    margin: '2rem auto 0 auto'
  };

  const courseCardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.15)',
    maxWidth: '400px',
    width: '100%',
    position: 'relative'
  };

  const removeButtonStyle = {
    position: 'absolute',
    top: '0.75rem',
    right: '0.75rem',
    backgroundColor: '#dc2626',
    border: 'none',
    borderRadius: '4px',
    color: 'white',
    fontSize: '0.7rem',
    fontWeight: '600',
    cursor: 'pointer',
    padding: '0.25rem 0.5rem',
    transition: 'all 0.3s ease',
    zIndex: 10,
    boxShadow: '0 2px 8px rgba(220, 38, 38, 0.4)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const courseImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    backgroundColor: '#22c55e'
  };

  const courseContentStyle = {
    padding: '1.5rem'
  };

  const courseTitleStyle = {
    color: 'white',
    fontSize: '1.4rem',
    fontWeight: 'bold',
    marginBottom: '0.8rem',
    lineHeight: '1.3',
    minHeight: '3.6rem',
    display: 'flex',
    alignItems: 'flex-start'
  };

  const courseInfoStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1rem'
  };

  const courseTagStyle = {
    backgroundColor: 'rgba(34, 197, 94, 0.2)',
    color: '#22c55e',
    padding: '0.3rem 0.8rem',
    borderRadius: '12px',
    fontSize: '0.8rem',
    fontWeight: '500',
    border: '1px solid rgba(34, 197, 94, 0.3)'
  };

  const courseStatsStyle = {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '0.8rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const progressBarStyle = {
    width: '100%',
    height: '6px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '3px',
    overflow: 'hidden',
    marginTop: '0.5rem'
  };

  const progressFillStyle = (progress) => ({
    width: `${progress}%`,
    height: '100%',
    backgroundColor: '#22c55e',
    borderRadius: '4px',
    transition: 'width 0.3s ease'
  });

  const continueButtonStyle = {
    background: 'linear-gradient(135deg, #15803d, #16a34a)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '0.5rem 1.5rem',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <Header />
      
      <div style={coursesContainerStyle}>
        <h1 style={titleStyle}>My Courses</h1>
        
        {/* Search Bar and Edit Button */}
        <div style={searchFilterBarStyle}>
          <input
            type="text"
            placeholder="Search my courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={searchInputStyle}
            onFocus={(e) => {
              e.target.style.borderColor = '#22c55e';
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            }}
          />
          {enrolledCourses.length > 0 && (
            <button
              style={editButtonStyle}
              onClick={toggleEditMode}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#b91c1c';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#dc2626';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              {isEditMode ? 'Cancel' : 'Edit'}
            </button>
          )}
        </div>
        
        {/* Course Grid or Empty State */}
        {enrolledCourses.length === 0 ? (
        <div style={emptyStateStyle}>
          <div style={{
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: 'rgba(34, 197, 94, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              border: '2px solid rgba(34, 197, 94, 0.3)'
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" style={{ color: '#22c55e' }}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
              </svg>
            </div>
            <h3 style={{
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              No Courses Yet
            </h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '1rem',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}>
              You haven't enrolled in any courses yet. Browse our course catalog to get started on your learning journey!
            </p>
              <Link
                to="/courses"
              style={{
                backgroundColor: '#22c55e',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                padding: '0.75rem 2rem',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                  outline: 'none',
                  textDecoration: 'none',
                  display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#16a34a';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#22c55e';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Browse Courses
              </Link>
            </div>
          </div>
        ) : (
          <div style={coursesGridStyle}>
            {filteredCourses.length === 0 ? (
              <div style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '3rem',
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '1.1rem'
              }}>
                No courses found matching your search.
              </div>
            ) : (
              filteredCourses.map((course) => (
                <div 
                  key={course.id}
                  style={courseCardStyle}
                  onMouseEnter={(e) => {
                    if (!isEditMode) {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(34, 197, 94, 0.15), 0 4px 16px rgba(0, 0, 0, 0.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isEditMode) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.15)';
                    }
                  }}
                >
                  {isEditMode && (
                    <button
                      style={removeButtonStyle}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveCourse(course.id);
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#b91c1c';
                        e.target.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#dc2626';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      Remove
            </button>
                  )}
                  <img 
                    src={course.image} 
                    alt={course.title}
                    style={courseImageStyle}
                  />
                  
                  <div style={courseContentStyle}>
                    <h3 style={courseTitleStyle}>{course.title}</h3>
                    
                    <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem', marginBottom: '1rem' }}>
                      Enrolled: {course.enrolledDate}
                    </div>
                    
                    <div style={courseInfoStyle}>
                      <div style={courseTagStyle}>
                        {course.difficulty}
                      </div>
                      <div style={courseStatsStyle}>
                        <span>{course.lessons} lessons</span>
                        <span>•</span>
                        <span>{course.progress}% complete</span>
                      </div>
                    </div>

                    <div style={progressBarStyle}>
                      <div style={progressFillStyle(course.progress)}></div>
                    </div>
                    
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'center',
                      marginTop: '1rem'
                    }}>
                      {course.title === "Introduction to Artificial Intelligence" ? (
                        <Link 
                          to="/introai/overview"
                          style={continueButtonStyle}
                          onMouseEnter={(e) => {
                            e.target.style.background = 'linear-gradient(135deg, #14532d, #15803d)';
                            e.target.style.transform = 'translateY(-1px)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'linear-gradient(135deg, #15803d, #16a34a)';
                            e.target.style.transform = 'translateY(0)';
                          }}
                        >
                          Continue Course
                        </Link>
                      ) : (
                        <Link 
                          to={`/video-walkthrough/${course.courseName}`} 
                          style={continueButtonStyle}
                          onMouseEnter={(e) => {
                            e.target.style.background = 'linear-gradient(135deg, #14532d, #15803d)';
                            e.target.style.transform = 'translateY(-1px)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'linear-gradient(135deg, #15803d, #16a34a)';
                            e.target.style.transform = 'translateY(0)';
                          }}
                        >
                          Continue Course
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyCourses; 
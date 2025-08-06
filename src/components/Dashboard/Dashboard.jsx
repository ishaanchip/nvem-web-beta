import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Dashboard = () => {
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('default');

  // Sample course data for previews
  const courses = [
    {
      id: 1,
      title: "Introduction to Artificial Intelligence",
      description: "Discover the fundamentals of AI, including key concepts, applications, and the impact of artificial intelligence on modern society and various industries.",
      difficulty: "Beginner",
      duration: "4 weeks",
      students: "2,341",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Python Basics",
      description: "Master the fundamentals of Python programming, including syntax, data structures, functions, and object-oriented programming concepts.",
      difficulty: "Beginner",
      duration: "3 weeks", 
      students: "3,456",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Introduction to Machine Learning",
      description: "Learn the core principles of machine learning, including supervised and unsupervised learning, model evaluation, and practical applications.",
      difficulty: "Intermediate",
      duration: "6 weeks",
      students: "1,897",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Natural Language Processing",
      description: "Understand how computers process and analyze human language using modern NLP techniques, from text analysis to language models.",
      difficulty: "Intermediate",
      duration: "7 weeks",
      students: "1,234",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Computer Vision Basics",
      description: "Learn how machines interpret and understand visual information, covering image processing, feature detection, and object recognition.",
      difficulty: "Intermediate",
      duration: "8 weeks",
      students: "987",
      image: "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "Deep Learning Fundamentals",
      description: "Dive deep into neural networks, backpropagation, and advanced deep learning architectures including CNNs, RNNs, and transformers.",
      difficulty: "Advanced",
      duration: "10 weeks",
      students: "765",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  // Filter and search logic
  const filteredCourses = useMemo(() => {
    let filtered = [...courses];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting/filtering
    switch (selectedFilter) {
      case 'name-az':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-za':
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'difficulty-beginner':
        filtered = filtered.filter(course => course.difficulty === 'Beginner');
        break;
      case 'difficulty-intermediate':
        filtered = filtered.filter(course => course.difficulty === 'Intermediate');
        break;
      case 'difficulty-advanced':
        filtered = filtered.filter(course => course.difficulty === 'Advanced');
        break;
      default:
        // Keep original order
        break;
    }

    return filtered;
  }, [courses, searchTerm, selectedFilter]);

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
    width: '100%'
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

  const courseDescriptionStyle = {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '0.9rem',
    lineHeight: '1.5',
    marginBottom: '1.2rem'
  };

  const courseInfoStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '0.5rem'
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



  const searchFilterBarStyle = {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    marginBottom: '2rem',
    flexWrap: 'wrap'
  };

  const searchInputStyle = {
    flex: '1',
    minWidth: '250px',
    padding: '0.75rem 1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease'
  };

  const filterSelectStyle = {
    padding: '0.75rem 2.5rem 0.75rem 1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    minWidth: '180px',
    appearance: 'none',
    backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%23ffffff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")',
    backgroundPosition: 'right 0.75rem center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '1.5em 1.5em'
  };

  const resultsCountStyle = {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '0.9rem',
    marginLeft: 'auto'
  };

  return (
    <div style={containerStyle}>
      <Header />
      
      <div style={coursesContainerStyle}>
        <h1 style={titleStyle}>Courses</h1>
        
        {/* Search and Filter Bar */}
        <div style={searchFilterBarStyle}>
          <input
            type="text"
            placeholder="Search courses..."
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
          
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            style={filterSelectStyle}
            onFocus={(e) => {
              e.target.style.borderColor = '#22c55e';
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            }}
          >
            <option value="default" style={{backgroundColor: '#1a1a1a', color: 'white'}}>Default Order</option>
            <option value="name-az" style={{backgroundColor: '#1a1a1a', color: 'white'}}>Name A-Z</option>
            <option value="name-za" style={{backgroundColor: '#1a1a1a', color: 'white'}}>Name Z-A</option>
            <option value="difficulty-beginner" style={{backgroundColor: '#1a1a1a', color: 'white'}}>Beginner Only</option>
            <option value="difficulty-intermediate" style={{backgroundColor: '#1a1a1a', color: 'white'}}>Intermediate Only</option>
            <option value="difficulty-advanced" style={{backgroundColor: '#1a1a1a', color: 'white'}}>Advanced Only</option>
          </select>
          
          <div style={resultsCountStyle}>
            {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found
          </div>
        </div>
        
        <div style={coursesGridStyle}>
          {filteredCourses.length === 0 ? (
            <div style={{
              gridColumn: '1 / -1',
              textAlign: 'center',
              padding: '3rem',
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '1.1rem'
            }}>
              No courses found matching your search criteria.
            </div>
          ) : (
            filteredCourses.map((course) => (
            <Link 
              key={course.id}
              to={`/course/${course.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div 
              style={courseCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(34, 197, 94, 0.15), 0 4px 16px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.15)';
              }}
            >
              <img 
                src={course.image} 
                alt={course.title}
                style={courseImageStyle}
              />
              
              <div style={courseContentStyle}>
                <h3 style={courseTitleStyle}>{course.title}</h3>
                <p style={courseDescriptionStyle}>{course.description}</p>
                
                <div style={courseInfoStyle}>
                  <div style={courseTagStyle}>
                    {course.difficulty}
                  </div>
                  </div>
                </div>
              </div>
            </Link>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard; 
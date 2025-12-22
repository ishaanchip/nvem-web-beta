import React, {useState, useEffect} from 'react'
import "./Home.css"

//images & icons

//intercomponent imports
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MiniCourse from './MiniCourse/MiniCourse';
import BetaBadge from '../BetaBadge';
import { suggestedVideoData, createNvemAccount, nvemLandingText} from './homeHelper';
import { getYoutubeVideo } from '../generalHelper/youtubeAPI';


//external dependenices
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';


const Home = () => {

  // FAQ functionality
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset to account for fixed header
      const headerHeight = 80; // Fixed header height
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight - 20; // 20px extra padding

      window.scrollTo({
        top: sectionId === 'home' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <div className='computer-view'>
      <Header />
      <div style={{ paddingTop: '120px', textAlign: 'center' }}>
        <BetaBadge />
      </div>
      <div style={{ paddingTop: '0px' }}>
        <main style={{ 
          padding: '1rem 2rem', 
          maxWidth: '1200px', 
          margin: '0 auto',
          color: 'white'
        }}>
            <section id="home" style={{ marginBottom: '4rem' }} className='main-title'>
              <h1 style={{ 
                fontSize: '4rem', 
                fontWeight: 'bold', 
                marginTop: '1rem',
                marginBottom: '1rem',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #16a34a, #22c55e, #ffffff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                AI Education Simplified
              </h1>
              <p style={{ 
                fontSize: '1.1rem', 
                textAlign: 'center',
                marginTop: '0.5rem',
                marginBottom: '2rem',
                opacity: 0.9,
                color: 'white',
                maxWidth: '800px',
                margin: '0.5rem auto 2rem auto'
              }}>
                NVEM is a 501(c)(3) non-profit organization that offers a practical introduction to AI.
              </p>
              
            </section>
          <section className='latest-nvem' style={{
                maxWidth: '900px',
                margin: '0 auto 4rem auto',
                gap: '2rem'
              }}>
                <div style={{
                  width: '300px',
                  height: '250px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '0.9rem',
                  opacity: 0.7,
                  flexShrink: 0
                }}>
                  <a href="https://www.instagram.com/p/DSiWf0CD-hZ/?img_index=1" target="_blank"><img src="https://res.cloudinary.com/dsrfbwrcb/image/upload/v1766424198/Screenshot_2025-12-22_at_12.23.14_PM_qli2jm.png" alt="nvem_in_house_event" / ></a>
                </div>
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <h3 style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                    NVEM's Latest Event
                  </h3>
                  <p style={{
                    fontSize: '1.2rem',
                    color: '#22c55e',
                    marginBottom: '0.8rem',
                    fontWeight: '600'
                  }}>
                    📍 In House Event
                  </p>
                  <p style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginBottom: '0.8rem',
                    lineHeight: '1.6'
                  }}>
                    💌 click the picture to check out our instagram for more!
                  </p>
                  <a href="https://docs.google.com/presentation/d/1PZkwLpOfnNBWJCiNDOGBcqfpqYoBnXGYXy0nFcT-SkA/edit?usp=sharing" target='_blank'>
                    <p style={{
                      fontSize: '1rem',
                      background: 'linear-gradient(135deg, #16a34a, #22c55e, #ffffff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      lineHeight: '1.6'
                    }}>
                      view the discussed lesson here
                    </p>
                  </a>
                </div>
            </section>

          <section id="about" style={{ marginBottom: '4rem', marginTop: '1rem' }}>
            <h2 style={{ 
              fontSize: '3.5rem', 
              fontWeight: 'bold', 
              marginBottom: '3rem',
              textAlign: 'center',
              color: 'white'
            }}>
              About Us
            </h2>


            {/* Ishaan - Left side */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '4rem',
              maxWidth: '900px',
              margin: '0 auto 4rem auto',
              gap: '2rem'
            }}>
              <div style={{
                width: '200px',
                height: '200px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '0.9rem',
                opacity: 0.7,
                flexShrink: 0
              }}>
                <img src="https://res.cloudinary.com/dsrfbwrcb/image/upload/v1754856856/Chip_Learning_Logo_-_Prelim_3_xgh850.png" alt="ishaan_chiplunkar_img"/ >
              </div>
              <div style={{ flex: 1, textAlign: 'left' }}>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: '-0.5rem',
                  marginBottom: '0.2rem'
                }}>
                  Ishaan Chiplunkar
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#22c55e',
                  marginBottom: '0.8rem',
                  fontWeight: '600'
                }}>
                  Chief Technology Officer
                </p>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6'
                }}>
                  Developing innovative educational technologies and leading the technical vision for NVEM's platform.
                </p>
              </div>
            </div>
            


            {/* Robert - Right side */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '4rem',
              maxWidth: '900px',
              margin: '0 auto 4rem auto',
              gap: '2rem',
              flexDirection: 'row-reverse'
            }}>
              <div style={{
                width: '200px',
                height: '200px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '0.9rem',
                opacity: 0.7,
                flexShrink: 0
              }}>
                  <img src="https://res.cloudinary.com/dsrfbwrcb/image/upload/v1755539444/Chip_Learning_Logo_-_Prelim_4_hyyjsp.png" alt="robert_zhang_img"/ >
              </div>
              <div style={{ flex: 1, textAlign: 'right' }}>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: '-0.5rem',
                  marginBottom: '0.2rem'
                }}>
                  Robert Zhang
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#22c55e',
                  marginBottom: '0.8rem',
                  fontWeight: '600'
                }}>
                  President
                </p>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6'
                }}>
                  Leading the organization's mission to make AI education accessible and practical for students.
                </p>
              </div>
            </div>

                        {/* Vrishin - Left side */}
                        <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '4rem',
              maxWidth: '900px',
              margin: '0 auto 4rem auto',
              gap: '2rem'
            }}>
              <div style={{
                width: '200px',
                height: '200px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '0.9rem',
                opacity: 0.7,
                flexShrink: 0
              }}>
                  <img src="https://res.cloudinary.com/dsrfbwrcb/image/upload/v1755539615/Chip_Learning_Logo_-_Prelim_5_yhfdve.png" alt="vrishin_chenreddy_img"/ >
              </div>
              <div style={{ flex: 1, textAlign: 'left' }}>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: '-0.5rem',
                  marginBottom: '0.2rem'
                }}>
                  Vrishin Chenreddy
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#22c55e',
                  marginBottom: '0.8rem',
                  fontWeight: '600'
                }}>
                  Chief Executive Officer
                </p>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6'
                }}>
                  Leading NVEM's mission to make AI education accessible and practical for students worldwide.
                </p>
              </div>
            </div>

          </section>

          <section id="faqs" style={{ marginBottom: '6rem', marginTop: '2rem' }}>
            <h2 style={{ 
              fontSize: '3.5rem', 
              fontWeight: 'bold', 
              marginBottom: '3rem',
              textAlign: 'center',
              color: 'white'
            }}>
              FAQs
            </h2>
            
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {/* FAQ 1 */}
              <div 
                style={{
                  marginBottom: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (openFaq === 0) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (openFaq === 0) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  }
                }}
              >
                <div 
                  onClick={() => toggleFaq(0)}
                  style={{
                    padding: '1rem',
                    cursor: 'pointer',
                    position: 'relative',
                    backgroundColor: 'transparent',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    color: '#22c55e',
                    margin: 0,
                    textAlign: 'center'
                  }}>
                    What is NVEM?
                  </h3>
                  <span style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: `translateY(-50%) ${openFaq === 0 ? 'rotate(180deg)' : 'rotate(0deg)'}`,
                    color: '#22c55e',
                    fontSize: '1.5rem',
                    transition: 'transform 0.3s ease'
                  }}>
                    ↓
                  </span>
                </div>
                <div style={{
                  maxHeight: openFaq === 0 ? '300px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease-in-out'
                }}>
                  <div style={{ padding: '0 1rem 1rem 1rem' }}>
                    <p style={{
                      fontSize: '1rem',
                      color: 'rgba(255, 255, 255, 0.9)',
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      NVEM is a student-led 501(c)(3) nonprofit that teaches students about the latest technologies through hands-on, project-based learning. All proceeds are reinvested to support and empower more students through educational programs and resources.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 2 */}
              <div 
                style={{
                  marginBottom: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (openFaq === 1) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (openFaq === 1) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  }
                }}
              >
                <div 
                  onClick={() => toggleFaq(1)}
                  style={{
                    padding: '1rem',
                    cursor: 'pointer',
                    position: 'relative',
                    backgroundColor: 'transparent',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    color: '#22c55e',
                    margin: 0,
                    textAlign: 'center'
                  }}>
                    Who is NVEM for?
                  </h3>
                  <span style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: `translateY(-50%) ${openFaq === 1 ? 'rotate(180deg)' : 'rotate(0deg)'}`,
                    color: '#22c55e',
                    fontSize: '1.5rem',
                    transition: 'transform 0.3s ease'
                  }}>
                    ↓
                  </span>
                </div>
                <div style={{
                  maxHeight: openFaq === 1 ? '300px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease-in-out'
                }}>
                  <div style={{ padding: '0 1rem 1rem 1rem' }}>
                    <p style={{
                      fontSize: '1rem',
                      color: 'rgba(255, 255, 255, 0.9)',
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      NVEM is for learners of all ages who want to explore the latest technologies, including AI, programming, and machine learning. No prior experience is required.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 3 */}
              <div 
                style={{
                  marginBottom: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (openFaq === 2) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (openFaq === 2) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  }
                }}
              >
                <div 
                  onClick={() => toggleFaq(2)}
                  style={{
                    padding: '1rem',
                    cursor: 'pointer',
                    position: 'relative',
                    backgroundColor: 'transparent',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    color: '#22c55e',
                    margin: 0,
                    textAlign: 'center'
                  }}>
                    Do I need any coding experience to join?
                  </h3>
                  <span style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: `translateY(-50%) ${openFaq === 2 ? 'rotate(180deg)' : 'rotate(0deg)'}`,
                    color: '#22c55e',
                    fontSize: '1.5rem',
                    transition: 'transform 0.3s ease'
                  }}>
                    ↓
                  </span>
                </div>
                <div style={{
                  maxHeight: openFaq === 2 ? '300px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease-in-out'
                }}>
                  <div style={{ padding: '0 1rem 1rem 1rem' }}>
                    <p style={{
                      fontSize: '1rem',
                      color: 'rgba(255, 255, 255, 0.9)',
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      No. NVEM starts with the basics and teaches you Python, AI, and machine learning step by step through clear lessons and hands-on projects.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 4 */}
              <div 
                style={{
                  marginBottom: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (openFaq === 3) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (openFaq === 3) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  }
                }}
              >
                <div 
                  onClick={() => toggleFaq(3)}
                  style={{
                    padding: '1rem',
                    cursor: 'pointer',
                    position: 'relative',
                    backgroundColor: 'transparent',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    color: '#22c55e',
                    margin: 0,
                    textAlign: 'center'
                  }}>
                    What skills will I gain from NVEM?
                  </h3>
                  <span style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: `translateY(-50%) ${openFaq === 3 ? 'rotate(180deg)' : 'rotate(0deg)'}`,
                    color: '#22c55e',
                    fontSize: '1.5rem',
                    transition: 'transform 0.3s ease'
                  }}>
                    ↓
                  </span>
                </div>
                <div style={{
                  maxHeight: openFaq === 3 ? '300px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease-in-out'
                }}>
                  <div style={{ padding: '0 1rem 1rem 1rem' }}>
                    <p style={{
                      fontSize: '1rem',
                      color: 'rgba(255, 255, 255, 0.9)',
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      You'll gain practical skills in coding, problem-solving, and understanding AI concepts like machine learning and neural networks, all through interactive, project-based learning.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 5 */}
              <div 
                style={{
                  marginBottom: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (openFaq === 4) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (openFaq === 4) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  }
                }}
              >
                <div 
                  onClick={() => toggleFaq(4)}
                  style={{
                    padding: '1rem',
                    cursor: 'pointer',
                    position: 'relative',
                    backgroundColor: 'transparent',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    color: '#22c55e',
                    margin: 0,
                    textAlign: 'center'
                  }}>
                    How is NVEM different from other AI courses?
                  </h3>
                  <span style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: `translateY(-50%) ${openFaq === 4 ? 'rotate(180deg)' : 'rotate(0deg)'}`,
                    color: '#22c55e',
                    fontSize: '1.5rem',
                    transition: 'transform 0.3s ease'
                  }}>
                    ↓
                  </span>
                </div>
                <div style={{
                  maxHeight: openFaq === 4 ? '300px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease-in-out'
                }}>
                  <div style={{ padding: '0 1rem 1rem 1rem' }}>
                    <p style={{
                      fontSize: '1rem',
                      color: 'rgba(255, 255, 255, 0.9)',
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      NVEM is created and taught by students. It focuses on clear explanations, creative projects, and a supportive learning community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
      </div>
      <div className='mobile-view'>
      <section id="home" style={{ marginBottom: '4rem' }} className='main-title'>
              <h1  className='mobile-header' style={{ 
                fontSize: '4rem', 
                fontWeight: 'bold', 
                textAlign: 'center',
                background: 'linear-gradient(135deg, #16a34a, #22c55e, #ffffff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Hello NVEM user!
              </h1>
              <p style={{ 
                fontSize: '1.1rem', 
                textAlign: 'center',
                opacity: 0.9,
                color: 'white',
                maxWidth: '800px',
              }}>
                Please use a computer or a larger screen for the best user experience!
              </p>
              
            </section>
      </div>
      </div>

  )
}

export default Home
import React, { useState, useEffect } from 'react';
import { useUser, useClerk } from '@clerk/clerk-react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { fetchNvemAccount, updateNvemAccount } from '../generalHelper/simpleRoutes';
import { Button } from '@chakra-ui/react';
import { toaster } from '../ui/toaster';
import { useQuery } from '@tanstack/react-query';

const Settings = () => {
  const { user, isLoaded } = useUser();
  const { openUserProfile } = useClerk();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [courseUpdates, setCourseUpdates] = useState(true);

  // Handle notification preference updates
  const handleNotificationUpdate = async (notificationType, value) => {
    try {
      const updateData = {};
      updateData[notificationType] = value;
      
      const result = await updateNvemAccount(accountEmail, updateData);
      if (result) {
        toaster.create({
          title: 'Preferences Updated',
          description: 'Your notification preferences have been saved.',
          status: 'success',
          duration: 2000,
        });
      }
    } catch (error) {
      console.error('Error updating notification preferences:', error);
      toaster.create({
        title: 'Update Failed',
        description: 'Could not save notification preferences.',
        status: 'error',
        duration: 3000,
      });
    }
  };

  // Get user's current email from localStorage
  const accountEmail = localStorage.getItem('the_current_user');

  // Fetch user data from backend
  const { data: userData, refetch } = useQuery({
    queryKey: ['user-profile-data', accountEmail],
    queryFn: async () => {
      if (!accountEmail) return null;
      
      const firstNameData = await fetchNvemAccount(accountEmail, 'first_name');
      const lastNameData = await fetchNvemAccount(accountEmail, 'last_name');
      const emailData = await fetchNvemAccount(accountEmail, 'email');
      return {
        firstName: firstNameData,
        lastName: lastNameData,
        email: emailData
      };
    },
    enabled: !!accountEmail,
    // Removed staleTime: 0 to prevent unnecessary refetches
  });

  // Initialize form fields when user data loads
  useEffect(() => {
    if (isLoaded && user) {
      setFirstName(user.firstName || '');
      setLastName(user.lastName || '');
      setEmail(user.emailAddresses[0]?.emailAddress || '');
    }
  }, [isLoaded, user]);

  // Update form fields with backend data if available
  useEffect(() => {
    if (userData) {
      setFirstName(userData.firstName || '');
      setLastName(userData.lastName || '');
      setEmail(userData.email || '');
    }
  }, [userData]);

  const handleUpdateProfile = async () => {
    if (!user) return;

    setIsUpdating(true);
    try {
      let hasClerkUpdates = false;
      let backendUpdateData = {};

      // Update Clerk profile
      if (firstName !== user.firstName) {
        await user.update({ firstName });
        hasClerkUpdates = true;
        backendUpdateData.firstName = firstName;
      }
      if (lastName !== user.lastName) {
        await user.update({ lastName });
        hasClerkUpdates = true;
        backendUpdateData.lastName = lastName;
      }

      // Update backend profile if there are changes
      if (Object.keys(backendUpdateData).length > 0) {
        const result = await updateNvemAccount(accountEmail, backendUpdateData);
        if (!result) {
          throw new Error('Backend update failed');
        }
      }
      
      toaster.create({
        title: 'Profile Updated',
        description: 'Your profile has been successfully updated.',
        status: 'success',
        duration: 3000,
      });

      refetch(); // Refresh user data
    } catch (error) {
      console.error('Error updating profile:', error);
      toaster.create({
        title: 'Update Failed',
        description: 'There was an error updating your profile. Please try again.',
        status: 'error',
        duration: 5000,
      });
    } finally {
      setIsUpdating(false);
    }
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

  const contentContainerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 2rem',
    paddingBottom: '3rem'
  };

  const sectionStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '2rem',
    marginBottom: '2rem',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.15)'
  };

  const sectionTitleStyle = {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const formGroupStyle = {
    marginBottom: '1.5rem'
  };

  const labelStyle = {
    display: 'block',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '0.5rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box'
  };

  const switchContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
  };

  const switchLabelStyle = {
    color: 'white',
    fontSize: '1rem',
    fontWeight: '500'
  };

  const switchStyle = {
    position: 'relative',
    width: '50px',
    height: '24px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  const switchSliderStyle = {
    position: 'absolute',
    top: '2px',
    left: '2px',
    width: '20px',
    height: '20px',
    backgroundColor: 'white',
    borderRadius: '50%',
    transition: 'transform 0.3s ease'
  };

  const buttonStyle = {
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
    disabled: isUpdating
  };

  const secondaryButtonStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '12px',
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    outline: 'none',
    marginRight: '1rem'
  };

  if (!isLoaded) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#000000',
        color: 'white',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <Header />
      
      <div style={contentContainerStyle}>
        <h1 style={titleStyle}>Settings</h1>
        
        {/* Profile Settings */}
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: '#22c55e' }}>
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
            </svg>
            Profile Information
          </h2>
          
          <div style={formGroupStyle}>
            <label style={labelStyle}>First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={inputStyle}
              onFocus={(e) => {
                e.target.style.borderColor = '#22c55e';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              }}
            />
          </div>
          
          <div style={formGroupStyle}>
            <label style={labelStyle}>Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={inputStyle}
              onFocus={(e) => {
                e.target.style.borderColor = '#22c55e';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              }}
            />
          </div>
          
          <div style={formGroupStyle}>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              value={email}
              disabled
              style={{
                ...inputStyle,
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                color: 'rgba(255, 255, 255, 0.6)',
                cursor: 'not-allowed'
              }}
            />
            <p style={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.875rem',
              marginTop: '0.5rem',
              marginBottom: 0
            }}>
              Email is managed by your Google account and cannot be changed here.
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <button
              style={secondaryButtonStyle}
              onClick={() => openUserProfile()}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              Manage Account
            </button>
            <button
              style={buttonStyle}
              onClick={handleUpdateProfile}
              disabled={isUpdating}
              onMouseEnter={(e) => {
                if (!isUpdating) {
                  e.target.style.backgroundColor = '#16a34a';
                  e.target.style.transform = 'translateY(-1px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isUpdating) {
                  e.target.style.backgroundColor = '#22c55e';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              {isUpdating ? 'Updating...' : 'Update Profile'}
            </button>
          </div>
        </div>

        {/* Notification Preferences */}
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: '#22c55e' }}>
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" fill="currentColor"/>
            </svg>
            Notification Preferences
          </h2>
          
          <div style={switchContainerStyle}>
            <span style={switchLabelStyle}>Email Notifications</span>
            <div
              style={{
                ...switchStyle,
                backgroundColor: emailNotifications ? '#22c55e' : 'rgba(255, 255, 255, 0.2)'
              }}
              onClick={() => {
                const newValue = !emailNotifications;
                setEmailNotifications(newValue);
                handleNotificationUpdate('emailNotifications', newValue);
              }}
            >
              <div
                style={{
                  ...switchSliderStyle,
                  transform: emailNotifications ? 'translateX(26px)' : 'translateX(0)'
                }}
              />
            </div>
          </div>
          
          <div style={switchContainerStyle}>
            <span style={switchLabelStyle}>Course Updates</span>
            <div
              style={{
                ...switchStyle,
                backgroundColor: courseUpdates ? '#22c55e' : 'rgba(255, 255, 255, 0.2)'
              }}
              onClick={() => {
                const newValue = !courseUpdates;
                setCourseUpdates(newValue);
                handleNotificationUpdate('courseUpdates', newValue);
              }}
            >
              <div
                style={{
                  ...switchSliderStyle,
                  transform: courseUpdates ? 'translateX(26px)' : 'translateX(0)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Learning Preferences */}
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: '#22c55e' }}>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
            </svg>
            Learning Preferences
          </h2>
          
          <div style={formGroupStyle}>
            <label style={labelStyle}>Preferred Difficulty Level</label>
            <select
              style={{
                ...inputStyle,
                cursor: 'pointer',
                appearance: 'none',
                backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%23ffffff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")',
                backgroundPosition: 'right 0.75rem center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1.5em 1.5em',
                paddingRight: '2.5rem'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#22c55e';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              }}
            >
              <option value="beginner" style={{backgroundColor: '#1a1a1a', color: 'white'}}>Beginner</option>
              <option value="intermediate" style={{backgroundColor: '#1a1a1a', color: 'white'}}>Intermediate</option>
              <option value="advanced" style={{backgroundColor: '#1a1a1a', color: 'white'}}>Advanced</option>
              <option value="mixed" style={{backgroundColor: '#1a1a1a', color: 'white'}}>Mixed Levels</option>
            </select>
          </div>
          
          <div style={formGroupStyle}>
            <label style={labelStyle}>Time Zone</label>
            <select
              style={{
                ...inputStyle,
                cursor: 'pointer',
                appearance: 'none',
                backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%23ffffff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")',
                backgroundPosition: 'right 0.75rem center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1.5em 1.5em',
                paddingRight: '2.5rem'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#22c55e';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              }}
            >
              <option value="auto" style={{backgroundColor: '#1a1a1a', color: 'white'}}>Auto-detect</option>
              <option value="EST" style={{backgroundColor: '#1a1a1a', color: 'white'}}>Eastern (EST)</option>
              <option value="CST" style={{backgroundColor: '#1a1a1a', color: 'white'}}>Central (CST)</option>
              <option value="MST" style={{backgroundColor: '#1a1a1a', color: 'white'}}>Mountain (MST)</option>
              <option value="PST" style={{backgroundColor: '#1a1a1a', color: 'white'}}>Pacific (PST)</option>
              <option value="UTC" style={{backgroundColor: '#1a1a1a', color: 'white'}}>UTC</option>
            </select>
          </div>
        </div>

        {/* Data & Privacy */}
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: '#22c55e' }}>
              <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
            Data & Privacy
          </h2>
          
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            <h4 style={{
              color: 'white',
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Course Progress Data
            </h4>
            <p style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.875rem',
              marginBottom: '1rem',
              lineHeight: '1.5'
            }}>
              Your learning progress, quiz scores, and code submissions are saved to help personalize your experience and track your development.
            </p>
            <button
              style={{
                ...secondaryButtonStyle,
                marginRight: 0,
                fontSize: '0.875rem',
                padding: '0.5rem 1rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              Download My Data
            </button>
          </div>
          
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '12px',
            padding: '1.5rem'
          }}>
            <h4 style={{
              color: 'white',
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Account Data
            </h4>
            <p style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.875rem',
              marginBottom: '1rem',
              lineHeight: '1.5'
            }}>
              Your account information is handled securely through Google authentication. Contact support for data deletion requests.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                style={{
                  ...secondaryButtonStyle,
                  marginRight: 0,
                  fontSize: '0.875rem',
                  padding: '0.5rem 1rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                Privacy Policy
              </button>
              <button
                style={{
                  ...secondaryButtonStyle,
                  marginRight: 0,
                  fontSize: '0.875rem',
                  padding: '0.5rem 1rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>

        {/* Account Management */}
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: '#22c55e' }}>
              <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" fill="currentColor"/>
            </svg>
            Account Management
          </h2>
          
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1rem',
            lineHeight: '1.6',
            marginBottom: '1.5rem'
          }}>
            Your account is managed through Google via Clerk. For advanced account settings, password changes, 
            or to manage connected accounts, use the account management button above.
          </p>
          
          <div style={{
            backgroundColor: 'rgba(34, 197, 94, 0.1)',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            borderRadius: '12px',
            padding: '1rem',
            marginTop: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: '#22c55e' }}>
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              <span style={{ color: '#22c55e', fontWeight: '600' }}>Secure Account</span>
            </div>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '0.875rem',
              margin: 0
            }}>
              Your account is secured with Google authentication and industry-standard security practices.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Settings; 
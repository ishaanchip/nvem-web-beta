import React, {useState, useEffect, use} from 'react'
import "./MiniCourse.css"

//images & icons
import {ChevronLeftIcon} from "@heroicons/react/24/solid"


//intercomponent imports
import { getYoutubeVideo } from '../../generalHelper/youtubeAPI'

//external dependenices
import { Heading, Button, CloseButton, Dialog, Portal} from "@chakra-ui/react"
import { useQuery } from '@tanstack/react-query'
import { useClerk, SignUpButton } from '@clerk/clerk-react'


const MiniCourse = ({currentVideoId}) => {
  //1.getting video associated data
    const [youtubeVideo, setYoutubeVideo] = useState([])
    const [youtubeImg, setYoutubeImg] = useState({})

    const {data:currentYoutubeData} = useQuery({
        queryKey:['youtube-course-data', currentVideoId],
        queryFn:async () => getYoutubeVideo(currentVideoId),
        // Removed staleTime: 0 to prevent unnecessary refetches
        enabled: !!currentVideoId, // Only fetch when videoId exists
    })

    useEffect(() =>{
        if (currentYoutubeData){
            setYoutubeVideo(currentYoutubeData[0])
            setYoutubeImg(currentYoutubeData[0].snippet.thumbnails.maxres)
        }
    }, [currentYoutubeData])

    //2.sign up on click of any mini components
    const [isOpen, setIsOpen] = useState(false)
    const { openSignUp } = useClerk();
  
    const handleSignUpClick = () => {
      setIsOpen(false); // close Chakra Dialog first
      openSignUp(); // open Clerk modal
    };




   
    
  return (
    <Dialog.Root open={isOpen} onOpenChange={({ open }) => setIsOpen(open)} size="lg" placement="center" motionPreset="slide-in-bottom">
    <Dialog.Trigger asChild>
      {
        Object.keys(youtubeImg).length > 0 
        ?
        <div style={{ 
          position: 'relative', 
          width: '100%', 
          height: '100%',
          borderRadius: '16px'
        }}>
        <img 
          src={youtubeImg.url} 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '16px',
            border: '1px solid rgba(34, 197, 94, 0.5)',
            boxShadow: '0 0 6px rgba(34, 197, 94, 0.8), 0 0 12px rgba(34, 197, 94, 0.6), 0 0 18px rgba(34, 197, 94, 0.4)',
            cursor: 'pointer'
          }}
        />
          {/* Play Button Overlay */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #16a34a, #22c55e)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 32px rgba(34, 197, 94, 0.4), 0 4px 16px rgba(22, 163, 74, 0.3)',
            border: 'none',
            pointerEvents: 'none' // Allow clicks to pass through to the Dialog trigger
          }}>
            {/* Rounded Play Triangle SVG */}
            <svg 
              width="36" 
              height="36" 
              viewBox="0 0 32 32" 
              style={{ marginLeft: '2px', filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))' }}
            >
              <path 
                d="M6 4.5 C6 3.2 7.5 2.3 8.7 3 L26 14.5 C27.2 15.2 27.2 16.8 26 17.5 L8.7 29 C7.5 29.7 6 28.8 6 27.5 Z" 
                fill="white" 
                stroke="none"
                rx="2"
              />
            </svg>
          </div>
        </div>
        :
        <div></div>
      }
    </Dialog.Trigger>
    <Portal>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content 
          maxW="800px" 
          width="90%" 
          maxH="700px" 
          height="80%"
          borderRadius="16px"
          bg="rgba(32, 32, 32, 0.95)"
          backdropFilter="blur(10px)"
          border="1px solid rgba(255, 255, 255, 0.1)"
        >
          <Dialog.Header position="relative" display="flex" justifyContent="center" alignItems="center">
            <Heading fontSize="3xl" color="white" flex="1" textAlign="center" mt="24px">Lesson 1: Introduction to AI</Heading>
            <Dialog.CloseTrigger asChild position="absolute" right="16px">
              <CloseButton 
                size="sm" 
                _focus={{ boxShadow: "none", outline: "none" }}
                _focusVisible={{ boxShadow: "none", outline: "none" }}
                color="rgba(255, 255, 255, 0.7)"
                _hover={{ color: "white" }}
              />
            </Dialog.CloseTrigger>
          </Dialog.Header>
          <Dialog.Body mt="8px" pt="4px">
            <div className="contents">
                <div className="video-player">
                    <iframe src={`https://www.youtube.com/embed/${youtubeVideo.id}?autoplay=1&mute=1`} allow="accelerometer; autoplay; encrypted-media; gyroscope" ></iframe>
                </div>
                <div className="course-overview">
                    <div className="course-item in-progress"><p>Watch Video</p><ChevronLeftIcon style={{maxWidth:'20px'}}></ChevronLeftIcon></div>
                    <div className="course-item" onClick={handleSignUpClick}><p>Read Article</p></div>
                    <div className="course-item" onClick={handleSignUpClick}><p>Programming Challenge</p></div>
                    <div className="course-item" onClick={handleSignUpClick}><p>Course Quiz</p></div>
                </div>
            </div>
          </Dialog.Body>
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  </Dialog.Root>
  )
}

export default MiniCourse
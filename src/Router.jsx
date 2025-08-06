import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'

import CourseDetail from './components/Course/CourseDetail/CourseDetail.jsx'
import SignIn from './components/Auth/SignIn.jsx'
import SignUp from './components/Auth/SignUp.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import MyCourses from './components/MyCourses/MyCourses.jsx'
import IntroAIArticle from './components/Course/IntroAIArticle/IntroAIArticle.jsx'
import IntroAIOverview from './components/Course/IntroAIOverview/IntroAIOverview.jsx'
import IntroAIVideoLesson1 from './components/Course/IntroAIVideoLesson1/IntroAIVideoLesson1.jsx'
import IntroAIChallenge from './components/Course/IntroAIChallenge/IntroAIChallenge.jsx'
import IntroAIQuiz from './components/Course/IntroAIQuiz/IntroAIQuiz.jsx'
import IntroAIVideoLesson2 from './components/Course/IntroAIVideoLesson2/IntroAIVideoLesson2.jsx'
import IntroAIArticle2 from './components/Course/IntroAIArticle2/IntroAIArticle2.jsx'
import IntroAIChallenge2 from './components/Course/IntroAIChallenge2/IntroAIChallenge2.jsx'
import IntroAIQuiz2 from './components/Course/IntroAIQuiz2/IntroAIQuiz2.jsx'
import IntroAIVideoLesson3 from './components/Course/IntroAIVideoLesson3/IntroAIVideoLesson3.jsx'
import IntroAIArticle3 from './components/Course/IntroAIArticle3/IntroAIArticle3.jsx'
import IntroAIChallenge3 from './components/Course/IntroAIChallenge3/IntroAIChallenge3.jsx'
import IntroAIQuiz3 from './components/Course/IntroAIQuiz3/IntroAIQuiz3.jsx'
import IntroAIVideoLesson4 from './components/Course/IntroAIVideoLesson4/IntroAIVideoLesson4.jsx'
import IntroAIArticle4 from './components/Course/IntroAIArticle4/IntroAIArticle4.jsx'
import IntroAIChallenge4 from './components/Course/IntroAIChallenge4/IntroAIChallenge4.jsx'
import IntroAIQuiz4 from './components/Course/IntroAIQuiz4/IntroAIQuiz4.jsx'
import IntroAIVideoLesson5 from './components/Course/IntroAIVideoLesson5/IntroAIVideoLesson5.jsx'
import IntroAIArticle5 from './components/Course/IntroAIArticle5/IntroAIArticle5.jsx'
import IntroAIChallenge5 from './components/Course/IntroAIChallenge5/IntroAIChallenge5.jsx'
import IntroAIQuiz5 from './components/Course/IntroAIQuiz5/IntroAIQuiz5.jsx'
import Home from './components/Home/Home.jsx'

const Router = () => {
return (
  <BrowserRouter basename='/'>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/courses" element={<Dashboard/>}></Route>
          <Route path="/my-courses" element={<MyCourses/>}></Route>
          <Route path="/sign-in" element={<SignIn/>}></Route>
          <Route path="/sign-up" element={<SignUp/>}></Route>
          <Route path="/course/:courseId" element={<CourseDetail/>}></Route>
          <Route path="/introai/overview" element={<IntroAIOverview/>}></Route>
          <Route path="/introai/lesson1/video" element={<IntroAIVideoLesson1/>}></Route>
          <Route path="/introai/lesson1/article" element={<IntroAIArticle/>}></Route>
          <Route path="/introai/lesson1/challenge" element={<IntroAIChallenge/>}></Route>
          <Route path="/introai/lesson1/quiz" element={<IntroAIQuiz/>}></Route>
          <Route path="/introai/lesson2/video" element={<IntroAIVideoLesson2/>}></Route>
          <Route path="/introai/lesson2/article" element={<IntroAIArticle2/>}></Route>
          <Route path="/introai/lesson2/challenge" element={<IntroAIChallenge2/>}></Route>
          <Route path="/introai/lesson2/quiz" element={<IntroAIQuiz2/>}></Route>
          <Route path="/introai/lesson3/video" element={<IntroAIVideoLesson3/>}></Route>
          <Route path="/introai/lesson3/article" element={<IntroAIArticle3/>}></Route>
          <Route path="/introai/lesson3/challenge" element={<IntroAIChallenge3/>}></Route>
          <Route path="/introai/lesson3/quiz" element={<IntroAIQuiz3/>}></Route>
          <Route path="/introai/lesson4/video" element={<IntroAIVideoLesson4/>}></Route>
          <Route path="/introai/lesson4/article" element={<IntroAIArticle4/>}></Route>
          <Route path="/introai/lesson4/challenge" element={<IntroAIChallenge4/>}></Route>
          <Route path="/introai/lesson4/quiz" element={<IntroAIQuiz4/>}></Route>
          <Route path="/introai/lesson5/video" element={<IntroAIVideoLesson5/>}></Route>
          <Route path="/introai/lesson5/article" element={<IntroAIArticle5/>}></Route>
          <Route path="/introai/lesson5/challenge" element={<IntroAIChallenge5/>}></Route>
          <Route path="/introai/lesson5/quiz" element={<IntroAIQuiz5/>}></Route>
      </Routes>
  </BrowserRouter>
)


}


export default Router
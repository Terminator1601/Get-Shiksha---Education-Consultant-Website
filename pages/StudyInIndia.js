import Header from '@/components/Header/Header'
import React from 'react'
import  '@/components/styles/Header.css'
import CoursesSection from '@/components/CourseSection'
import MovingText from '@/components/Header/MovingText'
import Footer from '@/components/Footer/Footer'

const StudyInIndia = () => {
  return (
    <>
    <Header/>
    <MovingText/>
    <CoursesSection/>
    <Footer/>
    </>
  )
}

export default StudyInIndia
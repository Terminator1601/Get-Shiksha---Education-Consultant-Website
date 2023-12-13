import Header from '@/components/Header/Header'
import React from 'react'
import  '@/components/styles/Header.css'
import CoursesSection from '@/pages/StudyInIndia/CourseSectionUpdated'
import MovingText from '@/components/Header/MovingText'
import Footer from '@/components/Footer/Footer'
import { useRouter } from 'next/router'

const StudyInIndia = () => {
  const router = useRouter();
  const country = router.query.category;
  
  return (  
    <>
    <Header/>
    <MovingText/>
    <h1>
      Selected country : {country}
    </h1>
    <CoursesSection/>
    <Footer/>
    </>
  )
}

export default StudyInIndia
import React from 'react'
import ActivitySection from '../../components/landing1/ActivitySection'
import CourseList from '../../components/landing1/CourseList'
import Features from '../../components/landing1/Features'
import Hero from '../../components/landing1/Hero'
import TestimonialSection from '../../components/landing1/TestimonialSection'
import TestSection from '../../components/landing1/TestSection'

const Home = ({
  theme
}) => {
  return (
    <React.Fragment>
      <Hero theme={theme}/>
      <Features theme={theme}/>
      <CourseList theme={theme}/>
      <ActivitySection theme={theme}/>
      <TestSection theme={theme}/>
      <TestimonialSection theme={theme}/>
    </React.Fragment>
  )
}

export default Home

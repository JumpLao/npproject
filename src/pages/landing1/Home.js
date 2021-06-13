import React from 'react'
import ActivitySection from '../../components/landing1/ActivitySection'
import CourseList from '../../components/landing1/CourseList'
import Features from '../../components/landing1/Features'
import Hero from '../../components/landing1/Hero'
import TestimonialSection from '../../components/landing1/TestimonialSection'
import TestSection from '../../components/landing1/TestSection'

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Features />
      <CourseList />
      <ActivitySection />
      <TestSection />
      <TestimonialSection />
    </React.Fragment>
  )
}

export default Home

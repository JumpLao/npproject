import { Layout } from 'antd'
import React from 'react'
import ActivitySection from '../components/landing1/ActivitySection'
import Features from '../components/landing1/Features'
import Hero from '../components/landing1/Hero'
import TestimonialSection from '../components/landing1/TestimonialSection'
import TestSection from '../components/landing1/TestSection'

const LandingPage1 = () => {
  return (
    <Layout style={{height: '100%', backgroundColor: 'white'}} id="landing1">
      <Layout.Header style={{backgroundColor: 'white'}}>

      </Layout.Header>
      <Layout.Content style={{overflow: 'auto'}}>
        <Hero />
        <Features />
        <ActivitySection />
        <TestSection />
        <TestimonialSection />
      </Layout.Content>
      <Layout.Footer>

      </Layout.Footer>
    </Layout>
  )
}

export default LandingPage1

import { Layout } from 'antd'
import React from 'react'
import Features from '../components/landing1/Features'
import Hero from '../components/landing1/Hero'

const LandingPage1 = () => {
  return (
    <Layout style={{height: '100%'}} id="landing1">
      <Layout.Header style={{backgroundColor: 'white'}}>

      </Layout.Header>
      <Layout.Content>
        <Hero />
        <Features />
      </Layout.Content>
      <Layout.Footer>

      </Layout.Footer>
    </Layout>
  )
}

export default LandingPage1

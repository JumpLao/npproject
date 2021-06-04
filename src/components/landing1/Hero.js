import { Typography } from 'antd'
import React from 'react'
import bg from '../../images/landing1/cover.png'
import ButtonWithArrow from './ButtonWithArrow'
const Hero = () => {
  return (
    <section className="hero-section section" style={{backgroundImage: `url(${bg})`}}>
      <div className="container" style={{padding: 40}}>
        <Typography.Title style={{fontWeight: 'normal'}}>
          “เรียนรู้ เติบโต อย่างมีความสุข<br/>
          ด้วยการเข้าใจศาสตร์จิตวิทยา“
        </Typography.Title>
        <div>
          <Typography.Text style={{fontSize: '1.5em'}}>
            <span style={{color: '#DA4981'}}>Let’s Learn</span> แหล่งเรียนรู้เกี่ยวกับ<br/>
            ศาสตร์จิตวิทยาโดยนักจิตวิทยา
          </Typography.Text>
        </div>
        <div style={{paddingTop: 12}}>
          <ButtonWithArrow>เรียนเลย</ButtonWithArrow>
        </div>
      </div>
    </section>
  )
}

export default Hero

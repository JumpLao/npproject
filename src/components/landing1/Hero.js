import { Button, Typography } from 'antd'
import React from 'react'
import bg from '../../images/landing1/cover.png'
import arrow from '../../images/landing1/arrow-right.png'
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
          <Button type="primary" size="large">เรียนเลย <img src={arrow} alt="arrow" width="16" style={{marginLeft: 8}} /></Button>
        </div>
      </div>
    </section>
  )
}

export default Hero

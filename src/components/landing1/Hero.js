import { Col, Row, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../../images/landing1/cover.png'
import bg2 from '../../images/landing2/cover.png'
import ButtonWithArrow from './ButtonWithArrow'
const Hero = ({
  theme
}) => {
  const background = theme === 'landing1' ? bg : bg2
  return (
    <section className="hero-section section" style={{backgroundImage: `url(${background})`}}>
      <div className="container" style={{padding: 40}}>
        <Row justify="space-between">
          <Col xs={24} lg={14}>
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
              <Link to="/landing1/courses/1">
                <ButtonWithArrow>
                  เรียนเลย
                </ButtonWithArrow>
              </Link>
            </div>
          </Col>
          <Col xs={24} lg={10}>
            <img className="hero-img" style={{width: '100%'}} src={require('../../images/landing2/hero.png')} alt="img" />
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Hero

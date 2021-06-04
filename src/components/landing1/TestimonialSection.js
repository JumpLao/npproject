import { Typography } from 'antd'
import React from 'react'
import bg from '../../images/landing1/footerbg.png'
import author from '../../images/landing1/author.png'
import prev from '../../images/landing1/prevarrow.png'
import next from '../../images/landing1/nextarrow.png'
import ButtonWithArrow from './ButtonWithArrow'
const TestimonialSection = () => {
  return (
    <div>
      <div style={{textAlign: 'center', marginBottom: 60}}>
        <Typography.Title>
          Let's Learn
        </Typography.Title>
        <Typography.Text>
          แหล่งเรียนรู้เกี่ยวกับศาสตร์จิตวิทยาโดยนักจิตวิทยา
        </Typography.Text>
      </div>
      <div class="testimonial-section section" style={{
        backgroundImage: `url(${bg})`,
        display: 'flex',
        alignItems: 'center'
      }}>
        <div class="container">
          <div>
            <div style={{
              width: 400,
              maxWidth: '90%',
              margin: 'auto',
              backgroundColor: 'white',
              padding: '80px 40px 40px 40px',
              position: 'relative',
              boxShadow: '0px 0px 50px rgba(48, 48, 48, 0.25)'
            }}>
              <img width="100" src={author} alt="author" style={{
                position: 'absolute',
                top: '-50px',
                left: 'calc(50% - 50px)'
              }}/>
              <img width="40" src={prev} alt="prev" style={{
                position: 'absolute',
                top: 'calc(50% - 20px)',
                left: '-20px',
                backgroundColor: 'white',
                borderRadius: '50%',
                border: '2px solid white'
              }}/>
              <img width="40" src={next} alt="next" style={{
                position: 'absolute',
                top: 'calc(50% - 20px)',
                right: '-20px',
                backgroundColor: 'white',
                borderRadius: '50%',
                border: '2px solid white'
              }}/>
              <Typography.Text>
                เป็นเว็บไซต์ที่ดีมาก ๆ เลย ยกให้เป็นแหล่งความรู้เกี่ยวกับจิตวิทยาอันดับหนึ่งของไทยเลย ประทับใจมาก  รอให้เปิดใช้งานเต็มรูปแบบอยู่นะ
              </Typography.Text>
            </div>
            <div style={{textAlign: 'center', paddingTop: 40}}>
              <ButtonWithArrow>
                เรียนเลย
              </ButtonWithArrow>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection

import { Col, Row, Typography } from 'antd'
import React from 'react'
import ButtonWithArrow from './ButtonWithArrow'
import course1img from '../../images/landing1/course1.png'
import course2img from '../../images/landing1/behaviormodification.png'
import course3img from '../../images/landing1/childpersontality.png'
import course4img from '../../images/landing1/adolescent.png'
import CourseListItem from './CourseListItem'

export const courses = [
  {
    id: 1,
    title: 'ทำยังไงในวันที่ใจเหนื่อย',
    description: 'ในยุคที่วิกฤตการณ์ต่าง ๆ ถาโถมเข้ามาแบบที่ตั้งตัวแทบจะไม่ทัน ...',
    price: 0,
    image: course1img,
    favorited: true,
    locked: false,
    link: 'courses/1'
  },
  {
    id: 2,
    title: 'การปรับพฤติกรรม',
    description: 'การจัดการวางเงื่อนไขพฤติกรรม การเรียนรู้จากตัวแบบ การใช้ทฤษฎี ...',
    price: 1500,
    image: course2img,
    favorited: false,
    locked: true
  },
  {
    id: 3,
    title: 'บุคลิกภาพเด็ก',
    description: 'ความหมายของบุคลิกภาพ สิ่งที่มี อิทธิพลต่อพัฒนาการทางบุคลิก ...',
    price: 1200,
    image: course3img,
    favorited: false,
    locked: true
  },
  {
    id: 4,
    title: 'จิตวิทยาวัยรุ่น',
    description: 'พัฒนาการของบุคคลและความสัมพันธ์ระหว่างบุคคลในระยะวัยรุ่นตอนต้น ...',
    price: 1200,
    image: course4img,
    favorited: false,
    locked: true
  },
]

const CourseList = () => {
  return (
    <div className="section">
      <div className="container">
        <div style={{textAlign: 'center', paddingBottom: 32}}>
          <Typography.Title level={3}>
            คอร์สเรียนแนะนำ
          </Typography.Title>
        </div>
        <Row gutter="24">
          {
            courses.map(course => {
              return (
                <Col xs={12} md={8} lg={6}>
                  <CourseListItem image={course.image} title={course.title} description={course.description} price={course.price} favorited={course.favorited} locked={course.locked} link={course.link}/>
                </Col>
              )
            })
          }
        </Row>
      </div>
      <div style={{textAlign: 'center', paddingTop: 40}}>
        <ButtonWithArrow>ดูคอร์สทั้งหมด</ButtonWithArrow>
      </div>
    </div>
  )
}

export default CourseList

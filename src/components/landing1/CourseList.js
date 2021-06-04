import { Card, Col, Row, Typography } from 'antd'
import React from 'react'
import ButtonWithArrow from './ButtonWithArrow'
import course1img from '../../images/landing1/course1.png'

const courses = [
  {
    title: 'ทำยังไงในวันที่ใจเหนื่อย',
    description: 'ในยุคที่วิกฤตการณ์ต่าง ๆ ถาโถมเข้ามาแบบที่ตั้งตัวแทบจะไม่ทัน ...',
    price: 1500,
    image: course1img
  },
  {
    title: 'ทำยังไงในวันที่ใจเหนื่อย',
    description: 'ในยุคที่วิกฤตการณ์ต่าง ๆ ถาโถมเข้ามาแบบที่ตั้งตัวแทบจะไม่ทัน ...',
    price: 0,
    image: course1img
  },
  {
    title: 'ทำยังไงในวันที่ใจเหนื่อย',
    description: 'ในยุคที่วิกฤตการณ์ต่าง ๆ ถาโถมเข้ามาแบบที่ตั้งตัวแทบจะไม่ทัน ...',
    price: 1500,
    image: course1img
  },
  {
    title: 'ทำยังไงในวันที่ใจเหนื่อย',
    description: 'ในยุคที่วิกฤตการณ์ต่าง ๆ ถาโถมเข้ามาแบบที่ตั้งตัวแทบจะไม่ทัน ...',
    price: 1500,
    image: course1img
  }
]
const CoustListItem = ({
  image,
  title,
  description,
  price
}) => {
  return (
    <Card
      hoverable
      style={{ width: '100%', textAlign: 'center' }}
      cover={<img alt="example" src={image} />}
    >
      <Card.Meta title={title} description={description}/>
      <p style={{color: price == 0 ? '#DA4981' : '#828486'}}>
        {price !== 0 ? `${price} ฿` : 'ฟรี'}
      </p>
    </Card>
  )
}
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
                  <CoustListItem image={course.image} title={course.title} description={course.description} price={course.price}/>
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

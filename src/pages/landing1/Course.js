import { Breadcrumb, Col, Row, Typography } from 'antd'
import React from 'react'
import { courses } from '../../components/landing1/CourseList'
import CourseListItem from '../../components/landing1/CourseListItem'

const Course = () => {
  return (
    <div className="container page-container">
      <div style={{textAlign: 'center'}}>
        <Typography.Text style={{fontSize: '1.5em'}}>
          คอร์สเรียน
        </Typography.Text>
      </div>
      <div style={{marginTop: 40}}>
        <Breadcrumb>
          <Breadcrumb.Item>
            หน้าแรก
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            คอร์สเรียน
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Row gutter="24" style={{marginTop: 40}}>
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
  )
}

export default Course

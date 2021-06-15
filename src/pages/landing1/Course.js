import { Breadcrumb, Col, Row, Typography } from 'antd'
import React from 'react'
import { courses } from '../../components/landing1/CourseList'
import CourseListItem from '../../components/landing1/CourseListItem'
import idea from '../../images/landing2/idea.png'
const Course = () => {
  return (
    <div>
      <div className="container page-container course-list-page">
        <div style={{textAlign: 'center'}}>
          <Typography.Text style={{fontSize: '1.5em'}} className="page-title">
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
      <div style={{textAlign: 'center', marginTop: 40}} className="footer-section">
        <img className="footer-img" src={idea} alt="idea" />
      </div>
    </div>
  )
}

export default Course

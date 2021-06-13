import { Card, Col, Row, Typography } from 'antd'
import React from 'react'
import ButtonWithArrow from './ButtonWithArrow'
import course1img from '../../images/landing1/course1.png'
import course2img from '../../images/landing1/behaviormodification.png'
import course3img from '../../images/landing1/childpersontality.png'
import course4img from '../../images/landing1/adolescent.png'
import star from '../../images/landing1/star.png'
import starActivated from '../../images/landing1/star_activated.png'
import lock from '../../images/landing1/lock.png'
import { Link, useRouteMatch } from 'react-router-dom'

const courses = [
  {
    title: 'ทำยังไงในวันที่ใจเหนื่อย',
    description: 'ในยุคที่วิกฤตการณ์ต่าง ๆ ถาโถมเข้ามาแบบที่ตั้งตัวแทบจะไม่ทัน ...',
    price: 0,
    image: course1img,
    favorited: true,
    locked: false,
    link: 'course1'
  },
  {
    title: 'การปรับพฤติกรรม',
    description: 'การจัดการวางเงื่อนไขพฤติกรรม การเรียนรู้จากตัวแบบ การใช้ทฤษฎี ...',
    price: 1500,
    image: course2img,
    favorited: false,
    locked: true
  },
  {
    title: 'บุคลิกภาพเด็ก',
    description: 'ความหมายของบุคลิกภาพ สิ่งที่มี อิทธิพลต่อพัฒนาการทางบุคลิก ...',
    price: 1200,
    image: course3img,
    favorited: false,
    locked: true
  },
  {
    title: 'จิตวิทยาวัยรุ่น',
    description: 'พัฒนาการของบุคคลและความสัมพันธ์ระหว่างบุคคลในระยะวัยรุ่นตอนต้น ...',
    price: 1200,
    image: course4img,
    favorited: false,
    locked: true
  },
]
const CoustListItem = ({
  image,
  title,
  description,
  price,
  favorited,
  locked,
  link
}) => {
  const route = useRouteMatch()
  return (
    <Link to={link ? `${route.path}/${link}` : undefined}>
      <Card
        hoverable
        style={{ width: '100%', textAlign: 'center' }}
        cover={(
          <div style={{position: 'relative'}}>
            <img alt="favorite" src={favorited ? starActivated : star} style={{position: 'absolute', top: 0, right: 0, margin: 8, }}/>
            {
              locked && <img alt="lock" src={lock} style={{position: 'absolute', top: '50%', left: '50%', margin: -12, width: 24, height: 24}}/>
            }
            <img alt="example" src={image} />
          </div>
        )}
      >
        <Card.Meta title={title} description={description}/>
        <p style={{color: price === 0 ? '#DA4981' : '#828486'}}>
          {price !== 0 ? `${price} ฿` : 'ฟรี'}
        </p>
      </Card>
    </Link>
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
                  <CoustListItem image={course.image} title={course.title} description={course.description} price={course.price} favorited={course.favorited} locked={course.locked} link={course.link}/>
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

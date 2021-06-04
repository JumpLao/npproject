import { Col, Row, Typography } from 'antd'
import React from 'react'
import activityImg from '../../images/landing1/activity.png'
import calendarIcon from '../../images/landing1/Group 15.png'
import notiIcon from '../../images/landing1/Group 14.png'

const ListItem = ({
  title,
  image,
  children
}) => {
  return (
    <Row style={{flexWrap: 'nowrap', paddingBottom: 32}}>
      <Col flex="60px" >
        <img width="60" src={image} alt="calendar" />
      </Col>
      <Col flex="auto">
        <Typography.Title level={4}>
          {title}
        </Typography.Title>
        <Typography.Text>
          {children}
        </Typography.Text>
      </Col>
    </Row>
  )
} 
const ActivitySection = () => {
  return (
    <div class="container" style={{marginBottom: 60}}>
      <Row gutter={40}>
        <Col xs={24} lg={12}>
          <img src={activityImg} style={{width: '100%'}} alt="activity"/>
        </Col>
        <Col xs={24} lg={12}>
          <div style={{paddingBottom: 40}}>
            <Typography.Title level={2}>
              ตารางกิจกรรม
            </Typography.Title>
            <Typography.Text>
              ตารางรวบรวมกิจกรรมที่น่าสนใจ  อาทิ งานเสวนา งานอบรม การสัมนาเชิงปฏิบัติการ ทั้งออนไลน์และออฟไลน์ มีทั้งกิจกรรมที่เข้าร่วมฟรี และชำระเงิน นอกจากนี้ยังรวมถึงการนัดหมายเพื่อเข้ารับบริการต่าง ๆ ตามที่ท่านได้นัดหมายไว้ เช่น การปรึกษาเชิงจิตวิทยาทั้งแบบเดี่ยว แบบคู่ หรือครอบครัว การประเมินพัฒนาการ การเสริมสร้าง กระตุ้นพัฒนาการ ตลอดจนการปรับพฤติกรรม
            </Typography.Text>
          </div>
          <div>
            <ListItem image={calendarIcon} title="รวมทุกกิจกรรมไว้ในหน้าเดียว">
              ไม่ต้องจดบันทึกเองให้เสียเวลา
              เรารวบรวมทุกกิจกรรมไว้ในหน้าเดียว
              สามารถค้นหากิจกรรมและนัดหมายได้สะดวก รวดเร็ว
            </ListItem>
          </div>
          <div>
            <ListItem image={notiIcon} title="ไม่พลาดนัดหมายสำคัญ">
              ปัญหาของการลืมนัดจะหายไป ระบบแจ้งเตือนของเรา
              จะช่วยให้คุณไม่พลาดนัดหมายสำคัญ นอกจากนี้
              ยังสามารถเลื่อนนัดและยกเลิกนัดได้เองภายในระบบ
            </ListItem>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ActivitySection

import { Col, Row, Typography } from 'antd'
import React from 'react'
import testImg from '../../images/landing1/test.png'
import starIcon from '../../images/landing1/Group 16.png'
import brainIcon from '../../images/landing1/Group 17.png'

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
const TestSection = () => {
  return (
    <div className="container test-section" style={{marginBottom: 60}}>
      <Row gutter={40}>
        <Col xs={24} lg={12}>
          <div style={{padding: 40}}>
            <Typography.Title level={2}>
              แบบทดสอบ และ ระบบวิจัย
            </Typography.Title>
            <Typography.Text>
              คุณจะได้ทดลองทำแบบทดสอบทางจิตวิทยาต่าง ๆ เช่น แบบทดสอบบุคลิกภาพ แบบทดสอบสุขภาวะ แบบทดสอบภาวะผู้นำ เป็นต้นทั้งนี้จะมีการแปรผลเบื้องต้นให้คุณทราบ และหากต้องการแปรผลโดยละเอียดก็สามารถนัดหมายเพื่อขอรับบริการได้เพิ่มเติมนอกจากนี้คุณยังสามารถมีส่วนร่วมในงานวิจัยทางจิตวิทยาของอาจารย์และผู้เชี่ยวชาญในหัวข้อที่คุณสนใจอีกด้วย
            </Typography.Text>
          </div>
          <div className={'learn'}>
            <ListItem image={starIcon} title="การเรียนรู้รูปแบบใหม่">
              ระบบแบบทดสอบจะช่วยให้คุณได้เข้าใจการวัดประเมินทางจิตวิทยาเพิ่มมากขึ้น  และช่วยส่งเสริมให้คุณเกิดการเรียนรู้ที่ดีเกี่ยวกับคุณลักษณะทางจิตวิทยา
            </ListItem>
          </div>
          <div className={'self-understand'}>
            <ListItem image={brainIcon} title="ทำความเข้าใจตนเอง">
              การตระหนักรู้ระหว่างทำแบบทดสอบและผลของแบบทดสอบจะช่วยให้คุณได้ทำความเข้าใจคุณลักษณะทางจิตวิทยาในตนเองได้เพิ่มเติมมากยิ่งขึ้น
            </ListItem>
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <img className={'test-img'} src={testImg} style={{width: '100%'}} alt="test"/>
        </Col>
      </Row>
    </div>
  )
}

export default TestSection

import { Button, Col, notification, Radio, Result, Row, Skeleton, Typography } from 'antd'
import { Form } from 'antd'
import React from 'react'
import { useHistory } from 'react-router'
import { useAsync } from 'react-use'
import { useIdentity } from '../../contexts/IdentityContext'
import GoogleSheetDB from '../../utils/GoogleSheetDB'
const googleSheetDB = new GoogleSheetDB()
const ratings = [
  'เว็บไซต์นี้ใช้งานได้ง่าย',
  'เว็บไซต์นี้มีการนำทางที่ง่าย',
  'ฉันรู้สึกสบายใจ ที่จะทำธุรกรรมการเงินภายในเว็บไซต์นี้ (เช่น จ่ายเงินซื้อคอร์ส)',
  'ฉันรู้สึกมั่นใจ ที่จะดำเนินกิจกรรมภายในเว็บไซต์นี้',
  'ท่านจะแนะนำเว็บไซต์นี้ให้กับเพื่อนไหม ?',
  'ฉันรอที่จะกลับมาใช้เว็บไซต์นี้อีกในอนาคต',
  'ฉันคิดว่าเว็บไซต์นี้มีความน่าสนใจ',
  'เว็บไซต์นี้มีการนำเสนอที่สะอาดและเรียบง่าย',
]
const Form2 = () => {
  const {
    loading,
    error,
  } = useAsync(() => {
    return googleSheetDB.auth()
  })
  const history = useHistory()
  const {
    id
  } = useIdentity()
  const handleSubmit = async (payload) => {
    try {
      await googleSheetDB.save(id, payload)
      notification.success({
        message: 'บันทึกข้อมูลสำเร็จ'
      })
      history.push('/questionair/3')
    } catch (e) {
      console.log(e)
      notification.error({
        message: 'เกิดข้อผิดพลาด'
      })
    }
  }
  if (loading) {
    return <Skeleton />
  }
  if (error) {
    return <Result status="error" title={'พบข้อผิดพลาด'} />
  }
  return (
    <div style={{textAlign: 'center'}}>
      <Typography.Title level={3} style={{color: '#18A0FB'}}>
        จากการใช้งานระบบ e-learning เมื่อสักครู่ ท่านมีความคิดเห็นอย่างไร ?
      </Typography.Title>
      <div>
        <Typography.Text>
          ไม่มีคำตอบที่ถูกหรือผิด สามารถเลือกตอบตามความรู้สึกและความคิดเห็นส่วนตัวของท่าน
โดย คลิกไปยังวงกลมตาม “ระดับความเห็นด้วย” ของท่านในแต่ละข้อ
        </Typography.Text>
      </div>
      <Form onFinish={handleSubmit} style={{paddingTop: 40}}>
        {
          ratings.map(rating => {
            return (
              <Row key={rating}>
                <Col xs={24}>
                  <Row style={{paddingBottom: 18}}>
                    <Col xs={24}>
                      <Typography.Text style={{color: '#1289D9'}}>
                        "{rating}"
                      </Typography.Text>
                    </Col>
                  </Row>
                  <Row style={{paddingBottom: 40}}>
                    <Col xs={7} md={8} style={{textAlign: 'right'}}>
                      ไม่เห็นด้วยอย่างยิ่ง
                    </Col>
                    <Col xs={10} md={8}>
                      <Form.Item name={rating} labelCol={0} rules={[{required: true}]}>
                        <Radio.Group>
                          <Radio value={0}/>
                          <Radio value={1}/>
                          <Radio value={2}/>
                          <Radio value={3}/>
                          <Radio value={4}/>
                          <Radio value={5}/>
                          <Radio value={6}/>
                          <Radio value={7}/>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                    <Col xs={7} md={8} style={{textAlign: 'left'}}>
                      เห็นด้วยอย่างยิ่ง
                    </Col>
                  </Row>
                </Col>
              </Row>
            )
          })
        }
        <Form.Item style={{paddingTop: 40}}>
          <Button type="primary" htmlType="submit">
            ถัดไป
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Form2

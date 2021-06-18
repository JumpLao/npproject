import { Button, Col, Input, notification, Result, Row, Skeleton, Typography } from 'antd'
import { Form } from 'antd'
import React from 'react'
import { useHistory } from 'react-router'
import { useAsync } from 'react-use'
import { useIdentity } from '../../contexts/IdentityContext'
import GoogleSheetDB from '../../utils/GoogleSheetDB'
const googleSheetDB = new GoogleSheetDB()
const questions = [
  'ในอนาคต หากระบบนี้มีการเพิ่มเติมคอร์สเรียน ท่านอยากให้มีคอร์สเรียนหัวข้อใด ?',
  'ข้อเสนอแนะหรือความคิดเห็นในการพัฒนาระบบ e-learning ?',
]
const Form3 = () => {
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
      history.push('/debrief')
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
        แบ่งปันความเห็นอื่น ๆ ของท่าน
      </Typography.Title>
      <div>
        <Typography.Text>
        ( ในส่วนนี้ท่านสามารถเลือกตอบหรือเลือกไม่ตอบได้ )
หากประสงค์จะไม่ตอบ สามารถเลื่อนลงไปเพื่อกดปุ่ม “ส่งคำตอบ” ได้ทันที
        </Typography.Text>
      </div>
      <Form onFinish={handleSubmit} style={{paddingTop: 40}}>
        {
          questions.map(question => {
            return (
              <Row key={question} style={{textAlign: 'left'}}>
                <Col xs={24}>
                  <Row style={{paddingBottom: 18}}>
                    <Col xs={24} style={{textAlign: 'left'}}>
                      <Typography.Text style={{color: '#1289D9'}}>
                        {question}
                      </Typography.Text>
                    </Col>
                  </Row>
                  <Row style={{paddingBottom: 40}}>
                    <Col xs={24}>
                      <Form.Item name={question} labelCol={0}>
                        <Input.TextArea rows={5}/>
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>
            )
          })
        }
        <Form.Item style={{paddingTop: 40}}>
          <Button type="primary" htmlType="submit">
            ส่งคำตอบ
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Form3

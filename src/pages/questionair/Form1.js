import { Button, Col, notification, Radio, Result, Row, Skeleton, Typography } from 'antd'
import { Form } from 'antd'
import React from 'react'
import { useHistory } from 'react-router'
import { useAsync } from 'react-use'
import { useIdentity } from '../../contexts/IdentityContext'
import GoogleSheetDB from '../../utils/GoogleSheetDB'
const googleSheetDB = new GoogleSheetDB()
const feelings = [
  ['น่ารำคาญ', 'น่าสนุก'],
  ['เข้าใจยาก', 'เข้าใจง่าย'],
  ['สร้างสรรค์', 'ราบเรียบ'],
  ['เรียนรู้ง่าย', 'เรียนรู้ยาก'],
  ['มีคุณค่า', 'ไร้คุณค่า'],
  ['น่าเบื่อ', 'น่าตื่นเต้น'],
  ['ไม่น่าสนใจ', 'น่าสนใจ'],
  ['ทำนายไม่ได้', 'ทำนายได้'],
  ['รวดเร็ว', 'เชื่องช้า'],
  ['ช่างประดิษฐ์', 'ตามแบบแผน'],
  ['ขัดขวาง', 'สนับสนุน'],
  ['ดี', 'แย่'],
  ['ซับซ้อน', 'เรียบง่าย'],
  ['ไม่น่าชอบได้', 'น่าชื่นชอบได้'],
  ['ดูทั่วไป', 'ดูชั้นนำ'],
  ['ไม่น่าชม', 'น่าชื่นชม'],
  ['ปลอดภัย', 'ไม่ปลอดภัย'],
  ['เพิ่มแรงจูงใจ', 'ลดแรงจูงใจ'],
  ['ตรงตามที่คาดหวัง', 'ไม่ตรงตามที่คาดหวัง'],
  ['ไร้ประสิทธิภาพ', 'มีประสิทธิภาพ'],
  ['ชัดเจน', 'สับสน'],
  ['ปฏิบัติยาก', 'ปฏิบัติง่าย'],
  ['ดูเป็นระเบียบ', 'ดูวุ่นวาย'],
  ['ดึงดูดใจ', 'ไม่ดึงดูดใจ'],
  ['ดูเป็นมิตร', 'ดูไม่เป็นมิตร'],
  ['อนุรักษ์นิยม', 'เป็นนวัตกรรม'],
]
const Form1 = () => {
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
      history.push('/questionair/2')
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
        จากการใช้งานระบบ e-learning เมื่อสักครู่ ท่านรู้สึกอย่างไร ?
      </Typography.Title>
      <div>
        <Typography.Text>
        ไม่มีคำตอบที่ถูกหรือผิด สามารถเลือกตอบตามความรู้สึกและความคิดเห็นส่วนตัวของท่าน
โดย คลิกไปยังวงกลมตาม “คะแนนที่ใกล้เคียงความรู้สึก” ของท่านในแต่ละข้อ
        </Typography.Text>
      </div>
      <Form onFinish={handleSubmit} style={{paddingTop: 40}}>
        {
          feelings.map(feel => {
            return (
              <Row key={feel[1]}>
                <Col xs={7} md={8} style={{textAlign: 'right'}}>
                  {feel[0]}
                </Col>
                <Col xs={10} md={8}>
                  <Form.Item name={feel[1]}  labelCol={0} rules={[{required: true}]}>
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
                  {feel[1]}
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

export default Form1

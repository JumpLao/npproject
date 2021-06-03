import React from 'react'
import { Form, Typography, Button, Input, Radio, notification, Skeleton, Result } from 'antd'
import arrowright from '../images/arrow-right-small.png'
import { useHistory } from 'react-router';
import GoogleSheetDB from '../utils/GoogleSheetDB';
import { useAsync } from 'react-use';
import { useIdentity } from '../contexts/IdentityContext';
const googleSheetDB = new GoogleSheetDB()
const genderoptions = [
  'หญิง',
  'ชาย',
  'มีความหลากหลายทางเพศ (LGBTQIA+)',
  'ไม่ต้องการระบุ',
];
const environmentoptions = [
  'สภาพแวดล้อมปิด (ไม่มีเสียง/สิ่งรบกวน)',
  'สภาพแวดล้อมเปิด (มีเสียง/สิ่งรบกวน)'
]
const DemographicPage = () => {
  const history = useHistory()
  const {
    id
  } = useIdentity()
  const {
    loading,
    error,
  } = useAsync(() => {
    return googleSheetDB.auth()
  })
  const handleSubmit = async (formData) => {
    try {
      await googleSheetDB.save(id, formData)
      notification.success({
        message: 'บันทึกข้อมูลสำเร็จ'
      })
    } catch (e) {
      console.log(e)
      notification.error({
        message: 'มีข้อผิดพลาดเกิดขึ้น'
      })
    }
    history.push('/landing1')
  }
  if (loading) {
    return <Skeleton />
  }
  if (error) {
    return <Result status="error" />
  }
  return (
    <Form onFinish={handleSubmit} layout="vertical">
      <Typography.Title level={5}>
        โปรดระบุข้อมูลส่วนบุคคลของท่าน และสภาพแวดล้อมขณะใช้งาน
      </Typography.Title>
      <Form.Item label="อายุ (ปี)" name="age">
        <Input type="number" placeholder="อายุ"/>
      </Form.Item>
      <Form.Item label="เพศ" name="gender">
        <Radio.Group>
          {genderoptions.map((option) => {
            return (
              <div className="vertical-checkbox-group-item-container">
                <Radio value={option}>{option}</Radio>
              </div>
            )
          })}
        </Radio.Group>
      </Form.Item>
      <Form.Item label="สภาพแวดล้อมขณะนี้" name="environment">
        <Radio.Group>
          {environmentoptions.map((option) => {
            return (
              <div className="vertical-checkbox-group-item-container">
                <Radio value={option}>{option}</Radio>
              </div>
            )
          })}
        </Radio.Group>
      </Form.Item>
      <Form.Item style={{paddingTop: 24}}>
        <Button type="primary" htmlType="submit">เข้าใช้งานเว็บไซต์ <img height={12} src={arrowright} alt="arrow" style={{paddingLeft: 8, marginTop: -2}}/></Button>
      </Form.Item>
    </Form>
  )
}

export default DemographicPage

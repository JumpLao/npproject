import React from 'react'
import { Form, Checkbox, Typography, Button, Skeleton, Result, notification } from 'antd'
import arrowright from '../images/arrow-right.png'
import { useHistory } from 'react-router'
import GoogleSheetDB from '../utils/GoogleSheetDB.js'
import { useAsync } from 'react-use'
import { useIdentity } from '../contexts/IdentityContext'
const options = [
  'มีอายุระหว่าง 18-25 ปี',
  'ฟัง พูด อ่าน เขียน ภาษาไทยได้',
  'รับทราบว่าข้อมูลและคำตอบจะถูกบันทึกโดยไม่ระบุตัวตน',
  'ต้องการเรียนคอร์ส "ทำยังไงในวันที่ใจเหนื่อย" บนเว็บไซต์นี้ ',
];
const googleSheetDB = new GoogleSheetDB()

const ConsentPage = () => {
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
    const {
      consent
    } = formData
    try {
      const dataToSave = {
        consent1: consent.indexOf(options[0]) !== -1,
        consent2: consent.indexOf(options[1]) !== -1,
        consent3: consent.indexOf(options[2]) !== -1,
        consent4: consent.indexOf(options[3]) !== -1
      }
      await googleSheetDB.save(id, dataToSave)
      notification.success({
        message: 'บันทึกข้อมูลสำเร็จ'
      })
    } catch (e) {
      console.log(e)
      notification.error({
        message: 'มีข้อผิดพลาดเกิดขึ้น'
      })
    }
    history.push('/home/demographic')
  }
  if (loading) {
    return <Skeleton />
  }
  if (error) {
    return <Result status="error" />
  }
  return (
    <Form onFinish={handleSubmit}>
      <Typography.Title style={{color: '#18A0FB', paddingBottom: 24}}>
        โปรดอ่านรายละเอียด <img src={arrowright} alt="arrow"/><br/>
        และกรอกข้อมูลเบื้องต้น<br/>
        ก่อนเข้าใช้งานเว็บไซต์<br/>
      </Typography.Title>
      <Typography.Text style={{paddingBottom: 24, display: 'inline-block'}}>
        โปรดทำเครื่องหมาย
        <Checkbox style={{marginLeft: 8, marginRight: 8}} checked onClick={(e) => e.preventDefault()}/>
        หน้าข้อความเพื่อยืนยันคุณสมบัติของท่าน
      </Typography.Text>
      <Form.Item noStyle name="consent">
        <Checkbox.Group>
          {options.map((option) => {
            return (
              <div className={'vertical-checkbox-group-item-container'}>
                <Checkbox value={option}>{option}</Checkbox>
              </div>
            )
          })}
        </Checkbox.Group>
      </Form.Item>
      <Form.Item style={{paddingTop: 24}}>
        <small style={{color: '#828486'}}>*โปรดใช้งานบนคอมพิวเตอร์ โน๊ตบุ๊ก หรือแท็บเล็ต (แนวนอน) *</small>
        <Button type="primary" htmlType="submit">ยินยอมเข้าร่วมงานวิจัย</Button>
      </Form.Item>
    </Form>
  )
}

export default ConsentPage

import React from 'react'
import { Form, Checkbox, Typography, Button } from 'antd'
import arrowright from '../images/arrow-right.png'
import { useHistory } from 'react-router';
const options = [
  'มีอายุระหว่าง 18-25 ปี',
  'ฟัง พูด อ่าน เขียน ภาษาไทยได้',
  'รับทราบว่าข้อมูลและคำตอบจะถูกบันทึกโดยไม่ระบุตัวตน',
  'ต้องการเรียนคอร์ส "ทำยังไงในวันที่ใจเหนื่อย" บนเว็บไซต์นี้ ',
];

const ConsentPage = () => {
  const history = useHistory()
  const handleSubmit = (formData) => {
    history.push('/home/demographic')
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

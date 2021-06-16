import { Button, Typography } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'

const NotFound = () => {
  const history = useHistory()
  return (
    <div class="container page-container">
      <div style={{textAlign: 'center'}}>
        <Typography.Title>
          ขออภัย ไม่พบหน้าที่คุณต้องการ
        </Typography.Title>
        <Typography.Title level={3}>
          ขณะนี้มีเพียงระบบ e-learning เท่านั้นที่เปิดใช้งาน
        </Typography.Title>
        <Button type="primary" onClick={() => history.push('/landing1')}>
          กลับสู่หน้าแรก
        </Button>
      </div>
    </div>
  )
}

export default NotFound

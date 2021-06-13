import { Modal, Result, Typography } from 'antd'
import React, { useImperativeHandle, useState } from 'react'
import { useHistory } from 'react-router'
import reward from '../../images/landing1/endtest.png'
import ButtonWithArrow from './ButtonWithArrow'
const EndTestModal = ({
  className,
  player
}, ref) => {
  const [visible, setvisible] = useState(false)
  const history = useHistory()
  useImperativeHandle(
    ref,
    () => ({
      open: openModal
    }),
  )
  const openModal = (quiz) => {
    setvisible(true)
  }
  const handleClose = () => {
    setvisible(false)
    player.playVideo()
  }
  return (
    <Modal visible={visible} className={`quiz-modal ${className}`} title={null} footer={null} onCancel={handleClose}>
      <Result icon={<img src={reward} alt="reward"/>}>
        <div style={{textAlign: 'center'}}>
          <div>
            <Typography.Title level={3} style={{color: '#18A0FB'}}>
              ท่านได้ทดสอบ<br />
              เว็บไซต์ของเราสำเร็จแล้ว
            </Typography.Title>
          </div>
          <div>
            <Typography.Text style={{color: '#18A0FB'}}>
              โปรดกดปุ่ม “ถัดไป” ด้านล่าง
            </Typography.Text>
          </div>
          <div>
            <Typography.Text>
              เพื่อตอบแบบสอบถาม
            </Typography.Text>
          </div>
          <div style={{marginTop: 40}}>
            <ButtonWithArrow onClick={() => history.push('/questionair')}>
              ถัดไป
            </ButtonWithArrow>
          </div>
        </div>
      </Result>
    </Modal>
  )
}

export default React.forwardRef(EndTestModal)

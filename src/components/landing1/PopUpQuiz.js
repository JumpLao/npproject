import { Button, Modal, notification, Radio, Typography } from 'antd'
import { Form } from 'antd'
import _ from 'lodash'
import React, { useImperativeHandle, useState } from 'react'
import { useIdentity } from '../../contexts/IdentityContext'
import { REWARD_MODE } from '../../utils/ABTestingManager'
const PopUpQuiz = ({
  className,
  googleSheetDB,
  player,
  rewardMode,
  showRewardModal,
  nextQuestion
}, ref) => {
  const [visible, setvisible] = useState(false)
  const [quiz, setquiz] = useState()
  const {
    id
  } = useIdentity()
  useImperativeHandle(
    ref,
    () => ({
      open: openModal
    }),
  )
  const openModal = (quiz) => {
    setquiz(quiz)
    setvisible(true)
  }
  const handleSubmit = async (formData) => {
    try {
      await googleSheetDB.save(id, formData)
      notification.success({
        message: 'บันทึกข้อมูลเรียบร้อย'
      })
      if (rewardMode === REWARD_MODE.PER_QUESTION) {
        setvisible(false)
        showRewardModal()
        return
      }
      setvisible(false)
      nextQuestion()
      if (rewardMode === REWARD_MODE.PER_QUESTION) {
        player.playVideo()
      }
      return
    } catch (e) {
      console.log(e)
      notification.error({
        message: 'เกิดข้อผิดพลาด'
      })
    }
  }
  const choices = _.get(quiz, 'choices', [])
  const title = _.get(quiz, 'question', () => (<span>Unknown</span>))
  return (
    <Modal visible={visible} className={`quiz-modal ${className}`} title="แบบทดสอบ" footer={null}>
      <div style={{textAlign: 'center', paddingTop: 24, paddingBottom: 40}}>
        <Typography.Text className={'quiz-modal-title'} style={{fontSize: '1.4em'}}>
          {title()}
        </Typography.Text>
      </div>
      <Form onFinish={handleSubmit}>
        <Form.Item noStyle name={`quiz#${_.get(quiz, 'id')}`}>
          <Radio.Group>
            {
              choices.map((choice, index) => (<div style={{paddingBottom: 16}}><Radio value={index}>{choice}</Radio></div>))
            }
          </Radio.Group>
        </Form.Item>
        <Form.Item style={{textAlign: 'center', paddingTop: 24}}>
          <Button type="primary" htmlType="submit">ส่งคำตอบ</Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default React.forwardRef(PopUpQuiz)

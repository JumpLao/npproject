import { Modal, Result } from 'antd'
import React, { useImperativeHandle, useState } from 'react'
import reward from '../../images/landing1/reward.png'
import reward2 from '../../images/landing1/reward2.png'
import { REWARD_MODE } from '../../utils/ABTestingManager'
const RewardModal = ({
  className,
  player,
  rewardMode,
  showEndTestModal,
  nextQuestion
}, ref) => {
  const [visible, setvisible] = useState(false)
  useImperativeHandle(
    ref,
    () => ({
      open: openModal
    }),
  )
  const openModal = () => {
    player.pauseVideo()
    setvisible(true)
  }
  const handleClose = () => {
    setvisible(false)
    if (rewardMode === REWARD_MODE.PER_QUIZ) {
      showEndTestModal()
      return
    }
    nextQuestion()
    player.playVideo()
  }
  if (rewardMode === REWARD_MODE.PER_QUIZ) {
    return (
      <Modal visible={visible} className={`quiz-modal ${className}`} title="ยินดีด้วยคุณทำสำเร็จ" footer={null} onCancel={handleClose}>
        <Result icon={<img src={reward2} alt="reward"/>} title="คุณได้รับเหรียญ 500 tokensจากการให้ความร่วมมือ
ตอบแบบทดสอบข้อนี้"/>
      </Modal>
    )
  }
  return (
    <Modal visible={visible} className={`quiz-modal ${className}`} title="ยินดีด้วยคุณทำสำเร็จ" footer={null} onCancel={handleClose}>
      <Result icon={<img src={reward} alt="reward"/>} title="คุณได้รับเหรียญ 100 tokensจากการให้ความร่วมมือตอบแบบทดสอบข้อนี้"/>
    </Modal>
  )
}

export default React.forwardRef(RewardModal)

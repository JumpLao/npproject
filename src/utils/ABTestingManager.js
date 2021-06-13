import { REWARD_MODE } from "../pages/landing1/CourseDetail"

const ABTestMode = [
  {
    theme: 'landing1',
    rewardMode: REWARD_MODE.PER_QUIZ
  },
  {
    theme: 'landing1',
    rewardMode: REWARD_MODE.PER_QUESTION
  },
  {
    theme: 'landing2',
    rewardMode: REWARD_MODE.PER_QUIZ
  },
  {
    theme: 'landing2',
    rewardMode: REWARD_MODE.PER_QUESTION
  }
]

export const getTheme = (id) => {
  const mode = ABTestMode[id % 4]
  return mode.theme
}
export const getRewardMode = (id) => {
  const mode = ABTestMode[id % 4]
  return mode.rewardMode
}
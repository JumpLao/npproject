import { Button } from 'antd'
import React from 'react'
import arrow from '../../images/landing1/arrow-right.png'
const ButtonWithArrow = ({
  children,
  ...rest
}) => {
  return (
    <Button type="primary" size="large" {...rest}>
      {children}
      <img src={arrow} alt="arrow" width="16" style={{marginLeft: 8}} />
    </Button>
  )
}

export default ButtonWithArrow

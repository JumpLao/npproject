import { Col, Row, Typography } from 'antd'
import React from 'react'

const FeatureItem = ({
  image,
  title,
  children
}) => {
  return (
    <Row style={{flexWrap: "nowrap"}}>
      <Col flex="48px" style={{paddingRight: 16}}>
        <img src={image} alt="feature1"/>
      </Col>
      <Col flex="auto">
        <Typography.Title level={4}>
          {title}
        </Typography.Title>
        <Typography.Text>
          {children}
        </Typography.Text>
      </Col>
    </Row>
  )
}

export default FeatureItem

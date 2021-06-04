import { Col, Row } from 'antd'
import React from 'react'
import feature1 from '../../images/landing1/feature1.png'
import feature2 from '../../images/landing1/feature2.png'
import feature3 from '../../images/landing1/feature3.png'
import ButtonWithArrow from './ButtonWithArrow'
import FeatureItem from './FeatureItem'
const Features = () => {
  return (
    <section className="section">
      <div className="container">
        <Row>
          <Col xs={24} md={8}>
            <FeatureItem
              title="สอนโดยผู้เชี่ยวชาญ"
              image={feature1}
            >
              ออกแบบและสอนโดยอาจารย์และ
              ผู้เชี่ยวชาญทางด้านจิตวิทยา
              มีการจัดสรรคอร์สเรียนให้เหมาะสมกับ
              ความเข้มข้นของเนื้อหาแต่ละระดับ
            </FeatureItem>
          </Col>
          <Col xs={24} md={8}>
            <FeatureItem
              title="ใช้งานได้ตลอดเวลา"
              image={feature2}
            >
              สามารถเข้าใช้งานได้ตลอด 24 ชั่วโมง
              บนทุกอุปกรณ์ ไม่ว่าจะเป็น โทรศัพท์ 
              แท็บเล็ต หรือ คอมพิวเตอร์
            </FeatureItem>
          </Col>
          <Col xs={24} md={8}>
            <FeatureItem
              title="รับส่วนลดจาก Tokens"
              image={feature3}
            >
              หลังจากที่ทุกท่านร่วมกิจกรรมต่าง ๆ
              จะได้รับเหรียญ (tokens) เพื่อสะสม
              แลกรับส่วนลดกิจกรรมหรือคอร์สเรียน
              ที่ต้องชำระเงินรวมถึงของที่ระลึกพิเศษ
            </FeatureItem>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Features

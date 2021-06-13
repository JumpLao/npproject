import { Breadcrumb, Button, Col, Collapse, Result, Row, Tabs, Typography } from 'antd'
import React from 'react'
import star from '../../images/landing1/star_border.png'
import network from '../../images/landing1/account_tree.png'
import computer from '../../images/landing1/card_membership.png'
import starActivated from '../../images/landing1/star_activated.png'
import lecturer from '../../images/landing1/lecturer.png'
import errorImg from '../../images/landing1/error.png'
import download from '../../images/landing1/download.png'
import { Link } from 'react-router-dom'
import { courses } from '../../components/landing1/CourseList'
import CourseListItem from '../../components/landing1/CourseListItem'

const CourseDetail = () => {
  return (
    <div class="container">
      <Breadcrumb>
        <Breadcrumb.Item>
          หน้าแรก
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          คอร์สเรียน
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          ทำยังไงในวันที่ใจเหนื่อย
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row justify="space-between" align="middle">
        <Col >
          <Row align="middle">
            <Typography.Text style={{color: '#E3739E', fontSize: '2em'}}>
              ทำยังไงในวันที่ใจเหนื่อย
            </Typography.Text>
            <div style={{display: 'inline-block'}}>
              <img width="32" style={{padding: 4}} src={star} alt="faviroite" />
              <img width="32" style={{padding: 4}} src={network} alt="faviroite" />
              <img width="32" style={{padding: 4}} src={computer} alt="faviroite" />
            </div>
          </Row>
        </Col>
        <Col>
          <Button.Group>
            <Button>
              0 บาท
            </Button>
            <Button type="primary">
              เรียนเลย
            </Button>
          </Button.Group>
        </Col>
      </Row>
      <Row align="middle">
        <img src={starActivated} alt="star" />
        <img src={starActivated} alt="star" />
        <img src={starActivated} alt="star" />
        <img src={starActivated} alt="star" />
        <img src={starActivated} alt="star" />
        <Typography.Text style={{fontSize: '0.8em', color: 'grey', paddingLeft: 24}}>
          4.5/5 (19 รีวิว)
        </Typography.Text>
      </Row>
      <Row style={{marginTop: 24}}>
        <Col xs={24} sm={16}>
          <div style={{width: '100%', paddingTop: '56.5%', position: 'relative'}}>
            <iframe
              title="letslearn"
              src="https://drive.google.com/file/d/16sj_ai0ywHKbDcBtFWeTAkJsEkZbzt_0/preview?start=1"
              style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0}}
            ></iframe>
          </div>
        </Col>
        <Col xs={24} sm={8}>
          <Collapse>
            <Collapse.Panel header="ทำยังไงในวันที่ใจเหนื่อย">
              <a href="https://drive.google.com/file/d/1cQISqGVf-7cYRxKNrkFRx8nV-GDuXahD/view?usp=sharing" target="_blank">
                <Row>
                  <img src={download} alt="download" />
                  <Typography.Text style={{paddingLeft: 12}}>
                    เอกสารประกอบการเรียน
                  </Typography.Text>
                </Row>
              </a>
            </Collapse.Panel>
          </Collapse>
        </Col>
      </Row>
      <Tabs key="1" style={{marginTop: 24}}>
        <Tabs.TabPane key="1" tab="เกี่ยวกับ">
          <div style={{padding: 24}}>
            <div>
              <Typography.Text>
                ในยุคที่วิกฤตการณ์ต่าง ๆ ถาโถมเข้ามาแบบที่ตั้งตัวแทบไม่ทัน จิตใจของเราคงจะไหวหวั่นไม่น้อยถึงแม้ว่าจะมีใครต่อใครพูดกับเราว่าฟ้าหลังฝนย่อมดีเสมอ ขอแค่ให้เราก้าวผ่านมันมาให้ได้แล้วตัวเราจะเก่งขึ้นแต่มันก็เป็นวิธีที่ยากเหลือเกินสำหรับใครบางคน ... แล้วจะทำยังไงหล่ะในวันที่ใจเหนื่อยขนาดนี้วิดีโอนี้จะชวนทุกคนมาทำความรู้จักและเข้าใจกับ ความยืดหยุ่นทางจิตใจ หรือ  Resilienceเป็นความสามารถของคนเราในการพาตัวเองกลับสู่ความสมดุลของชีวิต เป็นการตอบสนองเชิงบวกทำให้เกิดการปรับตัวให้สามารถก้าวข้ามอุปสรรค์และความทุกข์ในชีวิต ความสามารถในการฟื้นคืนสู่สมดุลหมายความว่าอย่างไรอีกบ้าง Resilence มีองค์ประกอบอะไรบ้าง  หนทางที่จะเปลี่ยนแปลงให้เรากลับสู่สมดุลจากภาวะเครียดนั้นทำได้อย่างไรหากเราฝึกให้ตัวเรามีความยืดหยุ่นทางจิตใจที่ดีแล้วชีวิตจะเป็นอย่างไร มาเรียนรู้ทักษะนี้ไปพร้อมกันเลย : )
              </Typography.Text>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{marginTop: 24}}>
                <Typography.Text style={{fontSize: '1.4em'}}>
                  สอนโดย
                </Typography.Text>
              </div>
              <div style={{marginTop: 24}}>
                <img src={lecturer} alt="lecturer" />
              </div>
              <div style={{marginTop: 24}}>
                <Typography.Text>
                  พี่วิว<br/>
                  นักจิตวิทยาฝึกหัดระดับปริญญาโท<br/>
                  คณะจิตวิทยา จุฬาลงกรณ์มหาวิทยาลัย<br/>
                  เจ้าของเพจดูแลใจกัน เพจแชร์ความรู้ทางจิตวิทยา<br/>
                  เพื่อคนที่อยากดูแลใจตัวเองให้แข็งแรงและมีความสุข<br/>
                </Typography.Text>
              </div>
            </div>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane key="2" tab="รีวิว">
          <Result icon={<img width="120" src={errorImg} alt="error" />} title="พบกับฟีเจอร์รีวิวได้ในเร็วๆนี้" />
        </Tabs.TabPane>
        <Tabs.TabPane key="3" tab="ห้องสนทนา">
        <Result icon={<img width="120" src={errorImg} alt="error" />} title="พบกับฟีเจอร์ห้องสนทนาได้ในเร็ว ๆ นี้" />
        </Tabs.TabPane>
      </Tabs>
      <Typography.Title level={3}>
        คอร์สแนะนำ
      </Typography.Title>
      <Row gutter="24">
        {
          courses.filter(f => [3,4].indexOf(f.id) !== -1).map(course => {
            return (
              <Col xs={12} md={8} lg={6}>
                <CourseListItem image={course.image} title={course.title} description={course.description} price={course.price} favorited={course.favorited} locked={course.locked} link={course.link}/>
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
}

export default CourseDetail

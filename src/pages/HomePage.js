import React from 'react'
import { Col, Layout, Row } from 'antd'
import bg from '../images/questionairbg.png'
import authorimg from '../images/authorimage.png'
import { Redirect, Route, Switch } from 'react-router'
import ConsentPage from './ConsentPage'
import DemographicPage from './DemographicPage'
const HomePage = () => {
  return (
    <Layout style={{height: '100%'}}>
      <Layout.Content style={{overflow: 'auto'}}>
        <Row style={{minHeight: '100%'}}>
          <Col xs={24} lg={14} xl={16} style={{
            padding: 16,
            display: 'flex',
            alignItems: 'center'
          }}>
            <div style={{flex: 1}}>
              <div style={{width: 400, maxWidth: '100%', margin: 'auto', display: 'block',paddingTop: 40, paddingBottom: 40}}>
                <Switch>
                  <Route path="/home/consent" exact>
                    <ConsentPage />
                  </Route>
                  <Route path="/home/demographic" exact>
                    <DemographicPage />
                  </Route>
                  <Route>
                    <Redirect to="/home/consent" />
                  </Route>
                </Switch>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={10} xl={8} style={{
            backgroundImage: `url(${bg})`,
            color: 'white',
            textAlign: 'center',
            padding: 16,
            display: 'flex',
            alignItems: 'center'
          }}>
            <div style={{flex: 1}}>
              <div style={{width: 400, maxWidth: '100%', margin: 'auto', display: 'block', paddingTop: 40, paddingBottom: 40}}>
                <p>
                  เว็บไซต์นี้เป็นส่วนหนึ่งในการเก็บข้อมูลงานวิจัย <br/>
                  ของนิสิตระดับปริญญาตรี ชั้นปีที่ 4 <br/>
                  คณะจิตวิทยา จุฬาลงกรณ์มหาวิทยาลัย <br/>
                  <br/>
                  ทั้งนี้ข้อมูลที่เกี่ยวข้องกับผู้เข้าร่วมวิจัย<br/>
                  และคำตอบทั้งหมด จะถูกเก็บเป็นความลับ<br/>
                  หากมีการนำเสนอ ข้อมูลจะถูกนำเสนอในภาพรวมเท่านั้น<br/>
                  โดยข้อมูลใดที่สามารถระบุถึงตัวตนของ<br/>
                  ผู้เข้าร่วมการวิจัยได้จะไม่ปรากฏในรายงานดังกล่าว<br/>
                </p>
                <div style={{marginTop: 48}}>
                  <div>
                    <strong>
                      หากมีข้อสงสัยเพิ่มเติม สามารถติดต่อผู้วิจัยได้ที่
                    </strong>
                  </div>
                  <div style={{display: 'inline-block', marginTop: 8}}>
                    <img src={authorimg} alt="author" style={{borderRadius: '50%', display: 'inline-block'}}/>
                    <div style={{textAlign: 'left', paddingLeft: 12, display: 'inline-block'}}>
                      <strong>สุพิชญา ศรีทองจรัสกุล</strong><br/>
                      <small>np.supichaya@gmail.com</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  )
}

export default HomePage

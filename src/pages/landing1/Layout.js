import { Col, Layout, Menu, Row } from 'antd'
import Search from 'antd/lib/input/Search'
import React from 'react'
import logo from '../../images/landing1/logo.png'
import noti from '../../images/landing1/noti.png'
import account from '../../images/landing1/account.png'
import { Route, Switch, useRouteMatch } from 'react-router'
import Home from './Home'
import Course from './Course'
import CourseDetail from './CourseDetail'

const LandingPage = () => {
  const route = useRouteMatch()
  return (
    <Layout style={{height: '100%', backgroundColor: 'white'}} id="landing1">
      <Layout.Header style={{backgroundColor: 'white'}}>
        <Row justify="space-between">
          <Col>
            <Row style={{flexWrap: 'nowrap'}}>
              <Col style={{paddingRight: 40}}>
                <a href='/'>
                  <img src={logo} alt="logo" />
                </a>
              </Col>
              <Col>
                <Search placeholder="Search" />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row style={{flexWrap: 'nowrap'}}>
              <Col>
                <Menu theme="light" mode="horizontal">
                  <Menu.Item key="1">คอร์สเรียน</Menu.Item>
                  <Menu.Item key="2">ตารางกิจกรร</Menu.Item>
                  <Menu.Item key="3">แบบทดสอบ</Menu.Item>
                  <Menu.Item key="4">ระบบวิจัย</Menu.Item>
                </Menu>
              </Col>
              <Col>
                <Menu theme="light" mode="horizontal">
                  <Menu.Item key="5">
                    <img src={noti} alt="" />
                  </Menu.Item>
                  <Menu.Item key="6">
                    <img src={account} alt="" />
                  </Menu.Item>
                </Menu>
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout.Header>
      <Layout.Content style={{overflow: 'auto'}}>
        <Switch>
          <Route path={`${route.path}/courses`} exact>
            <Course />
          </Route>
          <Route path={`${route.path}/courses/:id`} exact>
            <CourseDetail />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
        <Layout.Footer style={{backgroundColor: 'white'}}>
          <div style={{textAlign:' center', borderBottom: '1px solid black', paddingBottom: 20}}>
            <img width="160" src={logo} alt="logo"/>
          </div>
          <div style={{textAlign:' center', paddingTop: 20}}>
            <span>
              Learning | Growing up | Happiness
            </span>
          </div>
        </Layout.Footer>
      </Layout.Content>
    </Layout>
  )
}

export default LandingPage

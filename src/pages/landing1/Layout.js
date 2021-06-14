import { Col, Layout, Menu, Result, Row, Skeleton, Typography } from 'antd'
import Search from 'antd/lib/input/Search'
import React from 'react'
import logo from '../../images/landing1/logo.png'
import logo2 from '../../images/landing2/logo.png'
import noti from '../../images/landing1/noti.png'
import account from '../../images/landing1/account.png'
import { Route, Switch, useRouteMatch } from 'react-router'
import Home from './Home'
import Course from './Course'
import CourseDetail from './CourseDetail'
import { useAsync, useLocation } from 'react-use'
import GoogleSheetDB from '../../utils/GoogleSheetDB'
import { useIdentity } from '../../contexts/IdentityContext'
import { getTheme } from '../../utils/ABTestingManager'
const googleSheetDB = new GoogleSheetDB()
const LandingPage = () => {
  const location = useLocation()
  const {
    id
  } = useIdentity()
  const {
    loading,
    error,
  } = useAsync(() => {
    return googleSheetDB.auth()
  })
  const {
    loading: themeLoading,
    error: themeError,
    value: theme
  } = useAsync(async () => {
    const rowIndex = await googleSheetDB.getRowIndex(id)
    return getTheme(rowIndex)
  }, [loading])
  const route = useRouteMatch()
  if (loading || themeLoading) {
    return <Skeleton />
  }
  if (error || themeError) {
    return <Result status="error" />
  }
  debugger
  return (
    <Layout style={{height: '100%', backgroundColor: 'white'}} id={theme}>
      <Layout.Header className="themed-header" >
        <Row justify="space-between">
          <Col>
            <Row style={{flexWrap: 'nowrap'}}>
              <Col style={{paddingRight: 40}}>
                <a href='/'>
                  <img src={theme === 'landing1' ? logo : logo2} alt="logo" />
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
                <Menu className="themed-menu" theme="light" mode="horizontal">
                  <Menu.Item key="1">คอร์สเรียน</Menu.Item>
                  <Menu.Item key="2">ตารางกิจกรร</Menu.Item>
                  <Menu.Item key="3">แบบทดสอบ</Menu.Item>
                  <Menu.Item key="4">ระบบวิจัย</Menu.Item>
                </Menu>
              </Col>
              <Col>
                <Menu className="themed-menu" theme="light" mode="horizontal">
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
            <Home theme={theme} />
          </Route>
        </Switch>
        <Layout.Footer
          className={(location.pathname === '/landing1' || location.pathname === '/landing1/') && 'home'} 
          style={{backgroundColor: 'white'}}
        >
          <div style={{textAlign:' center', paddingBottom: 20}}>
            <img className="footer-logo" width="160" src={logo} alt="logo"/>
          </div>
          <hr />
          <div style={{textAlign:' center', paddingTop: 20}}>
            <Typography.Text>
              Learning | Growing up | Happiness
            </Typography.Text>
          </div>
        </Layout.Footer>
      </Layout.Content>
    </Layout>
  )
}

export default LandingPage

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
import qs from 'qs'
import { Link } from 'react-router-dom'
import NotFound from '../NotFound'

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
    const {
      theme
    } = qs.parse(location.search, {
      ignoreQueryPrefix: true
    })
    if (['landing1', 'landing2'].indexOf(theme) !== -1){
      return theme
    }
    const rowIndex = await googleSheetDB.getRowIndex(id)
    return getTheme(rowIndex)
  }, [loading])
  useAsync(async () => {
    await googleSheetDB.save(id, {
      theme
    })
  }, [theme])
  const route = useRouteMatch()
  if (loading || themeLoading) {
    return <Skeleton />
  }
  if (error || themeError) {
    return <Result status="error" />
  }
  debugger
  return (
    <Layout style={{height: '100%', backgroundColor: 'transparent'}} id={theme}>
      <Layout.Header
        style={{zIndex: 1}}
        className={{
          'themed-header': true,
          home: location.pathname === '/landing1' || location.pathname === '/landing1/',
          courses: location.pathname === '/landing1/courses' || location.pathname === '/landing1/courses/',
        }}
      >
        <Row justify="space-between">
          <Col>
            <Row style={{flexWrap: 'nowrap'}}>
              <Col style={{paddingRight: 40}}>
                <a href='/landing1'>
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
                  <Menu.Item key="1">
                    <Link to="/landing1/courses">
                      ??????????????????????????????
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/schedule">
                      ????????????????????????????????????
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/test">
                      ????????????????????????
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/research">
                      ???????????????????????????
                    </Link>
                  </Menu.Item>
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
      <Layout.Content>
        <Switch>
          <Route path={`${route.path}/courses`} exact>
            <Course />
          </Route>
          <Route path={`${route.path}/courses/:id`} exact>
            <CourseDetail />
          </Route>
          <Route path={`${route.path}`} exact>
            <Home theme={theme} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Layout.Footer
          className={{
            home: location.pathname === '/landing1' || location.pathname === '/landing1/',
            courses: location.pathname === '/landing1/courses' || location.pathname === '/landing1/courses/'
          }}
          style={{backgroundColor: 'white'}}
        >
          <Row>
            <Col flex="auto" className="footerleft">
            </Col>
            <Col>
              <div style={{textAlign:' center', paddingBottom: 20}}>
                <img className="footer-logo" width="160" src={logo} alt="logo"/>
              </div>
              <hr />
              <div style={{textAlign:' center', paddingTop: 20}}>
                <Typography.Text>
                  Learning | Growing up | Happiness
                </Typography.Text>
              </div>
            </Col>
            <Col flex="auto" className="footerright"></Col>
          </Row>
        </Layout.Footer>
      </Layout.Content>
    </Layout>
  )
}

export default LandingPage

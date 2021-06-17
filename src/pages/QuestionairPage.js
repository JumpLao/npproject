import { Col, Layout, Row, Typography } from 'antd'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
// import DebriefPage from './questionair/DebriefPage'
import Form1 from './questionair/Form1'
import Form2 from './questionair/Form2'
import Form3 from './questionair/Form3'

const QuestionairPage = () => {
  return (
    <Layout>
      <Layout.Header>
        <Row justify="end">
          <Col>
            <Switch>
              <Route path="/questionair/1"><Typography.Title level={3} style={{color: 'white'}}>1/3</Typography.Title></Route>
              <Route path="/questionair/2"><Typography.Title level={3} style={{color: 'white'}}>2/3</Typography.Title></Route>
              <Route path="/questionair/3"><Typography.Title level={3} style={{color: 'white'}}>3/3</Typography.Title></Route>
            </Switch>
          </Col>
        </Row>
      </Layout.Header>
      <Layout.Content>
        <div className="container">
          <Switch>
            <Route path="/questionair/1">
              <Form1 />
            </Route>
            <Route path="/questionair/2">
              <Form2 />
            </Route>
            <Route path="/questionair/3">
              <Form3 />
            </Route>
            <Route>
              <Redirect to="/questionair/1" />
            </Route>
          </Switch>
        </div>
      </Layout.Content>
    </Layout>
  )
}

export default QuestionairPage

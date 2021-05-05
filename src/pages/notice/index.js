import * as React from 'react'
import { Row, Col, Carousel, Tabs } from 'antd'
import styles from './notice.module.css'

const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

const contentStyle = {
  height: '250px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

const Notice = () => {
  return (
    <div className={styles.notice}>
      <Row gutter={16}>
        <Col className='gutter-row' span={12}>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </Col>
        <Col className='gutter-row' span={12}>
          <Tabs defaultActiveKey='1' onChange={callback}>
            <TabPane tab='公告消息' key='1'>
              <div>Content of Tab Pane 1</div>
              <div>Content of Tab Pane 1</div>
              <div>Content of Tab Pane 1</div>
              <div>Content of Tab Pane 1</div>
              <div>Content of Tab Pane 1</div>
              <div>Content of Tab Pane 1</div>
              <div>Content of Tab Pane 1</div>
            </TabPane>
            <TabPane tab='资源动态' key='2'>
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab='文化活动' key='3'>
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  )
}

export default Notice

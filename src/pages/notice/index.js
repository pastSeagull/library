import * as React from 'react'
import { Row, Col, Carousel, Tabs, Divider } from 'antd'
import styles from './notice.module.css'
import tsg1 from '../../img/tsg1.png'
import tsg2 from '../../img/tsg2.png'
import tsg3 from '../../img/tsg3.png'
import tsg4 from '../../img/tsg4.png'

const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

/* const contentStyle = {
  height: '250px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
} */

const Notice = () => {
  return (
    <div className={styles.notice}>
      <Divider orientation='left'></Divider>
      <Row gutter={16}>
        <Col className='gutter-row' span={12}>
          <Carousel autoplay>
            <div>
              <img className={styles.img} src={tsg1} alt='' />
            </div>
            <div>
              <img className={styles.img} src={tsg2} alt='' />
            </div>
            <div>
              <img className={styles.img} src={tsg3} alt='' />
            </div>
            <div>
              <img className={styles.img} src={tsg4} alt='' />
            </div>
          </Carousel>
        </Col>
        <Col className='gutter-row' span={12}>
          <Tabs defaultActiveKey='1' onChange={callback}>
            <TabPane tab='服务时间' key='1'>
              <div>
                借阅服务 周一至周日 7:00-22:30
                <br></br>
                <br></br>
                总馆基本书库 周一至周日 7:00-22:30
                <br></br>
                <br></br>
                总馆外文书库 周一至周日 7:00-22:30
                <br></br>
                <br></br>
                自习区 周一至周日 06:30-23:00
              </div>
            </TabPane>
            {/* <TabPane tab='资源动态' key='2'>
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab='文化活动' key='3'>
              Content of Tab Pane 3
            </TabPane> */}
          </Tabs>
        </Col>
      </Row>
    </div>
  )
}

export default Notice

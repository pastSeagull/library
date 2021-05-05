import * as React from 'react'
import { Row, Col, Divider } from 'antd'
import { SolutionOutlined } from '@ant-design/icons'
import styles from './service.module.css'

const Service = () => {
  return (
    <div>
      <Divider orientation='left'>常用功能</Divider>
      <Row gutter={[16, 24]} justify='center' align='top'>
        <Col className='gutter-row' span={4}>
          <div className={styles.servicebox}>
            <SolutionOutlined />
            推荐购买
          </div>
        </Col>
        <Col className='gutter-row' span={4}>
          <div className={styles.servicebox}>借阅/续借/预约</div>
        </Col>
        <Col className='gutter-row' span={4}>
          <div className={styles.servicebox}>推荐阅读</div>
        </Col>
        <Col className='gutter-row' span={4}>
          <div className={styles.servicebox}>新书通报</div>
        </Col>
        <Col className='gutter-row' span={4}>
          <div className={styles.servicebox}>新生指南</div>
        </Col>
        <Col className='gutter-row' span={4}>
          <div className={styles.servicebox}>个人借阅状态</div>
        </Col>
      </Row>
    </div>
  )
}

export default Service

import React from 'react'
import { Row, Col, Descriptions } from 'antd'
import styles from './components.module.css'
import images from '../../img/s1103152.jpg'

const Contents = (props) => {
  return (
    <Row className={styles.row}>
      <Col className={styles.bos} span={5}>
        <img className={styles.img} src={images} alt='' />
      </Col>
      <Col className={styles.describe} span={18}>
        <Descriptions title={props.date.book_name}>
          <Descriptions.Item span={3}>
            {props.date.author} {props.date.publisher}
          </Descriptions.Item>
          <Descriptions.Item>书籍在架, I565.88/5.1</Descriptions.Item>
        </Descriptions>
      </Col>
    </Row>
  )
}

export default Contents

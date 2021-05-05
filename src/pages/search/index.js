import * as React from 'react'
import { Input, Col, Row } from 'antd'
import { useHistory } from 'react-router-dom'
import styles from './search.module.css'
// import images from '../../img/seek.jpg'

const { Search } = Input

const Searchs = () => {
  const history = useHistory()

  const onSearch = (value) => {
    if (value) {
      history.push('/search' + value)
    }
  }

  return (
    <Row justify='center' align='top'>
      {/* <img src={images} alt='' /> */}
      <Col span={15}>
        <div className={styles.sear}>
          <Row justify='center' align='top'>
            <Col className={styles.midd} span={20}>
              <Search
                size='large'
                className={styles.searInput}
                placeholder='input search text'
                onSearch={onSearch}
                enterButton
              />
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  )
}

export default Searchs

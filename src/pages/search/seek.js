import React from 'react'
import { Row, Col, Input } from 'antd'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getData } from '../../store/actionCreators'
// import apiGetData from '../../api//index'
import Contents from '../components/content'
import Classify from '../components/classify'
import styles from './search.module.css'

const { Search } = Input

const Seek = (props) => {
  //const [data, setData] = React.useState()

  const { id } = useParams()

  React.useEffect(() => {
    props.onText(id)
    // setData(props.text)
  }, [])

  const onSearch = (values) => {
    props.onText(values)
  }

  return (
    <Row>
      <Col span={6}>
        <Classify />
      </Col>
      <Col span={18}>
        <div className={styles.seekBox}>
          <Search onSearch={onSearch} size='large' placeholder={id} enterButton />
        </div>
        {props.text.data.map((i) => {
          return <Contents key={i.book_id} date={i} />
        })}
      </Col>
    </Row>
  )
}

const mapState = (state) => {
  return {
    text: state.text,
  }
}

const mapDispatch = (dispatch) => {
  return {
    onText: (e) => {
      const action = getData(e)
      dispatch(action)
    },
  }
}
export default connect(mapState, mapDispatch)(Seek)

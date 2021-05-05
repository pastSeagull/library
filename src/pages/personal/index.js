import { Row, Col, Card, Tabs, Table } from 'antd'
import { getBorrow } from '../../store/actionCreators'
import { connect } from 'react-redux'
import { useEffect } from 'react'

const { TabPane } = Tabs

const columns = [
  {
    title: '读者编号',
    dataIndex: 'user_certificate',
    copyable: true,
    ellipsis: true,
  },
  {
    title: '图书编号',
    dataIndex: 'book_isbn',
    copyable: true,
    ellipsis: true,
  },
  {
    title: '借阅时间',
    key: 'showTime',
    dataIndex: 'lend_date',
    valueType: 'date',
    hideInSearch: true,
  },
  {
    title: '理应归还时间',
    key: 'showTime',
    dataIndex: 'return_date',
    valueType: 'date',
    hideInSearch: true,
  },
]

const Personal = (props) => {
  function callback(key) {
    console.log(key)
  }
  return (
    <div>
      <Row style={{ width: '80%', margin: '50px auto' }}>
        <Col span={8}>
          <Card title='个人信息' bordered={false} style={{ width: 300 }}>
            <p>姓名：{props.user.user_name}</p>
            <p>性别：{props.user.user_sex}</p>
            <p>借阅图书：{props.user.lend}</p>

            <p>已经借阅图书：{props.user.borrowed}</p>
            <p>罚金：{props.user.unpaid}</p>
          </Card>
        </Col>
        <Col span={16}>
          <Tabs defaultActiveKey='1' onChange={callback}>
            <TabPane tab='借阅图书' key='1'>
              <Table columns={columns} dataSource={props.user.borrow} />
            </TabPane>
            <TabPane tab='已借阅图书' key='2'>
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  )
}

const mapState = (state) => {
  return {
    user: state.user,
    borrow: state.borrow,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getBorrows: (e) => {
      const action = getBorrow(e)
      dispatch(action)
    },
  }
}
export default connect(mapState, mapDispatch)(Personal)

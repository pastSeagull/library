import { Row, Col, Card, Tabs, Table, Space, message } from 'antd'
import { getBorrow, changeBorrow, fresh } from '../../store/actionCreators'
import moment from 'moment'
import { connect } from 'react-redux'
import { borrowRenew } from '../../api'

const { TabPane } = Tabs

// 格式化日期
const formatterTime = (val) => {
  return val ? moment(val).format('YYYY-MM-DD HH:mm:ss') : ''
}

const Personal = (props) => {
  const columns = [
    {
      title: '图书名字',
      dataIndex: 'book.book_name',
      copyable: true,
      ellipsis: true,
    },
    {
      title: '借阅时间',
      key: 'showTime',
      render: formatterTime,
      dataIndex: 'lend_date',
      hideInSearch: true,
    },
    {
      title: '理应归还时间',
      key: 'date',
      render: formatterTime,
      dataIndex: 'return_date',
      hideInSearch: true,
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size='middle'>
          {record.is_renew === 0 ? (
            <a
              onClick={() => {
                borrowRenew(record.borrow_id)
                  .then(() => {
                    props.renew(record.borrow_id)
                    props.newBw(record.user_certificate)
                    message.success('续借成功')
                  })
                  .catch(() => {
                    console.log('error')
                  })
              }}
            >
              续借
            </a>
          ) : (
            <span>只能续借一次</span>
          )}
        </Space>
      ),
    },
  ]

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
            <p>已经借阅图书：{props.by}</p>
            <p>罚金：{props.user.unpaid}</p>
          </Card>
        </Col>
        <Col span={16}>
          <Tabs defaultActiveKey='1' onChange={callback}>
            <TabPane tab='借阅图书' key='1'>
              <Table columns={columns} dataSource={props.borrow} />
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
    by: state.by,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getBorrows: (e) => {
      const action = getBorrow(e)
      dispatch(action)
    },
    renew: (e) => {
      const action = changeBorrow(e)
      dispatch(action)
    },
    newBw: (e) => {
      const action = fresh(e)
      dispatch(action)
    },
  }
}
export default connect(mapState, mapDispatch)(Personal)

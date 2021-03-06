import React, { useState } from 'react'
import { Row, Col, Layout, Button, Modal, Form, Input, Checkbox, message, Menu, Dropdown } from 'antd'
import { connect } from 'react-redux'
import { userLogin, outLogin } from '../../store/actionCreators'
// import { login } from '../../api/index'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'
import styles from './header.module.css'

const { Header } = Layout

const Head = (props) => {
  const history = useHistory()

  const [visible, setVisible] = useState(false)

  const onCreate = async (values) => {
    console.log('Received values of form: ', values)
  }

  const outLogin = ({ key }) => {
    if (key === '1') {
      props.out()
    }
  }

  const menu = (
    <Menu onClick={outLogin}>
      <Menu.Item key='2'>
        <Link to='/personal'>个人中心</Link>
      </Menu.Item>
      <Menu.Item key='1'>
        <span
          onClick={() => {
            history.push('/')
          }}
        >
          退出
        </span>
      </Menu.Item>
    </Menu>
  )

  const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm()

    const onFinish = async (values) => {
      props.login(values)
      setVisible(false)
      if (props.user.user_name) {
        history.push('/personal')
      }
    }
    const onLg = () => {}
    return (
      <Modal
        visible={visible}
        style={{ width: 350 }}
        title='登录'
        closable={false}
        footer={null}
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields()
              onCreate(values)
            })
            .catch((info) => {
              console.log('Validate Failed:', info)
            })
        }}
      >
        <Form
          name='normal_login'
          style={{ width: 300 }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name='username'
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Username' />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input prefix={<LockOutlined className='site-form-item-icon' />} type='password' placeholder='Password' />
          </Form.Item>
          <Form.Item>
            <Form.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' style={{ width: '100%' }}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    )
  }

  return (
    <div>
      <Layout>
        <Header>
          <Row>
            <Col className={styles.logo} span={8}></Col>
            <Col className={styles.menu} span={15}>
              <Row className={styles.logo} justify='space-around'>
                <Col span={4}>
                  <Link to='/'>首页</Link>
                </Col>
                <Col span={4}>开馆时间: 6:30 - 22:30</Col>
                {/* <Col span={4}>捐赠</Col>
                <Col span={4}>指南</Col> */}
                <Col span={4}>
                  <span
                    //退出bug
                    onClick={() => {
                      props.user.user_name ? setVisible(false) : setVisible(true)
                    }}
                  >
                    <a>
                      {props.user.user_name ? (
                        <Dropdown overlay={menu} placement='bottomLeft'>
                          <span>{props.user.user_name}</span>
                        </Dropdown>
                      ) : (
                        '我的图书馆'
                      )}
                    </a>
                  </span>
                  <CollectionCreateForm
                    visible={visible}
                    onCreate={onCreate}
                    onCancel={() => {
                      setVisible(false)
                    }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Header>
      </Layout>
    </div>
  )
}

const mapState = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatch = (dispatch) => {
  return {
    login: (e) => {
      const action = userLogin(e)
      dispatch(action)
    },
    out: () => {
      const action = outLogin()
      dispatch(action)
    },
  }
}

export default connect(mapState, mapDispatch)(Head)

import React from 'react'
import { Menu, Col, Row } from 'antd'

const { SubMenu } = Menu

const rootSubmenuKeys = new Set(['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6'])

const Classify = () => {
  const [openKeys, setOpenKeys] = React.useState(['sub1'])

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => !openKeys.includes(key))
    if (!rootSubmenuKeys.has(latestOpenKey)) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  return (
    <Row>
      <Col span={24}>
        <Menu mode='inline' openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }}>
          <SubMenu key='sub1' title='文学'>
            <Menu.Item key='1'>Option 1</Menu.Item>
          </SubMenu>
          <SubMenu key='sub2' title='流行'>
            <Menu.Item key='2'>Option 5</Menu.Item>
          </SubMenu>
          <SubMenu key='sub3' title='文化'>
            <Menu.Item key='3'>Option 9</Menu.Item>
          </SubMenu>
          <SubMenu key='sub4' title='生活'>
            <Menu.Item key='4'>Option 9</Menu.Item>
          </SubMenu>
          <SubMenu key='sub5' title='经管'>
            <Menu.Item key='5'>Option 9</Menu.Item>
          </SubMenu>
          <SubMenu key='sub6' title='科技'>
            <Menu.Item key='6'>Option 9</Menu.Item>
          </SubMenu>
        </Menu>
      </Col>
    </Row>
  )
}

export default Classify

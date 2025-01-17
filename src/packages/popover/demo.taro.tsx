import React, { useRef, useState } from 'react'
import Taro from '@tarojs/taro'
import {
  Cart2,
  Location2,
  My2,
  Category,
  Location,
  Message,
  Notice,
  Scan2,
  Service,
} from '@nutui/icons-react-taro'
import { Button, Popover, Cell } from '@/packages/nutui.react.taro'
import '@/packages/popover/demo.scss'
import Header from '@/sites/components/header'

interface List {
  name: string
  icon?: React.ReactNode
  disabled?: boolean
}

const BadgeDemo = () => {
  const selfContentStyle = {
    width: '195px',
    display: 'flex',
    flexWrap: 'wrap',
  } as any
  const selfContentItem = {
    marginTop: '10px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  } as any
  const selfContentDesc = {
    marginTop: '5px',
    width: '60px',
    fontSize: '10px',
    textAlign: 'center',
  } as any

  const itemList = [
    {
      name: '选项一',
    },
    {
      name: '选项二',
    },
    {
      name: '选项三',
    },
  ]
  const iconItemList = [
    {
      name: '选项一',
      icon: <My2 />,
    },
    {
      name: '选项二',
      icon: <Cart2 />,
    },
    {
      name: '选项三',
      icon: <Location2 />,
    },
  ]
  const itemListDisabled = [
    {
      name: '选项一',
      disabled: true,
    },
    {
      name: '选项二',
      disabled: true,
    },
    {
      name: '选项三',
    },
  ]
  const selfContent = [
    {
      name: <Service />,
      description: 'option1',
    },
    {
      name: <Notice />,
      description: 'option2',
    },
    {
      name: <Location />,
      description: 'option3',
    },
    {
      name: <Category />,
      description: 'option4',
    },
    {
      name: <Scan2 />,
      description: 'option5',
    },
    {
      name: <Message />,
      description: 'option6',
    },
  ]
  const [lightTheme, setLightTheme] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)
  const [showIcon, setShowIcon] = useState(false)
  const [disableAction, setDisableAction] = useState(false)
  const [customized, setCustomized] = useState(false)
  const customLocation = useRef([
    { bottom: false },
    { top: false },
    { left: false },
    { right: false },
    { 'top-start': false },
    { 'top-end': false },
    { 'bottom-start': false },
    { 'bottom-end': false },
    { 'left-start': false },
    { 'left-end': false },
    { 'right-start': false },
    { 'right-end': false },
  ])

  const [customLocationName, setCustomLocationName] = useState('top')
  const [customLocationShow, setCustomLocationShow] = useState(false)

  const chooseHandle = (item: List, index: number) => {
    console.log('选择')
  }

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>基础用法</h2>
        <Cell>
          <Popover
            visible={lightTheme}
            onClick={() => {
              lightTheme ? setLightTheme(false) : setLightTheme(true)
            }}
            list={itemList}
            style={{ marginRight: '30px' }}
          >
            <Button type="primary" shape="square">
              明朗风格
            </Button>
          </Popover>
          <Popover
            visible={darkTheme}
            theme="dark"
            onClick={() => {
              darkTheme ? setDarkTheme(false) : setDarkTheme(true)
            }}
            list={itemList}
          >
            <Button type="primary" shape="square">
              暗黑风格
            </Button>
          </Popover>
        </Cell>
        <h2>选项配置</h2>
        <Cell>
          <Popover
            visible={showIcon}
            theme="dark"
            onClick={() => {
              showIcon ? setShowIcon(false) : setShowIcon(true)
            }}
            list={iconItemList}
            style={{ marginRight: '30px' }}
          >
            <Button type="primary" shape="square">
              展示图标
            </Button>
          </Popover>
          <Popover
            visible={disableAction}
            onClick={() => {
              disableAction ? setDisableAction(false) : setDisableAction(true)
            }}
            list={itemListDisabled}
            onChoose={chooseHandle}
          >
            <Button type="primary" shape="square">
              禁用选项
            </Button>
          </Popover>
        </Cell>
        <h2>自定义内容</h2>
        <Cell>
          <Popover
            visible={customized}
            onClick={() => {
              customized ? setCustomized(false) : setCustomized(true)
            }}
            location="bottom-start"
            className="customContent"
          >
            <Button type="primary" shape="square">
              自定义内容
            </Button>
            {customized ? (
              <div className="self-content" style={selfContentStyle}>
                {selfContent.map((item: any) => {
                  return (
                    <div
                      className="self-content-item"
                      style={selfContentItem}
                      key={item.name}
                    >
                      {item.name}
                      <div
                        className="self-content-description"
                        style={selfContentDesc}
                      >
                        {item.description}
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              ''
            )}
          </Popover>
        </Cell>
        <h2 className="demoClass">位置自定义</h2>

        <Popover
          visible={customLocationShow}
          location={customLocationName}
          onClick={() => {
            setCustomLocationShow(false)
          }}
          list={iconItemList}
          onChoose={chooseHandle}
          className="brickBox"
        >
          <div className="brick" />
        </Popover>

        <Cell className="demo-cell-popover">
          <div className="customButtonBox">
            {customLocation.current.map((location, i) => {
              const k = Object.keys(location)[0] as any
              const v = Object.values(location)[0]
              return (
                <Button
                  key={i}
                  type="primary"
                  shape="square"
                  style={{ width: '140px', marginBottom: '8px' }}
                  onClick={() => {
                    setCustomLocationName(k)
                    setCustomLocationShow(!customLocationShow)
                  }}
                >
                  {k}
                </Button>
              )
            })}
          </div>
        </Cell>
      </div>
    </>
  )
}

export default BadgeDemo

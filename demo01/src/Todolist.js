import React, { Component } from 'react';
import store from './store';
import 'antd/dist/antd.css';
import { Input, Button, Row, Col,List,Icon } from 'antd';
import { Popconfirm, message } from 'antd';
class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
...store.getState(),
name: 'zhangsan'
    }
    store.subscribe(()=>{
      this.setState(store.getState())
    })
  }
  formInput (ev) {
    let action = {
      type: 'changeInputValue',
      value: ev.target.value
    }
    store.dispatch(action)
  }
  confirm(index) {
    this.deleteItem(index)
    message.success('Click on Yes');
  }
  render() {
    return (
      <div style={{width: '500px'}}>
        <Row>
          <Col span={16}>
            <Input placeholder="请输入" name="inputValue" value={this.state.inputValue}
             onInput={this.formInput}></Input>
          </Col>
          <Col span={8}>
            <Button type="primary" onClick={this.btnClick.bind(this)}>确定</Button>
          </Col>
        </Row>
        <List
      bordered
      dataSource={this.state.list}
      renderItem={(item,index) => (
        <List.Item>{item} 
         <Popconfirm
    title="Are you sure delete this task?"
    onConfirm={this.confirm.bind(this,index)}
    okText="Yes"
    cancelText="No"
  >
   <Icon type="delete" style={{color: '#f00'}}/>
  </Popconfirm>
        </List.Item>
      )}
    ></List>
    {this.state.inputValue} -- {this.state.name}
      </div>);
  }
  btnClick () {
    store.dispatch({
      type: 'CHANGE_LIST',
      value: this.state.inputValue
    })
  }
  deleteItem (index) {
    console.log('index',index)
    store.dispatch({
      type: 'DELETE_LIST',
      value: index
    })
  }
}

export default Todolist;
import React,{Component,Fragment} from 'react'
import axios from 'axios';
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
class Xiaojiejie extends Component{
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '111',
      list: [1111,2222]
    }
  }
  render() {
    return (
      // Fragment 文档碎片
      <Fragment>
        <label htmlFor="inputValue">增加服务</label>
        <input id="inputValue" type="text" placeholder="请输入" value={this.state.inputValue}
        ref={input=>{this.input = input}}
          onChange={this.fromChange.bind(this)}/>
        <button onClick={this.btnClick.bind(this,'add')}>确定</button>
        <ul>
          {/* 列表循环 */}
          <TransitionGroup>
          
         {
           this.state.list.map((item,index)=>{
              // return <li key={'li' + index} onClick={this.btnClick.bind(this,'delete',index)} dangerouslySetInnerHTML={{__html:item}}></li>
              return (
              <CSSTransition key={index + item.label} timeout={1000} classNames="my-node" unmountOnExit appear>
                <XiaojiejieItem content={item.label} key={index} index={index} deleteItem={this.btnClick.bind(this)}/>
              </CSSTransition> 
             )
           })
         }
           </TransitionGroup>
        </ul>
        <Boss></Boss>
      </Fragment>
    )
  }
  fromChange (ev) {
    this.setState({
      inputValue: this.input.value
    },()=>{
    })
  }
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
  }
  componentDidMount() {
    axios.get('https://www.easy-mock.com/mock/5d0c877f6e24883bb8c3e0c3/example/getServiceList').then(res=>{
      this.setState({ list: res.data.body });
    }).catch(err=>{
    })
  }
  btnClick (from,index) {
    switch (from) {
      case 'add':
          this.state.inputValue && this.setState({
            list: [...this.state.list,{label: this.state.inputValue,value: this.state.list.length}],
            inputValue: ''
          })
      break;
      case 'delete':
        var list = this.state.list
        list.splice(index,1)
          this.setState({
            list: list
          })
      break;
      default:
      break;
    }
  }
}
export default Xiaojiejie
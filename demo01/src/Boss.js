import React, { Component,Fragment } from 'react';
import {CSSTransition} from 'react-transition-group'
class Boss extends Component {
  constructor(props) {
    super(props);
    this.btnClick = this.btnClick.bind(this)
    this.state = { 
      show: true
     }
  }
  render() { 
    return ( 
      <Fragment>
        <CSSTransition
          in={this.state.show} timeout={200} classNames="my-node"
          unmountOnExit
        >
           <div>
          终极boss齐天大圣孙悟空
        </div>
        </CSSTransition>
       
        <button onClick={this.btnClick}>召唤boss</button>
      </Fragment>
      
    );
  }
  btnClick () {
    this.setState({ show: !this.state.show });
  }
}
 
export default Boss;
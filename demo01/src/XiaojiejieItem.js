import React, { Component} from 'react';
import PropTypes from 'prop-types';
class XiaojiejieItem extends Component {
  render() { 
    return ( <li 
      onClick={this.props.deleteItem.bind(this,'delete',this.props.index)}>{this.props.content}</li> );
  }
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.content !== nextProps.content
  }
  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUpdate(nextProps, nextState) {
  }
  componentDidUpdate(prevProps, prevState) {
  }
  componentWillUnmount () {
  }

}
XiaojiejieItem.defaultProps ={
  content: '松岛枫'
}
XiaojiejieItem.propTypes={
  content:PropTypes.any.isRequired,
  deleteItem:PropTypes.func,
  index:PropTypes.oneOfType([PropTypes.string,PropTypes.number])
}
export default XiaojiejieItem;
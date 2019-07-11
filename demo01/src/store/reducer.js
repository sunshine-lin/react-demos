const defaultState = {
  inputValue: '1111',
  list: [1,1,12,2,4]
}  //默认数据
export default (state = defaultState,action)=>{  //就是一个方法函数
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'changeInputValue' :
      newState.inputValue = action.value
      break;
    case 'CHANGE_LIST' :
      newState.list.push(action.value)
      break;
    case 'DELETE_LIST' :
      newState.list.splice(action.value,1)
      break;
    default:
      break;
  }
    return newState
}
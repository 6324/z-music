export default (flag, msg) => {
  if (flag === 0) {
    console.log('%c 错误：', 'background: #fff; color: red')
  } else if (flag === 1) {
    if (msg === 'object') {
      console.log(JSON.stringify(msg))
    }
  } else {
    console.log('%c '.concat(flag).concat(' ').concat(msg), 'background: #fff; color: #11CD86')
  }
}

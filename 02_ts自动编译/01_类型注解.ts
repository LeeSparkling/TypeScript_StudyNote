//类型注解：是一种轻量级的为函数或者变量添加的约束
(()=>{
  function showMsg(str:string) {
    return str + '我是h大帅哥'
  }
  let msg = '哈哈哈哈'
  console.log(showMsg(msg))
})()
(()=>{
  // str -> string类型 
  function sayHi(str:string) {
    return '您好啊' + str
  }
  let text = '小xx' 
  console.log(sayHi(text))
})()

// 总结 ：ts文件中如果只有js的代码，那么在html中直接引入ts是可以使用的
// ts文件中函数中的形参如果使用了某个类型进行修饰  在使用tsc编译后的js中不会显示该类型
// ts中使用的是let 修饰符 编译后变成var

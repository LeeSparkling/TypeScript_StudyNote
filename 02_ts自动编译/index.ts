(()=>{
  function sayhello(str:string) {
    return '空你七娃'+str
  }
  // let text = '???'
  // 如果传入的参数类型不匹配的话就会报错
  let text = '111'
  console.log(sayhello(text))
})()

//总结 ：使用 tsc --init 命令初始化tsconfig.json 在配置中添加outDir
//点击终端运行任务 显示所有任务  打开tsc监视 就能进行自动编译了
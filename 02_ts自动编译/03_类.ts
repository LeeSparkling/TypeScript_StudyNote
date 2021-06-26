//ts中写js的类
(()=>{
  interface IPerson {
    firstName :string,
    lastName : String,
  }
  function showFullName (person:IPerson){
    return person.firstName + '_' +person.lastName
  }
  //定义一个类型
  class Person {
    //定义公共的字段 （属性）
    firstName:string
    lastName:string
    fullName:string
    //定义一个构造器函数
    constructor(firstName:string,lastName:string) {
      //更新属性数
      this.firstName = firstName
      this.lastName =lastName
      this.fullName =this.firstName + '_' + this.lastName
    }
  }

  //实例化对象
  const person = new Person('诸葛','亮')
  console.log(showFullName(person))
})() 
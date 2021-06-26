//ts中写js的类
(function () {
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    //定义一个类型
    var Person = /** @class */ (function () {
        //定义一个构造器函数
        function Person(firstName, lastName) {
            //更新属性数
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + '_' + this.lastName;
        }
        return Person;
    }());
    //实例化对象
    var person = new Person('诸葛', '亮');
    console.log(showFullName(person));
})();

//接口： 是一种能力，一种约束
(function () {
    //输出姓名
    function showFullName(person) {
        return person.firstName + ' _ ' + person.lastName;
    }
    //定义的一个对象
    var person = {
        firstName: '小李飞刀',
        lastName: '李寻欢'
    };
    console.log(showFullName(person));
})();

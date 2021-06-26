//类型注解：是一种轻量级的为函数或者变量添加的约束
(function () {
    function showMsg(str) {
        return str + '我是h大帅哥';
    }
    var msg = '哈哈哈哈';
    console.log(showMsg(msg));
})();

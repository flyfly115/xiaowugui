/**
 * 自定义模块1
 */
function coolModule() {
  // 封装 ： 将属性(变量)私有化(private)，外部无法访问
  //私有的数据
  var msg = 'hello world'
  var names = ['I', 'Love', 'you']

  //私有的操作数据的函数
  function doSomething() {
    console.log(msg.toUpperCase())
  }

  function doOtherthing() {
    console.log(names.join(' '))
  }

  //向外暴露包含多个方法的对象
  return {
    doSomething: doSomething,
    doOtherthing: doOtherthing
  }
}
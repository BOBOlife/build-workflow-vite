// 调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象
// 下一步，必须调用遍历器对象的next方法，使得指针移向下一个状态。也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield表达式（或return语句）为止。换言之，Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。
function* hiGenerator () {
  yield 'xxx'
  yield 'yyy'
  return 'zzz'
}

const res = hiGenerator()
res.next()
res.next()
console.log(res.next())

var myIterabel = {}
myIterabel[Symbol.iterator] = function* () {
  yield 1
  yield 2
  yield 3
}

console.log([...myIterabel]);


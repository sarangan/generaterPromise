function fn(nums) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(nums * 2)
    }, 1000)
  })
}
function* gen() {
  const num1 = yield fn(1)
  console.log('num1', num1)
  const num2 = yield fn(num1)
  const num3 = yield fn(num2)
  return num3
}
const g = gen()
const next1 = g.next()
next1.value.then(res1 => {
  console.log(next1) // print { value: Promise { 2 }, done: false } after 1 second
  console.log(res1) // print `2` after 1 senond

  const next2 = g.next(res1) // pass privouse result
  next2.value.then(res2 => {
    console.log(next2) // print { value: Promise { 4 }, done: false } after 2 seconds
    console.log(res2) // print `4` after 2 senond

    const next3 = g.next(res2) // pass privouse result `res2`
    next3.value.then(res3 => {
      console.log(next3) // print { value: Promise { 8 }, done: false } after 3 seconds
      console.log(res3) // print `8` after 3 senond

       // pass privouse result `res3`
      console.log(g.next(res3)) // print { value: 8, done: true } after 3 seconds
    })
  })
})

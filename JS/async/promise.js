'use strict';

// Promise is JavaScript object for asynchronous operation.
// Promise는 비동기 작업을 위한 JavaScript 객체입니다.

// *포인트
// 1. state(상태) - 기능 수행 중인지, 수행완료 후 성공했는지, 실패했는지 상태 이해 필요
// 2. 프로듀서(정보제공자) / 컨슈머(정보사용자) - 차이점 이해하기

// state: pending -> fullfilled or rejected
// Producer vs Consumer


// 1. Producer
// when new Promise is created, the executor runs automatically.
// 새 Promise가 생성되면 Executor(집행자)가 자동으로 실행됩니다.
const promise = new Promise((resolve, reject) => {  // resolve: 성공 / reject: 실패
  // doing some heavy work (network, read files)
  console.log('doing somethimg...')
  setTimeout(() => {
    resolve('ellie')
    // reject(new Error('no network'))
  }, 2000)
})


// 2. Consumers: then, catch, finally
promise // 
  .then((value) => {   // then : 프로미스가 정상적으로 잘 동작이 되어서 성공했을때, value에 resolve값이 들어온다
    console.log(value)
  })
  .catch(error => {    // catch : 프로미스가 정상적으로 동작이 되지않아서 실패했을때, 내가 정의한 error메세지가 호출된다
    console.log(error)
  })
  .finally(() => {console.log('finally')})    // finally : 프로미스 성공여부와 관련없이 마지막에 무조건 호출된다


  // 3. Promise chaing
  const fetchNumder = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
  })

  fetchNumder
  .then(num => num * 2)  // 2
  .then(num => num * 3)  // 6
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num -1), 1000)  // 5
    })
  })
  .then(num => console.log(num))



// 4. Error Handling
const getHen = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000)
  })
const getEgg = hen => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`))
  })

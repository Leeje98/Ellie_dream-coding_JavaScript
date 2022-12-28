// async & await
// clear style of using promise


// 1. async

// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     // do network reqeust in 10 secs... - 10초 안에 네트워크 요청을 수행하십시오...
//     // return ('ellie'); 
//     resolve ('ellie');  // Promise 함수면 꼭 resolve나 reject로 끝내줘야 한다
//   })
// }

async function fetchUser() {   // 함수 앞에 async를 붙이면 자동으로 Promise 함수로 만들 수 있다
  // do network reqeust in 10 secs... - 10초 안에 네트워크 요청을 수행하십시오...
  return ('ellie');  
}

const user = fetchUser();
user.then(console.log)
console.log(user);


// 2. await (기다려)
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
  // 정해진 밀리세컨드(ms)가 지나면 resolve를 호출하는 함수
}

async function getApple() {
  await delay(2000);
  return '🍎'
  // 3초를 기다리다가 사과를 리턴한다
}

async function getBanana() {
  await delay(1000);
  // throw 'error'
  return '🍌'
}

// function pickFruits() {
//   return getApple().then(apple => {
//     return getBanana().then(banana => `${apple} + ${banana}`)
//   })
// }       // 콜백지옥처럼 만들어짐. 아래코드로 간단하게 수정가능함

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  // 각각의 1초 1초씩 소모하는건 비효율적. 각각의 프로미스를 만들어 한번에 처리해준다
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`
}

pickFruits().then(console.log)



// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits =>
  // Promise.all 을 사용하면 배열안에 넣은 모든 프로미스를 모두 모아서 한번에 처리함
    fruits.join(' + ')  
    // join : 배열의 원소들을 연결하여 하나의 값으로 만드는 함수 - 연결지점에 ()안의 문자를 넣어준다
  )
}
pickAllFruits().then(console.log)

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()])
  // Promise.race() : 배열 내부에 있는 프로미스 중에 가장 먼저 완성된 것의 결과 값으로 즉시 요청
}

pickOnlyOne().then(console.log)
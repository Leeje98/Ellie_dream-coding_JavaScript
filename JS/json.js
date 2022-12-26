// JSON
// JsvaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true)
console.log(json)

json = JSON.stringify(['apple', 'banana'])
console.log(json)

const rabbit = {  // rabbit이라는 객체 정의
  name: 'tori',
  color: 'white',
  size: 'null',
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit)
console.log(json)   // rabbit에 대한 정보 출력 - 이때 함수(jump)는 출력되지 않고 오직 key와 value으로 정의되있던 데이터만 출력된다

json = JSON.stringify(rabbit, ["name", "color"])
console.log(json)   //  rabbit에 대한 정보 중 내가 원하는 속성 값 출력

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`)  // rabbit에 대한 정보를 key와 value형식으로 출력
  return key === 'name' ? 'ellie' : value
  // 키가 name 인것은 ellie로 리턴하고 아닌것은 원래의 value로 리턴 == name 수정
})
console.log(json)




// 2. JSON to Object
// parse(json)

console.clear()
json = JSON.stringify(rabbit)
// const obj = JSON.parse(json)  // json파일을 parse 함수 사용하여 오브젝트로 전환
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`)
  return key === 'birtDate' ? new Date(value) : value;  // 1. 이렇게 고쳐줘야
})
console.log(obj)
rabbit.jump()                 // ** json파일로 전환할때 함수는 포함되지 않았음으로 json에서 오브젝트로 변환한 내용중에 함수는 없다
// obj.jump()                    // ㄴ 그렇기 때문에 에러발생

console.log(rabbit.birthDate.getDate())
// console.log(obj.birthDate.getDate())      // 이렇게 하면 오류남  // 2.오류나지 않는다
console.log(obj.birthDate)






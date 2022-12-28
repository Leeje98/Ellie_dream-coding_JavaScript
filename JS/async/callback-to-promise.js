"use strict";

// JavaScript is synchronous. - 자바스크립트는 동기적인 언어이다
// Execute the code block by orger after hoisting. - 동기적인?: 호이스팅이 된 이후로 내가 작성한 순서대로 코드를 읽어내려온다
// hoisting: var, funcion declaration - 호이스팅? - var와 function 들이 제일 위로 끌어올려지는 것

console.log("1"); 
setTimeout(() => console.log("2"), 1000); // 화살표 함수로 표현하는 것이 일반적
console.log("3");

// Synchronous callback - 즉각적으로 동기적으로 실행하는 콜백 함수
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// Asynchronous callback - 나중에 언제 실행될지 알 수 없는 비동기적 함수
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// Callback Hell example - 콜백지옥 경험하기
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    })
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    })
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your passrod");
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log)

 

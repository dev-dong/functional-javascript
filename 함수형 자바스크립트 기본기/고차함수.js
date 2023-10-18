const apply1 = f => f(1); // 함수가 함수를 받아서 안에서 실행하고 있기 때문에 고차 함수라고 한다.
const add2 = a => a + 2;
console.log(apply1(add2)); // apply1 함수에 add2 함수를 전달하면 add2 함수가 실행된다. (a => a + 2)(1) 이런식으로 동작
console.log(apply1(a => a - 1)); // apply1 함수에 익명 함수를 전달하면 익명 함수가 실행된다. (a => a - 1)(1) 이런식으로 동작

const times = (f, n) => {
    let i = -1;
    while (++i < n) f(i);
}

times(console.log, 3); // times 함수에 console.log 함수를 전달하면 console.log 함수가 3번 실행된다.
times(a => console.log(a + 10), 3); // times 함수에 익명 함수를 전달하면 익명 함수가 3번 실행된다.

const addMaker = a => b => a + b; // 함수가 실행되었을 때 함수를 리턴
const add10 = addMaker(10);
console.log(add10.toString()); // b => a + b
console.log(add10(10)); // 20
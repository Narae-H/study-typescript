// ------- 변수 만들 때 타입 지정하는 방법 -------
// 1. String 자료형
let str = 'Kim';
// 2. Object 자료형
// 2-1) 일반
let obj = { name: 'Kim' };
let josh = { name: 'Kim', age: 20 };
// 3. 2가지 자료형 넣고 싶을 떄
let lname = 'Kim';
let myName = 'Kim';
// 5. 함수에서 자료형
// x: number는 x라는 변수는 number 타입이다 라는 뜻
// () :number는 함수의 리턴값이 number 타입이다 라는 뜻
function 함수(x) {
    return x * 2;
}
let john = [1, true];
// ------- 타입스크립트 기본 타입 정리 (primitive types) -------
let 이름 = 'kim';
let 나이 = 20;
let 결혼여부 = false;
let 비고 = null;
let 다른타입 = undefined;
let 회원들 = ['kim', 'lee', 'park'];
let 회원들2 = { name: 'Kim', age: 20 };
// ------- 타입 미리 정하기 애매할 때 (typescript union type, any, unknown) -------
let 회원1 = 123; // union type
let 회원2 = '회원'; // union type
let 회원들3 = [1, 2, 3, '문자'];
let 오브젝트3 = { a: '123' };
let 애니; // 모든 타입의 데이터 들어 올 수 있음. 때문에 JS와 유사. TS의 특징 사라짐. => any말고 unknown 을 쓰자.
let user = 'kim';
let age = undefined;
let married = false;
let 철수 = [user, age, married];
let 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
// ------- 함수에 타입 지정하는 법 & void 타입 -------
function 내함수1(x) {
    return x * 2;
}
// 함수에서만 쓸 수 있는 특정한 타입: void
function 내함수2(x) {
    console.log(x * 2);
}
// console.log( 내함수2() ); // 에러: 파라미터 없으므로
console.log(내함수2(3)); // 가능
// TS에서는 파라미터를 설정한다면 무조건 파라미터 넣어야함.
// 그럼 파라미터가 optional이었으면 좋겠다면? => `?`를 사용!
// `?` 는 undefined와 동일: 내함수3()와 내함수4()는 동일
function 내함수3(x) {
    console.log(x * 2);
}
console.log(내함수3()); // 가능
console.log(내함수3(3)); // 가능
function 내함수4(x) {
    console.log(x * 2);
}

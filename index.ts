// ------- 변수 만들 때 타입 지정하는 방법 -------
// 1. String 자료형
let str: string = 'Kim';

// 2. Object 자료형
// 2-1) 일반
let obj: {name: String} = {name: 'Kim'};

// 2-2) 타입을 변수로 지정
type Person = {
  name: String, 
  age : number
};
let josh: Person = {name: 'Kim', age: 20};

// 3. 2가지 자료형 넣고 싶을 떄
let lname: string | number = 'Kim';

// 4. 타입을 변수로 지정해서 넣을 수도 있음
// 타입을 만들때는 일반 변수랑 차이점 두기 위해서 대문자로 시작
type MyType = String | number;
let myName: MyType = 'Kim';

// 5. 함수에서 자료형
// x: number는 x라는 변수는 number 타입이다 라는 뜻
// () :number는 함수의 리턴값이 number 타입이다 라는 뜻
function 함수 (x: number): number{
  return x * 2;
}

// 6. Array 자료형: tuple 타입 가능.
type Member = [number, boolean];
let john: Member = [1, true];



// ------- 타입스크립트 기본 타입 정리 (primitive types) -------
let 이름: string = 'kim'
let 나이: number = 20;
let 결혼여부: boolean = false;
let 비고: null = null;
let 다른타입: undefined = undefined;
let 회원들: string[] = ['kim', 'lee', 'park'];
let 회원들2: {name: string, age: number} = {name: 'Kim', age: 20};


// ------- 타입 미리 정하기 애매할 때 (typescript union type, any, unknown) -------
let 회원1: number | string = 123; // union type
let 회원2: (number | string) = '회원'; // union type
let 회원들3:  (number | string)[] = [1, 2, 3, '문자'];
let 오브젝트3 : {a: string|number} = {a: '123'};
let 애니: any; // 모든 타입의 데이터 들어 올 수 있음. 때문에 JS와 유사. TS의 특징 사라짐. => any말고 unknown 을 쓰자.

let user: string = 'kim';
let age: (undefined | number) = undefined;
let married: boolean = false; 
let 철수: (string | undefined | number | boolean)[] = [user, age, married];

let 학교: {
  score: (number|boolean)[], 
  teacher: string, 
  friend: (string|string[])} 
= {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

// ------- 함수에 타입 지정하는 법 & void 타입 -------
function 내함수1(x: number): number { 
  return x * 2 
} 

// 함수에서만 쓸 수 있는 특정한 타입: void
function 내함수2(x: number): void { 
  console.log( x * 2 ); 
} 
// console.log( 내함수2() ); // 에러: 파라미터 없으므로
console.log( 내함수2(3) );   // 가능

// TS에서는 파라미터를 설정한다면 무조건 파라미터 넣어야함.
// 그럼 파라미터가 optional이었으면 좋겠다면? => `?`를 사용!
// `?` 는 undefined와 동일: 내함수3()와 내함수4()는 동일
function 내함수3(x?: number): void { 
  console.log( x * 2 ); 
} 
console.log( 내함수3() );  // 가능
console.log( 내함수3(3) ); // 가능

function 내함수4(x: number | undefined): void { 
  console.log( x * 2 ); 
} 

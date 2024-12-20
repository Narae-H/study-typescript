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

// ------- 함수에 타입 지정하는 법 & void 타입 -------
// 작명방식: type은 작명시 대문자로 시작 & 뒤에 Type을 붙이기도 함
// type 키워드는 재정의 불가능
type Animal = string | number | undefined;
let 동물: Animal;

// Object 자료형
// const로 변수 생성하면 절대 변경 불가능.
// but, const로 생성된 변수에 Object 안의 item 변경은 가능.
const 출생지역 = { region: 'seoul'};
출생지역.region = 'busan';

// readonly" ts에서는 object 자료형 안의 아이템도 변경 불가능하게 만들 수 있음.
type Girlfriend = {
  readonly name : string,
}

let 여친 :Girlfriend = {
  name : '엠버'
}

// 여친.name = '유라' // readonly라서 에러남 => but, js 파일로 바꿔주고 실행은 가능함. ts 에디터에서만 잡아줌.

// 선택 사항: '?'
type Girlfriend2 = {
  name? : string,
}
type Girlfriend3 = {
  name : string | undefined,
}

// type변수도 당연히 union type으로 합치기 가능
// 1) union 으로 합치기
type Name = string;
type Age = number;
type NewOne = Name | Age; 

// 2) & 연산자로 object 타입합치기 => object extend
type PositionX = { x: number };
type PositionY = { y: number };
type XandY = PositionX & PositionY
let 좌표 :XandY = { x : 1, y : 2 }


// ------- Literal Types로 만드는 const 변수 유사품 -------
// Literal: 좀 더 엄격하게 지정. 들어올 수 있는 값을 미리 지정
let 이름9: 123; // 앞으로 이름에는 123이라는 타입만 들어올 수 있음. 123이라는 값이 아님!
//이름9 = 456; // 에러

let 테스트: '가' | '나';

function 함수9(a: 'hello'): 1 | 0 {
  return 0;
}

var 자료 = {
  name: 'kim'
} as const // 이 오브젝트 타입을 만들때 
function 내함수(a: 'kim') {

}

내함수(자료.name);

// ------- 함수와 methods에 type alias 지정하는 법 -------
// 1. 함수 타입지정
type 함수타입 = (a: string) => number; // string 타입의 파라미터를 넣고 number 타입의 리턴을 받음.

// 2. 함수표현식에서만 type alias 사용가능
let 함수100: 함수타입 = function (a) {
  return 0;
}

// 함수 선언식
// function 함수(){ }

// 함수 표현식
// let 함수이름: 함수타입 = function() {} 


// Object안에있는 함수의 타입지정
// 콜백함수
type 회원정보타입 = {
  name: string,
  function(a: number):number{  }
}

let 회원정보 = {
  name: 'kim',
  plusOne(a: number):number{
    return a+1;
  }
  changeName: () => {}
}

회원정보.plusOne(1);
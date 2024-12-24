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
  // console.log( x * 2 ); // error: x는 undefined이므로 계산 불가능 
} 
console.log( 내함수3() );  // 가능
console.log( 내함수3(3) ); // 가능

function 내함수4(x: number | undefined): void { 
  // console.log( x * 2 ); // error: x는 'number나 undefined' 타입이므로(number 타입X) 계산 불가능. 
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
// 1. 함수 타입지정하여 함수 만들기
// 1-1). 함수 타입지정: 함수 타입은 반드시 ()=>{} 형태로 지정해야함.
type 함수타입 = (a: string) => number; // string 타입의 파라미터를 넣고 number 타입의 리턴을 받음.

// 1-2) 함수 생성: 함수표현식에서만 type alias 사용가능
let 함수타입써서함수만듬: 함수타입 = function (a) {
  return 0;
}

// 함수 선언식
// function 함수(){ }

// 함수 표현식
// let 함수이름: 함수타입 = function() {} 


// 2. Object안에 있는 함수의 타입지정
type 회원정보타입 = {
  name: string,
  age: number,
  plusOne: (x:number) => number,
  changeName: () => void
}

let 회원정보: 회원정보타입 = {
  name : 'kim',
  age : 30,
  plusOne (x){
    return x + 1
  },
  changeName () {
    console.log('안녕')
  }
}
회원정보.plusOne(1);
회원정보.changeName();


// 콜백함수란?
/**
 * 콜백함수는 다른 함수의 인자로 넘겨지는 함수를 말한다.
 */
function 콜백함수테스트1(a) {
  a();
}

function 콜백함수테스트2() {

}

// 콜백함수테스트2가 콜백함수테스트1의 인자로 넘어감. => 즉, 콜백함수테스트2가 실행됨.
// 여기서 콜백함수테스트2는 콜백함수임.
콜백함수테스트1( 콜백함수테스트2); 

// 숙제
type 숙제3타입 = (
  x: string, 
  함수1: 숙제함수타입1,
  함수2: 숙제함수타입2
) => void

type 숙제함수타입1 = (x: string) => string;
let cutZero: 숙제함수타입1 = (param) =>{
  let result = param.replace(/^0+/, '');
  return result;
}

type 숙제함수타입2 = (x: string) => number;
let removeDash: 숙제함수타입2 = (param) => {
  let result = param.replace(/-/g, '');
  return parseInt(result);
}

let 숙제3: 숙제3타입 = (param, fun1, fun2) => {
  let result = fun1(param);
  let result2 = fun2(result);
  console.log( result2 );
}

숙제3('010-1111-2222', cutZero, removeDash); 


// ------- 타입스크립트로 HTML 변경과 조작할 때 주의점 -------
let 제목 = document.querySelector("#title");
// 제목.innerHTML = '반가워요'; // Error: 제목 이라는 타입이 union타입(element|null) 이므로 string 넣는것 불가능
// 위의 문제는 narrowing을 하면 에러 없어짐

// 아래는 Type narrowing 할 수 있는 방법들들
// 방법1: null 체크
let 제목1 = document.querySelector("#title");
if( 제목1 != null ){
  제목1.innerHTML = '반가워요(null check)'; // Success!
}

// 방법2: instanceof 사용 (가장 많이 사용!)
// [object] instanceof [클래스] => '[object]가 [클래스]의 자식(instance)이냐'를 확인 => 맞다면 true 리턴 
let 제목2 = document.querySelector("#title");
if( 제목2 instanceof Element) {
  제목2.innerHTML = '반가워요(instanceof)'; // Success!
}

// 방법 3: selector로 찾은 키워드를 as 키워드를 이용하여 Element라는 타입이라고 사기침
// null이 들어와도 Element라고 강력하게 사기침.
// 즉, as는 버그 가능성이 매우 높으므로 되도록 쓰지말자.
let 제목3 = document.querySelector("#title") as Element; 
제목3.innerHTML = '반가워요(Type assertion)'; // Success!

// 방법4: '?' 사용해서 제목4가 null이 아닐 때만 if문 실행하도록 함. (null일때는 undefined 리턴)
let 제목4 = document.querySelector("#title"); 
if( 제목4?.innerHTML != undefined) {
  제목4.innerHTML = '반가워요(?.)'; // Success!
}


// instanceof를 쓸때는 상세한 class 이름을 쓰자. => 그래야 기본 attributies 쓸때 에러안남.
let 링크 = document.querySelector('a');
if( 링크 instanceof HTMLAnchorElement) {
  링크.href = 'https://google.com';
}

let 버튼 = document.querySelector('#button');
버튼?.addEventListener('click', function () {
  console.log('Clicked!');
});

let 이미지 = document.querySelector("#image");
if( 이미지 instanceof HTMLImageElement) {
  이미지.src='new.jpg';
}


let links = document.querySelectorAll(".naver");
links.forEach( (item) =>{
  if( item instanceof HTMLAnchorElement) {
    item.href = 'https://kakao.com';
  }
})

// ------- class 만들 때 타입지정 가능 -------
 
class Person1 {
  name: string; // class안 constructor()에서 attributies 생성해주려면 constructor()밖에서 먼저 선언해줘야 함.
  constructor(name: string) {
    this.name = name;
  }

  함수(a: string) { // 함수에서도 타입지정정
    console.log(a + "나는 함수");
  }
}
let 사람1 = new Person1("kim");
let 사람2 = new Person1("park");
console.log(사람1.함수("test"));

class Car {
  model: string;
  price: number;
  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }

  tax(): number {
    return this.price/10;
  }
}

class Word {
  item: string | number;
  num: number[];
  str: string[];

  constructor(...param: (string | number)[]) {
    this.num = [];
    this.str = [];

    param.forEach(item => {
      if( typeof item === "string") {
        this.str.push(item);
      } else {
        this.num.push(item);
      }    
    });
  }
}

let obj1 = new Word('kim', 3, 5, 'park');
console.log(obj1.num) //[3,5]
console.log(obj1.str) //['kim', 'park']

// ------- Object에 타입지정하려면 interface 이것도 있음 -------
//interface 만들때도 대문자로 시작
type SquareType = {color: string, width: number};
interface SquareInterface {color: string, width: number};
let 네모: SquareType = {color: 'red', width: 200};


interface StudentType {
  name: string
}
interface TeacherType {
  name: string, 
  age: number
}
let 학생:StudentType = {name: "kim"};
let 선생:TeacherType = {name: "kim", age: 20};

// interface의 extends:  쓸 때 장점
// extends로 복사가능
interface TeacherType1 extends StudentType{
  age: number
}

// Intersection type(&): type alias 에서의 type extends 기능. 두 타입 다 만족하는 키워드를 만들어주세요. 
type Animal1 = {
  name: string
}

type Cat = {
  age: number
} & Animal1
// & 주의 할점. 같은 key값으로 생성할 경우 둘 다 만족하는 (ex) string 이면서 number타입)을 찾아야함. but 이건 불가능 => 따라서, 값 넣을 때 에러나게 됨.

// interface vs type alias
// interface 중복 선언 가능(유연) 같은 이름의 interface의 속성이 다 합쳐짐. but 같은 key값이 들어오는건 안됨. ex) interface Stduent {} interface Student {}
// type 중복 선언 불가능(엄격)

// interface 장점: 재정의 하거나 extends를를 이용하여 쉽게 변경가능. 다른 사람이 가져다가 쓸 때 interface로 전부다 'object로 선언 함수나 변수는 type으로 선언'. 이런식으로 규칙 생성 가능
// type 선언: 재정의 불가능하여, 다른 사람이 가져가서 쓰기 힘듬. 

interface Goods { 
  brand : string, 
  serialNumber : number, 
  model : string[] 
}

interface Product {
  product: string,
  price: number
}

let cart: Product[] =  [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] ;

interface NewProduct extends Product{
  card: boolean
}
let newPro = { product : '청소기', price : 7000, card : false };

interface ObjInter {
  plus: (a: number, b: number) => number,
  minus: (a: number, b: number) => number
}
let objInterfaceTest: ObjInter = {
  plus(a, b) {
    return a+b;
  },
  minus(a, b) {
    return a-b;
  }
}


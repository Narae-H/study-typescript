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

type CarT = {
  wheel : '4개',
  color : string
}
type BikeT = {
  wheel : '2개',
  color : string
}

class Car1 implements CarT{
  wheel: '4개';
  color: string;

  constructor(color: string) {
    this.color = color;
  }
}

let nCar = new Car1('red');
console.log( "typeof: " + typeof nCar);
console.log( "instanceof: " + (nCar instanceof Object));
console.log( "instanceof: " + (nCar instanceof Car1));
console.log( "in(literal type): " + ('wheel' in nCar));
console.log( "in(generic type): " + ('color' in nCar));

let nArray = [1, 2, 3];
console.log("내장객체 테스트");
console.log( nArray);
console.log( "typeof: " + typeof nArray);
console.log( "instanceof: " + (nArray instanceof Array));
console.log( "in(generic type): " + ('pop' in nArray));
console.log( "in(generic type): " + ('pop1' in nArray));


// ------- public, private 쓰는거 보니까 타입스크립트 귀여운편 & protected & static-------
// 객체 지향 언어 같은 문법 사용가능: public, private
class User9 {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// public(default 값): 해당 속성은 자유롭게 가져다 쓰고 수정도 가능
// private: 수정 불가능. 클래스 안에서만 수정 가능.

// class 밖에서 private 붙은거 수정하려면?
// 직접 변수에 접근 하지 않고, prototype으로 setter() 만들어서 setter()로 접근



// protected: extends 된 클래스에서도 수정 가능. (클래스끼리 공유하고 싶음.)
class User {
  protected x = 10;
}

class NewUser extends User {
  doThis(){
    this.x = 20;
  }
}

// static: 부모만 사용 가능하고 해당 클래스로 생성된 자식들은 물려받지 않는 속성. 직접 접근만 가능함.
class User1 {
  static x = 10;
  y = 20;
}

let john1 = new User1();
// console.log( john1.x ) //불가능
console.log( User1.x ) //가능

// static + private/protected/public 가능


class User123 {
  // User123 클래스 내부에서만 사용가능. extends로 생성된 클래스에서도 접근 불가능. User123으로 생성된 객체도 접근 불가능.
  // static이 붙어있으므로 prototype 생성해도 외부에서는 수정 불가능.
  private static x = 10; 
  
  // public은 디폴트 값. 언제 어디서든 접근 가능.
  // but, static이 있으므로 자식 통해서는 접근 불가능하고 부모 객체를 통한 접근만 가능 ex) User123.y
  public static y = 20;

  // User123에서 자유롭게 수정가능
  // extends된 클래스에서도 수정가능
  // USer123으로 생성된 객체에서는 접근 불가능. => 접근하고 싶다면 prototype 생성필요.
  protected z = 30;
}

class User124 {
  private static x = 10;
  public static y = 20;
  private test = 123;

  static addOne(num: number): void {
    User124.x = User124.x + num;
  }

  static printX(): void {
    console.log(User124.x);
  }

  fun() {
    console.log("123");
  }
}
User124.addOne(3) //이렇게 하면 x가 3 더해져야함
User124.addOne(4) //이렇게 하면 x가 4 더해져야함
User124.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함


class Square125 {
  x: number;
  y: number;
  color: string;
  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw() {
    let innerDiv = document.createElement('div');
    innerDiv.style.position = "relative";
    innerDiv.style.top = (Math.random()*400) + "px";
    innerDiv.style.left = (Math.random()*400) + "px";
    innerDiv.style.width  = this.x + "px";
    innerDiv.style.height = this.y + "px";
    innerDiv.style.background = this.color;
    
    document.querySelector('body')?.appendChild(innerDiv);
  }
}

let 네모125 = new Square125(30, 30, 'red');
네모125.draw()
네모125.draw()
네모125.draw()
네모125.draw()

// ------- 타입도 import export 해서 씁니다 그리고 namespace -------
// JavaScript와 동일: <script src=""></script>로 파일 첨부하는게 아니라 export/import하여서 필요한 것만 가져와서 사용
// 변수/타입 다 export/import 가능.

// namespace
// 변수명 중복을 없애기 위해서 namespace라는 공간안에 감쌈.
// namespace 전에는 module이라는 키워드로 썼썼음.

//export 할 수 있는 것: type, interface 등등

// ------- 타입도 import export 해서 씁니다 그리고 namespace -------
// JavaScript와 동일: <script src=""></script>로 파일 첨부하는게 아니라 export/import하여서 필요한 것만 가져와서 사용
// 변수/타입 다 export/import 가능.
// namespace
// 변수명 중복을 없애기 위해서 namespace라는 공간안에 감쌈.
// namespace 전에는 module이라는 키워드로 썼썼음.
//export 할 수 있는 것: type, interface 등등

// // vehicles.ts
// export type Car = {
//   wheel : number,
//   model : string
// }
// export interface Bike {
//   wheel : 2,
//   model : string
// }

// // index.ts
// import {Car, Bike} from './vehicles';
// let nCar: Car = {wheel: 4, model: 'BMW'};

// // fun.ts
// export type funT = (obj: object) => void

// // index.ts
// import {funT} from './fun';

// let fun123: funT = function(obj) {
//   console.log(obj);
// }

namespace TypeDog {
  export type Dog = string;

}

namespace InterfaceDog {
  export interface Dog { name : string };
}

let dog1: TypeDog.Dog = 'bark';
let dog2: InterfaceDog.Dog = { name : 'paw' }


// ---------------타입을 파라미터로 입력하는 Generic---------------------
// 함수 쓸 때 generic 함수만들기(파라마터로 타입을 입력하는 함수)
function 함수22<T>(x: T):T {
  return x[0];
}
let a = 함수22<number>(4);

// 1. Generic 함수
// 2. <Type> 받기
// 3. extends로 제한두기: 내장 객체 뿐만아니라, 커스텀 타입/인터페이스도 가능.

function 함수33<T1, T2> (a: T1, b: T2): void {
  console.log(a, b);
}

함수33<string, number>('안녕', 123);


interface lengthCheck {
  length : number
}
function 함수44<MyType extends lengthCheck>(x: MyType) {
  return x.length
}

let a44 = 함수44<string>('hello')  //가능
// let a45 = 함수44<number>(1234) //에러남

class Person123<T1> {
  name: T1;
  constructor(name: T1) {
    this.name = name;
  }
}

let person = new Person123<string>('Kim');
console.log( person );

// 숙제
function getLength<T extends string | any[]> (a: T) {
  console.log("Length: " + a.length);
}
getLength<string>('hello');
getLength<string[]>(['kim', 'park']);



interface Animal12 {
  name : string;
  age : number; 
}

let data = '{"name" : "dog", "age" : 1 }'

function toObject<T>(str: string):T{
  return JSON.parse(str);
}

console.log( toObject<Animal12>(data) );


class Person11<T> {
  name: T;
  constructor(a: T){
    this.name = a;
  }
}
let a11 = new Person11<string>('어쩌구');
a11.name //any 타입이 되었넹 


// --------------- React + Typescript ---------------------
// JSX 문법을 쓰는 파일은 .tsx로 만듬.

// componet 타입지정: 파라미터, 리턴타입
// 1. 리턴 ex) JSX.Element
// 2. props: object형식으로 타입지정. 왜냐면 props는 object 형식으로 오니깐

// state
// 1. 일반적으로는 알아서 타입 지정됨.
// 2. 타입을 2개 이상 넣고 싶다면? => generic 문법 사용

// redux
// 변수, 함수에 타입지정

// --------------- array: tuple type ---------------------
// 숙제1
let 최근음식: [string, number, boolean] = ['커피', 3000, true]

// 숙제2
let arr22: [string, number, ...boolean[]] = ['동서녹차', 4000, true, false, true, true, false, true]

// 숙제3
function 함수333(...rest: [string, boolean, ...(number|string)[]]){
}
함수333('a', true, 6, 3, '1', 4)

// 숙제4
function filter(...rest: (string|number)[]): [string[], number[]] {
  let strArr: string[] = [];
  let numArr: number[] = [];
  
  rest.forEach( (item)=> {
    if( typeof item === "string" ) {
      strArr.push(item);
    }else {
      numArr.push(item);
    }
  })

  let returnArr: [string[], number[]] = [[], []] ;
  returnArr[0] = strArr;
  returnArr[1] = numArr;

  return returnArr;

}
console.log( filter('b', 5, 6, 8, 'a')); 


// --------------- 외부 파일 이용시 declare & 이상한 특징인 ambient module ---------------------
// 1. 외부 js파일을 ts파일에서 갖다 쓰는 경우
// declare: 어디선가 정의한 외부 변수를 재정의하고 싶을 때. type 지정도 가능
// 타입스크립트 파일에 힌트를 주기위한 키워드로 변환된 .js 파일보면 declare로 정의된건 안보임.

// 2. 외부 ts파일을 ts파일에서 갖다 쓰는 경우
// 1) import/export 사용 
// 2) ambient module: ts의 이상한 특징: 모든 ts파일은 글로벌 모듈. import/export 없이도 그냥 사용가능.
//                    변수 이름 중복을 막기위해서 local 변수를 만들고 싶다면? => export{} 키워드 추가하면 됨.
//                    로컬 파일에다가 글로벌 변수 만들고 싶으면? => declare global {} 써서 그 안에 정의


// --------------- d.ts 파일 이용하기 ---------------------
// [이름].d.ts
// 1. 타입정의 보관용 파일, 타입이 너무 많을 때 사용
//  1) .d.ts는 자동으로 global module이 아니므로 export/import해서 사용
//  2) "typeRoots: [파일명1, 파일명2]" 설정하면 d.ts파일 글로벌 모듈 만드는 법. 위험할 수 있으니 웬만하면 import/export 하자.


// 2. 레퍼런스 용으로도 사용
// tsconfig.json 파일에 "declaration": true 설정하면 자동으로 d.ts파일 생성 => 수동 수정 X(읽기용 파일)

// 3. 외부라이브러리 쓸때 직접 타입 지정 필요
// node_modules/@types 에 있는 파일에서 자동으로 타입찾아서 지정해줌.


// --------------- object index signatures ---------------------
// 리터럴입도 가능
// 키가 숫자 => 가능

// interface: recursive하게 타입 만듬.

// 숙제1
type ObjT = {
  [key: string]: string | number;
}

let obj123: ObjT = {
  model : 'k5',
  brand : 'kia',
  price : 6000,
  year : 2030,
  date : '6월',
  percent : '5%',
  dealer : '김차장',
}

// 숙제2
interface ObjInterface {
  'font-size' : number;
  [key: string]: number | ObjInterface;
}

let obj124: ObjInterface = {
  'font-size' : 10,
  'secondary' : {
    'font-size' : 12,
    'third' : {
      'font-size' : 14
    }
  }
}


// --------------- object 타입 변환기 만들기 ---------------------
// 조건부로 타입지정

// keyof: object의 키값을 전부 다 가져와서 union type으로 저장
type PersonKeys = keyof Person;
let a2: PersonKeys = 'name';

// 숙제1
type Bus = {
  color : string,
  model : boolean,
  price : number
}

type TypeChanger<T> = {
  [key in keyof T]: string | number;
}
type NewType = TypeChanger<Bus>;

let nBus = {
  color: 'red',
  model: 'k3',
  price: '1억'
}

// 숙제2
type typeChanger<T, ChangeTo> = {
  [key in keyof T]: ChangeTo;
}


// --------------- 조건문으로 타입만들기 & infer ---------------------
// 조건부로 타입 만들기

// infer: 조건문에서 쓸 수 있는 키워드로 type을 뽑는 역할을 함

type FirstItem<T> = T extends any[]? T[0] : any;

// 숙제1
type Age99<T> = T extends [string, ...any]? T[0]:unknown; 

let age1 :Age99<[string, number]>;
let age2 :Age99<[boolean, number]>;

// 숙제2

type 타입뽑기<T> = T extends ((x: infer R) => void)? R: any

type 타입1 = 타입뽑기<(x :number) => void> //이러면 number가 이 자리에 남음
type 타입2 = 타입뽑기<(x :string) => void> //이러면 string이 이 자리에 남음

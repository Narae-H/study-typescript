해당 내용은 코딩애플🍎 수업을 듣고 정리한 글입니다.

# TypeScript 란?
- 자바스크립트 문법 + Type 문법 => 자바스크립트의 문제점 보안

1) JavaScript 문제점 1: `Dynamic Typing`
```Javascript
// 숫자 - 숫자
console.log( 5 - 3 );   // 2

// 숫자 - 문자 => 가능.
// Javascript는 Dynamic Typing을 제공하여서 JS가 알아서 숫자로 바꿔줌. => 프로젝트 사이즈가 커지면 버그 나타날 가능성 높음.
console.log( 5 - '3' ); // 2
```
2) JavaScript 문제점 2: `에러메시지가 두루뭉실함`
- TypeScript를 쓰면 에러를 정확히 집어주고 에러메시지 띄어줌.

# 개발 환경 셋팅
1. Node.js 설치
2. VS code 설치
3. 터미널 오픈 후 아래 명령어 입력
  ```bash
  npm install -g typescript 
  ```
4. 작업할 파일 생성. 확장자는 `.ts`
5. [`tsconfig.json`](#tsconfigjson) 생성하고 아래 내용 붙여넣기
  ```json
  {
    "compilerOptions": {
      "target": "es5",        // TS 컴파일 할때 JS 몇 버전으로 컴파일 할 것인지
      "module": "commonjs"
    }
  }
  ```
6. js파일로 변환: TypeScript로 짠 코드는 브라우저에서 인식못하므로 JavaScript로 변환해주는 과정 필요. 아래 명령어 실행하면 Typescript 코드 저장할때마다 JavaScript로 저장해줌.
  ```bash
  tsc -w
  ```
7. HTML 이나 다른 파일 등에서 TypeScript로 작성된 코드를 사용하려면 변환된 `.js`파일을 사용 해야함
  ```javascript
  <script src="변환된파일.js"></script>
  ```

## React 프로젝트에서 TypeScript 사용할 경우
- [React 정리 파일 참고](https://github.com/Narae-H/study-react/blob/main/0-overview/README.md#%EC%84%A4%EC%B9%98%EB%B0%A9%EB%B2%95)

## Vue 프로젝트에서 TypeScript 사용할 경우
1) 작업 폴더 경로에서 터미널 오픈
2) 터미널에 아래 명령어 입력
  ```bash
  vue add typescript
  ```
3) vue 파일에서 타입스크립트를 쓰려면 아래와 같이 lang 옵션을 켜두고 써야함
  ```html
  <script lang="ts">
  </script>
  ```
4) 필요하다면 `tsconfig.json` 파일 만들어서 설정도 가능

<br/>
<br/>   

# tsconfig.json
- TypeScript를 어떤식의 JavaScript로 바꿔줄지 정의

```json
{
 "compilerOptions": {

  "target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
  "module": "commonjs", //무슨 import 문법 쓸건지 'commonjs', 'amd', 'es2015', 'esnext'
  "allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지 
  "checkJs": true, // 일반 js 파일에서도 에러체크 여부 
  "jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
  "declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
  "outFile": "./", //모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일 때만 가능)
  "outDir": "./", //js파일 아웃풋 경로바꾸기
  "rootDir": "./", //루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
  "removeComments": true, //컴파일시 주석제거 

  "strict": true, //strict 관련, noimplicit 어쩌구 관련 모드 전부 켜기
  "noImplicitAny": true, //any타입 금지 여부
  "strictNullChecks": true, //null, undefined 타입에 이상한 짓 할시 에러내기 
  "strictFunctionTypes": true, //함수파라미터 타입체크 강하게 
  "strictPropertyInitialization": true, //class constructor 작성시 타입체크 강하게
  "noImplicitThis": true, //this 키워드가 any 타입일 경우 에러내기
  "alwaysStrict": true, //자바스크립트 "use strict" 모드 켜기

  "noUnusedLocals": true, //쓰지않는 지역변수 있으면 에러내기
  "noUnusedParameters": true, //쓰지않는 파라미터 있으면 에러내기
  "noImplicitReturns": true, //함수에서 return 빼먹으면 에러내기 
  "noFallthroughCasesInSwitch": true, //switch문 이상하면 에러내기 
 }
}
```
<sup>* 참고: [tsconfing 설정 값 전체보기](https://www.typescriptlang.org/tsconfig/)<sup>

<br/>
<br/>

# 자료형 (Data Types)
## `Explicit Type` VS `Implicit Type`
- `Explicit Type`: TypeScript는 타입지정을 하기 위한 언어로 타입 명시
  ```typescript
  let firstName: string = "Dylan";
  ```
- `Implicit Type`: However, 꼭 타입지정을 할 필요는 없음. 왜냐면 변수 생성할 때의 값에 따라 알아서 암묵적으로 타입지정이 되니깐.
  ```typescript
  let firstName = "Dylan"; // 알아서 타입이 string으로 지정
  ```

## 종류
### 1. Simple Types / Primitives Types
| **데이터 타입** | **설명**                                                           |
|-------------|----------------------------------------------------------------------|
| **string**  | `"TypeScript Rocks"`와 같은 텍스트 값을 저장하는 데이터 타입               |
| **number**  | 정수와 부동소수점 숫자를 포함하는 데이터 타입                               |
| **boolean** | `true` 또는 `false` 값                                                |
| **bigint**  | 정수와 부동소수점을 포함하며, `number` 타입보다 더 큰 음수와 양수 값을 저장가능|
| **symbol**  | 전역적으로 고유한 식별자를 생성하는 데 사용되는 데이터 타입                   |

```typescript
let 이름: string = 'kim'
let 나이: number = 20;
let 결혼여부: boolean = false;
```

### 2. Special Types
| **데이터 타입** | **설명**                                                           |
|--------------|---------------------------------------------------------------------|
| **undefined**| `undefined`이라는 오직 하나의 값만 가질 수 있음. (JS의 undefined와 동일)  |
| **null**     | `null`이라는 오직 하나의 값만 가질 수 있음 (JS의 null과 동일)             |
| **any**      | 아무 자료나 넣을 수 있음. JS와 동일하므로 TS 특성 사라짐.                  |
| **unknown**  | any와 똑같이 모든 타입을 집어 넣을 수 있으나 타입은 그대로 unkown이므로 안전 |
| **never**    | 절대 있을 수 없는 상황에서 사용하는 타입으로, 코드가 이상할 때 typescript 자체에서 알려주는 사인. 실제로는 never를 사용하는 경우는 거의 없음. |

```typescript
// 1) undefined / null
// `tsconfig.json`에서 strictNullChecks`이 활성화 되어있으면, 변수에 null 이나 undefined를 할당하거나 접근할 때 TypeScript가 오류를 발생시키지 않기 때문에 타입검사가 무의미해질 수 있음.
let y: undefined = undefined;
let z: null = null;

// 2) any
let v: any = true;
v = "string";  // 가능
Math.round(v); // 가능

// 3) unknown: any보다 안전
// any는 모든걸 다 넣을 수 있는 타입이지만, unknown은 이 자체가 타입.
// 따라서, 아직 뭘 집어 넣을지 모르지만 안정성을 도모하고 싶다면 unknown 사용.
let 이름: unknown = 'kim';
이름 = 123;
이름 = undefined;
이름 = [];

let 변수1: string = 이름;  // 에러: unknown type != string 
let 변수2: boolean = 이름; // 에러: unknown type != boolean
let 변수3: number = 이름;  // 에러: unknown type != number

let 이름1: unknown;
이름1[0];   // 에러: unknown은 array가 아니므로 [0] 찾을 수 없음
이름1 - 1;  // 에러: unknown - number 불가능 => number - number 만 가능
이름1.data; // 에러: unkownn은 object가 아니므로 .data로 데이터 갖고 올 수 없음.

// 4) never
// 4-1) 함수: 무언가 return하지 않음 && 절대 끝나지 않는/중간에 중단 됨
function 함수1(): never{
  while ( true ) { // 절대 끝나지 않음.
    console.log(123)
  }
}

function 함수2(): never{
  throw new Error('에러메세지') // 함수가 중간에 중단 됨.
}

// 4-2) 변수
function 함수(parameter: string) {
  if ( typeof parameter === "string"){
    parameter + 1;
  } else { // 절대 일어날 일이 없는 경우로 알아서 never 타입 선언 됨.
    parameter;
  }
}
```

### 3. Array Type
**1) 일반 Array**
- 여러 자료를 한번에 저장하고 싶을 때   

**사용법**
```typescript
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};
```

**2) Tuple**
- Array 타입의 일종으로 사이즈와 아이템 타입을 미리 정의
**사용법**
```typescript
// 1. 기본 방법
type Member = [number, boolean];
let john: Member = [100, false];


// 2. 옵션('?')지정도 가능 but 순서개념이 깨지는건 안됨. 즉, '?'는 제일 뒤 또는 뒤에서부터 순차적으로로 넣을 수 있음.
type Num = [number, number?, number?];
let 변수1: Num = [10];
let 변수2: Num = [10, 20];
let 변수3: Num = [10, 20, 10]; 


// 3. rest parameter
function 함수(...x: [number, string, number, boolean]) {
  console.log(x);
}
함수(1, '안녕', 3, true); // 가능
함수(1, 2, 3, true);      // 에러
함수(1, '안녕', 3, 123);  // 에러

// 4. spread 연산자
// spread 연산자 이용하여 array 합칠 경우, 합쳐지는 값의 타입도 '...'을 써서 타입지정.
let arr = [1,2,3]
let arr2 :[number, number, ...number[]] = [4,5, ...arr]  
```

### 4. Object Type
- 여러 자료를 한번에 저장하고 싶을 때
**사용법**
```typescript
const names1: string[] = [];
const names2: string[] = ['kim', 'lee', 'park'];
```

### 5. Union Type
- 한 변수에 여러개의 타입을 지정하고 싶을 때 `|`(or) 사용하여 타입 지정
```typescript
// 1. Basic type
let 이름: string | number = 'kim'; // 괄호 없어도 되고
let 나이: (string | number) = 100; // 괄호 있어도 되고

// 2. Array
let 배열: (string | number)[] = [1, 2, '문자'];

// 3. Object
let 오브젝트: { data: (string | number)} = { data: 123 }
```

##  ? & undefined
- 자료형 중 일부가 선택 사항일때 사용할 수 있음.
- `?` 와 `undefined` 동일
```typescript
// 1) ?를 이용
type SquareType1 = {
  color?: string,
  width : number,
}

let 네모1 :SquareType1 = { 
  width: 100 
}

// 2) undefined를 이용
type SquareType2 = {
  color : undefined,
  width : number,
}

let 네모2: SquareType2 = { 
  width: 100 
}
```
<br/>
<br/>

# 타입 선언
## 타입 선언 방법
1. 변수/함수 `옆`에 바로 선언
  ```typescript
  let 사람: string = 'kim';
  ```
<br/>

2. Type Alias: `type` 키워드를 사용하여 타입 선언 후에 선언된 타입을 사용
  ```typescript
  type Person = string;
  let 사람: Person = 'kim';
  ```
<br/>

3. interface: `interface` 키워드를 사용하여 타입 선언 후에 선언된 타입을 사용 (object에서만 사용 가능)
  ```typescript
  interface Person {
    name: string;
  }

  let person: Person = {
    name: 'John'
  };
  ```
<br/>

## 사용법
### 기본타입
```typescript
// 1) 바로 옆
let 이름1: string = 'kim';

// 2) Type alias: 사용할 수는 있으나 굳이 쓸 필요 X. 코드만 더 길어질뿐 이득이 없음.
type Name = string;
let 이름2: Name = 'kim';
```

### array 타입
``` typescript
// 1) 바로 옆
let 이름1: string[] = ['kim', 'park']

// 2) Type alias
type Name = number[];
let 이름2: Name = ['kim', 'park'];

// 3) tuple: array 자료 안에 '순서'를 포함해서 어떤 자료가 들어올지 지정하고 싶을 때
type Member = [number, boolean];
let john: Member = [100, false];
```

### object 타입
```typescript
// 1) 바로 옆
let 사람1: { name: string, age: number } = { name: "kim", age: 12 } 

// 2) Type alias
type Person = {
  name: string,
  age : number
}
let 사람2: Person = { 
  name: 'kim',
  age : 12
}

// 3) Index signature: object 안의 타입같은 경우 한번에 지정
type MyObject = {
  // [key: string] => '키가 string 타입인 모든 속성' 이란 뜻(사실 모든 키가 문자임)
  [key: string]: number 
}
let 학생3: MyObject = { 
  age   : 50,
  weight: 100,
}

// 4) Interface
interface PersonInterface {
  name: string;
  age: number;
}
let 학생4: PersonInterface = {name: "kim", age: 12}
```
<sup>* [Type VS Interface](#type-vs-interface)</sup>

### 함수 타입
```typescript
// 1) 바로 옆
// 'x: number'는 'x라는 변수는 number 타입이다' 라는 뜻
// '() :number'는 '함수의 리턴값이 number 타입이다' 라는 뜻
function 함수1(x: number): number{
  return x * 2;
}

// 2) Type alias
type Function = (x: number) => number;

let 함수2: Function = function (x) {
  return x * 2;
}
```
<sup>* [함수 타입 선언 자세히](#함수와-methods에-type-alias-지정하는-방법)</sup>

### Union Type
```typescript
// 한 변수에 여러가지 타입 지정
// 1) 바로 옆: string 또는 number
let 이름1: string | number = 'kim';

// 2) Type alias: number | boolean
type Name = string | number;
let 이름2: Name = 'kim';
```

### Rest parameter
```typescript
// 변수 바로 옆에 타입 지정. 단, rest parameter는 나머지를 배열 형태로 받으므로 꼭 배열 타입 선언
function 전부더하기(...a :number[]){
  console.log(a)
}

전부더하기(1,2,3,4,5)
```

## Intersaction
기존 자료형에 속성을 추가하고 싶을때 유용
```typescript
type Animal = { 
  name :string 
} 
type Cat = Animal & { legs: number }
```
주의점: 같은 key값으로 생성할 경우
```typescript
type Animal = { 
  name :string 
} 
// Cat 타입의 name은 string이면서도 number 타입이여야 함. => 그런 타입은 존재X(never)
type Cat = Animal & { name: number }

let 야옹이: Cat = {name: '미야옹'} // error: name의 타입이 string & number 를 만족하지 못하므로  
```

## 타입 변경 방법
### keyof 연산자
object 타입에 사용하면 object 타입이 가지고 있는 모든 key값을 union type으로 합쳐서 내보내줌.
```typescript
// 1. 일반 인터페이스
interface Person {
  age: number;
  name: string;
}
type PersonKeys = keyof Person; // "age" | "name" 타입 => literal 타입
let a :PersonKeys = 'age';      // 가능
let b :PersonKeys = 'ageeee';   // 불가능

// 2. object index signature
interface Person {
  [key :string]: number;
}
type PersonKeys = keyof Person; // string | number 타입 => object key값에 숫자 넣어도 문자로 치환되서.
let a :PersonKeys = 'age';      // 가능
let b :PersonKeys = 'ageeee';   // 가능
```

### Mapped Types
```typescript
type Car = {
  color: boolean,
  model : boolean,
  price : boolean | number,
};

type TypeChanger <MyType> = {
  [key in keyof MyType]: string; // keyof MyType: "color" | "model" | "price"
                                 // key가 "color" | "model" | "price" 라면 타입은 string
};

type 새로운타입 = TypeChanger<Car>; // 새로운 타입은 "color" | "model" | "price" 타입의 전부 string

let obj :새로운타입 = {
  color: 'red',
  model : 'kia',
  price : '300',
}
```

## 조건문으로 타입 만들기
### extends
타입 조건식은 주로 `extends`키워드와 `삼항연산자`를 사용. 여기서의 extends키워드는 "extends 왼쪽이 오른쪽의 성질을 가지고 있냐" 라는 뜻.

```typescript
// 파라미터로 받은 타입이 string 이면 타입을 string으로 그게 아니라면 unkown 
type Age<T> = T extends string ? string : unknown;

let age: Age<string>  // age는 string 타입
let age2: Age<number> // age는 unknown 타입
```

### infer
조건문에서만 쓸 수 있는 키워드로, 지금 입력한 타입을 변수로 만들어줌. (타입을 추출해서 사용용)

- 1) 기본 방법
  ```typescript
  // infer R(return)은 '현재 입력한 타입을 변수 R에 저장해라' 라는 뜻.
  // T(string)는 infer R(string)의 성질을 가지고 있냐.

  // 다시 말해, 선언할 때 <>안의 형태와 extends 다음 조건의 형태를 맞추자!
  // stirng == infer R
  // => 여기서의 R은 string
  type Person<T> = T extends infer R ? R : unknown; 
  type NewType = Person<string> // NewType 은 string 타입 
  ```
<br/>

- 2) array에서 사용
  ```typescript
  // 선언할 때 <>안의 형태와 extends 다음 조건의 형태를 맞추자!
  // boolean []  == (infer R)[]
  // => 여기서의 R은 boolean
  type 타입추출<T> = T extends (infer R)[] ? R : unknown; 
  type NewType = 타입추출< boolean[] > // NewType 은 boolean 타입
  ```
<br/>

- 3) 함수에서 사용
```typescript
// 선언할 때 <>안의 형태와 extends 다음 조건의 형태를 맞추자!
// ()=>number == ()=>infer R
// 여기서의 R은 number
type 타입추출<T> = T extends ( ()=> infer R ) ? R : unknown; 
type NewType = 타입추출< () => number > // NewType은 number 타입
``` 

<br/>
<br/>

# Interface
Object 자료형에서 타입 지정할 때 쓰이는 방법 중 하나로 type 키워드와 유사하나 좀 더 유연(재정의 가능, 쉽게 변경 가능). 
```typescript
// interface 이름은 대문자로 시작
interface Square { 
  color: string; 
  width: number; 
} 

let 네모: Square = { color : 'red', width : 100 } 
```

## extends
기존 interface에 속성을 복사(상속)하여 추가하고 싶을때 유용

```typescript
interface Person {
  name: string
}
// Teacher interface는 Person의 속성도 갖고 Teacher에서 정의된 속성도 갖음.
interface Teacher extends Person {
  age: number
}

let 사람: Person = {name: "kim"};
let 선생님: Teacher = {name: "park", age: 30};
```
<br/>

## implements
class가 interface에 있는 속성을 다 들고 있는지 확인하고 싶은 경우 사용. (타입 지정 문법이 아님)

### 사용방법
 - 예시1
  ```typescript
  interface CarType {
    model : string,
    price : number
  }

  // Car는 CarType에 있는 속성을 다 갖고 있냐
  class Car implements CarType {
    model : string;
    price : number = 1000;
    constructor(a :string){
      this.model = a
    }
  }
  let 붕붕이 = new Car('morning');
  ```
<br/>

- 예시2
  ```typescript
  interface CarType {
    model : string,
    tax : (price :number) => number;
  }

  // implements CarType은 확인하는거지 타입지정 문법이 아니기 때문에 model과 tax에 타입 지정해주지 못함.
  class Car implements CarType {
    model;    // any 타입됨
    tax (a){  // a 파라미터는 any 타입됨 
      return a * 0.1
    }
  }
  ```
<br/>

## Recursive Index Signature
타입지정할 때 같은게 계속 반복된다면? => 내가 나를 호출하는 타입을 만들어보자.
```typescript
interface MyType {
  'font-size': MyType | number; // 마지막에 숫자가 왔으므로 'MyType | number'로 지정
}


let obj :MyType = {
  'font-size' : {
    'font-size' : {
      'font-size' : 14
    }
  }
}
```

<br/>

## Type VS Interface
| **특징**           | **interface**                                   | **type**                             |
|--------------------|-------------------------------------------------|--------------------------------------|
| **정의 방식**       | `interface` 키워드를 사용                        | `type` 키워드를 사용                  |
| **확장 방식**       | `extends`                                       | `&` (intersaction)                   |
| **활용 방식**       | 객체(Object) 타입을 정의하는 데 주로 사용         | 일반 변수나 함수를 정의하는데 주로 사용  |
| **중복 정의**       | 같은 이름의 `interface`가 여러 번 정의될 수 있음 but, 같은 key값이 들어오는건 안됨.  | 같은 이름의 `type`은 중복 정의가 불가능함|
| **유니온, 인터섹션 타입**| 유니온 타입과 인터섹션 타입을 사용할 수 없음   | 유니온(`\|`) 및 인터섹션(`&`) 타입을 사용할 수 있음|

<br/>
<br/>

# 함수
```typescript
// 1. 파라미터 O + 리턴 O
// 파라미터 타입지정은 파라미터 오른쪽에
// 리턴 타입지정은 함수명() 오른쪽에
function 내함수1(x: number): number{
  return x * 2;
}

// 2. 파라미터 O + 리턴 X
// 리턴이 없다면 리턴 타입을 `void`로 쓰면됨(void는 함수에서만 쓸 수 있는 특별한 타입)
function 내함수2(x :number) :void { 
  console.log( x * 2 );  
} 
내함수();  // 에러
내함수(2); // 가능

// 3. 파라미터 있을 수도 있고 없을 수도 있고
// `?`와 `undefined`는 동일
// 1) `?` 사용
function 내함수31(x?: number) :void { 
  console.log( x * 2 );  
} 
내함수();  // 가능
내함수(2); // 가능

// 2) `undefined` 사용
function 내함수32(x: number | undefined) :void { 
  console.log( x * 2 );  
} 
```
## 함수와 methods에 type alias 지정하는 방법
### 함수 타입지정 및 함수 만들기
1) `함수 타입지정`: 함수 타입은 반드시 ()=>{} 형태로 지정해야함.
2) `함수 생성`: 함수 표현식<sup>1)</sup>에서만 type alias 사용가능
  ><details>
  ><summary><sup>1) 함수 표현식이란?</sup></summary>
  >
  >**함수 표현식**
  >함수를 변수에 저장하는 방식. `let 함수이름: 함수타입 = function() {}`
  >
  >**함수 선언식**
  >function키워드를 사용하는 방식. `function 함수(){ }`
  >
  ></details>

  ```typescript
  // 1) 함수타입지정: string 타입의 파라미터를 넣고, number 타입으로 리턴
  type 함수타입 = (x : number, y : number ) => number

  // 2) 함수생성
  let 함수: 함수타입 = function(x, y){
    return x + y
  }
  ```

### Object안에 있는 methods에 타입지정
- object의 타입 지정할때 methods에는 함수 타입지정 방법 사용하여 타입 지정 가능
<br/>

  **- 예시1)** object의 타입 지정 
  ```typescript
  // 1. 타입지정
  type 회원정보타입 = {
    name: string,
    age: number,
    plusOne: (x:number) => number,
    changeName: () => void
  }

  // 2. 지정한 타입을 이용하여 object 생성
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
  ```
  <br/>

  **- 예시2)** 콜백함수 타입지정
  ```typescript
  type Fun1Type = (x: string) => string;
  type Fun2Type = (x: string) => number;
  type Fun = (
    x: string, 
    fun1: Fun1Type,
    fun2: Fun2Type
  ) => void

  let cutZero: Fun1Type = (param) => {
    let result = param.replace(/^0+/, '');
    return result;
  }

  let removeDash: Fun2Type = (param) => {
    let result = param.replace(/-/g, '');
    return parseInt(result);
  }

  let 콜백함수타입테스트: Fun = (param, fun1, fun2) => {
    let result = fun1(param);
    let result2 = fun2(result);
    console.log( result2 );
  }

  콜백함수타입테스트('010-1111-2222', cutZero, removeDash); // 1011112222
  ```
### default parameter
- 파라미터에 값을 입력 안하면 자동으로 할당하는 기능
  ```typescript
  class Person {
    name;
    age;
    constructor ( a = 'kim' ){
      this.name = a;
      this.age = 20;
    }
  }
  ```

## 함수 파라미터에 destructuring 문법 사용
object는 순서가 없으므로 파라미터의 argument의 순서와 함수 parameter의 순서가 동일하지 않아도 정상 작동. but, 가독성을 위해 순서를 맞추자. 
```typescript
let person = { student : true, age : 20 }

// 1) 변수 옆에 선언
function 함수1({student, age} :{student : boolean, age : number}){
  console.log(student, age); // true, 20
}
함수1({ student : true, age : 20 })

// 2) type alias
type FunType = {student : boolean, age : number}
function 함수2({student, age} :FunType){
  console.log(student, age); // true, 20
}
함수2({ student : true, age : 20 })

```

## public / private / protected

| **접근 제어자**                | **설명**                                | **접근 가능 범위**                          | **기본값** |
|-------------------------------|-----------------------------------------|--------------------------------------------|------------|
| **[`public`](#public)**       | 클래스의 내부 및 외부에서 자유롭게 접근 가능| - 클래스 내부<br>- 클래스 외부<br>- 서브클래스| O (기본값) |
| **[`protected`](#protected)** | 클래스 내부 및 extends로 생성된 서브클래스에서 접근 가능 | - 클래스 내부<br>- 서브클래스 | X          |
| **[`private`](#private)**     | 클래스 내부에서만 접근 가능               | - 클래스 내부                               | X          |

### public
```typescript
  class User {
    public name :string; // public은 default이므로 안붙여도 상관 없음.

    constructor(){
      this.name = 'kim';
    }
  }

  let 유저 = new User();
  console.log( 유저.name ); // kim
  유저.name = 'park';       //가능
  console.log( 유저.name ); // park
```

> <details> 
> <summary> public의 또 다른 사용법 </summary> 
> 
> constructor 안에서 this.name = name 이런걸 생략 가능
> ```typescript
> 
> // 1) constructor밖에서 name 선언해주고 사용
> class Person1 { 
>   name;
>   constructor ( name :string ){  
>     this.name = name;
>   } 
> }
> let 사람1 = new Person1('john');
> 
> // 2) constructor 밖에서 name 선언하지 않고도 바로 사용
> class Person2 { 
>   constructor ( public name :string ){  
>   
>   } 
> }
> let 사람2 = new Person2('john')
> ```
> </details>
<br/>

### private
```typescript
class User {
  public name :string;
  private familyName :string;  

  constructor(){
    this.name = 'kim';
    let hello = this.familyName + '안뇽'; // private은 클래스 내부에서는 접근 가능
  }
}

let 유저1 = new User();
유저1.familyName = 456; //에러남
```
<br/>

- private 변수를 접근하려면?: class안에 methods를 만들어서 접근(객체 지향적 프로그래밍)
  ```typescript
  class User {
    public name :string;
    private familyName :string;

    constructor(){
      this.name = 'kim';
      let hello = this.familyName + '안뇽';
    }

    changeSecret(){
      this.familyName = 'park';
    }
  }

  let 유저1 = new User();
  유저1.familyName = 'park';  //에러남
  유저1.changeSecret()        //가능
  ```
<br/>

### protected
```typescript
class User {
  protected x = 10; // 클래스끼리 속성 공유하고 싶을 때 사용
}

class NewUser extends User {
  doThis(){
    this.x = 20;
  }
}
```
<br/>

## static
`static`은 `private/protected/public`와 함께 사용하며 변수/함수 둘 다 사용가능. 부모로부터 생성된 객체에는 값을 숨길 때 사용. but, extends된 클래스는 사용 가능.<br/>
다른 말로 하면 `static`이 붙은 변수는 '부모에 직접 접근해야만 사용 가능하다'라는 뜻이기도 함. static 키워드가 없을 때는 부모 변수에 직접 접근하면 에러.  
```typescript
class User {
  static x = 10;
  y = 20;
}

let john = new User();
console.log( john ); // {y:20} => x: 10은 값 안보임

// x 값을 사용하고 싶다면? => 부모에 직접 접근
// static x가 아니라 그냥 x라면 직접 접근하면 에러남.
console.log( User.x ); // 10
```
<br/>

## Generic 함수
함수 옆에 `<>`를 써서 파라미터로 타입을 입력하여 확장성을 높이는 것 가능.

### 사용방법
  - 기본 사용법
  ```typescript
  // 1. 함수 옆에 타입을 받을 수 있는 공간 <> 만들어두기
  // 2. 파라미터로 받은 타입을 필요한 곳에 넣기 ex) 파라미터 타입, 리턴 타입
  function 함수<MyType>(x: MyType[]) :MyType {
    return x[0];
  }

  // 3. 파라미터로 보내고 싶은 타입 함수 옆 <> 안에 적어주기
  let a = 함수<number>([4,2]);          // 리턴 타입이 number
  let b = 함수<string>(['kim', 'park']) // 리턴 타입이 string
  ```
  <br/>

  - 타입 여러개 받기
  ```typescript
  function 함수<T1, T2> (a: T1, b: T2): void {
    console.log(a, b);
  }

  함수<string, number>('안녕', 123);
  ``` 
  <br/>

  - extends: 받을 수 있는 타입 제한(constraints)
  ```typescript
  // MyType을 extends 이용하여 number 타입으로 제한 둠. 그래야 x-1이 가능하니깐.
  function 함수<MyType extends number>(x: MyType) {
    return x - 1
  }

  let a = 함수<number>(100);
  ```
  <br/>

  - extends: 두개 이상의 타입으로 제한
  ```typescript
  function getLength<T extends string | any[]> (a: T) {
    console.log("Length: " + a.length);
  }
  getLength<string>('hello');
  getLength<string[]>(['kim', 'park']); 
  ```
  <br/>

  - extends: 커스텀 타입으로 제한
  ```typescript
  // 1. 인터페이스/타입 정의: LengthCheck는 length라는 property를 갖는다.
  interface LengthCheck {
    length : number
  }
  function 함수<MyType extends LengthCheck>(x: MyType) {
    return x.length
  }

  let a1 = 함수<string>('hello');   // 가능
  let a2 = 함수<number>(1234);      // 에러남: number는 'length'라는 property 없으므로
  let a3 = 함수<number[]>([1,2,3]); // 가능
  ```

<br/>
<br/>

# 클래스 (Class)
- 비슷한 객체(object)를 만들기 위한 템플릿
  ```typescript
  class Obj {
    construnctor() {
    }
  }
  ```

## 클래스의 타입 지정
### 클래스의 속성 타입 지정
- JavaScript와 달리 constructor()에서 attributies를 쓰고 싶다면 constructor() 밖에서 선언 먼저 해줘야 함.
  ```typescript
  class Person {
    // 1. 선언 및 타입지정: constructor() 밖에서 fields 값 선언 
    name: string;
    age: number;

    // 2. constructor()의 파라미터 타입 지정
    constructor (n: string, a: number){ 
      // 3. 값 할당
      this.name = n; 
      this.age = a;
    }
  }
  ```

### 클래스의 메소드 타입 지정
- 클래스의 메소드 타입지정은 함수와 동일한 방식으로 선언
```typescript
class Person {
  
  add(숫자: number): void{
    console.log(숫자 + 1)
  }
}
```

## Generic 클래스
파라미터로 타입을 받는 클래스

```typescript
// 1. 클래스 옆에 타입을 받을 수 있는 공간 <> 만들어두기
// 2. 파라미터로 받은 타입을 필요한 곳에 넣기 ex) 파라미터 타입, 리턴 타입
class Person<T1> {
  name: T1;
  constructor(name: T1) {
    this.name = name;
  }
}

// 3. 클래스 생성시에 파라미터로 보내고 싶은 타입 <> 안에 적어주기
let person = new Person<string>('Kim');
console.log( person );
```

<br/>
<br/>

# Narrowing & Assertion
## Narrowing
- union type 등 때문에 어떤 변수가 타입이 아직 불확실하다면, `narrowing(타입 좁히기)`을 해줘서 타입을 확실하게 해줘야 함. 
- Narrowing으로 판정해주는 문법들 => 그냥 현재 변수의 타입이 뭔지 특정지을 수 있기만 하면 다 가능.

### 방법1: typeof
- `typeof [변수]` => [변수]의 타입을 리턴
- typeof는 기본 내장 객체 타입말고 새롭게 만들어진 타입은 구분 못함. 왜냐면 전부다 object라고 뜨므로.

  ```typescript
  // typeof 변수
  function 내함수(x :number | string): number{
    if(typeof x === 'number') { // 가끔 이걸 "defensive 하게 코딩한다"라고 함.
      return x + 1  
    } else {
      return 0;
    }
  }
  ```

### 방법2: instanceof
- `[object] instanceof [클래스]` => '[object]가 [클래스]의 자식(instance)이냐'를 확인. 맞다면 true 리턴
  ```typescript
  // [object] instanceof [클래스] => 
  if( (x instanceof Number)) {
    console.log("Numer 인스턴스");
  }
  ```
<br/>

- TypeScript에서 `HTML element`를 접근할때 많이 쓰임
  ```html
  <!-- HTML -->
  <h4 id="title">안녕하세요</h4>
  <a id="link" href="naver.com">링크</a>
  <button id="button">버튼</button>
  <img id="image" src="test.jpg">
  ```

  ```typescript
  /* TypeScript */
  let 제목 = document.querySelector("#title");
  제목.innerHTML = '반가워요'; // Error: 제목 이라는 타입이 union타입(element|null) 이므로 string 넣는것 불가능
  
  // 해결방법: Type narrowing을 하자!
  // 방법1) null 체크
  let 제목1 = document.querySelector("#title");
  if( 제목1 != null ){
    제목1.innerHTML = '반가워요(null check)'; // Success!
  }

  // 방법2) instanceof 사용 (가장 많이 사용!)
  let 제목2 = document.querySelector("#title");
  if( 제목2 instanceof Element) {
    제목2.innerHTML = '반가워요(instanceof)'; // Success!
  }

  // 방법3) selector로 찾은 키워드를 as 키워드를 이용하여 Element라는 타입이라고 사기침
  // null이 들어와도 Element라고 강력하게 사기침 => 즉, as는 버그 가능성이 매우 높으므로 되도록 쓰지말자.
  let 제목3 = document.querySelector("#title") as Element; 
  제목3.innerHTML = '반가워요(Type assertion)'; // Success!

  // 방법4) '?' 사용해서 제목4가 null이 아닐 때만 if문 실행하도록 함. (null일때는 undefined 리턴)
  let 제목4 = document.querySelector("#title"); 
  if( 제목4?.innerHTML != undefined) {
    제목4.innerHTML = '반가워요(?.)'; // Success!
  }
  ```
<br/>

- instanceof를 쓸때는 `상세한 DOM 이름(클래스이름)`을 쓰자. 해당 요소의 기본 attributies 접근 시 에러방지.  
  
  **- DOM element 종류**
  | **DOM 요소**           | **태그**       | **설명**                  |
  |------------------------|---------------|----------------------------|
  | `HTMLAnchorElement`    | `<a>`         | 링크 태그                  |
  | `HTMLImageElement`     | `<img>`       | 이미지 태그                |
  | `HTMLButtonElement`    | `<button>`    | 버튼 태그                  |
  | `HTMLInputElement`     | `<input>`     | 사용자 입력 태그           |
  | `HTMLParagraphElement` | `<p>`         | 문단 태그                  |
  | `HTMLHeadingElement`   | `<h1>`~`<h6>` | 제목 태그                  |
  | `HTMLDivElement`       | `<div>`       | 블록/구역(division) 태그   |
  | `HTMLSpanElement`      | `<span>`      | 인라인 요소 블록 태그       |
  | `HTMLTableElement`     | `<table>`     | 표(table) 태그             |
  | `HTMLCanvasElement`    | `<canvas>`    | 그래픽을 렌더링 태그        |
  <sup>* [HTML DOM interfaces](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API)</sup>
  
  **- DOM element 사용예시**
  ```html
  <!-- HTML -->
  <a id="link" href="naver.com">링크</a>
  <img id="image" src="test.jpg">
  ```

  ```typescript
  /* TypeScript */

  // 1) HTMLAnchorElement
  let 링크 = document.querySelector("#link");
  if( 링크 instanceof HTMLAnchorElement) {
    링크.href = "https://google.com";
  }

  // 2) HTMLImageElement
  let 이미지 = document.querySelector("#image");
  if( 이미지 instanceof HTMLImageElement) {
    이미지.src='new.jpg';
  }
  ```

### 방법3: in
- 서로 다른 속성을 가지고 있을 경우, `in`을 사용하여 narrowing 가능.

```typescript
type Fish = { swim: string };
type Bird = { fly: string };
function 함수(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim
  }
  return animal.fly
} 
```

### 방법4: literal type 사용
- 특정 글자나 숫자만 가질 수 있도록 유니크한 값을 생성.
- object 자료인데 비슷하게 생긴것을 다룰 때 유용.

```typescript
type Car = {
  wheel : '4개', // literal type
  color : string
}
type Bike = {
  wheel : '2개', // literal type
  color : string
}

function 함수(x : Car | Bike){
  if (x.wheel === '4개'){
    console.log('the car is ' + x.color)
  } else {
    console.log('the bike is ' + x.color)
  }
}
```

### `typeof` VS `instanceof` VS `in` VS `literal type`

| **연산자/타입** | **내장 객체** | **커스텀 클래스로 생성된 객체** | **{}로 직접 값 할당된 Object 객체** | **literal type**  |
|----------------|--------------------|-------------------------|------------------------------------|-------------------|
| `typeof`       | <center>O</center> | <center>X <sup>1)</sup> | <center>X <sup>1)</sup>            | <center>-</center>|
| `instanceof`   | <center>O</center> | <center>O</center>      | <center>X</center>                 | <center>-</center>|
| `in`           | <center>O <sup>2)</sup></center>| <center>O</center>| <center>O</center>          | <center>-</center>|
| `literal type` | <center>-</center> | <center>-</center>      | <center>-</center>                 | <center>O</center>|

<small>1) typeof로 타입 확인할 경우 전부 다 최상위 객체인 object 라고 뜸.</small>    
<small>2) prototype으로 확인 가능</small> 


## Assertion (as)
- `as`를 이용하여 타입을 잠깐 덮어쓰기. 잠깐 엄격한 타입체크 기능을 끄겠다는 것과 동일.

### `as` 문법을을 사용하는 경우
1) union type 같은 `복잡한 타입을 하나의 정확한 타입으로 줄이는 역할(narrowing)` (number 타입을 string으로 바꿔 달라고 하면 에러남)
2) 왜 타입에러가 나는지 정말 모르겠는 상황에 `임시 에러해결 방안`으로 사용
3) 무슨 타입이 들어올지 `확신 할 때 임시`로 사용. => 자주 사용하진 말자. 왜냐면 버그를 못잡아 주기때문에

  ```typescript
  // 변수명 as 원하는타입: "해당 변수를 잠깐 원하는 타입으로 생각해주세요" 라는 뜻.
  function 내함수(x :number | string){ 
      return (x as number) + 1 
  }
  console.log( 내함수(123) )
  ```
<br/>
<br/>

# Type Alias
- 타입이 너무 길고 복잡하면 또는 나중에 또 사용하고 싶으면 `type`이라는 변수타입에 타입 담아서 쓰는 것 가능

## `type` 사용 규칙
- type은 작명시 `대문자로 시작`
- 일반 자바스크립트 변수랑 차별점을 뒤기 위해 뒤에 Type을 붙이기도 함

## 사용방법
### 1) 기본
```typescript
// 1) 그냥 타입 나열
let 동물: string | number | undefined;

// 2) `type` 사용
type Animal = string | number | undefined;
let 동물2: Animal;
```
### 2) Object 타입
```typescript
// object 타입은 변수 정의할 때 길어지니깐 `type` 을 정의하는게 가독성 훨씬 올라감.
type 사람 = {
  name : string,
  age : number,
}

let teacher :사람 = { name : 'john', age : 20 } 
```

### 3) type변수도 union type으로 합치기
```typescript
type Name = string;
type Age = number;
type NewOne = Name | Age; 
```

### 4) Object Extend: `&` 연산자로 object 타입 합치기 
```typescript
type PositionX = { x: number };
type PositionY = { y: number };
type XandY = PositionX & PositionY
let 좌표 :XandY = { x : 1, y : 2 }
```
<br/>
<br/>

# Readonly
- 값이 한번 할당되면 `재할당 불가능`하도록 설정.
- const 변수와 비슷하나 TypeScript에서 좀 더 엄격하게 지정 가능.

## const의 문제점
- object가 할당되었을 경우는 object 내부 item은 수정가능
  ```typescript
  const 출생지역 = { region: 'seoul'};
  출생지역.region = 'busan'; // 가능
  ```

## readonly를 써보자
- TypeScript에서만 사용가능한 `readonly`를 쓰면, object 자료형 안의 아이템도 변경 불가능하게 만들 수 있음.
- But, 이건 TypeScript 에디터에서만 잡아주는거지, JavaScript로 바꾸고 실행은 문제 없음.

  ```typescript
  type Girlfriend = {
    readonly name : string,
  }

  let 여친 :Girlfriend = {
    name : '엠버'
  }

  여친.name = '유라' // readonly라서 에러남
  ```
<br/>
<br/>

# Literal Types
- 특정 글자나 숫자만 가질 수 있는 제한을 두는 타입.
- 좀 더 엄격하게 지정. 들어올 수 있는 타입을 미리 지정(값이 아님). 문법자체도 `=`을 쓰는게 아니라 `:`을 씀.

```typescript
// 1) 변수에서의 사용
let john:'대머리'; // john에는 '대머리'라는 타입만 쓸 수 있음. 즉, '대머리'라는 값만 가질 수 있는 타입
let kim:'솔로'; // john에는 '솔로'라는 타입만 쓸 수 있음. 즉, '솔로'라는 값만 가질 수 있는 타입
let 방향: 'left' | 'right'; 

// 2) 함수에서의 사용
// a는 'hello'라는 타입만 가질 수 있고
// 리턴 타입은 1, 0, -1만 가능 
function 함수(a: 'hello'): 1 | 0 | -1 {
  return 1 
}
```

## as const
- 일반 as 타입 문법과는 다름
- 타입을 object의 value로 바꿔줌 (아래에서는 타입을 'kim'으로 바꿔줌)
- object안에 있는 모든 속성을 readonly로 바꿔줌.

```typescript
var 자료 = {
  name : 'kim'
} as const;

function 내함수(a : 'kim') {

}
내함수(자료.name)
```
<br/>
<br/>

# Import / Export
다른 파일에서 만든 type/interface/function 등을 다른 파일에서 사용하고 싶은 경우 사용

## 사용방법
**1) 다른 파일에서 쓰고 싶은 것을 `export` 키워드를 써서 내보냄**
  ```typescript
  // a.ts
  export type Name = string | boolean;
  export type Age = (a :number) => number;
  ```
<br/>

**2) export된 것을 가져와서 쓸 땐 `import`**
  ```typescript
  // b.ts
  import {Name, Age} from './a'

  let 이름: Name = 'kim';
  let 함수: Age = (a) => { return a + 10 }
  ```
<br/>

## 과거의 방법 (타입스크립트 1.5 버전 이하)
### namespace
`<script src=""></script>`를 사용하여 파일을 첨부했는데, 파일이 많아 질수록 변수명이 겹치게 됨.<br/>
따라서, 어느 공간에 넣고 그걸 감싸는 방법을 사용했는데 그게 바로 `namesapce`.<br/>
더 이전에는 namespace대신에 `module`이라는 키워드 썼썼음. 사용법은 동일

  **1) 다른 파일에서 쓰고 싶은 것을 `namespace`로 감싸서 정의하고 `export`**
  ```typescript
  // a.ts

  namespace MyNamespace {
    export interface PersonInterface { age : number };
    export type NameType = number | string;
  } 
  ```
  <br/>

  **2) namespace된 것을 `///<reference path="" />` 로 가져와서 사용**
  ```typescript
  // b.ts

  // 여기서 '///'은 주석이 아니라 <reference>를 쓰기위한 문법
  /// <reference path="./a.ts" />

  // 사용할 때는 [네임스페이스이름].[타입명]
  // '.'을 찍어서 사용하기 때문에, 더 다양하게 변수명 사용 가능
  let 이름: MyNamespace.NameType = '민수'; 
  let 나이: MyNamespace.PersonInterface = { age : 10 };
  ```
<br/>
<br/>

# 외부 파일 이용방법 (declare, ambient module)
##  declare: 외부 .js파일을 .ts파일에서 갖다 쓰는 경우
JavaScript, TypeScript, HTML 파일이 아래와 같을 때, index.ts 나는 에러를 해결할 수 있는 방법이 `declare`

### declare 예시
- 정의가 안되어 있어서 에러가 나는 예시
  ```javascript
  // data.js
  var a = 10;
  var b = {name :'kim'};
  ```

  ```typescript
  // index.ts

  // a가 정의가 안되었다고 나옴 => .ts 입장에서는 a라는 변수를 import 해온 적이 없기 때문.
  // but, 브라우저 콘솔창에서는 문제 없이 나옴. 
  console.log(a + 1); // Error 
  ```

  ```html
  <!-- index.html -->
  <script src="data.js"></script>
  <script src="index.js"></script>  <!-- index.ts에서 변환된 js 파일 -->
  ```

<br/>

- 문제해결

  ```javascript
  // data.js
  var a = 10;
  var b = {name :'kim'};
  ```

  ```typescript
  // index.ts

  // declare를 사용하여 재정의: a라는 변수를 이 파일에서 잠깐 정의해 주세요.
  declare let a :number;
  console.log(a + 1);
  ```

  ```html
  <!-- index.html -->
  <script src="data.js"></script>
  <script src="index.js"></script>  <!-- index.ts에서 변환된 js 파일 -->
  ```

### 특징
- "특정 변수가 어딘가에 있으니 그만 징징대라" 라는 뜻.
- declare 이게 붙은 코드들은 js로 변환되지 않음.
- 그냥 컴파일러에게 힌트를 주는 역할의 코드. 
- `declare` 키워드 써서 타입지정 가능. 

> <details>
> <summary>.js 파일이 알아서 타입지정되도록 설정 켜기</summary>
> 
> ```json
> {
>   "compilerOptions": {
>     // ...
>     "allowJs ": "true", // js파일도 암묵적으로 타입지정. react같은 프로젝트에서 유용
>     // ...
>   }
> }
> ```
> </details>
<br/>

## 외부 ts파일을 ts파일에서 갖다 쓰는 경우
### import/export 문법 사용
[import/export 참고](#import--export)

### Ambient Module 
.ts 파일은 이상하게도 import/export 없이도 `타입/변수`들을 다른 파일에서 가져다 쓸 수 있음.<br/>
즉, .ts에 입력한 변수/타입들은 전부 전역변수(global variable) 취급을 함. => 전역으로 쓸 수 있는 파일을 `ambient module`이라 함.

- ambient module: 외부 파일의 타입/변수 사용 자유로움. .ts 파일에 import/export 키워드가 없음.
  ```typescript
  // data.ts
  type Age = number;
  let 나이: Age = 20;
  ```

  ```typescript
  // index.ts

  // 별도의 import/export 없이도 바로 사용 가능.
  console.log(나이 + 1) // 가능
  let 철수 :Age = 30;   // 가능
  ```
<br/>

- local module: import/export 키워드가 한번이라도 들어가면 그 파일은 로컬 모듈듈
  ```typescript
  // data.ts

  export {}; // 로컬 모듈로 만들기 위해서 씀.

  type Age = number;
  let 나이: Age = 20;
  ```

  ```typescript
  // index.ts

  console.log(나이 + 1) // error
  let 철수 :Age = 30;   // error
  ```
<br/>

- declare global: 로컬 모듈에서 전역으로 변수 만들고 싶을 때 사용
  ```typescript
  export {}; // 로컬 모듈

  declare global {
    type Dog = string; // 모든 파일에서 Dog 타입 이용 가능
  } 
  ```

# d.ts
타입만 저장할 수 있는 파일 형식(**d**efinition)으로 JavaScript로 컴파일 되지 않음.

## 사용방법
### 1) 타입만 따로 저장해놓고 import 해서 사용
- **export/import**: .d.ts(.ts 파일이 아님)은 ambient module이 아니므로 `export/import`해서 사용   
  ```typescript
  // types.d.ts

  // 1. 타입
  export type Age = number;

  // 2. 함수
  // 함수의 경우 {}중괄호 붙이기 불가능. 따라서 '파라미터와 return'만 타입 지정 가능
  export type multiply = (x :number ,y :number) => number

  // 3. 인터페이스
  export interface Person { name : string }
  ```
<br/>

- **d.ts파일을 글로벌 모듈로 만들기**: ts 파일 작성할 때 타입없으면 자동으로 여기서 타입 찾아서 적용해줌(import/export 필요없음음). but 이런거 쓰다가 로컬타입과 글로벌 타입이 겹치면 위험하므로 import/export 안전.
  1) 프로젝트 내에 `types`와 types 밑에`common` 폴더를 만듬.

  2) tsconfig.json에 `typeRoots` 옵션 추가
  ```json
  // tsconfig.json

  {
      "compilerOptions": {
          "target": "es5",
          "module": "es6",
          "typeRoots": ["./types"] // .ts파일마다 d.ts파일을 자동으로 생성
      }
  }
  ```
<br/>

### 2) 프로젝트에서 사용하는 타입을 쭉 정리해놓을 레퍼런스 용
d.ts파일을 레퍼런스 용으로 쓰려면 ts파일마다 d.ts파일을 자동 생성하면 됨.   
자동생성 파일은 따로 수정하거나 그럴 수 없어서(수동으로 수정해도 .s저장 시 자동생성이라 의미없음) 그냥 레퍼런스용으로 사용.
```json
// tsconfig.json

{
    "compilerOptions": {
        "target": "es5",
        "module": "es6",
        "declaration": true // .ts파일마다 d.ts파일을 자동으로 생성성
    }
}
```
### 3) JS 라이브러리들의 타입지정
- ~~라이브러리를 갖다 쓸 때 .js 파일이므로 .ts 쓰려면 에러나므로 .d.ts 파일 만들어서 타입지정 필요. but, 유명한 라이브러리들은 누군가 만들어 났으므로 찾아서 다운받아 쓰면됨.~~ => 더 이상 필요하지 않음. npm 및 Yarn 패키지 레지스트리에 패키지 유형 정보가 포함 됨.<br/>   
- 타입정의 파일 찾기: [Definitely Typed](https://github.com/DefinitelyTyped/DefinitelyTyped)




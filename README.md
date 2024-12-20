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
### 1. 새로운 React 프로젝트
1) 새로운 작업 폴더 만듬
2) 터미널에 아래 명령어 입력
  ```bash
  npx create-react-app my-app --template typescript
  ```
3) 필요하다면 `tsconfig.json` 파일 만들어서 설정도 가능

### 2. 이미 있는 React 프로젝트에 설치
1) 작업 폴더 경로에서 터미널 오픈
2) 터미널에 아래 명령어 입력
  ```bash
  npm install --save typescript @types/node @types/react @types/react-dom @types/jest
  ```
3) 필요하다면 `tsconfig.json` 파일 만들어서 설정도 가능

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
 - 참고: [tsconfing 전체](https://www.typescriptlang.org/tsconfig/)

<br/>
<br/>

# 변수 만들 때 타입 지정하는 방법
- 타입으로 쓸 수 있는 것들: string, number, boolean, bigint, null, undefined,[], {} 등.

```typescript
// 1. 타입 예시
// 1) string 타입
let 이름11: string = 'kim'

// 2) array 타입
let 이름12: string[] = ['kim', 'park']
// 2) array 타입 tuple: array 자료 안에 순서를 포함해서 어떤 자료가 들어올지 지정하고 싶을 때
type Member = [number, boolean];
let john: Member = [100, false];

// 3) object 타입
let 나이13: { age: number } = { age: 12 } 
// 3) Type Alias: object 타입 정의도 변수로 담는 것 가능
type MyObject13 = {
  name?: string,
  age  : number
}
let 철수13: MyObject13 = { 
  name: 'kim',
  age : 50
}
// 3) Index signature: object 안의 타입 한번에 지정
type MyObject = {
  [key: string]: number,
}
let 철수: MyObject = { 
  age   : 50,
  weight: 100,
}

// 2. Union Type: 한 변수에 여러가지 타입도 가능
// 1) string 또는 number
let 이름21: string | number = 'kim';


// 3. literal type: 타입도 변수처럼 담아서 사용 가능. 단, 타입을 정의할 때는 변수명 대문자
type NameType3 = string | number;
let 이름3: nameType3 = 'kim';


// 4. 함수도 타입 지정 가능. 단 정확한 연산을 위해서 narrowing 또는 assertion 문법을 사용해야 함.
// `x: number`는 x라는 변수는 number 타입이다 라는 뜻
// `() :number`는 함수의 리턴값이 number 타입이다 라는 뜻
function 함수명(x: number): number{
  return x * 2
}
```
* [변수에 타입 담아서 쓰는 법 자세히](#type키워드-변수에-타입-담기--readonly)
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
| **never**    |    |

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
```

### 3. Arrays
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

**2) Tuples**
- Array 타입의 일종으로 사이즈와 아이템 타입을 미리 정의

### 4. Object Types
- 여러 자료를 한번에 저장하고 싶을 때
**사용법**
```typescript
const names1: string[] = [];
const names2: string[] = ['kim', 'lee', 'park'];
```

### 5. Union Types
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
- 자료형 중 일부가 선택사항일때 사용할 수 있음.
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
여기서부터!!!
"함수와 methods에 type alias 지정하는 법" 부터 수업들으면 됨. 


<br/>
<br/>

# Narrowing & Assertion
## Narrowing
- union type 등 때문에 어떤 변수가 타입이 아직 불확실하다면, narrowing(타입 좁히기)을 해줘서 타입을 확실하게 해줘야 함. 
- Narrowing으로 판정해주는 문법들 => 그냥 현재 변수의 타입이 뭔지 특정지을 수 있기만 하면 다 가능.

```typescript
// 타입 좁히기(narrowing)
// 1) typeof 변수
function 내함수(x :number | string): number{
  if(typeof x === 'number') { // 가끔 이걸 "defensive 하게 코딩한다"라고 함.
    return x + 1  
  } else {
    return 0;
  }
}

// 2) 인스턴스 instanceof 부모
if( (x instanceof Number)) {
  console.log("Numer 인스턴스");
}
```

## Assertion
- `as`를 이용하여 타입을 잠깐 덮어쓰기. 잠깐 엄격한 타입체크 기능을 끄겠다는 것과 동일.
- `as` 문법 사용하는 경우
  1) union type 같은 복잡한 타입을 하나의 정확한 타입으로 줄이는 역할(narrowing) (number 타입을 string으로 바꿔 달라고 하면 에러남)
  2) 왜 타입에러가 나는지 정말 모르겠는 상황에 임시 에러해결 방안으로 사용
  3) 무슨 타입이 들어올지 확신 할 때 임시로 사용. => 자주 사용하진 말자. 왜냐면 버그를 못잡아 주기때문에

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
- type은 작명시 대문자로 시작
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
- 값이 한번 설정하면 재할당 할 수 없게 함.
- const 변수와 비슷하나 ts에서 좀 더 엄격하게 지정 가능.

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
function 함수(a : 'hello') : 1 | 0 | -1 {
  return 1 
}
```

## as const
- 일반 `as 타입` 문법과는 다름
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
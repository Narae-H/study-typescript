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
// 3) object 타입 정의도 변수로 담는 것 가능
type MyObject13 = {
  name?: string,
  age  : number
}
let 철수13: MyObject13 = { 
  name: 'kim',
  age : 50
}
// 3) Index signature: bject 안의 타입 한번에 지정
type MyObject = {
  [key: string]: number,
}
let 철수: MyObject = { 
  age   : 50,
  weight: 100,
}

// 2. 한 변수에 여러가지 타입도 가능
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
<br/>
<br/>

# 자료형 (Data Types)
- `Explicit Type`: TypeScript는 타입지정을 하기 위한 언어로 타입 명시
  ```typescript
  let firstName: string = "Dylan";
  ```
- `Implicit Type`: However, 꼭 타입지정을 할 필요는 없음. 왜냐면 변수 생성할 때의 값에 따라 알아서 암묵적으로 타입지정이 되니깐.
  ```typescript
  let firstName = "Dylan"; // 알아서 타입이 string으로 지정
  ```

## 1. Simple Types / Primitives Types
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

## 2. Special Types
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

## 3. Arrays
- 여러 자료를 한번에 저장하고 싶을 때
### 사용법
```typescript
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};
```

## 4. Tubples

## 5. Object Types
- 여러 자료를 한번에 저장하고 싶을 때
### 사용법
```typescript
const names1: string[] = [];
const names2: string[] = ['kim', 'lee', 'park'];
```

## 6. Union Types
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
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
    // console.log( x * 2 ); // error: x는 undefined이므로 계산 불가능 
}
console.log(내함수3()); // 가능
console.log(내함수3(3)); // 가능
function 내함수4(x) {
    // console.log( x * 2 ); // error: x는 'number나 undefined' 타입이므로(number 타입X) 계산 불가능. 
}
let 동물;
// Object 자료형
// const로 변수 생성하면 절대 변경 불가능.
// but, const로 생성된 변수에 Object 안의 item 변경은 가능.
const 출생지역 = { region: 'seoul' };
출생지역.region = 'busan';
let 여친 = {
    name: '엠버'
};
let 좌표 = { x: 1, y: 2 };
// ------- Literal Types로 만드는 const 변수 유사품 -------
// Literal: 좀 더 엄격하게 지정. 들어올 수 있는 값을 미리 지정
let 이름9; // 앞으로 이름에는 123이라는 타입만 들어올 수 있음. 123이라는 값이 아님!
//이름9 = 456; // 에러
let 테스트;
function 함수9(a) {
    return 0;
}
var 자료 = {
    name: 'kim'
}; // 이 오브젝트 타입을 만들때 
function 내함수(a) {
}
내함수(자료.name);
// 1-2) 함수 생성: 함수표현식에서만 type alias 사용가능
let 함수타입써서함수만듬 = function (a) {
    return 0;
};
let 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne(x) {
        return x + 1;
    },
    changeName() {
        console.log('안녕');
    }
};
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
콜백함수테스트1(콜백함수테스트2);
let cutZero = (param) => {
    let result = param.replace(/^0+/, '');
    return result;
};
let removeDash = (param) => {
    let result = param.replace(/-/g, '');
    return parseInt(result);
};
let 숙제3 = (param, fun1, fun2) => {
    let result = fun1(param);
    let result2 = fun2(result);
    console.log(result2);
};
숙제3('010-1111-2222', cutZero, removeDash);
// ------- 타입스크립트로 HTML 변경과 조작할 때 주의점 -------
let 제목 = document.querySelector("#title");
// 제목.innerHTML = '반가워요'; // Error: 제목 이라는 타입이 union타입(element|null) 이므로 string 넣는것 불가능
// 위의 문제는 narrowing을 하면 에러 없어짐
// 아래는 Type narrowing 할 수 있는 방법들들
// 방법1: null 체크
let 제목1 = document.querySelector("#title");
if (제목1 != null) {
    제목1.innerHTML = '반가워요(null check)'; // Success!
}
// 방법2: instanceof 사용 (가장 많이 사용!)
// [object] instanceof [클래스] => '[object]가 [클래스]의 자식(instance)이냐'를 확인 => 맞다면 true 리턴 
let 제목2 = document.querySelector("#title");
if (제목2 instanceof Element) {
    제목2.innerHTML = '반가워요(instanceof)'; // Success!
}
// 방법 3: selector로 찾은 키워드를 as 키워드를 이용하여 Element라는 타입이라고 사기침
// null이 들어와도 Element라고 강력하게 사기침.
// 즉, as는 버그 가능성이 매우 높으므로 되도록 쓰지말자.
let 제목3 = document.querySelector("#title");
제목3.innerHTML = '반가워요(Type assertion)'; // Success!
// 방법4: '?' 사용해서 제목4가 null이 아닐 때만 if문 실행하도록 함. (null일때는 undefined 리턴)
let 제목4 = document.querySelector("#title");
if ((제목4 === null || 제목4 === void 0 ? void 0 : 제목4.innerHTML) != undefined) {
    제목4.innerHTML = '반가워요(?.)'; // Success!
}
// instanceof를 쓸때는 상세한 class 이름을 쓰자. => 그래야 기본 attributies 쓸때 에러안남.
let 링크 = document.querySelector('a');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://google.com';
}
let 버튼 = document.querySelector('#button');
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
    console.log('Clicked!');
});
let 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
    이미지.src = 'new.jpg';
}
let links = document.querySelectorAll(".naver");
links.forEach((item) => {
    if (item instanceof HTMLAnchorElement) {
        item.href = 'https://kakao.com';
    }
});
// ------- class 만들 때 타입지정 가능 -------
class Person1 {
    constructor(name) {
        this.name = name;
    }
    함수(a) {
        console.log(a + "나는 함수");
    }
}
let 사람1 = new Person1("kim");
let 사람2 = new Person1("park");
console.log(사람1.함수("test"));
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    tax() {
        return this.price / 10;
    }
}
class Word {
    constructor(...param) {
        this.num = [];
        this.str = [];
        param.forEach(item => {
            if (typeof item === "string") {
                this.str.push(item);
            }
            else {
                this.num.push(item);
            }
        });
    }
}
let obj1 = new Word('kim', 3, 5, 'park');
console.log(obj1.num); //[3,5]
console.log(obj1.str); //['kim', 'park']
;
let 네모 = { color: 'red', width: 200 };
let 학생 = { name: "kim" };
let 선생 = { name: "kim", age: 20 };
let cart = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];
let newPro = { product: '청소기', price: 7000, card: false };
let objInterfaceTest = {
    plus(a, b) {
        return a + b;
    },
    minus(a, b) {
        return a - b;
    }
};

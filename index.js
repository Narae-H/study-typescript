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
class Car1 {
    constructor(color) {
        this.color = color;
    }
}
let nCar = new Car1('red');
console.log("typeof: " + typeof nCar);
console.log("instanceof: " + (nCar instanceof Object));
console.log("instanceof: " + (nCar instanceof Car1));
console.log("in(literal type): " + ('wheel' in nCar));
console.log("in(generic type): " + ('color' in nCar));
let nArray = [1, 2, 3];
console.log("내장객체 테스트");
console.log(nArray);
console.log("typeof: " + typeof nArray);
console.log("instanceof: " + (nArray instanceof Array));
console.log("in(generic type): " + ('pop' in nArray));
console.log("in(generic type): " + ('pop1' in nArray));
// ------- public, private 쓰는거 보니까 타입스크립트 귀여운편 & protected & static-------
// 객체 지향 언어 같은 문법 사용가능: public, private
class User9 {
    constructor(name) {
        this.name = name;
    }
}
// public(default 값): 해당 속성은 자유롭게 가져다 쓰고 수정도 가능
// private: 수정 불가능. 클래스 안에서만 수정 가능.
// class 밖에서 private 붙은거 수정하려면?
// 직접 변수에 접근 하지 않고, prototype으로 setter() 만들어서 setter()로 접근
// protected: extends 된 클래스에서도 수정 가능. (클래스끼리 공유하고 싶음.)
class User {
    constructor() {
        this.x = 10;
    }
}
class NewUser extends User {
    doThis() {
        this.x = 20;
    }
}
// static: 부모만 사용 가능하고 해당 클래스로 생성된 자식들은 물려받지 않는 속성. 직접 접근만 가능함.
class User1 {
    constructor() {
        this.y = 20;
    }
}
User1.x = 10;
let john1 = new User1();
// console.log( john1.x ) //불가능
console.log(User1.x); //가능
// static + private/protected/public 가능
class User123 {
    constructor() {
        // User123에서 자유롭게 수정가능
        // extends된 클래스에서도 수정가능
        // USer123으로 생성된 객체에서는 접근 불가능. => 접근하고 싶다면 prototype 생성필요.
        this.z = 30;
    }
}
// User123 클래스 내부에서만 사용가능. extends로 생성된 클래스에서도 접근 불가능. User123으로 생성된 객체도 접근 불가능.
// static이 붙어있으므로 prototype 생성해도 외부에서는 수정 불가능.
User123.x = 10;
// public은 디폴트 값. 언제 어디서든 접근 가능.
// but, static이 있으므로 자식 통해서는 접근 불가능하고 부모 객체를 통한 접근만 가능 ex) User123.y
User123.y = 20;
class User124 {
    constructor() {
        this.test = 123;
    }
    static addOne(num) {
        User124.x = User124.x + num;
    }
    static printX() {
        console.log(User124.x);
    }
    fun() {
        console.log("123");
    }
}
User124.x = 10;
User124.y = 20;
User124.addOne(3); //이렇게 하면 x가 3 더해져야함
User124.addOne(4); //이렇게 하면 x가 4 더해져야함
User124.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
class Square125 {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    draw() {
        var _a;
        let innerDiv = document.createElement('div');
        innerDiv.style.position = "relative";
        innerDiv.style.top = (Math.random() * 400) + "px";
        innerDiv.style.left = (Math.random() * 400) + "px";
        innerDiv.style.width = this.x + "px";
        innerDiv.style.height = this.y + "px";
        innerDiv.style.background = this.color;
        (_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.appendChild(innerDiv);
    }
}
let 네모125 = new Square125(30, 30, 'red');
네모125.draw();
네모125.draw();
네모125.draw();
네모125.draw();
var InterfaceDog;
(function (InterfaceDog) {
    ;
})(InterfaceDog || (InterfaceDog = {}));
let dog1 = 'bark';
let dog2 = { name: 'paw' };
// ---------------타입을 파라미터로 입력하는 Generic---------------------
// 함수 쓸 때 generic 함수만들기(파라마터로 타입을 입력하는 함수)
function 함수22(x) {
    return x[0];
}
let a = 함수22(4);
// 1. Generic 함수
// 2. <Type> 받기
// 3. extends로 제한두기: 내장 객체 뿐만아니라, 커스텀 타입/인터페이스도 가능.
function 함수33(a, b) {
    console.log(a, b);
}
함수33('안녕', 123);
function 함수44(x) {
    return x.length;
}
let a44 = 함수44('hello'); //가능
// let a45 = 함수44<number>(1234) //에러남
class Person123 {
    constructor(name) {
        this.name = name;
    }
}
let person = new Person123('Kim');
console.log(person);
// 숙제
function getLength(a) {
    console.log("Length: " + a.length);
}
getLength('hello');
getLength(['kim', 'park']);
let data = '{"name" : "dog", "age" : 1 }';
function toObject(str) {
    return JSON.parse(str);
}
console.log(toObject(data));
class Person11 {
    constructor(a) {
        this.name = a;
    }
}
let a11 = new Person11('어쩌구');
a11.name; //any 타입이 되었넹 
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
let 최근음식 = ['커피', 3000, true];
// 숙제2
let arr22 = ['동서녹차', 4000, true, false, true, true, false, true];
// 숙제3
function 함수333(...rest) {
}
함수333('a', true, 6, 3, '1', 4);
// 숙제4
function filter(...rest) {
    let strArr = [];
    let numArr = [];
    rest.forEach((item) => {
        if (typeof item === "string") {
            strArr.push(item);
        }
        else {
            numArr.push(item);
        }
    });
    let returnArr = [[], []];
    returnArr[0] = strArr;
    returnArr[1] = numArr;
    return returnArr;
}
console.log(filter('b', 5, 6, 8, 'a'));
let obj123 = {
    model: 'k5',
    brand: 'kia',
    price: 6000,
    year: 2030,
    date: '6월',
    percent: '5%',
    dealer: '김차장',
};
let obj124 = {
    'font-size': 10,
    'secondary': {
        'font-size': 12,
        'third': {
            'font-size': 14
        }
    }
};
let a2 = 'name';
let nBus = {
    color: 'red',
    model: 'k3',
    price: '1억'
};
let age1;
let age2;

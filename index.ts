type Aniaml = string | number | undefined;
let 동물: Aniaml = 123;

// type 변수 만드는 법 : 변수명 영어대문자로 시작, ~Type 으로 지으면 좋다.
type PersonType = { name: string; age: number };
let 사람: PersonType = { name: "kim", age: 20 };

// const 변수는 등호로 재할당만 막는 역할임, const로 담은 object 수정은 자유롭게 가능.
// 타입스크립트에서만 가능.
const 여친 = {
  name: "엠버",
};
여친.name = "유라"; //가능

//만약, 막고싶다면,
type Boyfriend = { readonly name: string }; // readonly 쓰면 object 자료수정도 막을 수 있음.
const 남친: Boyfriend = { name: "성민" };
//남친.name = "기범"; // 불가

// 참고* 타입스크립터 에러는 에디더&터미널에서만 존재함. 실제 변환된 js파일은 에러없음.

type Hi = { name?: string }; // === { name : string | undefined }

//타입은 합칠수도 있다(1. union type으로, 2. &연산자로 object 타입 extend하기)
type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number }; // type 변수 재정의 불가 (ex- positionX = number 이렇게 다시 재정의 불가)
type PositionY = { y: number };
type NewType = PositionX & PositionY; // ==={x :number, y:number}

let position: NewType = { x: 10, y: 10 }; // 됨. 에러안남

// 과제2
type myType = {
  color?: string;
  size: number;
  readonly position: number[];
};

let 테스트용변수: myType = {
  size: 123,
  position: [1, 2, 3],
};

// 과제3
type testType = {
  name: string;
  phone: number;
  email?: string;
};
let 회원가입정보: testType = {
  name: "kim",
  phone: 123,
};

// 과제4
type User = {
  isAdult: boolean;
};
type NewUser = testType & User;
let 회원: NewUser = {
  name: "kim",
  phone: 123,
  isAdult: false,
};

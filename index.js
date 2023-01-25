//Union Type(타입2개 이상 합친 새로운 타입만들기)
var 회원 = 123;
회원; //할당해주면 type이 number로 뜸
var 회원들 = [1, "2", 3];
var 오브젝트 = { a: 123 };
//any Type - 모든 자료형 허용해줌 => 타입실드 해제문법임. 타입스크립트 쓰는 의미가 없음. 기능 잃음.
//그래서 타입관련 버그가 나도 잡아주지 않음
var 이름;
이름 = 123;
이름 = [];
//unknown 타입 - 모든 자료형 허용해줌. 최신문법. any문제해결
var 네임;
네임 = 123;
네임 = {};
//네임 - 1; // unknown타입은 number타입이 아니라 수학연산이 안됨. 같은 타입끼리의 연산만 가능함. 엄격함.
//let 변수1: string = 네임; // unknown시에는 오류남, any는 오류안남
var 나이;
//나이 + 1; //안됨. 유니언타입에서는 안됨. 둘중 하나의 타입이었으면 +연산가능함.
//문제1
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
//문제2
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

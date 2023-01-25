let 이름 = "kim";
let 나이: number = 40;
let 결혼했니: undefined = undefined; //undefined이나 null 타입도 있다.
let 회원들: string[] = ["kim", "park"]; //array안에 들어올 요소의 타입을 []앞에 써준다.

let 멤버들: { member1: string; member2: string } = {
  member1: "kim",
  member2: "seo",
};

let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

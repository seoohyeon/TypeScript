function 함수(x: number): number {
  // 함수는 파라미터, return값 타입지정가능
  return x * 2;
}
함수(2); //타입지정된 파라미터는 필수로 써야함(JS와 다른점임)

// 파라미터가 옵션일 경우(써도되고 안써도 될때)엔 (파라미터? : 타입)
// *중요* 변수? :number는 변수 : number | undefined와 같음. 즉 물음표쓰면 undefined도 된다 이말임.

// return이 없을 경우 = void 타입 활용가능
function 함수1(x: number): void {
  1 + 1;
}

// 문제1 : 이름을 파라미터로 입력하면 콘솔창에 안녕하세요 홍길동 출력, 아무것도 파라미터로 입력하지 않고 함수를 사용하면
// 이름이 없습니다를 출력하는 함수
function printName(name?: string) {
  if (name) {
    console.log("안녕하세요");
  } else {
    console.log("이름이 없습니다.");
  }
}
printName("");

// 문제2 :함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
function printNumber(num: number | string): number {
  if (typeof num === "number") {
    num = String(num);
  }
  return Number(num.length);
}
printNumber(12);

//쌤방법 - 너무 쉬움
function 자릿수세기(num: number | string): number {
  return num.toString().length; // toString(진수)
}

// 문제3 : 결혼 가능 확률을 알려주는 함수 만들기
/* 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 
2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 
3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다. */

function canMarry(
  salary: number,
  haveHouse: boolean,
  charm: string
): string | void {
  let salaryPoint = salary;
  let housePoint = 0;
  let charmingPoint = 0;
  let totalPoint = 0;

  if (haveHouse) {
    housePoint += 500;
  }
  if (charm === "상") {
    charmingPoint += 100;
  }

  totalPoint = salaryPoint + housePoint + charmingPoint;

  if (totalPoint >= 600) {
    return "결혼가능";
  }
}
canMarry(12, true, "상");

//쌤방법
function 결혼가능하냐(money, house, charm) {
  let score: number = 0;
  score += money;
  if (house === true) {
    score += 500;
  }
  if (charm === "상") {
    score += 100;
  }
  if (score >= 600) {
    return "결혼가능";
  }
}
console.log(결혼가능하냐(100, true, "상"));

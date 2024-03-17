// 인터페이스
type userType = {
    name : string;
    age : number;
}

type Score = 'A'|'B'|'C'|'D';
interface UserType {
    name : string;
    age : number;
    gender? : number //(gender와 같이 (?)를 붙이면 선택가능)
    readonly birthday : number //(readonly 키워드를 사용하면 재할당 불가)
    [grade:number] : Score; //이와 같이하면 Key:vaule 형식 선언 가능
}

let user1 = {
    name : 'xx',
    age : 30
}
// user1 : type 키워드로 객체를 지정해주면 안에 name,age 인스턴스 없이도 객체 선언 가능

let user2 : UserType = {
    name : 'yy',
    age : 40,
    birthday : 1012
}
// user2 : interface 키워드로 객체를 지정해주면 안에 name,age 인스턴스를 반드시 넣어야 객체 선언 가능

interface Add {
    (num1:number, num2:number): number;
} // 함수도 정의 가능

const add : Add = function(x,y){
    return x + y;
}

interface Car {
    color : string
    wheels : number
    start() : void
}

interface Toy {
    name : string
    color : number
}

class bmw implements Car {
    wheels = 4;
    color;
    //생성자
    constructor(c:string){
        this.color = c;
    }
    start(){
        console.log('붕붕')
    }
}

const b = new bmw('빨강');
b.start();

interface Benz extends Car{
    door : number;
    stop() : void;
}
//이렇게 인터페이스 확장도 가능

//interface ToyCar extends Car,Toy {} => 다중 상속도 가능하지만 같은 이름의 다른 자료형의 요소가 있으면 상속불가

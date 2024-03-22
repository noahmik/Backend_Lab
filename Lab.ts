// 리터럴 타입 => 고정값

const userName1 = "Bob"; //불변
let userName2 = "Tom" //가변

//userName2 = 10 => ts에서 let은 가변이긴 하지만 처음 선언한 타입으로만 바꿀 수 있음

type Job = "police" | "developer" | "teacher"; // 문자열 리터럴 타입

interface User {
    name : string;
    job : Job;
}

const user: User = {
    name : "Bob",
    job : "developer"
}

interface HighSchoolStudent {
    name : number | string;
    grade: 1 | 2 | 3;  //유니온타입(ts or연산자)
}

//유니온 타입
interface Car {
    name : "Car",
    color : string;
    start(): void;  
}

interface Mobile {
    name: "mobile";
    color: string;
    call(): void;
}

function getGift(gift: Car | Mobile) {
    console.log(gift.color)
    if(gift.name === "Car"){
        gift.start();
    } else {
        gift.call()
    }
}

//교차타입(Intersection Types)
interface Car2 {
    name : string;
    start(): void;  
}

interface Toy {
    name: string;
    color: string;
    price: number;
}

const toyCar: Toy & Car2 = {
    name: "타요",
    start() {},
    color : "blue",
    price : 1000
}
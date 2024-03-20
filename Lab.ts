// 함수

function hello(name?:string){
    return `Hello, ${name || 'World'}`; // 선택적 매개변수, 매개변수 없으면 World 출력
}

function hello2(name = "World"){
    return `Hello, ${name}`; // 이렇게 하면 매개변수의 기본값이 World;
}

function hello3(name: string,age?: number){
    return "Hello,World";
} //선택적 매개변수가 필수 매개변수보다 앞에 오면 안됨

const result = hello();
const result2 = hello2();
const result3 = hello3('태영',13);

function add(...nums : number[]){ //이런 함수에서는 자료형을 정수 배열로
    return nums.reduce((result,num) => result+num, 0) 
}

add(1,2,3);
add(1,2,3,4,5);

interface User {
    name : string;
    age : number;
}

//return 타입이 확실하지 않을땐 이렇게 메서드 오버로딩을 해줘야함
function join(name : string, age : string) : string;
function join(name : string, age : string) : User;
function join(name : string, age : number | string) : User | string {
    if(typeof age === "number"){
        return {
            name,
            age
        }
     } else {
            return "나이는 숫자로 ㅎㅎ;;"
        }
    }


//유틸리티 타입 
// Partial<T>

interface User {
    id : number;
    name : string;
    age : number;
    gender : "m" | "f";
}

//Partial 타입을 사용하면 요소를 모두 들고오지 않아도 됨
let admin: Partial<User> = {
    id : 1,
    name: "Bob"
};

interface User2 {
    id : number;
    name : string;
    age? : number;
}

//Required 타입에서는 모든 요수가 필수임
let admin2: Required<User2> = {
    id : 1,
    name : "Bob"
}

let admin3: Readonly<User2> = {
    id : 4,
    name : "Bob"
}

//Readonly 타입에서는 재할당 불가
admin3.id = 5;

type Grade = "1" | "2" | "3" | "4";
type Score = "A" | "B" | "C" | "D";

//레코드 타입은 이렇게 Key,Value를 지정가능
const score: Record<Grade,Score> = {
    1 : "A",
    2 : "C",
    3 : "D",
    4 : "B"
}

interface User2 {
    id : number;
    name : string;
    age? : number;
}

//Pick 타입은 인터페이스의 몇 요소만 강제화 가능
const admin4 : Pick<User2, "id" | "name"> = {
    id : 4,
    name : "chunsik"
}

interface User2 {
    id: number;
    name: string;
    age?: number; 
}

//Omit키워드 pick과 반대로 해당 요소를 빼고 구현함
const admin5: Omit<User2, "id" | "name"> = {
    age: 30 
};

// Exclude를 사용하여 id와 name을 제외한 타입 정의
type AdminType = Exclude<keyof User2, "id" | "name">;

//NonNullable 타입은 null과 undefinded를 제외함
type T1 = string | null | undefined | void;
type T2 = NonNullable<T1>;
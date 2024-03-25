// Generic
//타입을 T로만 넣어두고 이후에 선언할때 정함
function getSize<T>(arr: T[]):number{
    return arr.length;
}

const arr1 = [1,2,3];
getSize<number>(arr1);

const arr2 = ['a','b','c'];
getSize<string>(arr2);

const arr3 = [false,true,true];
getSize<boolean>(arr3);

const arr4 = [{},{name: 2},{a : "3"}];
getSize<object>(arr4);


interface Mobile<T> {
    name : string;
    price : number;
    option : T;
}

const m1 : Mobile<object> = {
    name : "s1",
    price : 10000,
    option : {
        color : "red",
        coupon : false
    }
}

const m2 : Mobile<string> = {
    name : "s1",
    price : 10000,
    option : "good"
}


interface User {
    name: string,
    age: number
}

interface Car {
    name: string,
    color: string
}

interface Book {
    price : number
}

const user:User = {name:"a", age:10};
const car:Car = {name:"bmw",color:"red"};
const book:Book = {price:10000};

function showName<T extends {name : string}>(data : T): string {
    return data.name;
}

showName(user);
showName(car);
//showName(book); => book이 객체 내에 없음
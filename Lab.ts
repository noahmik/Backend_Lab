let age:number = 17;
let idAdult:boolean = true;
let a:number[] = [1,2,3];
let a2:Array<number> = [1,2,3];

let week1:string[] = ['mon','tue','wed'];
//week1.push(3) => 3은 문자열이 아닌 정수기 때문에 에러
let week2:Array<string> = ['mon','tue','wed'];

//튜플
let b:[string,number] = ['z',1];

b[0].toLocaleLowerCase();
//b[1].toLocaleLowerCase(); => 정수에는 해당 함수 사용 불가(타입 확인)

//함수 자료형
function Hello():void{
    console.log('hi');
}

//never 자료형은 함수를 반환하거나,끝나지 않을때 사용
function returnFunc():never{
    throw new Hello();
}

function Loop():never{
    while(true){
        console.log('Loop')
    }
}

enum OS{
    Window  = 11,
    Ios = 'Iphone',
    Andoroid = 12
} 
// 정수일 경우에는 양방향 Mapping 가능 

let c:null = null;
let d:undefined = undefined;
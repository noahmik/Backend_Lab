//클래스(class)
abstract class Car {
    readonly name: string = "car"; 
    //name 앞에 #name 혹은 private 키워드를 붙이면 다른 class에서 호출 불가
    //protected 키워드를 붙이면 자식 클래스에선 호출이 되지만 클래스인스턴스(z4.name)과 같은 걸론 접근불가
    //public 키워드는 모두 가능
    color: string;
    static wheels = 4;
    constructor(color:string, name){
        this.color = color;
    }
    start(){
        console.log("start");
    }
    abstract doSomething():void; //추상메서드
}

class Bmw extends Car {
    constructor(color:string, name){
        super(color, name);
    }
    showName(){
        console.log(super.name);
    }
    doSomething(){
        alert(3); //자식 클래스에서 구현
    }
}

const z4 = new Bmw("black","taeyoung"); //readonly에선 이렇게 변경
console.log(z4.name);
console.log(Car.wheels); //static 키워드에서는 Class명으로 호출 
// z4.name = "blue" => readonly 키워드 내에서 사용 불가
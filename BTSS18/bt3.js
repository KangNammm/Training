class Apple {
    constructor (weight){
        this.weight = 10;
    }
}
let apple = new Apple();
console.log(apple);

class Human {
   constructor(name,gender,weight){
    this.name = name;
    this.gender = gender;
    this.weight = weight;
   }
    checkApple = (tao)=>{
        return tao.weight
    }
    eatApple = (tao)=>{
        if(tao.weight>0){
            tao.weight--
            this.weight++
        }
    }
    checkHuman = (human)=>{
        return human.name + " " +human.gender + " " +human.weight;
    }

}
let human1 = new Human (" Adam", "Male", 60);
console.log(human1);
let human2 = new Human (" Eva", "Female", 50);
console.log(human2);

console.log(human1.checkApple(apple));
human1.eatApple(apple);
human1.eatApple(apple);
console.log(human1.checkApple(apple));
console.log(human1.checkHuman(human2));
class Mouse {
    constructor(weight, speed) {
        this.weight = weight;
        this.speed = speed;
        this.alive = true;
    }
}
class Cat {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }
    meow() {
        console.log(`${this.name} meo meo`);
    }
    catchMouse(mouse) {
        if (this.speed > mouse.speed) {
            console.log(`${this.name} bat chuot`);
            mouse.alive = false;
        } else {
            console.log(`${this.name} khong bat duoc chuot`);
        }
    }
    eatMouse(mouse) {
        if (mouse.alive) {
            console.log(`${this.name} khong an duoc chuot...`);
        } else {
            console.log(`${this.name} da an duoc chuot`);
            this.weight += mouse.weight
        }
    }
}
const cat = new Cat("Tommy Teo", 5, 20);
const mouse = new Mouse(1, 10);
cat.meow();
cat.catchMouse(mouse);
console.log(`${cat.name} can nang la :${cat.weight}`);
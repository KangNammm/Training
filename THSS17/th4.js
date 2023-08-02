class Mouse {
    constructor(weight, speed, alive) {
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
            console.log(`${this.name} bắt chuột!`);
            mouse.alive = false;
        } else {
            console.log(`${this.name} Không bắt được chuột...`);
        }
    }

    eatMouse(mouse) {
        if (mouse.alive) {
            console.log(`${this.name} không thể ăn được chuột...`);
        } else {
            console.log(`${this.name} đã ăn được chuoorjt~`);
            this.weight += mouse.weight;
        }
    }
}
const cat = new Cat("Tom",5,20);
const mouse = new Mouse(1,10);
cat.meow();
cat.catchMouse(mouse);
console.log(`${cat.name}'s weight: ${cat.weight}`);
function Rectangle(a, b) {
    this.a = a;
    this.b = b;
    this.area= this.a*this.b
    this.perimeter=(this.a+this.b)/2
 }
 let rectangle = new Rectangle (5,3)
console.log(rectangle);

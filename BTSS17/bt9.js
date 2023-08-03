class Temperature {
    constructor (C){
        this.C = C;
        this.F =0;
        this.K = 0;
        this.F = (this.C*1.8)+32;
        this.K = this.C+273.15;
        return C;
    }
}
let temperature = new Temperature(25);
console.log(temperature);
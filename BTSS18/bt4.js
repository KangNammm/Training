class ElectricLamp {
    constructor(){
        this.status = true;
    }
}
let denDau = new ElectricLamp ();

class SwitchButton {
    checkLamp = (bongden)=>{
        if(bongden.status == false){
            console.log(" Bong den da tat");
        }else{
            console.log(" Bong den dang bat");
        }
    }

    batTat = (bongden) => {
        bongden.status = !bongden.status
    }
}
let congtac = new SwitchButton();
congtac.checkLamp(denDau); // bat
congtac.batTat(denDau);
congtac.checkLamp(denDau);
congtac.batTat(denDau);
congtac.checkLamp(denDau);
congtac.batTat(denDau);
congtac.checkLamp(denDau);
congtac.batTat(denDau);
congtac.checkLamp(denDau);
congtac.batTat(denDau);
congtac.checkLamp(denDau);
congtac.batTat(denDau);
congtac.checkLamp(denDau);
congtac.batTat(denDau);
congtac.checkLamp(denDau);



